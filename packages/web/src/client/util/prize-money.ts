import { prizeMoney } from 'src/client/data';
import { GolferMoneyRankings } from '../../types';

export const getPrizeMoney = (position: string, golferIds: number[], currentRound: string) => {
  const rank = parseInt(position);
  if (rank === 0) {
    // golferRankings[rank].prizeMoney = 10000;
    return 0;
  } else if ((currentRound === '1000' || currentRound === '0100') && rank > 50) {
    // It's round one or two and they're outside the top 50 they get $10,000
    // golferRankings[rank].prizeMoney = 10000;
    return 0;
  } else if (rank > 50) {
    // If they make the cut but are outside the top 50 they get ~$25,000
    // golferRankings[rank].prizeMoney = 25000;
    return 25000;
  } else if (golferIds.length > 1) {
    // If there's a tie
    return splitMoneyOnTie(rank, golferIds.length);
  } else {
    return prizeMoney[rank];
  }
};

export const addPrizeMoney = (rankings: GolferMoneyRankings, currentRound: string) => {
  for (const [position, ranking] of Object.entries(rankings)) {
    ranking.prizeMoney = getPrizeMoney(position, ranking.golfers, currentRound);
  }

  return rankings;
};

export const splitMoneyOnTie = (position: number, noPlayersTied: number) => {
  let positionPrizeMoney = 0;

  // Grab the money to be shared by the tied players, e.g.
  // If three players are tied 3rd, they'll get the money for 3rd, 4th and 5th.
  for (let i = 0; i < noPlayersTied; i++) {
    positionPrizeMoney += prizeMoney[position + i] || 10000;
  }
  // Split the money between the players
  return Math.round(positionPrizeMoney / noPlayersTied);
};
