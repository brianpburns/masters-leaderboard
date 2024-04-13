import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { selectGolferRankings, useAppSelector } from 'src/client/store';
import styled from 'styled-components';
import { SubRowContainer } from '../../leaderboard/components/sub-row-container';

const StyleScoreboardContainer = styled.div`
  margin: 0 5px;
`;

export const Scoreboard = () => {
  const rankingsWithPrizeMoney = useAppSelector(selectGolferRankings);
  const sortedRankings = Object.keys(rankingsWithPrizeMoney).sort((posA, posB) => {
    const aPos = parseInt(posA);
    const bPos = parseInt(posB);

    return aPos > 0 && bPos > 0 ? aPos - bPos : bPos - aPos;
  });

  return (
    <StyleScoreboardContainer>
      <Table size="small" aria-label="purchases" padding="none">
        <TableHead>
          <TableRow data-testid="sub-table-row">
            <TableCell>Pos</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Thru</TableCell>
            <TableCell>Today</TableCell>
            <TableCell>Money</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRankings.map((position) => {
            const { golfers } = rankingsWithPrizeMoney[parseInt(position)];

            return golfers.map((id) => {
              return <SubRowContainer key={id} golferId={id} />;
            });
          })}
        </TableBody>
      </Table>
    </StyleScoreboardContainer>
  );
};
