let cardArray = [];
const CONTENT = ".content";
const DIV = "div";

function loading() {
  body = document.querySelector("body");
  body.style.height = window.innerHeight - 1 + "px";
}

function addCard() {
  const randomNum = Math.floor(Math.random() * 100);
  cardArray.push(randomNum);
  createCard(randomNum);
}

function createCard(n) {
  let content = document.querySelector(CONTENT);
  let card = document.createElement(DIV);
  card.className = "card";

  let cardText = document.createElement(DIV);
  cardText.className = "cardText";
  cardText.innerText = n + "";

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerText = "X";
  deleteButton.dataset.id = n;
  deleteButton.addEventListener("click", (event) => {
    deleteCard(event);
  });
  card.append(deleteButton);
  card.append(cardText);

  content.prepend(card);
}

function sortCard() {
  let content = document.querySelector(CONTENT);
  content.innerHTML = "";
  const newCardArr = [...cardArray];
  newCardArr.sort(function (a, b) {
    return b - a;
  });
  let cardArrLength = cardArray.length;
  for (let i = 0; i < cardArrLength; i++) {
    createCard(newCardArr[i]);
  }
}

function deleteCard(event) {
  event.target.parentElement.remove();
  let m = event.target.dataset.id;
  let n = cardArray.length;
  for (let i = 0; i < n; i++) {
    if (cardArray[i] == m) {
      cardArray.splice(i, 1);
      break;
    }
  }
}
