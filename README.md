# tic-tac-toe
A simple, responsive Tic Tac Toe web game built with HTML, CSS and JavaScript.

# Features

1. Two-player local game (players alternate between O and X).
2. Win detection for all 8 winning patterns.
3. Disable boxes after selection to prevent overwriting.
4. Reset button to start a new game.
5. Clean responsive styling using CSS and Bootstrap utilities.

# files

/ (project root)
├─ index.html # Main HTML file (you named it with your title)
├─ TIC.css # Styles for the game
└─ TIC.js # Game logic (JavaScript)

# how to run
Clone or download the project.
Open index.html in any modern web browser (Chrome, Firefox, Edge).

# How it works (brief explanation of your JS)

1. boxes selects all nine grid buttons.
2. resetbtn selects the reset button and winner displays the result.
3. turnO (boolean) tracks whose turn it is (true → O, false → X).
4. win_patterns is an array of the 8 index triplets that form winning lines.
5. Clicking a box writes O or X depending on turnO, disables that box, and calls checkwin().
6. checkwin() loops over win_patterns, reads the text of the three boxes in each pattern, and if all three are non-empty and equal, shows the winner and disables all boxes.
7. reset() clears the board, sets turnO back to true, and clears the winner text
