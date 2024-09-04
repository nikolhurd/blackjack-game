# blackjack-game

## [Live preview of the project](https://nikolhurd.github.io/blackjack-game/) <br>

Project "Blackjack game" is an project from the "JavaScript in Depth" playlist.

### Requirements for this game:

Generate a deck of 52 cards (2-Ace, all 4 suits).
At the start of the game, both the "dealer" and "player" are each dealt 2 random cards (no replacement).
The game automatically proceeds according to the following behavior:

#### Game Rules:

Continue playing until neither player has exceeded 21 points or obtained exactly 21.
The player is dealt a random card.
If the player's total exceeds 21, the dealer wins. If the player's total is exactly 21, the player wins.
The dealer is then dealt a random card.
If the dealer's total exceeds 21, the player wins. If the dealer's total is exactly 21, the dealer wins.
Repeat the process from step 1.

#### Point Breakdown:

Cards 2-10: Worth their face value.
Jack, Queen, King: Worth 10 points.
Ace: Worth 1 point.

#### Logging:

Record starting hands.
Log ending hands, who won, and the score.
