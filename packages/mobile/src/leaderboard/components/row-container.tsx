import React from 'react';
import { TeamWithPrizeMoney } from 'src/types';
import { PrimaryRow } from './primary-row';

interface Props {
  position: number;
  row: TeamWithPrizeMoney;
}

export const RowContainer = ({ position, row }: Props) => {
  return (
    <>
      <PrimaryRow position={position} row={row} />
      {/* {displaySubTable && <SubTable isOpen={open} row={row} />} */}
    </>
  );
};
