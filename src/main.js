require('file-loader?name=[name].[ext]!./index.html');
import './css/style.css';
// const dummyStats = require('./data/stats');
// const dummyStats = require('./data/stats-2019');
const poolData = require('./data/data');

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

function handleNullValues(value) {
  if (value === null) {
    return '-';
  } else {
    return value;
  }
}

function getGolferStatsFromLeaderboard(leaderboard) {
  return leaderboard.players.map(player => {
    return {
      id: player.player_id,
      name: `${player.player_bio.first_name} ${player.player_bio.last_name}`,
      position: player.current_position || '-',
      total: player.total,
      thru: handleNullValues(player.thru),
      today: handleNullValues(player.today)
    };
  });
}

function splitMoneyBetweenTiedPlayers(position, numberOfPlayersTied, prizeMoneyList) {
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
  return Math.round(totalPrizeMoneyForPosition / numberOfPlayersTied, 2);
}

function calculatePrizeMoney(playersStats, player, position, prizeMoneyList) {
  const numberOfPlayersInThisPosition = playersStats.reduce((total, playerPosition) => (playerPosition.position === player.position ? total + 1 : total), 0);
  return splitMoneyBetweenTiedPlayers(position, numberOfPlayersInThisPosition, prizeMoneyList);
}

/**
 * Loop through all the players and update them with the prize money they're set to receive
 */
async function calculatePrizeMoneyForEachPlayer(playersStats, prizeMoneyList) {
  let prizeMoneyBreakdown = {};

  const playersMoney = await playersStats.forEach(player => {
    const position = player.position.replace('T', '') - 1;

    // If there's no recorded value for the position calculate a value
    if (!prizeMoneyBreakdown[position]) {
      // Only the top 50 get prize money. Outside of top 50 get $10,000
      if (prizeMoneyList[position] === undefined) {
        prizeMoneyBreakdown[position] = 10000;
        player.prizeMoney = 10000;
        return;
      }

      // Calculate the prize money and store the value
      const prizeMoney = calculatePrizeMoney(playersStats, player, position, prizeMoneyList);
      prizeMoneyBreakdown[position] = prizeMoney;
      player.prizeMoney = prizeMoney;
    } else {
      player.prizeMoney = prizeMoneyBreakdown[position];
    }
  });
  return playersMoney;
}

// Get the player data for each entrant's players
function populateGolferData(entrants, playersStats) {
  entrants.forEach(entrant => {
    entrant.players = playersStats.filter(player => entrant.players_ids.includes(player.id));
    entrant.prizeMoneyTotal = entrant.players.reduce((total, golfer) => total + golfer.prizeMoney, 0);
  });
}

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

function determineScoreDisplayColour(playerScore) {
  if (playerScore < 0) {
    return 'red';
  } else if (playerScore === 0) {
    return 'green';
  } else if (playerScore > 0) {
    return 'black';
  } else {
    return 'rgb(145, 124, 124);';
  }
}

function displayNumberWithCommas(prizeMoney) {
  return prizeMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function generateEntrantsPlayersRows(players) {
  return players
    .map(player => {
      const totalStrokesDisplayColour = determineScoreDisplayColour(player.total);
      const todaysStrokesDispayColour = determineScoreDisplayColour(player.today);
      return `
      <tr> 
        <td>${player.position}</td>
        <td>${player.name}</td>
        <td style="background-color:${totalStrokesDisplayColour}">${player.total}</td>
        <td>${player.thru}</td>
        <td style="background-color:${todaysStrokesDispayColour}">${player.today}</td>
        <td>$${displayNumberWithCommas(player.prizeMoney)}</td>
      </tr>
      `;
    })
    .join('');
}

/**
 * Populate the leaderboard
 */
function populateLeaderboard(entrants, leaderboardElement) {
  const entrantsResultsContent = entrants
    .map((entrant, i) => {
      return `
        <tbody>
          <tr class='row'>
            <td class='position'>${i + 1}</td>
            <td colspan='4' class='name'>${entrant.name}</td>
            <td class='cash'>$${displayNumberWithCommas(entrant.prizeMoneyTotal)}</td>
          </tr>
        </tbody>
        <tbody class='dropdown-content'>
          <tr>
            <th>Pos</th>
            <th>Player</th>
            <th>Total</th>
            <th>Thru</th>
            <th>Today</th>
            <th>Money</th>
          </tr>
          ${generateEntrantsPlayersRows(entrant.players)}
        </tbody>
      `;
    })
    .join('');

  leaderboardElement.innerHTML =
    `<tr>
      <th>Pos</th>
      <th colspan="4" class='name'>Name</th>
      <th>Money</th>
    </tr>` + entrantsResultsContent;
}

/* When the user clicks on the row, 
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    row.style.background = 'white';
  });
  this.style.background = '#ddd';
  const dropdown = this.parentElement.nextElementSibling;
  const isOpen = dropdown.classList.contains('show') ? true : false;

  // If there's any other dropdown open, close it
  var dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });

  dropdown.classList.toggle('show');
  if (isOpen) {
    dropdown.classList.toggle('show');
    rows.forEach(row => {
      row.style.background = 'white';
    });
  }
}

function responsiveDesign() {
  if (window.innerWidth < 600) {
    document.querySelector('table').classList.add('mobile');
  } else {
    document.querySelector('table').classList.remove('mobile');
  }
}

/** ############################################################################################## **/
const leaderboardRequest = 'https://statdata.pgatour.com/r/014/2019/leaderboard-v2mini.json';

responsiveDesign();
window.addEventListener('resize', responsiveDesign());

httpGetAsync(leaderboardRequest, stats => {
  // async function main() {
  // const stats = dummyStats;
  const entrants = poolData.entrants;
  const leaderboard = stats.leaderboard;
  const prizeMoneyList = poolData.prizeMoney;
  const leaderboardTable = document.querySelector('table');

  const playersStats = getGolferStatsFromLeaderboard(leaderboard);
  calculatePrizeMoneyForEachPlayer(playersStats, prizeMoneyList);
  populateGolferData(entrants, playersStats);

  // Sort by leaderboard by prize money
  entrants.sort((a, b) => (a.prizeMoneyTotal > b.prizeMoneyTotal ? -1 : 1));

  populateLeaderboard(entrants, leaderboardTable);
  const tableRows = document.querySelectorAll('.row');
  tableRows.forEach(row => row.addEventListener('click', toggleDropdown));
  // }
});

// main();
