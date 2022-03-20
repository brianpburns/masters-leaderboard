import React from 'react';
import { useLoadTeams } from 'src/client/api';
import { Loader } from 'src/client/shared';
import { TeamType } from '../../../types';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { TableBody } from './table-body';

const prizeMoneySortKey = (a: TeamType, b: TeamType) =>
  (a.prizeMoney || 0) < (b.prizeMoney || 0) ? 1 : -1;

export const BodyContainer = () => {
  // Needs to be done here to pull in any team changes
  const { loading } = useLoadTeams();
  const teamsWithPrizeMoney = useAddPrizeMoney();
  const rankedTeams = teamsWithPrizeMoney.slice().sort(prizeMoneySortKey);

  return (
    <>
      <Loader open={loading} />
      <TableBody tableData={rankedTeams} />
    </>
  );
};
