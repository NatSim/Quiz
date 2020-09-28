//Quiz Title
let quizTitle      = document.createElement("h1");
let titleParent    = document.getElementById("quiz");
titleParent.appendChild(quizTitle);
quizTitle.innerHTML= "Music Quiz";
titleParent.insertBefore(quizTitle,titleParent.getElementsByTagName("div")[0]);

//Add Image DOM
let imageContainer = document.createElement("div");
let newImage       = document.createElement("img");
imageContainer.className = "imagediv";
let addText = document.createTextNode("New Image");

newImage.setAttribute("src","./images/steelpan.jpg")
imageContainer.appendChild(newImage);

document.getElementById("quiz");
quiz.appendChild(imageContainer);  //Move image higher
quiz.appendChild(newImage);

//Manipulate Elements in DOM(image size)
let image1 = document.getElementsByClassName(".imagediv");

//Manipulate Questions Elements in DOM(Style)
let questionColor = document.querySelectorAll(".question");

for(let i = 0; i < questionColor.length; i++) {
    let element = questionColor[i];
}

//Question input function
function check() {
    var c=0;
    var q1=document.quizName.question1.value;
    var q2=document.quizName.question2.value;
    var q3=document.quizName.question3.value;
    var q4=document.quizName.question4.value;
    var q5=document.quizName.question5.value;
    var result=document.getElementById('result');//Get html element
    var quiz=document.getElementById("quiz"); //Get Element-User clicks
    if(q1=="Kygo"){
        c++
        console.log("Score:")
    }
    if(q2=="Tarrus"){
        c++
    }
    if(q3=="Don't Rush"){
        c++
    }
    if(q4=="Bob Marley"){
        c++
    }
    if(q5=="Lady Leshur"){
        c++
    }
    quiz.style.display="none"; //User clicks button -next page
    result.textContent=`${c}`;//result(html id) to display score on page    //document.write(c) for inital variable check;

    if(c<=3) {
    result.textContent=`Your result is ${c}. Please Try Again`
    } else {
    result.textContent=`Your result is ${c}.You did Awesome,Keep it up!`
    }

}
