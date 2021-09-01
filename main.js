let cardArray = [];
const CONTENT = ".content";
const DIV = "div";

function addCard() {
  const randomNum = Math.floor(Math.random() * 100);
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const obj ={
    random: randomNum,
    color: randomColor
  }
  cardArray.push(obj);
  createCard(obj);
}

function createCard(obj) {
  
  let content = document.querySelector(CONTENT);
  let card = document.createElement(DIV);
  card.className = "card";
  card.style.backgroundColor = `#${obj.color}`;
  console.log(card);

  let cardText = document.createElement(DIV);
  cardText.className = "cardText";
  cardText.innerText = `${obj.random}`;

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.innerText = "X";
  deleteButton.dataset.id = obj.random;
  deleteButton.dataset.color = obj.color;
  deleteButton.addEventListener("click", (event) => {
    deleteCard(event);
  });
  card.append(deleteButton);
  card.append(cardText);

  content.append(card);
}

function sortCard() {
  let content = document.querySelector(CONTENT);
  content.innerHTML = "";
  const newCardArr = [...cardArray];
  newCardArr.sort(function (a, b) {
    return a.random - b.random;
  });
  const cardArrLength = cardArray.length;
  for (let i = 0; i < cardArrLength; i++) {
    createCard(newCardArr[i]);
  }
}

function deleteCard(event) {
  event.target.parentElement.remove();
  const id = event.target.dataset.id;
  const color = event.target.dataset.color;
  const cardArrLength = cardArray.length;
  for (let i = 0; i < cardArrLength; i++) {
    if (cardArray[i].random == id && cardArray[i].color == color) {
      cardArray.splice(i, 1);
      break;
    }
  }
}
