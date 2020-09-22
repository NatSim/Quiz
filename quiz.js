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
	// const answer2 = document.querySelector('input[name="group2"]:checked')
	// const pickedOption2 = answer2; //?

	// const options2 = myQuestions[2].answer;
	// const correctAnswerIndex2 = myQuestions[2].answer;
	// if (pickedOption2===options2[correctAnswerIndex2]){
	// 	console.log("Well done!")
	// } else{
	// 	console.log("Wrong Answer!")
	// }
	


	





});


console.log(myQuestions);