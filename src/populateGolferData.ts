// Get the player data for each entrant's players
export const populateGolferData = async (entrants: any, playersStats: any) => {
  for (const entrant of entrants) {
    entrant.players = await playersStats.filter((player: any) =>
      entrant.players_ids.includes(player.id)
    );
    entrant.prizeMoneyTotal = await entrant.players.reduce(
      (total: number, golfer: any) => total + golfer.prizeMoney,
      0
    );
  }
  return entrants;
};
