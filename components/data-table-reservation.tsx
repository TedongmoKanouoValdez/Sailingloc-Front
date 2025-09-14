"use client";

import * as React from "react";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Spinner } from "@heroui/spinner";

export const schema = z.object({
  id: z.number(),
  nomdubateau: z.string(),
  client: z.string(),
  dates: z.string(),
  statutdepaiement: z.string(),
  paiement: z.string(),
  statusduproprietaire: z.string(),
  reviewer: z.string(),
  contratUrl: z.string().nullable(),
  recuUrl: z.string().nullable(),
  userconnect: z.number(),
  montantFinal: z.number(),
});

type Reservation = z.infer<typeof schema>;

export function DataTable({ data }: { data: Reservation[] }) {
  const [rows, setRows] = React.useState<Reservation[]>([]);

  // 🔑 Synchroniser quand "data" change
  React.useEffect(() => {
    setRows(data);
  }, [data]);

  async function updateStatus(
    id: number,
    newStatus: "CONFIRMEE" | "ANNULEE" | "EN_ATTENTE",
    expediteurId: number
  ) {
    try {
      toast.promise(
        new Promise(async (resolve, reject) => {
          const res = await fetch(
            `https://sailingloc-back.vercel.app/api/reservations/${id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                statusduproprietaire: newStatus,
                expediteurId: expediteurId,
              }),
            }
          );

          if (!res.ok) return reject("Erreur serveur");
          resolve("ok");
        }),
        {
          loading: "Mise à jour...",
          success: "Statut mis à jour ✅",
          error: "Erreur lors de la mise à jour ❌",
        }
      );

      setRows((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, statusduproprietaire: newStatus } : r
        )
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
            <TableHead>Bateau</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Paiement (-10%)</TableHead>
            <TableHead>Statut Paiement</TableHead>
            <TableHead>Status Propriétaire</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-6 text-muted-foreground"
              >
                Aucune réservation trouvée
              </TableCell>
            </TableRow>
          ) : (
            rows.map((r) => (
              <TableRow
                key={r.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/40"
              >
                <TableCell className="font-medium">{r.nomdubateau}</TableCell>
                <TableCell>{r.client}</TableCell>
                <TableCell>{r.dates}</TableCell>
                <TableCell className="font-semibold">
                  {r.montantFinal} €
                </TableCell>
                <TableCell>
                  <Chip
                    color={
                      r.statutdepaiement === "EN_ATTENTE"
                        ? "warning"
                        : r.statutdepaiement === "CONFIRMEE"
                          ? "success"
                          : "danger"
                    }
                    variant="shadow"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {r.statutdepaiement}
                  </Chip>
                </TableCell>
                <TableCell>
                  {r.statusduproprietaire === "CONFIRMEE" ? (
                    <Chip
                      color="success"
                      variant="shadow"
                      className="flex items-center gap-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Accepté
                    </Chip>
                  ) : r.statusduproprietaire === "ANNULEE" ? (
                    <Chip
                      color="danger"
                      variant="shadow"
                      className="flex items-center gap-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Refusé
                    </Chip>
                  ) : (
                    <Chip
                      color="warning"
                      variant="shadow"
                      className="flex flex-row items-center gap-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      En attente
                    </Chip>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatus(r.id, "CONFIRMEE", Number(r.userconnect))
                        }
                      >
                        <CheckCircle2 className="h-3 w-3" /> Accepter
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatus(r.id, "ANNULEE", Number(r.userconnect))
                        }
                      >
                        <XCircle className="h-3 w-3" /> Refuser
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatus(
                            r.id,
                            "EN_ATTENTE",
                            Number(r.userconnect)
                          )
                        }
                      >
                        <Loader2 className="h-3 w-3 animate-spin" /> Remettre en
                        attente
                      </DropdownMenuItem>
                      {r.contratUrl && (
                        <DropdownMenuItem asChild>
                          <a
                            href={r.contratUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            📄 Télécharger contrat
                          </a>
                        </DropdownMenuItem>
                      )}
                      {r.recuUrl && (
                        <DropdownMenuItem asChild>
                          <a
                            href={r.recuUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            💳 Télécharger reçu
                          </a>
                        </DropdownMenuItem>
                      )}
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
