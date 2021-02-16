import React from 'react';

import { useRecoilValue } from 'recoil';
import { availableGolfersState } from '../state/selectors';
import { useSelectedGolfers } from '../hooks/useSelectedGolfers';
import { GolfersList } from './golfers-list';

export const GolfersListContainer = () => {
  const availableGolfers = useRecoilValue(availableGolfersState);
  const { addGolfer } = useSelectedGolfers();

  return (
    <GolfersList availableGolfers={availableGolfers} addGolfer={addGolfer} />
  );
};
