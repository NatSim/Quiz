import quizQuestions from "./quiz_questions.js";
console.log(quizQuestions);

function createTitle() {
  //Quiz Title- append to root
  let quizTitle        = document.createElement("h1");
  let titleParent      = document.getElementById("quiz");
  titleParent.appendChild(quizTitle);
  quizTitle.innerHTML  = "Music Quiz";
  titleParent.insertBefore(
    quizTitle,
    titleParent.getElementsByTagName("div")[0]
  );
}

function createChoices(choices, index) {
  //Linking Array items
  // const choices = quizQuestions[0].choices;

  const answerContainer = document.createElement("div");
  //For Looping through answers
  for (let i = 0; i < choices.length; i++) {
    const answer = document.createElement("p");
    const input  = document.createElement("input");
    input.type   = "radio";
    input.name   = "question" + index;

    const quizQuestionMark = answer.appendChild(input); //(appended item)

    const answerText = document.createTextNode(choices[i]);
    answer.appendChild(answerText);

    answerContainer.appendChild(answer);
  }

  quiz.appendChild(answerContainer);
}
function createQuiz() {
  for (let i = 0; i < quizQuestions.length; i++) {
    const obj = quizQuestions[i];
    //Question Container Elements
    const container    = document.createElement("div"); //loop from here
    const question     = document.createElement("p");
    const questionText = document.createTextNode(obj.question.toUpperCase());
    const qMarks       = document.createTextNode("?");
    

    // Append Question Elements
    question.appendChild(questionText);
    container.appendChild(question);
    question.appendChild(qMarks);

    // const quiz              = document.getElementById("quiz"); already got id earlier?
    quiz.appendChild(container);
    
    createChoices(obj.choices, i); //each creatQuiz iteration= createChoices is also called

    
  }

//Create Submit button
const submitButton = document.createElement("button");
const buttonContent  = document.createTextNode(" Submit ");

submitButton.appendChild(buttonContent);

const getRoot = document.getElementById("result");

getRoot.appendChild(submitButton)


//Picked Input Function

function getCorrectAnswer() {
  //Question& Correct Answers
  let q1 = document.quizQuestions[0].choices[1].value;
  let q2 = document.quizQuestions[1].choices[0].value
  let q3 = document.quizQuestions[2].choices[0].value
  let q4 = document.quizQuestions[3].choices[2].value
  let q5 = document.quizQuestions[2].choices[3].value

  let count       = 0;
  let picked;

  if (picked === q1 ) {
    console.log("Correct"); true && count++;
  } else{
    console.log("Wrong"); false;
  }

}

console.log(quizQuestions[0].answer)
console.log(quizQuestions[0].choices[1])







}

createTitle();
createQuiz();
// getCorrectAnswer();