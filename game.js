var correctAnswer=Math.floor(Math.random() * 10);
console.log(correctAnswer)


var difficulty=prompt("Select the level from 1 to 5");

var ok=false;
var i;
for(i=0;i<difficulty;i++){
    var answer= prompt("Guess the number");
    if (answer == correctAnswer) {
        alert("Wow! Correct!");
        ok=true;
        break;
      }
}
if (!ok) {
    alert("Sry! next time")
}