class Book {
    constructor(title, author, copyrightDate, ISBN,
        numOfPages, numOfCheck, isOut) {
        (this.title = title),
            (this.author = author),
            (this.copyrightDate = copyrightDate),
            (this.ISBN = ISBN),
            (this.numOfPages = numOfPages),
            (this.numOfCheck = numOfCheck),
            (this.isOut = isOut)
    }
}

class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN,
        numOfPages, numOfCheck, isOut) {
        super(title, author, copyrightDate, ISBN,
            numOfPages, numOfCheck, isOut)
    }
    checkAge() {
        var bookDate = new Date(this.copyrightDate);
        var age = Date.now() - bookDate.getTime();
        if (age >= 157680000000) {
            this.isOut = true;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN,
        numOfPages, numOfCheck, isOut) {
        super(title, author, copyrightDate, ISBN,
            numOfPages, numOfCheck, isOut)
    }
    updateNumOfCheck(rent) {
        this.numOfCheck += rent;
        if (this.numOfCheck >= 100) {
          this.isOut = true;
        }
      }
}

(function () {
    var lotr = new Novel("Lord of the rings", "Tolkien", 
    "12/5/2015", "hbjh", 1123, 78, false, );
    var suunto = new Manual("Suunto spartan", "Suunto", 
    "12/5/2010", "jhhug", 250, 23, false);
    console.log(JSON.stringify(lotr));
    lotr.updateNumOfCheck(120);
    console.log(JSON.stringify(lotr));
    console.log(JSON.stringify(suunto));
    suunto.checkAge();
    console.log(JSON.stringify(suunto));
}) ();