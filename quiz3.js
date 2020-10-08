import quizQuestions from "./quiz_questions.js";
console.log(quizQuestions);

//Quiz Title- append to root
let quizTitle = document.createElement("h1");
let titleParent = document.getElementById("quiz");
titleParent.appendChild(quizTitle);
quizTitle.innerHTML = "Music Quiz";
titleParent.insertBefore(quizTitle, titleParent.getElementsByTagName("div")[0]);

//Question container elements
const container = document.createElement("div"); //loop from here
const question = document.createElement("p");
const questionText = document.createTextNode(
  "Who sang the song, 'The Fresh Prince of JA'"
);

question.appendChild(questionText);
container.appendChild(question);

const quiz = document.getElementById("quiz");
quiz.appendChild(container);

//Linking Array items
const choices = quizQuestions[0].choices;

const answerContainer = document.createElement("div");
//For Looping through array 
for (let i = 0; i < choices.length; i++) {
  const answer = document.createElement("p");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "question1";

  answer.appendChild(input); //(appended item)

  const answerText = document.createTextNode(choices[i]);
  answer.appendChild(answerText);

  answerContainer.appendChild(answer);
}

quiz.appendChild(answerContainer);
