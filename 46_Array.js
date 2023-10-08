document.write("<h3>Print Array elements in Series</h3>")
var arr = [10,20,30,40,50,60,70,80,90,100];


// All print value in sequence
document.write(arr);
document.write("<br><br>");

document.write("<h3>Print array elements in line</h3>")

// All element print by array
for(var a = 0; a < 10; a++){
    document.write(arr[a] + "<br>");
}

document.write("<h3>Total Sum of array elements</h3>")

// Total sum of array elements
var sum = 0;
for(var i = 0; i < 10; i++){
    document.write(arr[i] + "<br>")
    sum = sum + arr[i];
}
document.write("Total sum = " + sum);


