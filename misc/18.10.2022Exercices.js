/*1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var i; var sum= 0;
for (i=0; i <= 10; i++) {
    sum+= i;
}
console.log(sum);*/
/*2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
var i; var num=2; var rez=1;
for(i= 0; i < 3; i++){
    rez*=num;
}
console.log(rez);*/
/*3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var i; var rez=1; var num=5;
for (i=1; i < num +1; i++){
    rez*= i;
}
console.log(rez);*/
/*4. Write a code to display the n terms of even natural number and their sum.
Example:
Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
var i; var rez = 5; var sum=0;
for (i=1; i <= rez; i++){
    if(i%2==0){
        console.log(i);
        sum+=i;
    }
}
console.log(sum);*/
/*5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var a="682";
var sum = 0;
for (let i = 0; i < a.length; i++)
{
    sum = sum + parseInt(a[i]);
}
console.log(sum);*/
/*6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be
 something like "There is 7 letters in this word".
 var word ="Tomislav255"; var num;
    for(i=0; i <= word.length; i++){
        num = i;
    }
    console.log("Duzina niza je :"+num);*/
/*7. Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t,
     s, c, 66, 23, h2].
Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

*/
var niz = [1, 3, 32, "$" ,  "g", "h", "t","s", "c", 66, 23, "h2"];
    for(var i = 0; i <= niz.length; i++ ) {
        if(niz[i]=="c"){
            console.log("c je na mestu broj: " + i);
        }
    }