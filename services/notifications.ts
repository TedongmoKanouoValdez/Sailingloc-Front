export type Message = {
  id: number;
  contenu: string;
  lu: boolean;
  object: string;
  dateEnvoi: string;
  expediteur: { id: number; nom: string };
  destinataire: { id: number; nom: string } | null;
  reservationId?: number;
  bateauId?: number;
};

// Récupérer les messages (reçus ou envoyés)
export const fetchMessages = async (
  token: string,
  userId: number,
  type: 'recus' | 'envoyes' = 'recus'
) => {
  const res = await fetch(
    `https://sailingloc-back.vercel.app/messages?userId=${userId}&type=all`,
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    }
  );

  if (!res.ok) throw new Error('Impossible de récupérer les messages');
  const data = await res.json();
  return data.messages as Message[];
};

// Marquer un message comme lu
export const markMessageAsRead = async (id: number, token: string) => {
  const res = await fetch(`https://sailingloc-back.vercel.app/messages/${id}/lu`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error('Impossible de marquer le message comme lu');
  return res.json();
};
