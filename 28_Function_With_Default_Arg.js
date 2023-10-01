document.write("<br>");
document.write("<br>");
document.write("<h2>function with default argument</h2>");

function add(a = 20, b = 10){
    document.write("<br> Addition = " + (a+b));
}

function sub(a = 50, b = 20){
    document.write("<br> Subtraction = " + (a-b));
}

function multiply(a = 10, b = 12){
    document.write("<br> Multiplication = " + (a*b));
}

add(15,9);
sub(12)
multiply(20,9);
add(60,90);
multiply();