/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

/*function minMax(arr) {
    var min = arr[0]; max = arr[0]; minIndex = 0; maxIndex = 0;
    var newArr = arr;
    for (i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            minIndex = i;
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }
    newArr[minIndex] = max;
    newArr[maxIndex] = min;
    return "[" + newArr.join(", ") + "]";
}
var sprovedi = minMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]);
console.log(sprovedi);*/

/*function minMax(arr) { 
    var min = Math.min(...arr);
    var minIndex = arr.indexOf(min);
    var max = Math.max(...arr);
    var maxIndex = arr.indexOf(max);
    arr[minIndex] = max;
    arr[maxIndex] = min;
    return "[" + arr.join(", ") + "]";
}
var sprovedi = minMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]);
console.log(sprovedi);*/


/*2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element&#39;s value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/

/*function changeArr(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] / 2 + 5;
        if ( arr[i] == 0) {
            arr[i] = 20;
        }
    }
    return "[" + arr.join(", ") + "]";
}
var sprovedi = changeArr([ 3, 500, -10, 149, 53, 414, 1, 19 ]);
console.log(sprovedi);*/



/*3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students&#39; names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, 
    &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.*/

/*function displayGrade(arr1, arr2) {
    var grades = [];
    var newArr = [];
    for (i = 0; i < arr2.length; i++) {
        switch (true) {
            case (arr2[i] < 51) : 
            newArr[i] = "not passed";
            break;
            case (arr2[i] >= 51 && arr2[i] <= 60) : 
            newArr[i] = 6;
            break;
            case (arr2[i] >= 61 && arr2[i] <= 70) : 
            newArr[i] = 7;
            break
            case (arr2[i] >= 71 && arr2[i] <= 80) : 
            newArr[i] = 8;
            break;
            case (arr2[i] >= 81 && arr2[i] <= 90) : 
            newArr[i] = 9;
            break;
            case (arr2[i] >= 91 && arr2[i] <= 100) : 
            newArr[i] = 10;
            break;
            default : "none";
            break;
        }
    }
    for (i = 0; i < arr1.length; i++) {
        grades.push(arr1[i] + " acquired " + arr2[i] + " points and earned " + newArr[i]);
    }
    return "[" + grades.join(", ") + "]";
}
var sprovedi = displayGrade([ "Micahel", "Anne", "Frank", 
    "Joe", "John", "David", "Mark", "Bill" ], 
    [ 50, 39, 63, 72, 99, 51, 83, 59 ]);
console.log(sprovedi);*/

/*4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array&#39;s values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/

/*function sortDouble(arr) {
    newArr = [];
    arr.sort(function(a, b){return a - b});
    for ( i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * 2;
    }
    return "[" + newArr.join(", ") + "]";
}
var sprovedi = sortDouble([ 13, 11, 15, 5, 6, 1, 8, 12  ]);
console.log(sprovedi);*/

/*5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

/*function sortDesc(arr) {
    arr.sort(function(a, b){return b - a});
    return "[" + arr.join(", ") + "]";
}
var sprovedi = sortDesc([ 13, 11, 15, 5, 6, 1, 8, 12  ]);
console.log(sprovedi);*/

/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000*/

/*function complicatedSum() {
    var sumOdd = 0; sumEven = 0; var result;
    for (i = 0; i <= 500; i++) {
        if (i % 2 != 0) {
            sumOdd += i;
        }
    }
    for (i = 0; i <= 1000; i++) {
        if (i % 2 == 0) {
            sumEven += i;
        }
    }
    result = (sumEven - sumOdd) * 12.5;
    return result;
}
var sprovedi = complicatedSum();
console.log(sprovedi);*/

/*function parni(){
    var arr = [];
    for (i = 0; i <1000; i++) {
        arr[i] = i;
    }
    var pos = arr.filter(function (a) { return a % 2 == 0; });
    var sum = pos.reduce(function (a, b) { return a + b; });
    return sum;
}
var sprovedi = parni();
console.log(sprovedi);*/

/*7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John",
     "David", "Mark", true, "A" ] let result = text.slice(3);

Output: AnStJoJoDaMa*/

/*function twoLetters(arr){
    var result = "";
    var pos = arr.filter(function (a) { return typeof a == "string" && a.length > 2; });
    //var end = pos.reduce(function (a, b) {return a + b.slice(0, 2)})
    for (i = 0; i < pos.length; i++) {
        result += pos[i].slice(0, 2);
    }
    return result;
}
var sprovedi = twoLetters([ "M", "Anne", 12, "Steve", "Joe", "John",
"David", "Mark", true, "A" ]);
console.log(sprovedi);*/

/*8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/

/*function reverseString(string){
    var splitString = string.split("");
    var revArray = splitString.reverse();
    return revArray.join('');
}
var sprovedi = reverseString("Belgrade Institute of Technology");
console.log(sprovedi);*/


/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

/*function displayComb(){
    var brojac = 0;
    for (i = 1; i <= 7; i++) {
        for (j = 1; j <= 7; j++) {
            if (i != j) {
                console.log(i + ", " + j);
                brojac++;
            }
        }
    }
    return brojac;
}
var sprovedi = displayComb();
console.log(sprovedi);*/

/*10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false*/


//KOMENTAR: Za vrednost 15 sam dobio da mi je to Prime number :) Sta mislis zbog cega?

/*function prime(num) {
    for (i = 2; i < num; i++) {
        if ( num % i != 0 ) {
            return "The number " + num + " is prime number!";
        }  else {
            return "The number " + num + " is not prime number!";
        }
    }
}
var sprovedi = prime(7);
console.log(sprovedi);*/

/*11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true*/

// Komentar: lepo uradjeno. Probaj da poboljsas da bi radilo za sledeci slucaj: "Ana voli Milovana". Trenutno vraca da to nije palindrom.

/*function equalString(string) {
    var newString = string.split('').reverse().join('');
    string = string.split(' ').join('');
    newString = newString.split(' ').join('');
    if (string == newString) {
        return true;
    } else {
        return false;
    }
}
var sprovedi = equalString("e ye");
console.log(sprovedi);*/

/*12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9*/

/*function commonDiv(num1, num2) {
    var result = 0;
    for (i = 1; i < num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            result = i;
        }  
    }
    return result;
}
var sprovedi = commonDiv(192, 42);
console.log(sprovedi);*/

