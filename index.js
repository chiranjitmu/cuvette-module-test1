const modal = document.querySelector(".game-rules");
const closemodal = document.querySelector(".close-button");
const openmodal = document.querySelector(".rules-button");
const paperclick = document.querySelector("#paper");
const scissorsclick = document.querySelector("#scissors");
const rockclick = document.querySelector("#rock");
const images = document.querySelector(".images");
const displaywinner = document.querySelector(".display-winner");
const playagain = document.querySelector("#play-again");
const pcimage = document.querySelector("#pc-image");
const youimage = document.querySelector("#you-image");
const pcwinner = document.querySelector(".pc-winner");
const youwinner = document.querySelector(".you-winner");
const whowin = document.querySelector("#who-win");
const youanimationcircle1 = document.querySelector("#you-animationcircle-1");
const youanimationcircle2 = document.querySelector("#you-animationcircle-2");
const youanimationcircle3 = document.querySelector("#you-animationcircle-3");
const pcanimationcircle1 = document.querySelector("#pc-animationcircle-1");
const pcanimationcircle2 = document.querySelector("#pc-animationcircle-2");
const pcanimationcircle3 = document.querySelector("#pc-animationcircle-3");
const buttonnext = document.querySelector("#button-next");
const displayyourscore = document.querySelector("#score-your-display");
const displaypcscore = document.querySelector("#score-pc-display");

// setting up score from localstorage
let yourscore = localStorage.getItem("yourscore") || 0;
let pcscore = localStorage.getItem("pcscore") || 0;
displaypcscore.innerHTML = pcscore;
displayyourscore.innerHTML = yourscore;

// random choose image
const randomFunction = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

// open and close modal
closemodal.addEventListener("click", () => {
  modal.style.display = "none";
});

openmodal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// playagain
playagain.addEventListener("click", () => {
  images.style.display = "flex";
  displaywinner.style.display = "none";
  playagain.innerHTML = "PLAY AGAIN";
  pcanimationcircle1.style.animation = "";
  pcanimationcircle2.style.animation = "";
  pcanimationcircle3.style.animation = "";
  youanimationcircle1.style.animation = "";
  youanimationcircle2.style.animation = "";
  youanimationcircle3.style.animation = "";
  buttonnext.style.display = "none";
});

// click event
rockclick.addEventListener("click", () => {
  images.style.display = "none";
  displaywinner.style.display = "flex";
  youimage.src = "./assets/rock.png";
  youwinner.style.borderColor = "#0074b6";

  // logic
  const random = randomFunction();
  pcimage.src = `./assets/${random}.png`;
  // if tie
  if (random === "rock") {
    pcwinner.style.borderColor = "#0074b6";
    playagain.innerHTML = "REPLAY";
    whowin.innerHTML = "TIE UP";
  }
  // if lost
  else if (random === "paper") {
    pcwinner.style.borderColor = "#ffa943";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU LOST";
    pcanimationcircle1.style.animation = "animate 2s infinite linear";
    pcanimationcircle2.style.animation = "animate 2s infinite linear";
    pcanimationcircle3.style.animation = "animate 2s infinite linear";
    const updatednumber =
      parseInt(localStorage.getItem("pcscore") || 0, 10) + 1;
    localStorage.setItem("pcscore", updatednumber.toString());
    displaypcscore.innerHTML = updatednumber;
  }
  // if win
  else if (random === "scissors") {
    pcwinner.style.borderColor = "#bd00ff";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU WIN";
    youanimationcircle1.style.animation = "animate 2s infinite linear";
    youanimationcircle2.style.animation = "animate 2s infinite linear";
    youanimationcircle3.style.animation = "animate 2s infinite linear";
    buttonnext.style.display = "flex";
    const updatednumber =
      parseInt(localStorage.getItem("yourscore") || 0, 10) + 1;
    localStorage.setItem("yourscore", updatednumber.toString());
    displayyourscore.innerHTML = updatednumber;
  }
});

paperclick.addEventListener("click", () => {
  images.style.display = "none";
  displaywinner.style.display = "flex";
  youimage.src = "./assets/paper.png";
  youwinner.style.borderColor = "#ffa943";

  // logic
  const random = randomFunction();
  pcimage.src = `./assets/${random}.png`;
  // if win
  if (random === "rock") {
    pcwinner.style.borderColor = "#0074b6";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU WIN";
    youanimationcircle1.style.animation = "animate 2s infinite linear";
    youanimationcircle2.style.animation = "animate 2s infinite linear";
    youanimationcircle3.style.animation = "animate 2s infinite linear";
    buttonnext.style.display = "flex";
    const updatednumber =
      parseInt(localStorage.getItem("yourscore") || 0, 10) + 1;
    localStorage.setItem("yourscore", updatednumber.toString());
    displayyourscore.innerHTML = updatednumber;
  }
  // if tie
  else if (random === "paper") {
    pcwinner.style.borderColor = "#ffa943";
    playagain.innerHTML = "REPLAY";
    whowin.innerHTML = "TIE UP";
  }
  // if lost
  else if (random === "scissors") {
    pcwinner.style.borderColor = "#bd00ff";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU LOST";
    pcanimationcircle1.style.animation = "animate 2s infinite linear";
    pcanimationcircle2.style.animation = "animate 2s infinite linear";
    pcanimationcircle3.style.animation = "animate 2s infinite linear";
    const updatednumber =
      parseInt(localStorage.getItem("pcscore") || 0, 10) + 1;
    localStorage.setItem("pcscore", updatednumber.toString());
    displaypcscore.innerHTML = updatednumber;
  }
});

scissorsclick.addEventListener("click", () => {
  images.style.display = "none";
  displaywinner.style.display = "flex";
  youimage.src = "./assets/scissors.png";
  youwinner.style.borderColor = "#bd00ff";

  // logic
  const random = randomFunction();
  pcimage.src = `./assets/${random}.png`;
  // if lost
  if (random === "rock") {
    pcwinner.style.borderColor = "#0074b6";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU LOST";
    pcanimationcircle1.style.animation = "animate 2s infinite linear";
    pcanimationcircle2.style.animation = "animate 2s infinite linear";
    pcanimationcircle3.style.animation = "animate 2s infinite linear";
    const updatednumber =
      parseInt(localStorage.getItem("pcscore") || 0, 10) + 1;
    localStorage.setItem("pcscore", updatednumber.toString());
    displaypcscore.innerHTML = updatednumber;
  }
  // if win
  else if (random === "paper") {
    pcwinner.style.borderColor = "#ffa943";
    playagain.innerHTML = "PLAY AGAIN";
    whowin.innerHTML = "YOU WIN";
    youanimationcircle1.style.animation = "animate 2s infinite linear";
    youanimationcircle2.style.animation = "animate 2s infinite linear";
    youanimationcircle3.style.animation = "animate 2s infinite linear";
    buttonnext.style.display = "flex";
    const updatednumber =
      parseInt(localStorage.getItem("yourscore") || 0, 10) + 1;
    localStorage.setItem("yourscore", updatednumber.toString());
    displayyourscore.innerHTML = updatednumber;
  }
  // if tie
  else if (random === "scissors") {
    pcwinner.style.borderColor = "#bd00ff";
    playagain.innerHTML = "REPLAY";
    whowin.innerHTML = "TIE UP";
  }
});
