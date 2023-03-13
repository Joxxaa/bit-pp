/*1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. Example: sides
of triangle are 3, 4, 5. This is scalene triangle.
var a=3;
var b=4;
var c=5;
var r;
if(a==b && a==c && b==c) {console.log("Triangle is equilateral");}
else if (a==b || a==c || b==c) {console.log("Triangle is scalene");}
else {console.log("Triangle is isosceles");}*/
/*2. Perform arithmetic operations on two numbers. Operations are add, subtract, multiply, divide,
modulus.
var a=6;
var b=5;
var s, o, m , d;
s= a + b;
o= a- b;
m= a * b;
d= a / b;
m= a % b;
console.log("Rezultati:", s, o, m, d, m);*/
/*3. Find the grade for input marks (you should have at least two input marks). Grades are:
A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.
var a; var b=20; var c=40;
a=(b+c)/2;
if(a>=51 && a<=60) {console.log("Grade is E");}
else if(a>=61 && a<=70) {console.log("Grade is D");}
else if(a>=71 && a<=80) {console.log("Grade is C");}
else if(a>=81 && a<=90) {console.log("Grade is B");}
else if(a>=91 && a<=100) {console.log("Grade is A");}
else {console.log("Student has failed the exam.");}*/
/*4. Create two variables (or if you know how to do it - input fields). One should be a number, other
should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
it handle a few collective nouns like “sheep” and “geese”. cow cattle, fox foxes, goose geese, sheep sheep, wolf wolves*/
var a=5; 
var noun= "cat";
if (noun == "cow") {console.log(a + " cattle");}
else if (noun == "cow") {console.log(a + " cattle");}
else if (noun == "fox") {console.log(a + " foxes");}
else if (noun == "goose") {console.log(a + " geese");}
else if (noun == "sheep") {console.log(a + " sheep");}
else if (noun == "wolf") {console.log(a + " wolves");}
else {
console.log(a + " " + noun +"s");}
/*5. Write a program to show you age based on entered number (if you know how to create input field, if
not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
example with 13.*/
/*const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  var age = document.getElementById("age").value;

  if(age>=18) {document.write("You are old enough to drive...");}
else {document.write("You need " + (18-age ) +" years to turn 18!");}
});*/
/*var age=13;
if(age>=18) {console.log("You are old enough to drive");}
else {console.log((18-age )+"years you need to turn 18");}*/
/*6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
age. Show how much is that older/younger than you with text for example “He/She is 13 years
older/younger than me”. If you are the same age - print that you are the same age.
var agee=23;
const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  var age = document.getElementById("age").value;
  var agee = document.getElementById("agee").value;
var def;
def= age-agee;
if(age == agee){document.write("We are the same age.");}
else if(def > 0 ) {document.write("He/She is "+ def + " younger than me");}
else if ( def < 0) {document.write("He/She is "+ Math.abs(def) + " older than me");}})*/
/*7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
called Neo”. If there is no match - write on screen that this is a mixed breed.
var a="Pug";
var b="German Shepherd";
var c="Pit bull";
var d= "Staford";
var e="Cane corso";
const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    var f = document.getElementById("dog").value;
    if (a==f) {document.write("This is Pug called Max");}
    else if (b==f) {document.write("This is German Shepherd called Neo");}
    else if (c==f) {document.write("This is Pit bull called Rex");}
    else if (d==f) {document.write("This is Staford called Mia");}
    else if (e==f) {document.write("This is Cane corso called Rock");}
    else{document.write("This is a mixed breed");}
})*/
