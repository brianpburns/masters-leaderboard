// Get the player data for each entrant's players
export async function populateGolferData(entrants, playersStats) {
  for (const entrant of entrants) {
    entrant.players = await playersStats.filter(player => entrant.players_ids.includes(player.id));
    entrant.prizeMoneyTotal = await entrant.players.reduce((total, golfer) => total + golfer.prizeMoney, 0);
  }
  return entrants;
}
