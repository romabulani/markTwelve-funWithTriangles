var base = document.querySelector("#base");
var height = document.querySelector("#height");
var btnCalculate = document.querySelector("#btn-calculate");
var output = document.querySelector("#output");

function validate(){
    if (base.value === '' || height.value === '')
        output.innerText = 'Please enter both values';

    else if (Number(base.value <= 0) || Number(height.value <= 0))
        output.innerText = 'Both values should be greater than zero';

    else
        calculateArea(Number(base.value),Number(height.value));
}

function calculateArea(base,height){
    var area = ((base*height)/2);
    output.innerText = "The Area of Triangle is " + area.toFixed(2);
}

btnCalculate.addEventListener('click', validate);