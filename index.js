var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var username = readlineSync.question(chalk.blue("Enter Your Name "));
console.log(chalk.magentaBright("If you scored 3 right,only then you'll be allowed to play Level 1."))
console.log(  )
console.log("Welcome " + username +  " Do you know vampire diaries?");
var userResponse = readlineSync.question("Type 'Y' for Yes And 'N' for No ");

if(userResponse == "Y"){

function play(question,answer){
    var userAns = readlineSync.question(question);

    if(userAns.toUpperCase() === answer.toUpperCase()) {
      console.log("You Entered right Answer");
       score = score+1;
       console.log(chalk.green("Your current Score is " +score));
       console.log( );
    }else{
      console.log(chalk.red("Sorry ! You Entered Wrong Answer"));
      score + score - 1;
    }
}

var questions =[{
  question : `Ive been in love. Its painful, pointless and overrated ? 
   A - Elena 
   B - Damon 
   C - Stefan `,
   answer :"B"
  
},{
  question :`Who is Lexi to Stefan ? 
  A - friend 
  B -Girlfriend 
  C - Sister `,
  answer : "A"
},{
  question:`Who did Elena Gilbert meet first ? 
  A-Damon 
  B-Stefan `,
  answer : "A"
},{
  question:`Who started Elena's doppelganger line ?
  A-Damon
  B-Stefan
  C-Amara `,
  answer : "C"
},{
question:`Who was not an original vampire?
  A-Elena
  B-Stefan
  C-Amara
  D-Alaric `,
  answer : "D"
}]

for(var i =0; i<=2; i++){
  play(questions[i].question,questions[i].answer);
}

if(score === 3){
  console.log(chalk.bgRedBright("Welcome to Level 1!"))
  console.log( );
  for(var i=3;i<questions.length;i++){
 play(questions[i].question,questions[i].answer);
}
}

console.log(chalk.bgRedBright("Your Total Score is " +score));
console.log( );
console.log("Highest Score is: ");

var highestScore = [{
  name:"Akash",
  score:5
},{
  name:"anuj",
  score:5
}]

 for(let j=0;j<highestScore.length;j++){
      var high = highestScore[j];
      console.log(high.name);
      console.log(high.score);
 }
}

else{
  console.log(chalk.red("Sorry This Quiz Not For You!!!!"));
}


