/*
========================================================================
WalkThrough Video : https://www.youtube.com/watch?v=0bbmEMAVQOo
=========================================================================
*/

// The keys and notes variables store the piano keys
const keys = [
	"c-key",
	"d-key",
	"e-key",
	"f-key",
	"g-key",
	"a-key",
	"b-key",
	"high-c-key",
	"c-sharp-key",
	"d-sharp-key",
	"f-sharp-key",
	"g-sharp-key",
	"a-sharp-key",
];
const notes = [];
keys.forEach(function (key) {
	notes.push(document.getElementById(key));
});

// ============================================================
// Write named functions that change the color of the keys below
//    (We are creating thee functions to use as event handelers
//    to put in our .addEventListener('click', handelers))
// =============================================================
const keyPlay = (event) => {         //Step1 click down to change color
  event.target.style.backgroundColor = 'blue';
}

const keyReturn = (event) => {   //step 2 released click return color to defult
  event.target.style.backgroundColor = '';
};

// ===============================================================
//       Write a named function with event handler properties
// ================================================================
let eventAssignment = (note) => {     // step 3       
  note.onmousedown = () => {         //step 4 
    keyPlay(event);
  }

  note.onmouseup = ()=> {
    keyReturn(event);
 }

}

// ===============================================================
//   Write a loop that runs the array elements through the function
// ================================================================
notes.forEach(eventAssignment);        //step 6/7


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;      
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button

nextOne.onclick = () => {  //step 8
  nextTwo.hidden = false;  // strep 9
  nextOne.hidden = true;

  
  document.getElementById("letter-note-five").innerHTML = 'D' //step 10
  document.getElementById("letter-note-six").innerHTML = 'C'
};


// Write anonymous event handler property and function for the second progress button

nextTwo.onclick = () => {
	//step 11
	nextThree.hidden = false; //step 12
	nextTwo.hidden = true;

	document.getElementById("word-five").innerHTML = "DEAR"; //step 13
  document.getElementById("word-six").innerHTML = "FRI-";
  
  lastLyric.style.display = "inline-block" //step 14
  //step 15
  document.getElementById("letter-note-three").innerHTML = 'G';
  document.getElementById("letter-note-four").innerHTML = 'E';
  document.getElementById("letter-note-five").innerHTML = 'C';
  document.getElementById("letter-note-six").innerHTML = 'B';
};

// Write anonymous event handler property and function for the third progress button

nextThree.onclick = () => {   //step 16
  startOver.hidden = false;   //step 17
  nextThree.hidden = true
  // step 18
  document.getElementById("word-one").innerHTML = "HAP";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU";
  
  //step 19
  document.getElementById("letter-note-one").innerHTML = "F";
  document.getElementById("letter-note-two").innerHTML = "F";
  document.getElementById("letter-note-three").innerHTML = "E";
  document.getElementById("letter-note-four").innerHTML = "C";
  document.getElementById("letter-note-five").innerHTML = "D";
  document.getElementById("letter-note-six").innerHTML = "C";

//step 20
 lastLyric.style.display = "none";  
};
  //This is the event handler property and functifor the startOver Dhreeton
startOver.onclick = function() {
	nextOne.hidden = false;
	startOver.hidden = true;
	document.getElementById("word-one").innerHTML = "HAP-";
	document.getElementById("letter-note-one").innerHTML = "G";
	document.getElementById("word-two").innerHTML = "PY";
	document.getElementById("letter-note-two").innerHTML = "G";
	document.getElementById("word-three").innerHTML = "BIRTH-";
	document.getElementById("letter-note-three").innerHTML = "A";
	document.getElementById("word-four").innerHTML = "DAY";
	document.getElementById("letter-note-four").innerHTML = "G";
	document.getElementById("word-five").innerHTML = "TO";
	document.getElementById("letter-note-five").innerHTML = "C";
	document.getElementById("word-six").innerHTML = "YOU!";
	document.getElementById("letter-note-six").innerHTML = "B";
};
