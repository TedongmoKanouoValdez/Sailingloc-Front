export type ForfaitType = 'demi-journée' | 'jour' | 'week-end' | 'semaine' | 'mois';

interface CalculatePriceParams {
  forfait: ForfaitType;
  selectedPrice: number;
  fullRange: Date[];
}

export const calculatePrice = ({
  forfait,
  selectedPrice,
  fullRange,
}: CalculatePriceParams): number => {
  const totalDays = fullRange.length;

  switch (forfait) {
    case 'demi-journée':
      return selectedPrice * totalDays * 2;

    case 'jour':
      return selectedPrice * totalDays;

    case 'week-end':
      return selectedPrice * Math.ceil(totalDays / 2);

    case 'semaine':
      return selectedPrice * Math.ceil(totalDays / 7);

    case 'mois':
      return selectedPrice * Math.ceil(totalDays / 30);

    default:
      return 0;
  }
};
