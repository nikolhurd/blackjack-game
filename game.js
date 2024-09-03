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
  console.log(cards);
  return cards;
};

generateDeck();

// const drawCard = (deck) => {
//   // function that draw a card from a deck
// };

// const checkScore = (hand) => {
//   // function that calculates a score
// };

// const deck = generateDeck();
// const playerHand = [];
// const dealerHand = [];

// playerHand.push(drawCard(deck));
// dealerHand.push(drawCard(deck));
// playerHand.push(drawCard(deck));
// dealerHand.push(drawCard(deck));
