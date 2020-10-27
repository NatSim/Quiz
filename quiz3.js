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

  const answerContainer = document.createElement("div");
  //For Looping through answers
  for (let i = 0; i < choices.length; i++) {
    const answer = document.createElement("p");
    const input  = document.createElement("input");
    input.type   = "radio";
    input.name   = "question" + index;

   
    let idX = "tasha";
    input.id = idX;
    input.value = i;
  

//const ids = input.id  =   quizQuestions.forEach((o,i) => o.id=i+1);

console.log(input.id)
    







    answer.appendChild(input); //(appended input element)

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
    const question     = document.createElement("label");
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
submitButton.type   = "button";
submitButton.onclick="_blank"

submitButton.appendChild(buttonContent);

const getRoot = document.getElementById("result");

getRoot.appendChild(submitButton)


//Create Function that keeps track of score 
//& displays the result after submission







}
  




createTitle();
createQuiz();
