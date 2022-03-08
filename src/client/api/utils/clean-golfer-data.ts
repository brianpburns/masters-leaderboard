import { UncleanGolferData, GolferData } from '../../../types';

export const normalisePosition = (position: string) =>
  position ? parseInt(position.replace('T', '')) : 0;

export const cleanGolferData = (golfer: UncleanGolferData): GolferData => {
  const { id, first_name, last_name, pos, topar, thru, today, teetime } =
    golfer;

  return {
    id: parseInt(id),
    name: `${first_name} ${last_name}`,
    position: normalisePosition(pos),
    topar: topar === 'E' || topar === '' ? 0 : parseInt(topar),
    thru: thru ? thru : '-',
    today: today ? today : '-',
    teetime,
  };
};
