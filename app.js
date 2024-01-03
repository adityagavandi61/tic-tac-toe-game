let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-game");
let newbtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg-container");
let winis = document.querySelector(".winner");

let turnO = true;
let count = 0;

let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let iswinner = checkwinner();

    if (count === 9 && !iswinner) {
      gamedraw();
    }
  });
});

const gamedraw = () => {
  winis.innerText = "Game was draw";
  msg.classList.remove("hide");
  disabledbox();
};

const showwinner = (winner) => {
  winis.innerText = `Winner is ${winner}`;
  msg.classList.remove("hide");
  disabledbox();
};

const checkwinner = () => {
  for (let win of winpattern) {
    let P1 = boxes[win[0]].innerText;
    let P2 = boxes[win[1]].innerText;
    let P3 = boxes[win[2]].innerText;

    if (P1 != "" && P2 != "" && P3 != "") {
      if (P1 === P2 && P2 === P3) {
        showwinner(P1);
        return true;
      }
    }
  }
};

const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledbox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledbox();
  msg.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
