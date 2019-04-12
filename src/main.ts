import 'file-loader?name=[name].[ext]!./index.html';
import './css/style.css';

import { determineCutLineValue, getGolferStatsFromLeaderboardData } from './golferStats';
import { calculatePrizeMoneyForEachPlayer } from './moneyCalcs';
import { populateGolferData } from './populateGolferData';
import { populateLeaderboard } from './contentGeneration';
import { toggleDropdown, responsiveDesign } from './responsiveActions';

// const dummyStats = require('./data/stats');
const poolData = require('./data/data.json');

/*
Jordan Spieth: 34046
Jason Day: 28089
Rory McIlroy: 28237
Fowler: 32102
Thomas: 33448
Rose: 22405
Rahm: 46970
DJ: 30925
Casey: 25364
Molinari: 25198
Woods: 08793
Brooks Koepka: 36689
Finau: 29725
Fleetwood: 30911
DeChambeau: 47959
Matsuyama: 32839
Kuchar: 23108
Lowry: 33204
Bubba: 25804
*/

/**
 * Get the leaderboard info
 */
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

/** ############################################################################################## **/
const leaderboardRequest = 'https://statdata.pgatour.com/r/014/2019/leaderboard-v2mini.json';
const mastersLeaderboard = 'https://www.masters.com/en_US/scores/feeds/scores.json';

responsiveDesign();
window.addEventListener('resize', responsiveDesign() as any);

// httpGetAsync(mastersLeaderboard, async stats => {
async function main() {
  const dummyStats = require('./data/stats-2019.json');
  const stats = dummyStats;

  const entrants = poolData.entrants;
  const leaderboard = stats.data;
  const prizeMoneyList = poolData.prizeMoney;
  const leaderboardTable = document.querySelector('table');

  // Get data
  const playersStats = getGolferStatsFromLeaderboardData(leaderboard);
  const cutline = determineCutLineValue(leaderboard);

  const playersStatsWithMoney = await calculatePrizeMoneyForEachPlayer(playersStats, prizeMoneyList, cutline);
  const entrantsPlayerData = await populateGolferData(entrants, playersStatsWithMoney);

  // Sort the leaderboard by prize money
  entrantsPlayerData.sort((a, b) => (a.prizeMoneyTotal > b.prizeMoneyTotal ? -1 : 1));
  populateLeaderboard(entrantsPlayerData, leaderboardTable, cutline);

  // Add event listener for row clicks
  const tableRows = await document.querySelectorAll('.row');
  for(const row of tableRows) {
    await row.addEventListener('click', await toggleDropdown);
  }
}
// });

main();
