import asyncHandler from 'express-async-handler';

export function getMastersLeaderboard() {
  return asyncHandler(async (_req, res) => {
    try {
      const response = await fetch('https://www.masters.com/en_US/scores/feeds/2023/scores.json');
      const data = await response.json();

      res.status(200).send(data);
    } catch (err) {
      console.error(`Failed to fetch leaderboard data, ${err}`);
      res.status(500).send();
    }
  });
}
