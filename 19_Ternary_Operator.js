// Find greatest number out of two number using ternary operator.

document.write("<br>");

var a = 105;
var b = 25;

var c = (a > b)? a : b;

if(c == a){
    document.write(a + " is greatest number");
}
else
    document.write(b + " is greatest number");