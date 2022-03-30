const calcBox = document.getElementById("calc-box");
let displayNumber = 0;
let number1 = 0;
let number2 = 0;
let operator = -1;
let answer = 0;
let on = 0;

document.getElementById("1").addEventListener("click", calcAction);
document.getElementById("2").addEventListener("click", calcAction);
document.getElementById("3").addEventListener("click", calcAction);
document.getElementById("4").addEventListener("click", calcAction);
document.getElementById("5").addEventListener("click", calcAction);
document.getElementById("6").addEventListener("click", calcAction);
document.getElementById("7").addEventListener("click", calcAction);
document.getElementById("8").addEventListener("click", calcAction);
document.getElementById("9").addEventListener("click", calcAction);
document.getElementById("0").addEventListener("click", calcAction);

document.getElementById("+").addEventListener("click", calcAction);
document.getElementById("-").addEventListener("click", calcAction);
document.getElementById("*").addEventListener("click", calcAction);
document.getElementById("/").addEventListener("click", calcAction);

document.getElementById("=").addEventListener("click", calcAction);
document.getElementById("ac").addEventListener("click", clearCalc);
document.getElementById("on").addEventListener("click", powerCalc);

function calcAction(e)  {
    if(e.target.id>="0" && e.target.id<="9")    {
        if(displayNumber==0)    {
            displayNumber = e.target.id;
        }else   {
            displayNumber += e.target.id;
        }
    }
    calcBox.value = displayNumber;
}