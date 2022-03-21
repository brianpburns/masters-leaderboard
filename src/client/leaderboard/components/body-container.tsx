import React from 'react';
import { TeamType } from '../../../types';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { TableBody } from './table-body';

const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const BodyContainer = () => {
  const teamsWithPrizeMoney = useAddPrizeMoney();
  const rankedTeams = teamsWithPrizeMoney.slice().sort(prizeMoneySortKey);

  return <TableBody tableData={rankedTeams} />;
};
