'use strict'

function demo1() {
    try {
        console.log('Pocetak izvrsavanja');

        console.log('Kraj izvrsavanja bez greske');
    } catch (err) {
        console.log('Ako se nije desila greska onda necete videti ovu poruku');
    }

    console.log("...Nastavljanje izvrsavanja nakon Try/Catch bloka");
}
// demo1();
function demo2() {
    try {
        console.log('Pocetak izvrsavanja');
        x = 232;

        console.log('Kraj izvrsavanja bez greske');
        console.log('Ovo ce biti ignorisano takodje');
    } catch (err) {
        console.log('Ako se nije desila greska onda necete videti ovu poruku.');
        console.log('Ako vidite poruku onda je greska: ' + err);
        console.log('Naziv errora: ' + err.name);
        console.log('Poruka errora: ' + err.message);
    }

    console.log("...Nastavljanje izvrsavanja nakon Try/Catch bloka");
}
// demo2();

function demo3() {
    try {
        console.log('Pocetak izvrsavanja, imamo primer za Stack');

        throw new Error('Ovo je nasa greska koju smo ispucali u kodu');

        console.log('Kraj izvrsavanja bez greske');
        console.log('Ovaj deo koda je siv, ne izvrsava se');
    } catch (err) {
        console.log(err);
    }
}
// demo3();

function demo4() {
    try {
        console.log('Pocetak izvrsavanja');

        throw {
            name: 'Moja greska',
            message: 'Custom kreirana greska'
        }

        console.log('Kraj izvrsavanja bez greske');
    } catch (err) {
        console.log(err);
    }
}
// demo4();

function demo5() {
    var error = new SyntaxError('Ovo je built in greska');

    console.log(error.name);
    console.log(error.message);
}
// demo5();

function demo6() {
    try {
        console.log('This is try block');
    } catch (e) {
        console.log('This is catch error block, you do not see it if you do not have errors');
    } finally {
        console.log('This you will see always, but use it wisely!');
    }
}

// demo6();