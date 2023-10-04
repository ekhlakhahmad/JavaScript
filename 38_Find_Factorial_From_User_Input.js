var n = prompt("Enter any Number");
var factorial = 1;

for(var i = 1; i <= n; i++){
    factorial = factorial * i;
}
document.write("factorial is " + factorial);