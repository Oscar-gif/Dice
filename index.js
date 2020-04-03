var randomNumber1 = Math.random();
diceNumber = 6 *randomNumber1;
perfectDice = Math.floor(diceNumber) + 1;
randomNumber1 = perfectDice;


var  randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.random();
diceNumber = 6 *randomNumber2;
perfectDice = Math.floor(diceNumber) + 1;
randomNumber2 = perfectDice;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
 // if else case
 if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerHTML = "✔ Player 1 Wins";
 } else {
   if(randomNumber1<randomNumber2){

       document.querySelector("h1").innerHTML = "Player 2 Wins ✔";
   } else{

       document.querySelector("h1").innerHTML = "It's a Draw!";
   }

 }
