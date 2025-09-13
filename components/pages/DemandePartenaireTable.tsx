"use client";

import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Chip } from "@heroui/chip";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle2, XCircle, Loader2, MoreVertical } from "lucide-react";
import { toast } from "sonner";

interface Demande {
  id: number;
  utilisateur: { nom: string; prenom: string; email: string };
  data: string;
  statut: "EN_ATTENTE" | "ACCEPTEE" | "REFUSEE";
  dateDemande: string;
  dateTraitement: string | null;
}

export default function AdminDemandesTable() {
  const [demandes, setDemandes] = React.useState<Demande[]>([]);

  // 🔑 Charger les demandes admin
  React.useEffect(() => {
    async function fetchDemandes() {
      try {
        const res = await fetch("https://sailingloc-back.vercel.app/api/admin/demandes");
        const data = await res.json();
        setDemandes(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDemandes();
  }, []);

  async function updateStatut(id: number, newStatut: "ACCEPTEE" | "REFUSEE" | "EN_ATTENTE") {
    try {
      toast.promise(
        fetch(`https://sailingloc-back.vercel.app/api/admin/demandes/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ statut: newStatut }),
        }),
        {
          loading: "Mise à jour...",
          success: "Statut mis à jour !",
          error: "Erreur lors de la mise à jour du statut",
        }
      );

      setDemandes(prev =>
        prev.map(d => (d.id === id ? { ...d, statut: newStatut } : d))
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-800/50">
            <TableHead>Utilisateur</TableHead>
            {/* <TableHead>Données</TableHead> */}
            <TableHead>Statut</TableHead>
            <TableHead>Date Demande</TableHead>
            <TableHead>Date Traitement</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demandes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                Aucune demande trouvée
              </TableCell>
            </TableRow>
          ) : (
            demandes.map((d) => (
              <TableRow key={d.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                <TableCell>{d.utilisateur.nom} {d.utilisateur.prenom} ({d.utilisateur.email})</TableCell>
                {/* <TableCell>{d.data}</TableCell> */}
                <TableCell>
                  <Chip
                    color={
                      d.statut === "EN_ATTENTE"
                        ? "warning"
                        : d.statut === "ACCEPTEE"
                        ? "success"
                        : "danger"
                    }
                    variant="shadow"
                  >
                    {d.statut}
                  </Chip>
                </TableCell>
                <TableCell>{new Date(d.dateDemande).toLocaleString()}</TableCell>
                <TableCell>{d.dateTraitement ? new Date(d.dateTraitement).toLocaleString() : "-"}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => updateStatut(d.id, "ACCEPTEE")}>
                        <CheckCircle2 className="h-3 w-3" /> Accepter
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => updateStatut(d.id, "REFUSEE")}>
                        <XCircle className="h-3 w-3" /> Refuser
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => updateStatut(d.id, "EN_ATTENTE")}>
                        <Loader2 className="h-3 w-3 animate-spin" /> Remettre en attente
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
