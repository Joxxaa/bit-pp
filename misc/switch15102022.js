/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/
/*var day = "utorak";
result = "";

switch (day) {
    case "ponedeljak":
        result = "Danas je ponedeljak!";
        break;
    case "utorak":
        result = "Danas je utorak!";
        break;
    case "sreda":
        result = "Danas je sreda!";
        break;
    case "četvrtak":
        result = "Danas je četvrtak!";
        break;
    case "petak":
        result = "Danas je petak!";
        break;
    case "subota":
        result = "Danas je subota!";
        break;
    default: 
        result = "Danas je nedelja!" 
        break;   
}
console.log(result);*/

/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

/*var day = 10;
result = "";
switch (day) {
    case 1:
        result = "Danas je ponedeljak!";
        break;
    case 2:
        result = "Danas je utorak!";
        break;
    case 3:
        result = "Danas je sreda!";
        break;
    case 4:
        result = "Danas je četvrtak!";
        break;
    case 5:
        result = "Danas je petak!";
        break;
    case 6:
        result = "Danas je subota!";
        break;
    case 7:
        result = "Danas je nedelja!";
        break;
    default: 
        result = "Input must be a number between 1 and 7!"
        break;
}
console.log(result);*/



/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

/*var day = 3;
result = "";
switch (day) {
    case 1:
     
    case 2:

    case 3:
      
    case 4:
        
    case 5:
        result = "Danas je radni dan!";
        break;
    case 6:
        
    case 7:
        result = "Danas je vikend!";
        break;
    default: 
        result = "Input must be a number between 1 and 7!"
        break;
}
console.log(result);*/


/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

/*var month = 20;
result = "";

switch (month) {
    case 1: 
    result = "January";
    break;
    case 2: 
    result = "February";
    break;
    case 3: 
    result = "March";
    break;
    case 4: 
    result = "April";
    break;
    case 5: 
    result = "May";
    break;
    case 6: 
    result = "Jun";
    break;
    case 7: 
    result = "July";
    break;
    case 8: 
    result = "August";
    break;
    case 9: 
    result = "September";
    break;
    case 10: 
    result = "October";
    break;
    case 11: 
    result = "November";
    break;
    case 12: 
    result = "December";
    break;
    default: 
    result = "Input must be a number between 1 and 12";
    break;
}
console.log(result);*/

/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/

/*var month = 6;
result = "";

switch (month) {
    case 1: 
    
    case 2: 
    
    case 3: 
    result = "Winter";
    break;

    case 4: 
    case 5: 
    case 6: 
    result = "Spring";
    break;

    case 7: 
    
    case 8: 
    
    case 9: 
    result = "Summer";
    break;
    case 10: 
    
    case 11: 
    
    case 12: 
    result = "Fall";
    break;
    default: 
    result = "Input must be a number between 1 and 12";
    break;
}
console.log(result);*/


/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.*/

/*var grade = "S";
result = "";

switch (grade) {
    case "A":
        result = "Good job";
        break;
    case "b":
        result = "Pretty good";
        break;
    case "c":
        result = "Passed";
        break;
    case "d":
        result = "Not so good";
        break;
    case "f":
        result = "Failed";
        break;
    default:
        result = "Unknown grade";
        break;
}
console.log(result);*/

/*7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.*/

/*var city = "Split";
var result = "";

switch (city) {
    case "Beograd":
    case "Sremska Mitrovica":
    case "Velika Plana":
    case "Subotica":
    case "Nis":
        result = city + " je u Srbiji!";
        break;

    case "Budimpešta":
    case "Segedin":
    case "Morahalom":
    case "Keckemet":
        result = city + " je u Madjarskoj!";
        break;

    case "Podgorica":
    case "Budva":
    case "Kotor":
        result = city + " je u Crnoj Gori!";
        break;

    case "Atina":
    case "Sarti":
    case "Psakudija":
    case "Solun":
    case "Uranopolis":
        result = city + " je u Grckoj!";
        break;

    case "Zagreb":
    case "Split":
        result = city + " je u Hrvatskoj!";
        break;

}
console.log(result);*/

/*8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/
/*
var a = 5, b = 0, sign = "/";
var result = "";

switch (sign) {
    case "+":
        result = a + "+" + b + "=" + (a + b);
        break;
    case "-":
        result = a + "-" + b + "=" + (a - b);
        break;
    case "*":
        result = a + "*" + b + "=" + (a * b);
        break;
    case "/":
        if (a == 0 || b == 0) {
            result = "Operation is not valid!"
        } 
        else {
        result = a + "/" + b + "=" + (a / b);
        }
        break;
    case "%":
        if (a == 0 || b == 0) {
            result = "Operation is not valid!"
        } 
        else {
        result = a + "%" + b + "=" + (a % b);
        }
        break;
    default:
        result = "Something is wrong!";
        break;

}
console.log(result);
*/
