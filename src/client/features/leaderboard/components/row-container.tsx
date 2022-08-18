import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRecoilValue } from 'recoil';
import { golfersState } from 'src/client/api';
import { useSendAlert } from 'src/client/features/shared';
import { selectPhaseSelection } from 'src/client/store';
import { TeamWithPrizeMoney } from '../../../../types';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { PrimaryRow } from './primary-row';
import { SubTable } from './sub-table';

interface Props {
  position: number;
  row: TeamWithPrizeMoney;
}

export const RowContainer = ({ position, row }: Props) => {
  const [open, setOpen] = useState(false);
  const rankedGolfers = useSortedGolfers(row);
  const golfers = useRecoilValue(golfersState);
  const sendAlert = useSendAlert();
  const selectionPhase = useSelector(selectPhaseSelection);

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
