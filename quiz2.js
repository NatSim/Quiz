function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');//Get html element
    var quiz=document.getElementById("quiz"); //Get Element-User clicks
    if(q1=="Kygo"){
        c++
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
