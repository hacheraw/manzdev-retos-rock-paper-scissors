const rules = {
  "🗿": ["✂", "🦎"],
  "📄": ["🗿", "🖖"],
  "✂": ["🦎", "📄"],
  "🦎": ["🖖", "📄"],
  "🖖": ["✂", "🗿"],
};

const GAME_STATES = {
  PAUSED: 0,
  CHOOSING: 1
};

let gameState = GAME_STATES.PAUSED;
let playerSelection = null;
let cpuSelection = null;
let playerScore = 0;
let cpuScore = 0;

const msgDiv = document.getElementById("message");
const playerScoreDiv = document.getElementById("playerScore");
const cpuScoreDiv = document.getElementById("cpuScore");
const pptls = document.getElementById("pptls");
pptls.addEventListener("load", () => {
  const svg = pptls.contentDocument.querySelector("svg");
  const choices = svg.querySelectorAll(".choice");
  const borders = svg.querySelectorAll(".border");
  console.log(choices);
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      if (gameState !== GAME_STATES.PAUSED) {
        return;
      }
      const border = choice.querySelector(".border");
      removeClass(borders, "player");
      border.classList.add("player");
      playerSelection = choice.id;

      choose();
    });
  });

  function removeClass(elements, klass) {
    elements.forEach((e) => {
      e.classList.remove(klass);
    });
  }

  function choose() {
    gameState = GAME_STATES.CHOOSING;
    msgDiv.classList.add("choosing");
    svg.classList.add("choosing");
    svg.querySelectorAll(".winner").forEach((w) => {
      w.classList.remove("winner");
    });

    let index = Math.floor(Math.random() * choices.length);
    let repeats = 0;
    const interval = setInterval(() => {
      if (repeats++ > 16) {
        clearInterval(interval);
        gameState = GAME_STATES.PAUSED;
        msgDiv.classList.remove("choosing");
        svg.classList.remove("choosing");
        getResult();
        return;
      }
      index = (index + 1) % choices.length;
      cpuSelection = choices[index].id;
      const border = choices[index].querySelector(".border");
      removeClass(borders, "cpu");
      border.classList.add("cpu");
    }, 100);
  }

  function getResult() {
    let first = null;
    let last = null;

    if (playerSelection !== cpuSelection) {
      if (rules[playerSelection].includes(cpuSelection)) {
        playerScore++;
        first = playerSelection;
        last = cpuSelection;
        printScore("GANA EL JUGADOR");
      } else {
        cpuScore++;
        first = cpuSelection;
        last = playerSelection;
        printScore("GANA LA CPU");
      }
    } else {
      printScore("EMPATE");
    }

    if (first !== null) {
      const line = svg.querySelector(`#${first}-${last}`);
      line.classList.add("winner");
    } else {
      const arrows = svg.querySelectorAll(".arrow");
      arrows.forEach((arrow) => {
        arrow.classList.add("winner");
      });
    }
  }

  function printScore(text) {
    playerScoreDiv.textContent = playerScore;
    cpuScoreDiv.textContent = cpuScore;
    msgDiv.textContent = text;
  }
});
