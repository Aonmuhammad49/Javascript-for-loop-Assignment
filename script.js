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
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<div style='border: 2px solid blue;  width: 500px; margin: auto; height: 500px;font-size: 18px;'>")
document.write("<h5 >Counting</h5>")
for(var i=0;i<=15;i++){
    document.write(i+",")
}
document.write("<h5>Reverse counting</h5>")
for(var j=10;j>=0;j--){
    document.write(j+",")
}
document.write("<h5>Even</h5>")
for(var i=2;i<=20;i+=2){
    document.write(i+",")
}
document.write("<h5>Odd</h5>")
for(var i=1;i<=20;i+=2){
    document.write(i+",")
}
document.write("<h5>Series</h5>")
for(var i=2;i<=20;i+=2){
    document.write(i+"k,")
}
document.write("</div>")
//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
//After searching, prompt the user whether the giv  en item is found in the list or not. Example:
document.write("<div style='border: 2px solid grey; text-align: center; height: 50px;font-size: 18px;'>")
var Dishes = ["Cake","Apple","Pie","Cookie","Chips","Patties"]
var user = prompt("Welcome to Bakery.What do you want to order sir/ma'am?")
var index = Dishes.indexOf(user)
if(index !== -1){
     document.write("<h5>"+user+" is avalaible at "+index+" in our bakery</h5>")
}
else{
    document.write("We are sorry.pastry is not avalaible in our bakery")
}
document.write("</div>")
//8. Write a program to identify the largest number in the  given array. A = [24, 53, 78, 91, 12]
document.write("<div style='border: 2px solid blue; text-align: center; height: 50px;font-size: 18px;'>")
var number = [24, 53, 78, 91, 12]
var Larger = 0;
document.write("Array items:"+number)
for(var i=0;i<number.length;i++){
            if(number[i]>Larger){
                Larger = number[i]
            }   
}
document.write("<br>")
document.write("The Largest Number is "+Larger)
document.write("</div>")
document.write("<br><br>")
//9. Write a program to identify the smallest number in the  given array. A = [24, 53, 78, 91, 12]
document.write("<div style='border: 2px solid blue; text-align: center; height: 50px;font-size: 18px;'>")
var A = [24, 53, 78, 91, 12]
var smallest = A[0];
document.write("Array items:",A)
for(i=0;i<A.length;i++){
     if(A[i]<smallest){
        smallest == A[i]
     }
}
document.write("<br>The Smallest Number is "+smallest)
document.write("</div>")
//10. Write a program to print multiples of 5 ranging 1 to 100
document.write("<br><div style='border: 2px solid blue; text-align: center;  height: 50px;font-size: 18px;'>")
for(var i=5;i<=100;i+=5){
     document.write(i,",")
}
document.write("</div>")