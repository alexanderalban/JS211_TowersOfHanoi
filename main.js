'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
// * each key is an array of Numbers: 
// * A is the far-left, 
// * B is the middle, 
// * C is the far-right stack
// * Each number represents the largest to smallest tokens: 
// * 4 is the largest, 
// * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

let initialStack;
let finalStack;
let moveTotal = 0;

// Next, what do you think this function should do?

const movePiece = () => {
  // Your code here
  // console.log(initialStack, finalStack);

  let movingPiece = initialStack.pop();
  finalStack.push(movingPiece);
  moveTotal++;
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be 
// stacked on 2
const isLegal = (startStack, endStack) => {
  // Your code here

  initialStack = stacks[startStack];
  finalStack = stacks[endStack];

  if (finalStack.length === 0 ||
    initialStack[initialStack.length - 1] < finalStack[finalStack.length - 1]) {
    console.log("TRUE");
    return true;
  } else {
    console.log("FALSE");
    console.log(initialStack);
    console.log(finalStack);
    return false;
  }
};

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (moveTotal === 10) {
    console.log("Out of moves! Try again");
  } else if (stacks["b"].length === 4 || stacks["c"].length === 4) {
    console.log("You win!")
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  checkForWin();
  if (isLegal(startStack, endStack) === true) {
    movePiece();
  } else {
    return false;
  }
};

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
};

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
