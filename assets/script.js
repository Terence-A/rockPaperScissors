const title = document.querySelector("h1");
const yourStats = document.querySelector("p");

const player = {
  totalGames: 0,
  wins: 0,
  ties: 0,
  losses: 0,
  isPlaying: true,
};

//computers choice
function getComputerChoice() {
  let computer = Math.floor(Math.random() * 3) + 1;
  if (computer === 1) {
    return "r";
  } else if (computer === 2) {
    return "p";
  } else {
    return "s";
  }
}

//player choice
function getPlayerChoice() {
  let playerChoice = prompt("r,p,s or end").toLocaleLowerCase();
  while (
    playerChoice !== "r" &&
    playerChoice !== "p" &&
    playerChoice !== "s" &&
    playerChoice !== "end"
  ) {
    playerChoice = prompt("r,p,s or end");
  }
  return playerChoice;
}

//render Game
function renderGame() {
  while (player.isPlaying === true) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (playerChoice === "end") {
      player.isPlaying = false;
    } else if (playerChoice === computerChoice) {
      //   console.log("tie");
      player.ties++;
      player.totalGames++;
      alert(
        `You chose [${playerChoice}], and your opponent chose [${computerChoice}] You Tie!   Hit enter to play again :)`
      );
    } else if (playerChoice === "r" && computerChoice === "s") {
      console.log("win");
      player.wins++;
      player.totalGames++;
      alert(
        `You chose [${playerChoice}], and your opponent chose [${computerChoice}] You Win!   Hit enter to play again :)`
      );
    } else if (playerChoice === "p" && computerChoice === "r") {
      console.log("win");
      player.wins++;
      player.totalGames++;
      alert(
        `You chose [${playerChoice}], and your opponent chose [${computerChoice}:] You Win!   Hit enter to play again :)`
      );
    } else if (playerChoice === "s" && computerChoice === "p") {
      console.log("win");
      player.wins++;
      player.totalGames++;
      alert(
        `You chose [${playerChoice}], and your opponent chose [${computerChoice}:] You Win!   Hit enter to play again :)`
      );
    } else {
      console.log("sorry you lose");
      player.losses++;
      player.totalGames++;
      alert(
        `You chose [${playerChoice}], and your opponent chose [${computerChoice}:] Sorry you lose   Hit enter to play again :)`
      );
    }
  }
}

renderGame();

title.innerText = `Thank you for playing`;
yourStats.innerHTML = `<span>Stats: </span><br><br> Games played: ${player.totalGames}<br> won: ${player.wins}<br> lost: ${player.losses}<br> tied: ${player.ties}`;
