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
  const suits = ["heart ", "diamond ", "spade ", "club "];
  const cards = [];

  for (const suit of suits) {
    for (const value of values) {
      let card = suit + value;
      cards.push(card);
      console.log(cards);
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
