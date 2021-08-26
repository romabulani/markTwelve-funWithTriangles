var answers = ["90°", "right angled", "equilateral", "scalene", "isosceles"];
var formdata = document.querySelector("#quiz-form");
var btnSubmit = document.querySelector("#submit");
var output = document.querySelector("#output");

function calculateScore(){
    var score = 0;
    var index = 0;
    var data = new FormData(formdata);
    var submittedAnswers = data.values();
    for (let answer of submittedAnswers){
        if (answer === answers[index])
            score = score+1;
        index = index+1;
    }
    output.innerHTML = "You have scored " + score +"/5";
}

btnSubmit.addEventListener('click', calculateScore);
