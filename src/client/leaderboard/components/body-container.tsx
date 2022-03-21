import React from 'react';
import { TeamType } from '../../../types';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { rankTeams } from '../utils/rank-teams';
import { TableBody } from './table-body';

const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const BodyContainer = () => {
  const rankedTeams = useAddPrizeMoney();
  // const rankedTeams = teamsWithPrizeMoney.slice().sort(prizeMoneySortKey);
  // const rankedTeams = rankTeams(teamsWithPrizeMoney);

  return <TableBody tableData={rankedTeams} />;
};
