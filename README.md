# memory-game

I decided to create a memory game to practice and showcase what I've learnt from HTML, CSS and Javascript. You can find bellow each step I took to create this game...
- Create GitHub repo and clone it to my computer
- Add files to folder: html file, css file, js file, images folder with images for cards, image for back of cards and logo
- Create initial structure using HTML
- Create styles to give form to the game, created a grid template so that cards are all the same size and images fit into grid containers
- Create game logic in javascript including
  - Create initial array with image's file names
  - Shuffle array to create a randomized order
  - Create divs dynamically inside the grid html element
  - Assigned images to each div from randomized array
  - Create functionality to flip cards by adding and removing the flipped card with toggled the display: hidden style in CSS
  - Created functionality to check if the two cards uncovered produce a match and react accordingly by leaving them revealed or flipping them back
  - Created functionality to reset the game at any point by clicking the 'Restart Game' button which will reshuffle the cards and flip back any uncovered ones
  - Created functionality to check if the user has won and all the pairs have been uncovered, if so, display a 'win banner' that informs the user and shows them the 'Play Again' button which resets the game
  - Ensured when the 'win banner' is displayed, the 'Restart Game' button disappears to avoid two buttons with the same functionality to be displayed
- Make it responsive adding media queries so that the cards board remain max 600px in width and the cards arrangement changes from vertical to horizontal in wider screens
