// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

// function duplicate(arr) {
////   var duplArr = 
//     var duplArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         duplArr.push(arr[i]);
//         duplArr.push(arr[i]);
//     }
//     return "[" + duplArr.join(", ") + "]";
// }
// console.log(duplicate([2, 4, 7, 11, -2, 1]));

// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

// function removeDuplicates(arr) {
//     arr.sort(function (a, b) {return a - b});
//    console.log(arr);
//    var newArr = arr.filter(function(item, pos) {return arr.indexOf(item) == pos;})
//     // for  (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === arr[i + 1]) {
//     //         arr.shift();
//     //     }
//     // }
//     return "[" + newArr.join(", ") + "]";
// }
// console.log(removeDuplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// function checkOdd(arr) {
//     if (arr.length % 2 != 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkOdd([1, 2, 9, 2, 1]));

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

//KOMENTAR: Znam da znas ovo da uradis, pa cu samo napisati sta si trebao bez da ocekujem da ispravis (znam da bi znao).
// Ovde je ideja da prvo nadjes sredisnji element niza, pa da prodjes kroz ceo niz i nadjes koliko ima elemenata manjih od njega.
// Ponavljam, ne moras ispraviti jer znam da znas da uradis :)

// function countElements(arr) {
//     if (arr.length % 2 == 0) {
//         return "Error!";
//     }
//     var newArr = arr.slice(0, (arr.length + 1) / 2);
//     return newArr.length;
// }
// console.log(countElements([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

// function min(arr) {
//     var obj = {};
//     var indexes = [];
//     obj.minValue = Math.min(...arr);
//    for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == obj.minValue) {
//             indexes.push(i);
//         }
//    }
//     obj.minLastIndex = Math.max(...indexes);
//     return JSON.stringify(obj);
// }
// console.log(min([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

// function arrLess(arr, n) {
//     return arr.filter(function(a) {return a < n})
// }
// console.log(arrLess([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

// function checkSubstring(arr) {
//     var q = [];
//     var q = arr.filter(function(a) {a.toLowerCase()});
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().substring(0, 3) === "pro") {
//             q.push(arr[i]);
//         }
//         // q.push(arr[i].toLowerCase());
//     }
//     console.log(q);
//     return "[" + q.join(", ") + "]";
// }
// console.log(checkSubstring(["JavaScript", "Programming", "fun", "product"]));

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

// function checkSubstring(arr) {

//     return arr.filter(function(a) {return a.toLowerCase().substring(0, 3) === "pro";});
// }
// console.log(checkSubstring(["JavaScript", "Programming", "fun", "product"]));

// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// var groceries = [
//     {name: "jogurt", price: 200},
//     {name: "meat", price: 850},
//     {name: "bread", price: 110}
// ]

// // b. Write a function that calculates the total price of your shopping list.

// function bill(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i].price;
//     }
//     return sum;
// }
// console.log(bill(groceries));

// // c. Write a function that calculates the average product price of your shopping list.
// // Print this value with the precision of three decimals.

// function averagePrice(arr) {
//     return (bill(arr) / arr.length).toFixed(3);
// }
// console.log(averagePrice(groceries));

// // d. Write a function that prints out the name of the most expensive product on your
// // shopping list. Write the name in uppercase.

// function mostExpensive(arr) {
//     var prices = arr.map(function(o) { return o.price; });
//     var max = Math.max(...prices);
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i].price == max) {
//             return arr[i].name.toUpperCase();
//         }
//     }
//     return max;
// }
// console.log(mostExpensive(groceries));

// 7.
// a. Write a function that checks if a given string is written in all capitals.

function allCaps(string) {
    //     if (/^[A-Z]+$/.test(string)) {
    //         return "String is writen in all caps!";
    //     } else {
    // return false;
    //  }
    if (string.toUpperCase() == string) {
        return "String is writen in all caps!";
    } else {
        return false;
    }
}
//console.log(allCaps("SASA"));

// b. Write a function that checks if a given string contains any digits.

function checkNumbers(string) {
    if (/[0-9]/.test(string)) {
        return "String contains numbers!";
    } else {
        return false;
    }
}
//console.log(checkNumbers("9SASA"));

// c. Write a function that checks if a given string is a valid hexadecimal color.

function checkHex(string) {
    if (/[0-9A-Fa-f]{6}/g.test(string)) {
        return "String is hexadecimal color!";
    } else {
        return false;
    }

}
//console.log(checkHex("#0080c0"));

// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

function checkYear(num) {
    if (num < 2018 && num > 1900) {
        return "Year is correct!"
    } else {
        return false;
    }
}
//console.log(checkYear(1979));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

// function validator(string, hex, year) {
//     var object = {};
//     object.stringValidator = allCaps(string);
//     object.passwordValidator = checkNumbers(string);
//     object.colorValidator = checkHex(hex);
//     object.yearValidator = checkYear(year);
//     return JSON.stringify(object);
// }
// console.log(validator("SASA89", "#0080c0", 1979));

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

// function daysToBirthday(string) {
//     var dayOfBirtday = parseInt(string);
//     var birthday = string.split(" ");
//     var monthOfBirthdayInt = function() {
//         var result;
//         switch (birthday[1]) {
//             case "January": result = 1;
//             break;
//             case "February": result = 2;
//             break;
//             case "March": result = 3;
//             break;
//             case "April": result = 4;
//             break;
//             case "May": result = 5;
//             break;
//             case "Jun": result = 6;
//             break;
//             case "July": result = 7;
//             break;
//             case "August": result = 8;
//             break;
//             case "September": result = 9;
//             break;
//             case "October": result = 10;
//             break;
//             case "November": result = 11;
//             break;
//             case "December": result = 12;
//             break;
//         }
//         return result;
//     } ();
//     var today = new Date(); y = today.getFullYear(); m = monthOfBirthdayInt - 1; d = dayOfBirtday;
//     var bday = new Date(y, m, d);
//     today.setHours(0, 0, 0, 0);
//     if (today > bday) {
//         bday.setFullYear(y + 1)
//     }
//     return "There is " + Math.round((bday - today) / (1000*60*60*24)) + " more days to your birthday!";
// }
// console.log(daysToBirthday("8 August"));


// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

// function tripTime(t1, t2) {
//     var start = t1.split(":");
//     var stop = t2.split(":");
//     var startS = start[2] * 1 + start[1] * 1 * 60 + start[0] * 1 * 60 * 60;
//     var stopS = stop[2] * 1 + stop[1] * 1 * 60 + stop[0] * 1 * 60 * 60;
//     var totalSeconds = stopS - startS;
//     var time = function () {
//         const totalMinutes = Math.floor(totalSeconds / 60);
//         const seconds = totalSeconds % 60;
//         const hours = Math.floor(totalMinutes / 60);
//         const minutes = totalMinutes % 60;
//         return hours + " hours " + minutes + " minutes " + seconds + " seconds";
//       } ();
//     return time;
// }
// console.log(tripTime("8:22:13", "11:43:22"));

// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

// function distance(k1, k2) {
//     var distance = Math.sqrt((k1.x - k2.x)^2 + (k1.y - k2.y)^2 + (k1.z - k2.z)^2)
//     return Math.round(distance * 100) / 100;
// }
// console.log(distance({x: 3, y: 5, z: 1}, {x: 2, y: 4, z: 0}));

// 11.
// a. Write a function that generates a random integer value between 5 and 20.

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }
// console.log(random(5, 20));
// console.log(random(50, 100));

// b. Write a function that generates a random integer value between 50 and 100.

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }
// console.log(random(50, 100));

// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

// function numbers(n) {
//     // var arr = new Array(n).fill().map(() => Math.floor(50 * Math.random()));
//     var arr = new Array(n).fill().map(function() { return Math.floor(50 * Math.random())});
//     return "[" + arr.join(", ") + "]";
// }
// console.log(numbers(5));

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffleArray(arr) {
    var newArr = arr.sort(function() {
        return Math.random() - 0.5;
    });
    return "[" + newArr.join(", ") + "]";
}
console.log(shuffleArray([3, 6, 11, 2, 9, 1]));
