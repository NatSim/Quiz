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

let totalScore = 0;

function radioEventCreator(radio){
  radio.onchange = (e) => {
    // @todo Just to make totalScore reflect reality
    
    totalScore += e.target.value ++  ;
  };

}

function createChoices(choices,index) {
  //Linking Array items
  const answerContainer = document.createElement("div");
  //For Looping through answers
  for (let i = 0; i < choices.length; i++) {
    const answer = document.createElement("p");
    const input  = document.createElement("input");
    input.type   = "radio";
    input.name   = "question" ;
    radioEventCreator(input);

    input.id = "choices" ;
    if ( i == quizQuestions[index].answer) {
      input.value = 1;
    } else {
      input.value = 0 && false;
    }

    // console.log(input.id)

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


  // Onclick execute function ones
let exitSubmit = (e) => { 
  
  submitButton.onclick = exitSubmit && false;
  
}
//User Results Arrow Function
const userResults = () => {   
  let resultDiv = document.createElement("div");
  let result = document.createElement("p");
  result.className = "result";
  result.textContent = "You're score is:" +  totalScore + " out of " + quizQuestions.length;
  resultDiv.appendChild(result);
  return resultDiv;
  
}

//Function to reveal which answers correct & incorrect
// const feedbackColours = () => {

//   if choices   
// } 







//Button onclick Function(executes Results function)
  let form = document.getElementById("quiz");
  submitButton.onclick = (e) => {
      
    form.append(userResults());
    exitSubmit(); 
    
  };
  
  form.appendChild(submitButton);
}


createTitle();
createQuiz();
