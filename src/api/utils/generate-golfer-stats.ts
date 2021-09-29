import { Golfer, GolferData } from '../../types';

const normalisePosition = (position: string) =>
  position ? parseInt(position.replace('T', '')) : 0;

export const generateGolferStats = (golfer: Golfer): GolferData => {
  const { id, first_name, last_name, pos, topar, thru, today, teetime } =
    golfer;

  return {
    id,
    name: `${first_name} ${last_name}`,
    position: normalisePosition(pos),
    topar: topar === 'E' || topar === '' ? 0 : parseInt(topar),
    thru: thru ? thru : '-',
    today: today ? today : '-',
    teetime,
  };
};
