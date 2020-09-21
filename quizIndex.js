import { myQuestions } from "./quizQuestions.js"

export default function createQuiz() {
    // quiz.draw() : draw the quiz
    // Fetch the HTML quiz elements
   let quizSection = document.getElementById("quiz");
   let quizDiv = document.createElement("div");
   for(let i = 0; i < myQuestions.length; i++) {// Loop through all the questions
      let question = document.createElement("h2");
      let options = document.createElement("input"); //Get element in quizQuestions?
      let resultsContainer = document.getElementById("results"); //Should not be revealed until after choice made or end of quiz
      let submitButton = document.getElementById("submit");
      submitButton.addEventListener('click'); //Append later on?show results?. 2 seperate lines?
      
      quizDiv.className = "quiz1"; //CSS
      
      
      question.textContent = myQuestions[i].question; //checks array index for all questions.
      question.alt =myQuestions[i].question; //accessible read out question?
      options.value = myQuestions[i].options; //array 2 index loop
      options.type ="radio"; //button
      resultsContainer = myQuestions[i].answer;
 
     //Text Node of what? to put text inside the element
     
    //   quizDiv.appendChild(question); //append children to parent element
    //   quizDiv.appendChild(options);
    // //   quizContent.appendChild(answer) //to be revealed after
    //   quizDiv.appendChild();

    //   quizSection.appendChild()
    //     quizDiv.appendChild()
    //   );
        
    } 
    return quizSection;
}      
  
//         // The options - <input> radio buttons and <label>
//         for (var oindex in questions[index]['o']) {
//           // The <label> tag
//           var label = document.createElement("label");
//           qwrap.appendChild(label);
  
//           // The <option> tag
//           var option = document.createElement("input");
//           option.type = "radio";
//           option.value = oindex;
//           option.required = true;
//           option.classList.add("oquiz"); // Will explain this later in function submit below
  
//           // Remember that a radio button group must share the same name
//           option.name = "quiz-" + number;
//           label.appendChild(option);
  
//           // Add the option text
//           var otext = document.createTextNode(questions[index]['o'][oindex]);
//           label.appendChild(otext);
//         }
  
//         // Finally, add this question to the main HTML quiz wrapper
//         wrapper.appendChild(qwrap);
//       }
  
//       // Attach submit button + event handler to the quiz wrapper
//       var submitbutton = document.createElement("input");
//       submitbutton.type = "submit";
//       wrapper.appendChild(submitbutton);
//       wrapper.addEventListener("submit", quiz.submit);
//     },
  
//     submit : function (evt) {
//     // quiz.submit() : Handle the calculations when the user submits to quiz
  
//       // Stop the form from submitting
//       evt.preventDefault();
//       evt.stopPropagation();
  
//       // Remember that we added an "oquiz" class to all the options?
//       // We can easily get all the selected options this way
//       var selected = document.querySelectorAll(".oquiz:checked");
  
//       // Get the score
//       var score = 0;
//       for (var index in questions) {
//         if (selected[index].value == questions[index]['a']) {
//           score++;
//         }
//       }
  
//       // We can calculate the score now
//       var total = selected.length;
//       var percent = score / total ;
  
//       // Update and show the score
//       // Instead of creating elements, we can also directly alter the inner HTML
//       var html = "<h1>";
//       if (percent>=0.7) {
//         html += "WELL DONE!";
//       } else if (percent>=0.4) {
//         html += "NOT BAD!";
//       } else {
//         html += "TRY HARDER!";
//       }
//       html += "</h1>";
//       html += "<div>You scored " + score + " out of " + total + ".</div>";
//       document.getElementById("quiz-wrap").innerHTML = html;
//     }
//   };
  
//   /* [INIT] */
//   window.addEventListener("load", quiz.draw);
   
