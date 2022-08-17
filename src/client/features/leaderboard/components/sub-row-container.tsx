import React from 'react';
import { useRecoilValue } from 'recoil';
import { golfersState } from '../../../api';
import { useGolferPrizeMoney } from '../hooks/use-golfer-money';
import { displayNumber } from '../utils/display-number';
import { SubRow } from './sub-row';

interface Props {
  golferId: number;
}

export const SubRowContainer = ({ golferId }: Props) => {
  const golfers = useRecoilValue(golfersState);
  // const golfer = golfers[golferId];
  const prizeMoney = useGolferPrizeMoney(golferId);

  return (
    golfers && (
      <SubRow
        golfer={golfers[golferId]}
        prizeMoney={displayNumber(prizeMoney)}
      />
    )
  );
};
