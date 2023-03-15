class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    sayHi() {
        console.log('Hi');
    }

    getInfo() {
        return "Hi, I'm " + this.name;
    }

    // getInfo() {
    //     return this.sayHi() + " Hi, I'm " + this.name;
    // }
}

class Programmer extends Person {
    constructor(name, surname, age, position, experience, language) {
        // We must call SUPER constructor with all the properties from parent class
        super(name, surname, age);

        this.position = position;
        this.experience = experience;
        this.language = language;
    }

    // Implement getInfo method from parent
    // getInfo() {
    //     console.log(super.getInfo());
    // }

    //you do not need to create getInfo method in Programmer if you want to use unchanged version from Person!!!
    // Implement getInfo method to do some more things than in parent
    getInfo() {
        var personInfo = super.getInfo();
        console.log(personInfo + " " + this.language);
    }

    sayHello() {
        return " I said hello";
    }

    writeCode() {
        console.log('Typing ' + this.language + ' code.');
    }
}

class Tester extends Person {
    constructor(name, surname, age, position, experience) {
        // We must call SUPER constructor with all the properties from parent class
        super(name, surname, age);

        this.position = position;
        this.experience = experience;
    }

    test() {
        console.log(this.position, 'Bug detected do it again');
    }

    getInfo() {
        console.log(super.getInfo(), this.position);
    }
}

var peraProg = new Programmer('Pera', 'Peric', 30, "Frontend", 1, "JavaScript");
var lazaTester = new Tester('Laza', 'Lazic', 30, "QA", 3);

// lazaTester.getInfo();
// lazaTester.test();

var temp = peraProg.getInfo();
console.log(temp);
peraProg.writeCode();