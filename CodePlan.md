Towers of Hanoi Code Plan!

What we need the game to do (in plain English):

1. Have four blocks that the user can interact with
2. have three columns that the user can move blocks to
3. Receive the input from the user, telling where they want to move the block from/to.
4. Check to make sure that the move is legal. (Larger blocks can't be put on top of smaller blocks)
5. Move Block!
6. Once the block is moved, we need to check to see if the user has won
7. A turn system? If we limit the number of moves, this will incentivize the user to plan their moves, rather than blindly trying things
8. Notify user of win/lose state- if they won or lost, this will alert them

Pseudo-Code:

1. Stack arrays, to be our columns:<br>
   a [4, 3, 2, 1],
   b [],
   c []
2. Prompt: to allow the user to input their choices
3. Legal Check:<br>
   if stackA[i] > stackB[i], return "Illegal!"<br>
   if stackA[i] < stackB[i], return "Legal!"<br>
   if stackB === "", return "Legal!"
4. Move Block:<br>
   stackA.pop
   stackB.push
5. Check for Win:<br>
   stackB.length === 4, return win!<br>
   Turns === 10, return lose!

Actual Code: Please see main.js! Have Fun!
