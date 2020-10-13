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

    // Append Questions
    question.appendChild(questionText);
    container.appendChild(question);

    // const quiz              = document.getElementById("quiz"); already got id earlier?
    quiz.appendChild(container);
    // console.log(obj.question);
    createChoices(obj.choices, i); //each creatQuiz iteration= createChoices is also called

    // addQMarks();
  }
}

function addQMarks() {
  //Question mark container element
  for (let i = 0; i < quizQuestions.length; i++) {
    const obj2 = quizQuestions[0].question; //add new for loop qq.length

    const qmarkContainer = document.createElement("div");
    const qmark = document.createElement("p");
    const qmarkText = document.createTextNode("?");

    qmark.appendChild(qmarkText);
    qmarkContainer.appendChild(qmark);

    const addElementQ = document.getElementsByTagName("$0");

   quiz.appendChild(qmarkContainer);

   console.log(obj2[0])
  }

  

  

console.log("hello");

createTitle();
createQuiz();
addQMarks();

// function addQMarks(question, index) {
//   //Question Mark
//   const obj2 = quizQuestions.question;
//   //Question mark container element
//   const qmarkContainer = document.createElement("div");
//   for (let i = 0; i < quizQuestions.length; i++) {
//     const qmark = document.createElement("p");
//     const qmarkText = document.createTextNode("?");
//     const getQuestion = document.createTextNode[0].question;

//     qmark.appendChild(qmarkText);
//     qmarkContainer.appendChild(qmark);
//     [0].question.append(qmarkContainer);
