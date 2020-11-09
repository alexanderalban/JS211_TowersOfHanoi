// * This js file is incomplete. It will log to the console the elements you click
// call another function and set stone. You will have to work through the logic
// of the game as you know it from building it in the terminal. Work through the
// puzzle slowly, stepping through the flow of logic, and making the game work.
// Have fun!!
// * First run the program in your browser with live server and double-click on the row 
// you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null;

let stone1 = document.getElementById("1");
let stone2 = document.getElementById("2");
let stone3 = document.getElementById("3");
let stone4 = document.getElementById("4");

// let test = document.getElementById('4').getAttribute("data-size");
// console.log(parseInt(test));

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")

  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)

  if (stone === null) {
    pickUpStone(row.id);
  } else {
    dropStone(row.id, stone);
    stone = null;
  }

}

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
//*****Stone was a const, changing to a let fixes the error */
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & 
// dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}
//******Added if statement to selectRow, which will effectively toggle between the two functions
//******depending on if a stone is selected or not

const dropStone = (rowID, stone) => {
  const selectedRow = document.getElementById(rowID);
  if (selectedRow.lastElementChild === null) {
    console.log('Legal Move! Great Job');
    document.getElementById(rowID).appendChild(stone)
    stone = null
  } else if (parseInt(stone.getAttribute("data-size")) >
    parseInt(selectedRow.lastElementChild.getAttribute("data-size"))) {
    console.log("Illegal Move! Try again");
    dropStone(row.id, stone);
  } else {
    console.log('Legal Move! Great Job');
    document.getElementById(rowID).appendChild(stone)
    stone = null
  }
};


// * Remember you can use your logic from 'main.js' to maintain the rules of the game. 
// But how? Follow the flow of data just like falling dominoes.