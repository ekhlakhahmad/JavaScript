document.write("<br>")
var m = 2;
var y = 2021;
if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
    document.write("In this months has 31 days");
}

else if(m == 4 || m == 6 || m == 9 || m == 11){
    document.write("In this months has 30 days");
}

else if(m == 2){
    if(y % 4 == 0){
        document.write("in this months has 28 days");
    }
    else{
        document.write("in this months has 29 days");
    }
}
else{
    document.write("Invalid input");
}
