import { stringify } from "querystring";

function determineScoreDisplayColour(playerScore) {
  if (playerScore < 0) {
    return 'red';
  } else if (playerScore === 'E') {
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

function determineThruValueToDisplay(thru, scoreToday) {
  if (thru == 'F') {
    if (scoreToday !== 'E') {
      return 72 + parseInt(scoreToday);
    }
    return 72;
  }
  return thru;
}

function thruStyle(thruValue) {
  let backgroundColour = 'white';
  let color = 'white';
  if (thruValue == 72) {
    color = 'green';
  } else if (thruValue < 72) {
    color = 'red';
  } else if (thruValue > 72) {
    color = 'black';
  } else {
    backgroundColour = 'rgb(145, 124, 124);'
  }
  return `background-color:${backgroundColour};color:${color}`
}

function generatePlayerStatsRows(players) {
  return players
    .map(player => {
      const totalStrokesDisplayColour = determineScoreDisplayColour(player.total);
      const todaysStrokesDispayColour = determineScoreDisplayColour(player.today);
      // const thruDisplayColour = player.thru == 'F' ? 'white' : 'rgb(145, 124, 124);';
      const thruValue = determineThruValueToDisplay(player.thru, player.today);
      return `
      <tr> 
        <td>${player.position}</td>
        <td>${player.name}</td>
        <td style="background-color:${totalStrokesDisplayColour}">${player.total}</td>
        <td style="${thruStyle(thruValue)}">${thruValue}</td>
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
export function populateLeaderboard(entrants, leaderboardElement) {
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
          ${generatePlayerStatsRows(entrant.players)}
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