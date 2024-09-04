const generateDeck = () => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const suits = ["heart", "diamond", "spade", "club"];
  const cards = [];

  for (const suit of suits) {
    for (const value of values) {
      let points;
      if (value === "A") {
        points = 1;
      } else if (value === "J" || value === "Q" || value === "K") {
        points = 10;
      } else {
        points = parseInt(value);
      }
      let card = {
        suit: suit,
        value: value,
        points: points,
      };
      cards.push(card);
    }
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(cards);
  return cards;
};

const drawCard = (deck) => {
  let lastCard = deck.pop();
  return lastCard;
};

const checkScore = (hand) => {
  let total = hand.reduce((sum, num) => sum + num.points, 0);
  return total;
};

const deck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));
playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

playerHand.forEach((card) => {
  console.log(`Starting player hand: ${card.suit} ${card.value}`);
});
console.log("Starting player score: ", checkScore(playerHand));
console.log("------------------");
dealerHand.forEach((card) => {
  console.log(`Starting dealer hand: ${card.suit} ${card.value}`);
});
console.log("Starting dealer score: ", checkScore(dealerHand));
console.log("------------------------");

while (true) {
  if (checkScore(playerHand) < 21 && checkScore(dealerHand) < 21) {
    playerHand.push(drawCard(deck));
  }
  if (checkScore(playerHand) !== 21 || checkScore(playerHand) < 21) {
    dealerHand.push(drawCard(deck));
  }
  if (checkScore(playerHand) === 21) {
    console.log(
      `You win! Your final score was 21, while dealer had ${checkScore(
        dealerHand
      )} `
    );
    break;
  }
  if (checkScore(playerHand) > 21) {
    console.log(
      `You lose! Your final score was: ${checkScore(
        playerHand
      )}, while dealer had ${checkScore(dealerHand)} `
    );
    break;
  }
  if (checkScore(dealerHand) === 21) {
    console.log(
      `You win! Your final score was : ${checkScore(
        playerHand
      )}, while dealer had ${checkScore(dealerHand)} `
    );
    break;
  }
  if (checkScore(dealerHand) > 21) {
    console.log(
      `You win! Your final score was : ${checkScore(
        playerHand
      )}, while dealer had ${checkScore(dealerHand)} `
    );
    break;
  }
}

console.log("------------------------");
playerHand.forEach((card) => {
  console.log(`Ending player hand: ${card.suit} ${card.value}`);
});
console.log("Ending player score: ", checkScore(playerHand));
console.log("------------------");
dealerHand.forEach((card) => {
  console.log(`Ending dealer hand: ${card.suit} ${card.value}`);
});
console.log("Ending dealer score: ", checkScore(dealerHand));
