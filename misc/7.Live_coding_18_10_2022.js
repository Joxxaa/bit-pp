// var sum = 0;

// for (var i = 1; i <= 100; i++) {
//     sum = sum + 1;

//     if(i == 100) {
//         console.log("**************")
//         console.log("Final sum is: " + sum);
//     } else {
//         console.log("Current sum is: " + sum);
//     }
// }


// var x = 50;

// while ( x < 60) {
//     console.log("X je manje od 60: " + x);
//     x++;
// }

// console.log("Zavrsena petlja");


// var x = 10;

// while (x > 0) {
//     console.log("X je vece od 0: " + x);
//     x--;
// }

// console.log("Zavrseno");


// var x = 10;

// do {
//     console.log("trenutna vrednost x je: " + x);
//     x++;
// } while(x<10) {
//     console.log("X je manje od 10 i iznosi: " + x);
//     x++;
// }

// console.log("Zavrseno");



// for(var index = 0; index <= 10; index++) {
//     console.log(index + " je trenutna vrednost");
// }

// console.log("Zavrseno");


//Ispisati prvih 20 brojeva; brojeve od 15 do 18 ispisati zajedno sa slovom "A";

// for (var i = 0; i <=20; i++) {
//     if(i>=15 && i <= 18) {
//         console.log(i + " A");
//     } else {
//         console.log(i);
//     }
// }

// console.log("Kraj");


// var x = [1,2,10];
// var y = [1,3,4];

// for(var i = 0; i < x.length; i++) {
//     for(var k = 0; k < y.length; k++) {
//         // izvrsava se 3 puta
//         if(x[i]==y[k]) {
//             console.log("Ovo element je sadrzan u oba niza: " + x[i]);
//         }
//     }
// }


var niz = ["Abc", "B", "C"];

for (var element in niz) {
    console.log(element);
    console.log(niz[element]);
    console.log(niz.length);
}



