// 1. Capitalize each first letter ["hello", "there", "ES", 6]

var arr = ["hello", "there", "ES", 6];
function capitalize(arr) {
    var newArr;
    newArr = arr.filter((arrString) => typeof arrString == "string")
        .map((arrString) => arrString.slice(0, 1).toUpperCase() + arrString.slice(1, arrString.length));
    return newArr;
}
// console.log(capitalize(arr));

// 2. Sale tax: 
// input: [{name:"Banana", price : 120}, {name: "Orange", price : 100}]
// output1: [{name:"Banana", price : 144}, {name: "Orange", price : 120}]
// output2: [24, 20]

var groceries = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];
function calcTax(groceries) {
    var newitems = groceries.map((item) => item.price * 0.2);
    for (i = 0; i < groceries.length; i++) {
        groceries[i].price += groceries[i].price * 0.2;
    }
    return [groceries, newitems];
}
// console.log(calcTax(groceries));

// 3. Increase each number for given value 
// input: [4, 6, 11, -9, 2.1], 2
// output: [6, 8, 13, -7, 4.1]

function increase(arr, n) {
    return arr.map((item) => item + n);
}
// console.log(increase([4, 6, 11, -9, 2.1], 2));

// 4. Even elements of array
// InputDeviceInfo; [6, 11, 9, 0, 3]

function evenNumbers(arr) {
    return arr.filter((item) => item % 2 == 0);
}
// console.log(evenNumbers([6, 11, 9, 0, 3]));

// 5. Filters substring JS
// Input: ["compiler", "transpiler", "babel.js", "JS.standard", "linter"]

function findSubstring(arr) {
    return arr.filter((item) => item.toUpperCase().includes("JS"));
}
// console.log(findSubstring(["compiler", "transpiler", "babel.js", "JS.standard", "linter"]));

// 6.Filters higheer values

function highValues(arr, n) {
    return arr.filter((item) => item > n);
}
// console.log(highValues([4, 6, 11, -9, 2.1], 2));

// 7. Filter integer contains 5
// input: [23, 11.5, 9, "abc", 45, 28, 553]

function findFive(arr) {
    var newArr = arr.filter((item) =>
        item = item + "");
        return newArr.filter((item) => String(item).includes("5"));
};

// console.log(findFive([23, 11.5, 9, "abc", 45, 28, 553]));

// 8. Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

function indexes(arr) {
    return arr.reduce((acc, number, i) => {
        if (number > 10) {
        acc.push(i);
    }
        return acc;
      }, []);
}
// console.log(indexes([1.6, 11.34, 29.23, 7, 3.11, 18]));

// 9.
// a. Create an array of persons. A person should be an object with name and age properties.
// Experiment with enhanced object literals.
// b. Write a function that prints out the names of persons older than 25.
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.

var persons = [{name : "Sasa", age : 43}, {name : "Marija", age : 33}, {name : "Tara", age : 12}, {name : "Uros", age : 10}];

function olderThan25(arr) {
    return arr.filter((item) => item.age > 25 ? console.log(item.name) : "");
}
// olderThan25(persons);

function ifThereOver40(arr) {
    return arr.some((item) => item.age > 40); 
}
// console.log(ifThereOver40(persons));

function ifAllOver40(arr) {
    return arr.every((item) => item.age > 40);
}
// console.log(ifAllOver40(persons));

// 10. Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes
// Input: [3, -12, 4, 11]
// Output: no

function positiveArray(arr) {
    if (arr.every((item) => item > 0)) {
        return "yes";
    } else {
        return "no";
    }
}
// console.log(positiveArray([3, -12, 4, 11]));

// 11. Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output: 48

function cumMultiply(arr) {
    return arr.reduce((acc, num) => (acc *= num), 1)
}
// console.log(cumMultiply([2, 8, 3]));

// 12. Write a function that calculates the maximum of the given array.
// Input: [2, 7, 3, 8, 5.4]
// Output: 8

function maxValue(arr) {
    return Math.max(...arr);
}
console.log(maxValue([2, 7, 3, 8, 5.4]));