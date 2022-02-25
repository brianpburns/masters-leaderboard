import { prizeMoney } from 'src/client/data';
import { TeamType, GolferMoneyRankings, Golfers } from '../../types';

export const addPrizeMoney = (
  golferRankings: GolferMoneyRankings,
  currentRound: string
) => {
  Object.keys(golferRankings).map((position) => {
    const rank = parseInt(position);
    const { golfers } = golferRankings[rank];

    if (rank === 0) {
      // If player misses the cut they get $10,000
      golferRankings[rank].prizeMoney = 10000;
    } else if (
      (currentRound === '1000' || currentRound === '0100') &&
      rank > 50
    ) {
      // It's round one or two and they're outside the top 50 they get $10,000
      golferRankings[rank].prizeMoney = 10000;
    } else if (rank > 50) {
      // If they make the cut but are outside the top 50 they get ~$25,000
      golferRankings[rank].prizeMoney = 25000;
    } else if (golfers.length > 1) {
      // If there's a tie
      golferRankings[rank].prizeMoney = splitMoneyOnTie(rank, golfers.length);
    } else {
      golferRankings[rank].prizeMoney = prizeMoney[rank];
    }
  });

  return golferRankings;
};

const splitMoneyOnTie = (position: number, noPlayersTied: number) => {
  let positionPrizeMoney = 0;

  // Grab the money to be shared by the tied players, e.g.
  // If three players are tied 3rd, they'll get the money for 3rd, 4th and 5th.
  for (let i = 0; i < noPlayersTied; i++) {
    positionPrizeMoney += prizeMoney[position + i] || 10000;
  }
  // Split the money between the players
  return Math.round(positionPrizeMoney / noPlayersTied);
};
