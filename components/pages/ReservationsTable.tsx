"use client";
import { useEffect, useState } from "react";

interface Reservation {
  id: number;
  dateDebut: string;
  dateFin: string;
  statut: string;
  data: string | null; // statut propriétaire
  Total: string;
  bateau: {
    id: number;
    nom: string;
  };
}

interface Props {
  userId: number;
  token: string;
}

export default function ReservationsTable({ userId, token }: Props) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const res = await fetch(`https://sailingloc-back.vercel.app/api/reservations?userId=${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setReservations(data.reservations);
      } catch (err) {
        console.error("Erreur fetch reservations:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
  }, [userId, token]);

  const getStatusClasses = (status: string | null) => {
    if (!status || status === "EN_ATTENTE") return "bg-yellow-100 text-yellow-800";
    if (status === "CONFIRMEE") return "bg-green-100 text-green-800";
    return "bg-red-100 text-red-800";
  };

  if (loading) return <p>Chargement...</p>;
  if (reservations.length === 0) return <p>Aucune réservation</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Bateau</th>
            <th className="px-6 py-3">Date début</th>
            <th className="px-6 py-3">Date fin</th>
            <th className="px-6 py-3">Montant</th>
            <th className="px-6 py-3">Statut réservation</th>
            <th className="px-6 py-3">Statut propriétaire</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r, idx) => (
            <tr
              key={r.id}
              className={`border-b border-gray-200 hover:bg-gray-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {r.bateau.nom}
              </th>
              <td className="px-6 py-4">{new Date(r.dateDebut).toLocaleDateString("fr-FR")}</td>
              <td className="px-6 py-4">{new Date(r.dateFin).toLocaleDateString("fr-FR")}</td>
              <td className="px-6 py-4 font-medium text-gray-800">{r.Total} €</td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(r.statut)}`}
                  title={`Statut réservation : ${r.statut}`}
                >
                  {r.statut || "EN ATTENTE"}
                </span>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(r.data)}`}
                  title={`Statut propriétaire : ${r.data || "EN ATTENTE"}`}
                >
                  {r.data || "EN ATTENTE"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
