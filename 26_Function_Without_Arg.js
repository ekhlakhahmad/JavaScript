document.write("<br>");
document.write("<br>");
document.write("<h2>function without argument</h2>");

var a = 20;
var b = 30;

function add(){
    document.write("Addition = " + (a+b));
}

function sub(){
    document.write("<br> Subtraction = " + (a-b));
}

function multiply(){
    document.write("<br> Multiplication = " + (a*b));
}

add();
sub();
multiply();