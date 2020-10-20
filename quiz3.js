import quizQuestions from "./quiz_questions.js";
console.log(quizQuestions);

function createTitle() {
  //Quiz Title- append to root
  let quizTitle = document.createElement("h1");
  let titleParent = document.getElementById("quiz");
  titleParent.appendChild(quizTitle);
  quizTitle.innerHTML = "Music Quiz";
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
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "question" + index;

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
    //Question container elements
    const container = document.createElement("div"); //loop from here
    const question = document.createElement("p");
    const questionText = document.createTextNode(obj.question.toUpperCase());
    const qMarks   = document.createTextNode("?");

    // Append Questions
    question.appendChild(questionText);
    container.appendChild(question);
    question.appendChild(qMarks);

    // const quiz              = document.getElementById("quiz"); already got id earlier?
    quiz.appendChild(container);
    // console.log(obj.question);
    createChoices(obj.choices, i); //each creatQuiz iteration= createChoices is also called

    // addQMarks();
  }
}


console.log("hello");

createTitle();
createQuiz();

