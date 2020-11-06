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

// Next, what do you think this function should do?
const movePiece = (initialStack, finalStack) => {
  // Your code here
  // console.log(initialStack, finalStack);
  let movingPiece = initialStack.pop();
  finalStack.push(movingPiece);
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be 
// stacked on 2
// const isLegal = (initialStack, finalStack) => {
// Your code here
//************THIS SHOULD WORK WHAT IS GOING ON *********

//   if (finalStack.length === 0 ||
//     initialStack[initialStack.length - 1] < finalStack[finalStack.length - 1]) {
//     console.log("TRUE");
//     return true;
//   } else {
//     console.log("FALSE");
//     console.log(initialStack);
//     console.log(finalStack);
//     return false;
//   }
// };


function isLegal(startStack, endStack) {
  // if (stacks[startStack].length == 0 && stack[endStack].length == 0){
  //   return false;
  // }

  let el1 = stacks[startStack];
  let el2 = stacks[endStack];


  if (el1.length - 1 > 0 && el2.length === 0) {
    console.log(el1);
    console.log(el2)
    return true;
  } else if (el1 < el2) {
    return true
  }
  else {
    return false
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (stacks["b"].length === 4 || stacks["c"].length === 4) {
    console.log("You win!")
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  let initialStack = stacks[startStack];
  let finalStack = stacks[endStack];
  checkForWin();
  if (isLegal(startStack, endStack) === true) {
    console.log(isLegal(initialStack, finalStack));
    movePiece(initialStack, finalStack);
  } else {
    console.log(isLegal(initialStack, finalStack));
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
