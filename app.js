const squares = document.querySelectorAll(".square");
const winner = document.querySelector(".winner");
let pressTimes = 0;
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const x = [];
const o = [];

Array.from(squares).forEach(function (square, index) {
  function press() {
    let i = 0;

    if (pressTimes % 2 == false) {
      square.textContent = "x";
      x.push(index);
    } else if (pressTimes % 2 == true) {
      square.textContent = "o";
      o.push(index);
    }

    if (square.hasChildNodes()) {
      square.removeEventListener("click", press);
    }

    pressTimes++;

    // winningcondition order check

    for (; i < winningConditions.length; i++) {
      if (winningConditions[i].every((val, index) => val === x[index])) {
        winner.innerText = "X win!";
        pressTimes = 10;
      }
    }

    for (; i < winningConditions.length; i++) {
      if (winningConditions[i].every((val, index) => val === o[index])) {
        winner.innerText = "O win!";
        square.removeEventListener("click", press);
      }
    }

    // removeEventLitener work properly

    if (pressTimes == 9) {
      winner.innerText = "It's a draw!";
      square.removeEventListener("click", press);
    }

    if (pressTimes == 10) {
      square.removeEventListener("click", press);
    }
  }

  square.addEventListener("click", press);
});
