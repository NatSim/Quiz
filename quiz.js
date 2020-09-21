import {myQuestions} from "./quizQuestions.js";

var myButton = document.getElementById("button");
myButton.addEventListener("click",()=>{
	console.log("clicked"); 
	//Question
	//Get Question
	const answer1 = document.querySelector('input[name="group1"]:checked')
	const pickedOption = answer1.nextElementSibling.textContent;

	const options = myQuestions[0].options;
	const correctAnswerIndex = myQuestions[0].answer;
	if (pickedOption===options[correctAnswerIndex]){
	console.log("Well done")
	} else{
		console.error("You are wrong!")
	}



});






// function myFunction() {
// console.log("clicked");
//   }	

console.log(myQuestions);