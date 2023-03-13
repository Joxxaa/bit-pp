/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -*/
/*var a = 3, b = -7, c = 2;
if (a >= 0) {
    console.log("The sign is +!");
}
else {
    console.log("The sign is -!");
}
if (b >= 0) {
    console.log("The sign is +!");
}
else {
    console.log("The sign is -!");
}
if (c >= 0) {
    console.log("The sign is +!");
}
else {
    console.log("The sign is -!");
}
*/
/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0*/
/*var a = -5, b = -2, c = -6, d = 10, e = -1;
var result;
if (a > b) {
    result = a;
}
else {
    result = b;
}
if (result < c) {
result = c;
}
if (result < d) {
    result = d;
    }
    if (result < e) {
        result = e;
        }
console.log(result); */
/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1*/
/*var a = 15, b = 30, c = 4, max, mid, min;
if (a > b && a > c) {
    max = a;
    if (b > c) {
        mid = b;
        min = c;
    } else {
        mid = c;
        min = b;
    }
}
else if (a > b && a < c) {
    max = c;
    mid = a;
    min = b;
}
else if (a < b && a < c) {
    min = a;
    if (b > c) {
        max = b;
        mid = c;
    }
    else {
        max = c;
        mid = b;
    }
}
else if (a < b && a > c) {
    mid = a;
    max = b;
    min = c;
}

console.log(max + " " + mid + " " + min);*/
 


/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
var a = 10, b = 7, c;
if (typeof a == "number") {
    c = a % 2;
    if (c == 0) {
c = a / 2;
console.log(a + " / 2 = " + c);

    }
    else {
        console.log("X");
    }
}
if (typeof b == "number") {
    c = b % 2;
    if (c == 0) {
console.log(b + " / 2 =" + c);
    }
    else {
        console.log("X");
    }
}
*/
/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.
var a = -5, b = 2;
var result;
if (a > b) {
    result = a;
    console.log(result);
}
else {
    result = b;
    console.log(result);
}*/
/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
var c = 60; f = 120, convC = 0.0, convF = 0.0;
convF = (9*c/5) + 32;
console.log(c + "°C is " + convF + "°F");
convC = (f-32) * 5/9;
console.log(f + "°F is " + +convC + "°C");*/
/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38
var a = 13, b = 30, c, result;
c = b - a;
if (c > a) {
result = c * 2;
    console.log(result);
}
else {
    console.log("X");
}*/
/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
var a = 12, b = 12, result;
result = a + b;
if (a == b) {
result = 3 * result;
console.log(result);
}
else {
    console.log(result);
}*/
/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true
var a = 6, b = 50, sum;
sum = a + b;
if (a == 50 || b == 50 || sum == 50) {
    console.log("true");
}
else {
    console.log("-");
}*/
/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
var a = 250;
if (a > 20 && a < 100) {
    console.log("20 ⇔ 100");
}
else if(a > 100 && a < 400) {
    console.log("100 ⇔ 400");
} 
else {
    console.log("-");
}*/