//1. Declare and initialize an empty multidimensional array. (Array of arrays)
//2. Declare and initialize a multidimensional array representing the following matrix
var arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for(var i=0;i<arr.length;i++){
    document.write("<div style='font-size: 30px;'>")
    for(var j=0;j<arr[1].length;j++){
        document.write("<b>" + arr[i][j] +"</b>")
    }
    document.write("</div>")
}

//3. Write a program to print numeric counting from 1 to 10.
document.write("<div style='border: 2px solid blue;'>")
for(var i=0;i<=10;i++){
    document.write(i,"<br>")   
}
document.write("</div>")
//4. Write a program to print multiplication table of any 
//number using for loop. Table number & length should be 
//taken as an input from user.
document.write("<div style='border: 2px solid blue;'>")
var tablenumber = +prompt("What number's multiplication table do you want to print?")
var tablelength = +prompt("Enter Length of Multiplication table.")
document.write("<h3>Multipliction table of "+ tablenumber+" Length "+tablelength+"</h3>")
for(var i=1;i<tablelength;i++){
    document.write("<h3>"+tablenumber+"x" +i+ "="+tablenumber*i+"</h3>");
}
//5. Write a program to print items of the following array  using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”, 
//“strawberry”]
document.write("<center>")
document.write("<div style='border: 2px solid blue;width: 25%; font-size: 20px;'>")
var arr = ["Apple","Banana","Mango","Orange"]
for(var i=0;i<arr.length;i++){
    document.write("<br>",  arr[i])
}
for(var j=0;j<arr.length;j++){
    document.write("<h4>Element at index "+j+" is "+arr[j]+"</h4>")
}
document.write("</div>")
document.write("</center>")
//6. Generate the following series in your browser. See 
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h5>Counting</h5>")
for(var i=0;i<=15;i++){
    document.write(i+",")
}
document.write("<h5>Reverse counting</h5>")
for(var j=0;j>=10;j--){
    document.write(j>10)
}
