var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var btnIsTriangle = document.querySelector("#btn-istriangle");
var output = document.querySelector("#output");

function validate(){
    if (angle1.value === '' || angle2.value === '' || angle3.value === '')
        output.innerText = 'Please enter all 3 values';

    else if (Number(angle1.value <= 0) || Number(angle2.value <= 0) || Number(angle3.value <= 0))
        output.innerText = 'All values should be greater than zero';

    else
        sumOfAngles();
}

function sumOfAngles(){
    var sum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    if ( sum === 180)
        output.innerText = 'Yayy!! Angles form the triangle';
    else
        output.innerText = "Oh No!! Angles don't form the triangle";
}

btnIsTriangle.addEventListener('click', validate);