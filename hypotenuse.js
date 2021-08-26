var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var btnCalculate = document.querySelector("#btn-calculate");
var output = document.querySelector("#output");

function validate(){
    if (side1.value === '' || side2.value === '')
        output.innerText = 'Please enter both values';

    else if (Number(side1.value <= 0) || Number(side2.value <= 0))
        output.innerText = 'Both values should be greater than zero';

    else
        calculateHypotenuse(Number(side1.value),Number(side2.value));
}

function calculateHypotenuse(side1,side2){
    var hypotenuse = Math.sqrt(side1**2 + side2**2).toString();
    output.innerText = "The length of hypotenuse is " + hypotenuse.slice(0,hypotenuse.indexOf(".")+3);
}

btnCalculate.addEventListener('click', validate);