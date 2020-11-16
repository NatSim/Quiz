import quizQuestions from "./quiz_questions.js";

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
    // totalScore reflect reality

    totalScore += parseInt(e.target.value, 10);
  };

}
/**
 * createChoices
 *
 * this creates choices for the quiz
 * @params {string[]} choices - The answer choices
 * @params {number} index - This is the question index
 */
function createChoices(choices,index) {
  const DEFAULT_VALUE = 0;
  //Linking Array items
  const answerContainer = document.createElement("div");
  answerContainer.id = 'choice' + index ;

  //For Looping through choices
  for (let i = 0; i < choices.length; i++) {
    const answer = document.createElement("label"); //accessibility
    const input  = document.createElement("input");

    input.type   = "radio";
    input.name   = "question" + index ;
    input.value = DEFAULT_VALUE;
    radioEventCreator(input);

    // Statement to set value to 1 for correct answers(choice)
    if ( i === quizQuestions[index].answer) {
      input.value = 1;
    }

    answer.appendChild(input); //(appended input element)


    const answerText = document.createTextNode(choices[i]);
    answer.appendChild(answerText);

    answerContainer.appendChild(answer);
  }
  quiz.appendChild(answerContainer);
}

function createQuiz() {
  for (let i = 0; i < quizQuestions.length; i++) {
    const questionObj = quizQuestions[i];
    //Question Container Elements
    const container    = document.createElement("div"); //loop from here
    const question     = document.createElement("p");
    const questionText = document.createTextNode(questionObj.question.toUpperCase());
    const qMarks       = document.createTextNode("?");


    // Append Question Elements
    question.appendChild(questionText);
    question.appendChild(qMarks);
    container.appendChild(question);


    quiz.appendChild(container);

    createChoices(questionObj.choices, i); //each creatQuiz iteration= createChoices is also called
  }

  //Create Submit button
  const submitButton  = document.createElement("button");
  const buttonContent = document.createTextNode(" Submit ");
  submitButton.type   = "button";
  submitButton.appendChild(buttonContent);


  // Onclick execute function onces only
  let exitSubmit = (e) => {
    submitButton.onclick = false;
  }

  //User Results Arrow Function
  const userResults = () => {
    let resultDiv     = document.createElement("div");
    let result        = document.createElement("p");
    result.className  = "result";
    result.textContent= "You're score is: " +  totalScore + " out of " + quizQuestions.length; //String concatanaetion
    resultDiv.appendChild(result);
    return resultDiv;

  }

  function revealAnswer (questionI, answerString) {
    const choiceNode = document.getElementById("choice" + questionI);
    const answerText = document.createTextNode(`The correct answer is: ${answerString}`)
    choiceNode.appendChild(answerText);
  }

  function highlightSelectedChoices(questionNumber){

    for(let questionI = 0; questionI < quizQuestions.length; questionI++){
      const currentQuestion = quizQuestions[questionI];
      // console.log(currentQuestion.question);

      const choices = document.getElementsByName("question" + questionI);

      for(let i = 0; i < choices.length; i++) {
        const currentChoice = choices[i];

        if(currentChoice.checked) {
          console.log(currentChoice);

          // set styling to the correct color(conditional)
          if(i === currentQuestion.answer) {
            currentChoice.parentNode.classList.add("correct");

          } else {
            currentChoice.parentNode.classList.add("incorrect")
            const answerString = currentQuestion.choices[currentQuestion.answer];
            revealAnswer(questionI, answerString)
          }


          break;
        }
      }
    }


  }

  //Button onclick Function(executes Results function)
  let form = document.getElementById("quiz");
  submitButton.onclick = (e) => {
    form.append(userResults());
    highlightSelectedChoices();
    exitSubmit();

  };

  form.appendChild(submitButton);
}


createTitle();
createQuiz();

