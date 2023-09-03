const dice = document.getElementsByClassName("dice");
const textPlayer = document.getElementsByTagName("h1")[0];
let diceList = [];

function randomPlayerDice() {
  for (let index = 0; index < dice.length; index++) {
    let randomDice = Math.floor(Math.random() * 6) + 1; //random 1-6
    let img = dice[index].querySelector("img"); // get img[index]
    let pElement = dice[index].querySelector("p");
    // console.log(img);
    // console.log(pElement);
    diceList.push(randomDice);
    img.src = `./images/dice${randomDice}.png`;
    pElement.textContent = `Player ${index + 1}: ${randomDice}`;
  }
}

function checkPlayerWin(dicePlayer) {
  let maxDice = Math.max(...dicePlayer);
  let winningPlayers = [];

  for (let i = 0; i < dicePlayer.length; i++) {
    if (dicePlayer[i] === maxDice) {
      winningPlayers.push(i + 1); // Player numbers are 1-indexed
      console.log(winningPlayers);
    }
  }

  if (winningPlayers.length > 1) {
    textPlayer.innerText = "It's a tie!";
  } else {
    if (winningPlayers[0] <= 1) {
      textPlayer.innerText = `🚩Player ${winningPlayers[0]} wins!`;
    } else if (winningPlayers[0] === 2) {
      textPlayer.innerText = `Player ${winningPlayers[0]} wins!🚩`;
    }
  }
}

randomPlayerDice();
checkPlayerWin(diceList);
