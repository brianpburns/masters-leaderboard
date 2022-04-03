import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { golfersState } from 'src/client/api';
import { selectionPhaseState } from 'src/client/app';
import { useSendAlert } from 'src/client/shared';
import { Team } from '../../../types';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { PrimaryRow } from './primary-row';
import { SubTable } from './sub-table';

interface Props {
  position: number;
  row: Team;
}

export const RowContainer = ({ position, row }: Props) => {
  const [open, setOpen] = useState(false);
  const rankedGolfers = useSortedGolfers(row);
  const golfers = useRecoilValue(golfersState);
  const sendAlert = useSendAlert();
  const selectionPhase = useRecoilValue(selectionPhaseState);

  const toggleDropdown = (value: boolean) => {
    if (golfers && !selectionPhase) {
      setOpen(value);
    } else {
      sendAlert('Teams cannot be viewed until the tournament starts', 'info');
    }
  };

  return (
    <>
      <PrimaryRow
        open={open}
        setOpen={toggleDropdown}
        position={position}
        row={row}
        selectionPhase={selectionPhase}
      />
      {!selectionPhase && (
        <SubTable isOpen={open} rankedGolfers={rankedGolfers} />
      )}
    </>
  );
};
