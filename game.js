const generateDeck = () => {
  // card model (card & suit)
  // creating deck of cards - 52 cards

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
  const suits = ["heart ", "diamond ", "spade ", "club "];

  for (const suit of suits) {
    for (const value of values) {
      let card = suit + value;
      console.log(card);
    }
  }
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
