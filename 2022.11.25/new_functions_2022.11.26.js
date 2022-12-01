// 1. Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.
// Examples:
// numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]) ➞ 
//[[1, 2, 3, 4, 5, 6], [7, 8, "a"], ["b", "c"], ["d", "e", "f"]]
// numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]) ➞ 
// [[0, 0.5, 1, 2, 3, 4.4], [8], [12, 18, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]

// function numThenChar(arr) {
//     var bigArr = [];
//     var nums = [];
//     var chars = [];
//     var charsUp = [];
//     var endArr = [];
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].length; j++) {
//             if (typeof arr[i][j] == 'number') {
//                 nums.push(arr[i][j]);
//             }
//             else {
//                 if (arr[i][j] === arr[i][j].toUpperCase()) {
//                     charsUp.push(arr[i][j]);
//                 } else {
//                 chars.push(arr[i][j]);
//             }
//             }
//         }
//     }
//     bigArr = nums.concat(charsUp).sort(function (a, b) { return a - b; });
//     chars.sort()
//     bigArr = bigArr.concat(chars);
//     for (i = 0; i < arr.length; i++) {
//         endArr.push(bigArr.splice(0, arr[i].length));
//     }
//     var msg = "[ ";
//     for (i = 0; i < arr.length; i++) {
//         msg += "[ ";
//         for (j = 0; j < arr[i].length; j++) {
//             msg += endArr[i][j] + ", ";
//         }
//         msg += "], ";
//     }
//     msg += "]";
//     console.log(msg);
//     return "[ " + endArr.toString() + " ]";
// }
// console.log(numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]));

// 2. Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
// Triangle fits if it has the same or smaller size as the whole.
// The function should return false if the triangle with that dimensions is not possible.
// Examples:
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
// doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
// doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
// doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

// function triangles(arr0, arr1) {
//     var msg = "The triangle with that dimensions is not possible! ";
//     var O = 0;
//         if ((arr0[0] + arr0[1]) < arr1[2]) {
//             console.log(msg + arr0);
//         }
//         if ((arr0[1] + arr0[2]) < arr1[0]) {
//             console.log(msg + arr0);
//         }
//         if ((arr0[2] + arr0[0]) < arr1[1]) {
//             console.log(msg + arr0);
//         }
//         if ((arr1[0] + arr1[1]) < arr1[2]) {
//             console.log(msg + arr1);
//         }
//         if ((arr1[1] + arr1[2]) < arr1[0]) {
//             console.log(msg + arr1);
//         }
//         if ((arr1[2] + arr1[0]) < arr1[1]) {
//             console.log(msg + arr1);
//         }
//         O1 = arr1[0] + arr1[1] + arr1[2];
//         O0 = arr0[0] + arr0[1] + arr0[2];
//     if (O1 >= O0) {
//         return true +  " The first triangle fits into the second one!";
//     } else {
//         return false + " The first triangle does not fit into the second one!";
//     }

// }
// console.log(triangles([1, 1, 1], [2, 2, 2]));

// 3. Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign.
//Return false otherwise. For clarity, each letter must have a plus sign on both sides.
// Examples:
// plusSign("+f+d+c+#+f+") ➞ true
// plusSign("+d+=3=+s+") ➞ true
// plusSign("f++d+g+8+") ➞ false
// plusSign("+s+7+fg+r+8+") ➞ false

// function plusSign(string) {
//     var arr = [...string];
//     console.log(arr);
//     var da = 0, char = 0;
//     for (i = 0; i < string.length; i++) {
//        if (/[a-z]/.test(string[i])) {
//             char++;
//             if (string[i -1] === "+" && string[i + 1] === "+") {
//                 da++;
//             }
//        }
//     }
//     if (da == char) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(plusSign("+s+7+fg+r+8+"));

// 4. Create a function that tak1es a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
// Only check for diagonals, horizontals and verticals.
// Examples:
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, 39, 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   ["x", 43, 31, 74, 87],
//   [64, "x", 47, 32, 90],
//   [37, 65, "x", 83, 54],
//   [67, 98, 39, "x", 44],
//   [21, 59, 24, 30, "x"]
// ]) ➞ true
// bingoCheck([
//   ["x", "x", "x", "x", "x"],
//   [64, 12, 47, 32, 90],
//   [37, 16, 68, 83, 54],
//   [67, 19, 98, 39, 44],
//   [21, 75, 24, 30, 52]
// ]) ➞ true
// bingoCheck([
//   [45, "x", 31, 74, 87],
//   [64, 78, 47, "x", 90],
//   [37, "x", 68, 83, 54],
//   [67, "x", 98, "x", 44],
//   [21, "x", 24, 30, 52]
// ]) ➞ false

function bingoCheck(arr) {
    var diag1 = [];
    var diag2 = [];
    var count = 0;
    const allEqual = arr => arr.every(val => val === arr[0]);
    for (i = 0; i < arr.length; i++) {
        if (allEqual(arr[i])) {
            return true;
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            const tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        }
    }
    for (i = 0; i < arr.length; i++) {
        if (allEqual(arr[i])) {
            return true;
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i == j) {
                diag1.push(arr[i][j]);
            }
        }
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i == j) {
                diag2.push(arr[i][j]);
            }
        }
    }
    if (allEqual(diag1) || allEqual(diag2)) {
        return true;
    }
    return false;
}
console.log(bingoCheck([
    ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]));

// 5. When a person receives a blood transfusion, it is essential to make sure that the donor's blood type is compatible with the
// receiver's blood type. Receiving a blood type that is not compatible with your own can be life-threating, so blood banks always make
// sure to note the type of blood they receive from donors so that they can ensure a safe transfusion.
// Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence of Rh factor. If
// antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood type includes the letter "B". And if
// the Rh factor is present, the blood type ends with "+"; otherwise, it ends with "-". If neither antigen A nor antigen B are found,
//the blood type includes the letter "O".
// For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B and the Rh factor
// would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
// The rules for giving and receiving blood are as follows:
// A person with antigen A may only give blood to another person with antigen A.
// A person with antigen B may only give blood to another person with antigen B.
// A person with the Rh factor may only give blood to another person with the Rh factor.
// A person with none of the above factors (O-) can give blood to anyone.
// Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the donor can safely give
//blood to the receiver, according to the rules above. For clarity: all letters are capital and each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
// Examples:
// canGiveBlood("O+", "A+") ➞ true
// canGiveBlood("A-", "B-") ➞ false
// canGiveBlood("A-", "AB+") ➞ true
// .
