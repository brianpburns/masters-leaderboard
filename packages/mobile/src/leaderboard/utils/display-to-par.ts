export const displayToPar = (value: number) => {
  if (value === 0) return 'E';

  return value > 0 ? `+${value}` : `${value}`;
};
