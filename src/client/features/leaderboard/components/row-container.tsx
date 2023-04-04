import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSendAlert } from 'src/client/features/shared';
import { selectPhaseSelection } from 'src/client/store';
import { selectGolfersList } from 'src/client/store/global-slice/selectors';
import { TeamWithPrizeMoney } from '../../../../types';
import { PrimaryRow } from './primary-row';
import { SubTable } from './sub-table';

interface Props {
  position: number;
  row: TeamWithPrizeMoney;
}

export const RowContainer = ({ position, row }: Props) => {
  const [open, setOpen] = useState(false);
  const golfers = useSelector(selectGolfersList);
  const sendAlert = useSendAlert();
  const selectionPhase = useSelector(selectPhaseSelection);
  const displaySubTable = Object.keys(golfers).length > 0 && !selectionPhase;

  const toggleDropdown = (value: boolean) => {
    if (golfers && displaySubTable) {
      setOpen(value);
    } else {
      sendAlert(
        'Other teams cannot be viewed until the tournament starts',
        'info'
      );
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
      {displaySubTable && <SubTable isOpen={open} row={row} />}
    </>
  );
};
