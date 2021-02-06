import { teams } from '../data/teams';
import { prizeMoney } from '../data/prizeMoney';
import { GolferData } from '../types/types';

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

const calculatePrizeMoney = (
  playersStats: GolferData[],
  player: GolferData,
  position: number
) => {
  const noTiedPlayers = playersStats.reduce(
    (total: number, { position }: GolferData) =>
      position === player.position ? total + 1 : total,
    0
  );
  return noTiedPlayers !== 1
    ? splitMoneyOnTie(position, noTiedPlayers)
    : prizeMoney[position];
};

/**
 * Loop through all the players and update them with the prize money they're set to receive
 */
export const playerPrizeMoney = (
  playersStats: GolferData[],
  cutline: number
) => {
  let prizeMoneyBreakdown: { [k: string]: number } = {};
  const playersWithMoney = [];

  for (const player of playersStats) {
    const { position, topar } = player;
    const indexedPosition = position - 1;

    // If there's no recorded value for the position calculate a value
    if (!prizeMoneyBreakdown[position] || topar > cutline) {
      // If player is outside of the top 50 they get $10,000
      if (prizeMoney[indexedPosition] === undefined) {
        prizeMoneyBreakdown[position] = 10000;
      } else {
        // Calculate the prize money and store the value
        prizeMoneyBreakdown[position] = calculatePrizeMoney(
          playersStats,
          player,
          indexedPosition
        );
      }
    }
    playersWithMoney.push({
      ...player,
      prizeMoney: prizeMoneyBreakdown[position],
    });
  }

  return playersWithMoney;
};

// Get the player data for each entrant's players
export const addGolferMoney = (golfers: GolferData[]) => {
  const { entrants } = teams;
  const entrantsWithMoney = [];
  for (const entrant of entrants) {
    let prizeMoney = 0;
    const golfersData = golfers.filter(
      (golfer) => golfer.id && entrant.players_ids.includes(parseInt(golfer.id))
    );
    for (const golfer of golfersData) {
      if (golfer) {
        prizeMoney = prizeMoney + golfer.prizeMoney;
      }
    }
    entrantsWithMoney.push({
      ...entrant,
      prizeMoney,
      players: golfersData,
    });
  }
  return entrantsWithMoney;
};
