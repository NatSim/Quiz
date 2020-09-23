import {myQuestions} from "./quizQuestions.js";

const myButton = document.getElementById("button"); //Get Results Button
myButton.addEventListener("click",()=>{
	console.log("clicked"); 
	//Question
	//Get Question
	const answer1 = document.querySelector('input[name="group1"]:checked')
	const pickedOption = answer1.nextElementSibling.textContent;

	const options = myQuestions[0].options;
	const correctAnswerIndex = myQuestions[0].answer;
	if (pickedOption===options[correctAnswerIndex]){
	alert("Well done")
	} else{
	alert("Wrong Answer!")
	}
	// // //Question2
			


	





});


console.log(myQuestions); 