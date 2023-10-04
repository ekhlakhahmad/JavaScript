document.write("Print only Even Number between 0 to 100 <br>");

var i;
for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        document.write(i);
        document.write("<br>");
    }
    else{
        continue;
    }
}