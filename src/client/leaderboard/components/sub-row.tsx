import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { useGetGolferData } from 'src/client/data/hooks/use-get-golfer-data';
import { GolferData } from 'src/types';
import { displayToPar } from '../utils/display-to-par';
import { StyledPlayerType } from './styled';

interface Props {
  golfer: GolferData;
  prizeMoney: string;
}

export const SubRow = ({ golfer, prizeMoney }: Props) => {
  const { id, name, position, topar, today, thru } = golfer;
  const { getGolferData } = useGetGolferData();
  const { top10, First, Amateur } = getGolferData(id);
  const rookie = First === '1';
  const amateur = Amateur === '1';

  return (
    <TableRow key={id}>
      <TableCell component='th' scope='row'>
        {position === 0 ? '-' : position}
      </TableCell>
      <TableCell>
        {name}{' '}
        <StyledPlayerType top10={top10} amateur={amateur}>
          {top10 ? '(10)' : amateur ? '(A)' : rookie && '(R)'}
        </StyledPlayerType>
      </TableCell>
      <TableCell>{displayToPar(topar)}</TableCell>
      <TableCell>{thru}</TableCell>
      <TableCell>{today}</TableCell>
      <TableCell>{prizeMoney}</TableCell>
    </TableRow>
  );
};
