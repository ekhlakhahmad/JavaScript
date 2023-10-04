document.write("Print only Odd Number between 0 to 100 <br>");

var i;
for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        continue;
    }
    else{
        document.write(i);
        document.write("<br>");
    }
}