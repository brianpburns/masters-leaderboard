async function splitMoneyBetweenTiedPlayers(position, numberOfPlayersTied, prizeMoneyList) {
  let totalPrizeMoneyForPosition = 0;

  // If there isn't a tie return the prize money for that position
  if (numberOfPlayersTied == 1) {
    return parseInt(prizeMoneyList[position]);
  }

  // Grab the money to be shared by the tied players, e.g.
  // If three players are tied 3rd, they'll get the money for 3rd, 4th and 5th.
  for (let i = 0; i < numberOfPlayersTied; i++) {
    totalPrizeMoneyForPosition += parseInt(prizeMoneyList[position + i]) || 10000;
  }
  // Split the money between the players
  return await Math.round(totalPrizeMoneyForPosition / numberOfPlayersTied);
}

async function calculatePrizeMoney(playersStats, player, position, prizeMoneyList) {
  const numberOfPlayersInThisPosition = await playersStats.reduce((total, playerPosition) => (playerPosition.position === player.position ? total + 1 : total), 0);
  return await splitMoneyBetweenTiedPlayers(position, numberOfPlayersInThisPosition, prizeMoneyList);
}

/**
 * Loop through all the players and update them with the prize money they're set to receive
 */
export async function calculatePrizeMoneyForEachPlayer(playersStats, prizeMoneyList, cutline) {
  let prizeMoneyBreakdown = {};

  for (const player of playersStats) {
    const position = player.position.replace('T', '') - 1;

    // If there's no recorded value for the position calculate a value
    if (!prizeMoneyBreakdown[position] || player.total > cutline) {
      // Check if the player's outside the top 50. Outside of top 50 get $10,000
      if (prizeMoneyList[position] === undefined) {
        prizeMoneyBreakdown[position] = 10000;
      } else {
        // Calculate the prize money and store the value
        prizeMoneyBreakdown[position] = await calculatePrizeMoney(playersStats, player, position, prizeMoneyList);
      }
    }
    player.prizeMoney = prizeMoneyBreakdown[position];
  }

  return await playersStats;
}
