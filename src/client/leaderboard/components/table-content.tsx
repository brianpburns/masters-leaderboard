import React from 'react';
import { TableBody } from '@material-ui/core';

import { PrimaryRow } from './primary-row';
import { TeamType } from '../../../types';
import { useLoadTeams } from 'src/client/api';
import { useTeamsMoney } from '../hooks/use-teams-money';

const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const TableContent = () => {
  useLoadTeams();
  const prizeMoneyData = useTeamsMoney();
  const sortedData = prizeMoneyData.slice().sort(prizeMoneySortKey);

  return (
    <TableBody>
      {sortedData.map((row, id) => (
        <PrimaryRow key={row.name} position={id} row={row} />
      ))}
    </TableBody>
  );
};
