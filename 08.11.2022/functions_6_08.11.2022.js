/*1. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

/*function rotateArr(arr, n) {
    var newArr = arr.slice(n, arr.length);
    var arr2 = arr.slice(0, n);
    return "[" + newArr.join(", ") + ", " + arr2.join(", ") + "]";
}
var sprovedi = rotateArr([1,2,3,4,5,6], 2);
console.log(sprovedi);*/


/*2. Write a function that takes a number and returns array of its digits.*/

/*function returnDigits(n) {
    var string = n.toString();
    var arr = [];
    for (i = 0; i < string.length; i++) {
        arr[i] = n % 10;
        n = Math.trunc(n / 10);
    }
    arr.reverse();
    return "[" + arr.join(", ") + "]";
}
var sprovedi = returnDigits(289);
console.log(sprovedi);*/

/*3. Write a program that prints a multiplication table for numbers up to 12.*/

/*function multiplicationTable() {
    var result = '\n';
    for (var i = 1; i < 13; i++) {
        for (var j = 1; j < 13; j++) {
            result =  result + (i * j) + ' ';
        }
        result += '\n';
    }
    return result;
}
var sprovedi = multiplicationTable();
console.log(sprovedi);*/

/*4. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/

/*function maxMinValue(arr) {
   // var newArr = arr.filter(function (a) { return typeof a == 'number'; }); //NE RADI
   var newArr = [];
   for(i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            newArr.push(arr[i]);
        }
   }
   var max = Math.max(...newArr);
    return "[" + max + "]";
}
var sprovedi = maxMinValue(["asd", 12, 34, 56, true, 1, 100]);
console.log(sprovedi);*/

/*5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.*/

/*function maxMinValue(arr) {
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
         if (typeof arr[i] == 'number') {
             newArr.push(arr[i]);
         }
    }
    var max = Math.max(...newArr);
    var min = Math.min(...newArr);
    var arr1 = [min, max];
     return "[" + arr1.join(", ") + "]";
 }
 var sprovedi = maxMinValue(["asd", 12, 34, 56, true, 1, 100]);
 console.log(sprovedi);*/

 /*function maxMinValue(arr) {
    var newArr = [...arr].filter(function (a) { return typeof a == 'number'; });
    var arr1 = [Math.min(...newArr), Math.max(...newArr)];
     return "[" + arr1.join(", ") + "]";
 }
 var sprovedi = maxMinValue(["asd", 12, 34, 56, true, 1, 100]);
 console.log(sprovedi);*/

/*6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).*/

/*function arrayMiddle(arr) {
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}
var sprovedi = arrayMiddle([12, 34, 56, 100]);
console.log(sprovedi);*/

/*7. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

/*function arrayElem(arr) {
    if (arr.length % 2 == 0) {
        return "[" + arr[0] + ", " + arr[arr.length - 1] + "]";
    } else {
        return "[" + arr[0] + ", " + arr[Math.floor(arr.length / 2)] + ", " + arr[arr.length - 1] + "]";
    }
}
var sprovedi = arrayElem([12, 34, 24, 56, 100]);
console.log(sprovedi);*/

/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters. ????????*/

/*function average(arr) {
    var avg = arr.reduce(function (a, b) {return (a + b);});
    avg = avg / arr.length;
    return avg;
}
var sprovedi = average([12, 34, 24, 56, 100]);
console.log(sprovedi);*/


/*9. Write a function to find all the numbers greater than the average.*/

/*function greaterThanAvg(arr) {
    var avg = arr.reduce(function (a, b) {return (a + b);});
    avg = avg / arr.length;
    var newArr = arr.filter(function (a) {return a > avg;});
    return "[" + newArr.join(", ") + "]";
}
var sprovedi = greaterThanAvg([12, 34, 24, 56, 100]);
console.log(sprovedi);*/

/*10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
 Starvation: less than 15
 Anorexic: less than 17.5
 Underweight: less than 18.5
 Ideal: greater than or equal to 18.5 but less than 25
 Overweight: greater than or equal to 25 but less than 30
 Obese: greater than or equal to 30 but less than 40
 Morbidly obese: greater than or equal to 40*/

/*function bodyMassIndex(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var result = "";
    switch (true) {
        case (bmi < 15): result = "Starvation";
        break;
        case (bmi >= 15 && bmi < 17.5): result = "Anorexic";
        break;
        case (bmi >= 17.5 && bmi < 18.5): result = "Underweight";
        break;
        case (bmi >= 18.5 && bmi < 25): result = "Ideal";
        break;
        case (bmi >= 25 && bmi < 30): result = "Overweight";
        break;
        case (bmi >= 30 && bmi < 40): result = "Obese";
        break;
        case (bmi >= 40): result = "Morbidly obese";
        break;
        default : "none";
        break;
    }
    return "BMI is " + Math.round(bmi * 100) / 100 + " and category is " + result;
}
var sprovedi = bodyMassIndex(97.6, 1.85);
console.log(sprovedi);*/

/*11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********            */

function printFrame(arr) {
    var maxLength = 0;
    var header = "";
    var frame = "";
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    for ( i = 0; i < maxLength + 4; i++) {
        header += "*";
    }
    frame += header + "\n";
   for (i = 0; i < arr.length; i++) {
        var blank = "";
        for (j = 0; j < maxLength - arr[i].length; j++) {
            blank += " ";
        }
        arr[i] = "* " + arr[i] + blank + " *" + "\n";
        frame += arr[i];
        
    }
    frame += header;
    return frame;
}

var sprovedi = printFrame(["Hello", "World", "in", "a", "frame"]);
console.log(sprovedi);

// Komentar: odlicno!
