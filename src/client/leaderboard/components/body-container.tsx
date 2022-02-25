import React from 'react';
import { useLoadTeams } from 'src/client/api';
import { TeamType } from '../../../types';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { TableBody } from './table-body';

const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const BodyContainer = () => {
  // Needs to be done here to pull in any team changes
  useLoadTeams();
  const teamsWithPrizeMoney = useAddPrizeMoney();
  const sortedData = teamsWithPrizeMoney.slice().sort(prizeMoneySortKey);

  return <TableBody tableData={sortedData} />;
};
