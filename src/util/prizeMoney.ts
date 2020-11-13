import poolData from '../data/data.json';

const { prizeMoney } = poolData;

interface UsedPlayerData {
  id: string;
  name: string;
  position: string;
  topar: number;
  thru: string;
  today: string;
  teetime: string;
}

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
  playersStats: UsedPlayerData[],
  player: UsedPlayerData,
  position: number
) => {
  const noTiedPlayers = playersStats.reduce(
    (total: number, { position }: UsedPlayerData) =>
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
  playersStats: UsedPlayerData[],
  cutline: number
) => {
  let prizeMoneyBreakdown: { [k: string]: number } = {};
  const playersWithMoney = [];

  for (const player of playersStats) {
    const { position, topar } = player;
    const indexedPosition = parseInt(position.replace('T', '')) - 1;

    // If there's no recorded value for the position calculate a value
    if (!prizeMoneyBreakdown[position] || topar > cutline) {
      // Check if the player's outside the top 50. Outside of top 50 get $10,000
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

interface GolferWithPrizeMoney extends UsedPlayerData {
  prizeMoney: number;
}

// Get the player data for each entrant's players
export const addGolferMoney = (golfersWithMoney: GolferWithPrizeMoney[]) => {
  const { entrants } = poolData;
  const entrantsWithMoney = [];
  for (const entrant of entrants) {
    let prizeMoney = 0;
    const playersData = golfersWithMoney.filter((golfer) =>
      entrant.players_ids.includes(parseInt(golfer.id))
    );
    for (const player of playersData) {
      if (player) {
        prizeMoney = prizeMoney + player.prizeMoney;
      }
    }
    entrantsWithMoney.push({
      ...entrant,
      prizeMoney,
      players: playersData,
    });
  }
  return entrantsWithMoney;
};
