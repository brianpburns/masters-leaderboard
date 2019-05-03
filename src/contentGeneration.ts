function determineScoreBackgroundDisplayColour(playerScore) {
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

function determineThruValueToDisplay(player) {
  if (player.thru == '' && player.today == '') {
    return player.teetime;
  } else if (player.thru == 'F') {
    if (player.scoreToday !== 'E') {
      return 72 + parseInt(player.today);
    }
    return 72;
  }
  return player.thru;
}

function thruStyle(thruValue, player) {
  let backgroundColour = 'white';
  let color = 'white';

  if (thruValue == '' && player.today == '') {
    backgroundColour = 'rgb(145, 124, 124)';
  } else if (parseInt(thruValue) < 18) {
    backgroundColour = 'rgb(145, 124, 124)';
  } else if (parseInt(thruValue) == 72) {
    color = 'green';
  } else if (parseInt(thruValue) < 72 && parseInt(thruValue) > 18) {
    color = 'red';
  } else if (parseInt(thruValue) > 72) {
    color = 'black';
  }
  return `background-color:${backgroundColour};color:${color}`;
}

function handlePosition(player, cutLine) {
  if (player.total > cutLine) {
    return 'CUT';
  }
  return player.position;
}

function generatePlayerStatsRows(players, cutLine) {
  return players
    .map(player => {
      const totalStrokesDisplayColour = determineScoreBackgroundDisplayColour(player.total);
      const todaysStrokesDispayColour = determineScoreBackgroundDisplayColour(player.today);
      const thruValue = determineThruValueToDisplay(player);
      return `
      <tr> 
        <td>${handlePosition(player, cutLine)}</td>
        <td>${player.name}</td>
        <td style="background-color:${totalStrokesDisplayColour}">${player.total}</td>
        <td style="${thruStyle(thruValue, player)}">${thruValue || '-'}</td>
        <td style="background-color:${todaysStrokesDispayColour}">${player.today || '-'}</td>
        <td>$${displayNumberWithCommas(player.prizeMoney)}</td>
      </tr>
      `;
    })
    .join('');
}

/**
 * Populate the leaderboard
 */
export function populateLeaderboard(entrants, leaderboardElement, cutLine) {
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
          ${generatePlayerStatsRows(entrant.players, cutLine)}
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
