

function sum ()
{
    let number1 = document.getElementById('number1').value; //"78"
    let number2 = document.getElementById('number2').value; //null

    let converted1 = parseFloat(number1); //78
    let converted2 = parseFloat(number2); //89
    let summation = converted1+converted2;
    let subtraction = converted1-converted2;
    let multiplication = converted1*converted2;
    let division = converted1/converted2;

    document.getElementById('summation').innerHTML = "The summation is="+summation;
    document.getElementById('subtraction').innerHTML = "The subtraction is="+subtraction;
    document.getElementById('mul').innerHTML = "The multiplication is="+multiplication;
    document.getElementById('div').innerHTML = "The division is="+division;
}