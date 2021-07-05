var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter your name\n");
var score = 0;

console.log(`Welcome ${userName}, to do you know Akanksha?`);

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer === answer){
    console.log("You are right");
    score++;
  }
  else{
    console.log("You are wrong");
  }
}

/*var questionOne = {
  question: "Where do I live?\n",
  answer: "Pune"
}

var questionTwo = {
  question: "Who would me my favourite superhero?\n",
  answer: "Superman"
}

play(questionOne.question, questionOne.answer);
play(questionTwo.question, questionTwo.answer);
console.log(`Your Score is ${score}`);*/

var question = [
  {
    question :"Where do I live?\n",
    answer: "Pune"
  },
  {
    question :"Who would me my favourite superhero?\n",
    answer: "Superman"
  },
  {
    question :"What do I like to eat?\n",
    answer: "Chocolates"
  },
  {
    question :"What is my hobby?\n",
    answer: "Painting"
  },
  {
    question :"Do I like to travel?\n",
    answer: "Yes"
  },
  {
    question :"Which is my favourite travel destination?\n",
    answer: "Paris"
  }
];

//play(question[0].questionOne, question[0].answerOne);

for(var i = 0; i < question.length; i++){
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer);
}

var highScore = [
  {
    name : "Geeta",
    score: 5
  },
  {
    name: "Chinmay",
    score: 4
  }
];

console.log(`Your Score is ${score}`);
console.log(`The highest score was ${highScore[0].score}`);

if(score > highScore[0].score){
  console.log("Congrats!!! you have beaten the high score\n");
  console.log("To prove that you have beaten the high score, please send us a screenshot\n");
}
else{
  console.log("You have not beaten the highest score");
}