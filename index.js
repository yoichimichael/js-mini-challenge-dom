/***** Deliverable 1 *****/
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header')
  const playersDiv = document.querySelector('div.player-container')
  console.log("Here's your header:", header)


  


/***** Deliverable 2 *****/
  header.style = "color:red"

/***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS)
  
  for(const key in PLAYERS){
    let playerObj = PLAYERS[key]
    let playerDiv = document.createElement('div')

    playerDiv.className = 'player'
    playerDiv.dataset.number = `${playerObj.number}`
    playerDiv.innerHTML = `
      <h3>
        ${playerObj.name} (<em>${playerObj.nickname}</em>)
      </h3>
      <img src="${playerObj.photo}" alt="${playerObj.name}">
    `
    playersDiv.append(playerDiv)
  };

/***** Deliverable 4 *****/
  const playerNumber7 = document.querySelector("div[data-number='7']");
  // console.log(playerNumber7)
  playerNumber7.remove()
});