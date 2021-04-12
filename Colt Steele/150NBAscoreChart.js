const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// const ul =document.createElement('ul');
// const firstH2 =document.querySelector('#secondH2');
// firstH2.insertAdjacentElement('beforebegin', ul);
// for(let match of warriorsGames){
//   const {awayTeam, homeTeam} = match;
//   const gameLi =document.createElement('li');
//   const {team: hTeam, points: hPoints} =homeTeam;
//   const {team: aTeam, points: aPoints} =awayTeam;

//   const teamName =`${aTeam} @ ${hTeam}`;
//   let teamPoint;
//   if(aPoints>hPoints){
//     teamPoint =`<b>${aPoints}</b>-${hPoints}`
//   }else{
//   teamPoint =`${aPoints}-<b>${hPoints}</b>`
//   }
  
//   const warrior =hTeam ==='Golden State' ? homeTeam:awayTeam;
//   gameLi.classList.add(warrior.isWinner ? 'win' : 'loss');
//   gameLi.innerHTML =`${teamName} ${teamPoint}`;
//   ul.appendChild(gameLi);
// }


//Refactor above code

const makeChart = (games, targetTeam) => {
  const ul =document.createElement('ul');
  for(let match of games){
    const gameLi =document.createElement('li');
    gameLi.classList.add(isWinner(match, targetTeam) ? 'win' : 'loss');
    gameLi.innerHTML = getScoreLine(match);
    ul.appendChild(gameLi);
  }
  return ul;
}

const isWinner =({homeTeam, awayTeam}, targetTeam) => {
  const target =homeTeam.team ===targetTeam ? homeTeam:awayTeam;
  return target.isWinner;
};

const getScoreLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} =homeTeam;
  const {team: aTeam, points: aPoints} =awayTeam;
  const teamName =`${aTeam} @ ${hTeam}`;
  let teamPoint;
  if(aPoints>hPoints){
    teamPoint =`<b>${aPoints}</b>-${hPoints}`
  }else{
  teamPoint =`${aPoints}-<b>${hPoints}</b>`
  }
  return `${teamName} ${teamPoint}`
};

const char1 = makeChart(warriorsGames, 'Golden State');

//document.body.append(char1);
const firstH2 =document.querySelector('#secondH2');
firstH2.insertAdjacentElement('beforebegin', char1);

const char2 = makeChart(warriorsGames, 'Houston');
firstH2.insertAdjacentElement('afterend', char2);