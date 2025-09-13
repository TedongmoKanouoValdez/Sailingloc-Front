type Props = { texte: string };

export default function MonTexte({ texte }: Props) {
  const maxChars = 7; // Limite à 100 caractères
  const courtTexte = texte.length > maxChars ? texte.slice(0, maxChars) + '...' : texte;
  return <p>{courtTexte}</p>;
}
