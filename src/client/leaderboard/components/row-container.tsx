import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { golfersState } from 'src/client/api';
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

  const toggleDropdown = (value: boolean) => {
    if (golfers) setOpen(value);
  };

  return (
    <>
      <PrimaryRow
        open={open}
        setOpen={toggleDropdown}
        position={position}
        row={row}
      />
      <SubTable isOpen={open} rankedGolfers={rankedGolfers} />
    </>
  );
};
