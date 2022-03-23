import React from 'react';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { TableBody } from './table-body';

export const BodyContainer = () => {
  const rankedTeams = useAddPrizeMoney();

  return <TableBody tableData={rankedTeams} />;
};
