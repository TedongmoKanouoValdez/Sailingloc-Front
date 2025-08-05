"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import { schema } from "@/components/data-table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import data from "../data.json";

export default function GestionDesBateauxPage() {
  const [data, setData] = useState<z.infer<typeof schema>[]>([]);
  const [loading, setLoading] = useState(true);

  const refetch = () => {
    setLoading(true);
    fetch("https://sailingloc-back.vercel.app/api/bateaux")
      .then((res) => res.json())
      .then((json) => {
        if (!json || !Array.isArray(json.bateaux)) {
          console.error("Format de données inattendu :", json);
          setLoading(false);

          return;
        }

        setData(
          json.bateaux.map((bateau: any) => ({
            id: bateau.id,
            header: bateau.nom ?? "Nom inconnu",
            slug: bateau.slug ?? 0,
            type: bateau.modele ?? "Modèle inconnu",
            port: bateau.portdefault ?? "Port inconnu",
            target: bateau.prix ?? "0",
            detail: bateau.details ?? [],
            description: bateau.description ?? "",
            datesIndisponibles: bateau.datesIndisponibles ?? [],
            proprietaireId: bateau.proprietaireId ?? 0,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du rafraîchissement :", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <p>Chargement…</p>;

  return (
    <>
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <DataTable data={data} refreshTable={refetch} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
