"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CreditCard } from "lucide-react";
import { Empty, Typography } from "antd";

export const DashboardStats = ({
  role,
  proprietaireId,
  userId,
}: {
  role?: "ADMIN" | "PROPRIETAIRE" | "CLIENT" | undefined;
  proprietaireId?: number;
  userId: number;
}) => {
  const [bateaux, setBateaux] = useState<any[]>([]);
  const [reservations, setReservations] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let bateauxUrl = "";
        let reservationsUrl = "";
        let messagesUrl = "";

        if (role === "ADMIN") {
          // Admin → toutes les données
          bateauxUrl = "https://sailingloc-back.vercel.app/api/bateaux";
          reservationsUrl = "https://sailingloc-back.vercel.app/api/reservations/admin";
          messagesUrl = "https://sailingloc-back.vercel.app/messages/admin";
        } else if (role === "PROPRIETAIRE") {
          // Propriétaire → seulement ses bateaux et réservations
          if (!proprietaireId) throw new Error("proprietaireId manquant");
          bateauxUrl = `https://sailingloc-back.vercel.app/api/bateaux/proprietaire/${proprietaireId}`;
          reservationsUrl = `https://sailingloc-back.vercel.app/api/reservations/proprietaire/${proprietaireId}`;
          messagesUrl = `https://sailingloc-back.vercel.app/messages?userId=${userId}&type=recus`;
        }

        const [bateauxRes, reservationsRes, messagesRes] = await Promise.all([
          bateauxUrl
            ? fetch(bateauxUrl)
            : Promise.resolve({
                ok: true,
                json: async () => ({ bateaux: [] }),
              }),
          reservationsUrl
            ? fetch(reservationsUrl)
            : Promise.resolve({
                ok: true,
                json: async () => ({ reservations: [] }),
              }),
          messagesUrl
            ? fetch(messagesUrl)
            : Promise.resolve({
                ok: true,
                json: async () => ({ messages: [] }),
              }),
        ]);

        if (!bateauxRes.ok) throw new Error("Erreur chargement bateaux");
        if (!reservationsRes.ok)
          throw new Error("Erreur chargement réservations");
        if (!messagesRes.ok) throw new Error("Erreur chargement messages");

        const bateauxData = await bateauxRes.json();
        const reservationsData = await reservationsRes.json();
        const messagesData = await messagesRes.json();

        setBateaux(bateauxData.bateaux || []);
        setReservations(reservationsData.reservations || []);
        setMessages(messagesData.messages || []);
      } catch (err) {
        console.error("Erreur front:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [role, proprietaireId, userId]);

  if (loading) return <p>Chargement...</p>;
  if (error) {
    return <Empty description={<Typography.Text>{error}</Typography.Text>} />;
  }

  return (
    <div className="grid grid-cols-3 gap-6 w-full mx-3">
      {role !== "CLIENT" && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bateaux</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bateaux.length}</div>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Réservations</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{reservations.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Messages</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{messages.length}</div>
        </CardContent>
      </Card>
    </div>
  );
};
