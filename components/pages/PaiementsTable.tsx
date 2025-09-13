'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import clsx from 'clsx';

interface Paiement {
  id: number;
  reservationId: number;
  montant: string;
  montantTotal: string;
  methodePaiement: string;
  pourcentageStripe: string;
  etatPaiement: string;
  creeLe: string;
  reservation: {
    montantFinal: string;
    bateau: { nom: string };
    commission: string;
  };
}

function decodeJWT(token: string) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    console.error('Erreur decoding JWT :', e);
    return null;
  }
}

export default function PaiementsTable() {
  const [paiements, setPaiements] = useState<Paiement[]>([]);
  const [role, setRole] = useState('');
  const [utilisateurId, setUtilisateurId] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/');

    const decoded = decodeJWT(token);
    if (!decoded) return router.push('/');

    setRole(decoded.role);
    setUtilisateurId(Number(decoded.userId));

    if (decoded.role !== 'PROPRIETAIRE' && decoded.role !== 'ADMIN') {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (!role) return;

    async function fetchPaiements() {
      try {
        let url = '';
        if (role === 'ADMIN') {
          url = 'https://sailingloc-back.vercel.app/api/paiements/admin';
        } else if (role === 'PROPRIETAIRE') {
          url = `https://sailingloc-back.vercel.app/api/paiements/proprietaire/${utilisateurId}`;
        }

        const res = url ? await fetch(url) : null;
        const data = res ? await res.json() : { paiements: [] };
        setPaiements(data.paiements || []);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPaiements();
  }, [role, utilisateurId]);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Bateau</TableHead>
            <TableHead>Montant de base</TableHead>
            <TableHead>Montant total</TableHead>
            <TableHead>Montant final (-10%)</TableHead>
            <TableHead>Montant SailingLoc</TableHead>
            <TableHead
              className={clsx({
                hidden: role !== 'ADMIN',
              })}
            >
              Méthode Paiement
            </TableHead>
            <TableHead>Etat</TableHead>
            <TableHead>Créé Le</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paiements.length > 0 ? (
            paiements.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.id}</TableCell>
                <TableCell>{p.reservation.bateau.nom}</TableCell>
                <TableCell>{p.montant} €</TableCell>
                <TableCell>{p.montantTotal} €</TableCell>
                <TableCell>{p.reservation.montantFinal} €</TableCell>
                <TableCell
                  className={clsx({
                    hidden: role !== 'ADMIN',
                  })}
                >
                  {p.reservation.commission} €
                </TableCell>
                <TableCell>{p.methodePaiement}</TableCell>
                <TableCell>{p.etatPaiement}</TableCell>
                <TableCell>{new Date(p.creeLe).toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                Aucun paiement trouvé
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
