import React from 'react';
import { useSelector } from 'react-redux';
import { selectGolfersList } from 'src/client/store/global-slice/selectors';
import { useGolferPrizeMoney } from '../hooks/use-golfer-money';
import { displayNumber } from '../utils/display-number';
import { SubRow } from './sub-row';

interface Props {
  golferId: number;
}

export const SubRowContainer = ({ golferId }: Props) => {
  const golfers = useSelector(selectGolfersList);
  const prizeMoney = useGolferPrizeMoney(golferId);

  return (
    <SubRow golfer={golfers[golferId]} prizeMoney={displayNumber(prizeMoney)} />
  );
};
