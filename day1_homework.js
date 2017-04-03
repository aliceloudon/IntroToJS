// 1.
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();
// Should print out:
// My name is Keith



// 2.
score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());
// Should print out:
// 3



// 3.
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )
// Should print out:
// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is: Keith



// 4.
var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());
// Should print out:
// Poirot



// 5.
var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
// Should print out:
// the murderer is valerie
// Incorrect. The murderer is rick.



// 6.
var outerFunction = function(){
  var pingPongWinner = 'Nando';

  var innerFunction = function(){
    pingPongWinner = 'dave';
  }

  innerFunction();
}

var pingPongWinner = 'kim';

outerFunction();
console.log('the winner of the ping pong competition is', pingPongWinner);

