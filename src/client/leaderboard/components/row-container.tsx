import React, { useState } from 'react';
import { TeamType } from '../../../types';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { PrimaryRow } from './primary-row';
import { SubTable } from './sub-table';

interface Props {
  position: number;
  row: TeamType;
}

export const RowContainer = ({ position, row }: Props) => {
  const [open, setOpen] = useState(false);
  const rankedGolfers = useSortedGolfers(row);

  return (
    <>
      <PrimaryRow open={open} setOpen={setOpen} position={position} row={row} />
      <SubTable isOpen={open} rankedGolfers={rankedGolfers} />
    </>
  );
};
