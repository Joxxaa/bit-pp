function Car(brand, model, motion, speed) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
    (this.speed = speed);
    this.checkMotion = function () {
        if (this.speed > 0) {
            this.motion = "moving";
            return "This car is in motion";
        } else {
            this.motion = "not moving";
            return "This car is not in motion";
        }
    }
    this.accelerate = function (acc) {
        this.speed += acc;
        return this.speed;
    }
    this.break = function (brk) {
        this.speed -= brk;
        if (this.speed <= 0) {
            this.speed = 0;
            this.motion = false;
        }
    }
    this.status = function () {
        return this.brand + " " + this.model + " is running at " +
            this.speed + ", car is " + this.motion;
    }
    this.stopCar = function () {
        this.speed = 0;
        this.motion = "not moving";
    }
}

// var vw = new Car("VW", "Tuareg", "moving", 65);
// var bmw = new Car("BMW", "X5", "not moving", 0);
// var audi = new Car("AUDI", "6", "moving", 82);
// console.log(vw.status());
// console.log(bmw.status());
// console.log(audi.status());
// vw.break(50);
// console.log(vw.checkMotion());
// console.log(vw.status());
// bmw.accelerate(50);
// console.log(bmw.checkMotion());
// console.log(bmw.status());
// audi.stopCar();
// audi.status();
// console.log(audi.status());

/***********************************************************/

function Tv(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
    this.tuneVolume = function (sign, num) {
        if (sign == "+") {
            this.volume += num;
            if (this.volume > 100) {
                this.volume = 100;
            }
        }
        if (sign == "-") {
            this.volume -= num;
            if (this.volume < 0) {
                this.volume = 0;
            }
        }
        return this.volume;
    };
    this.setChanel = function (ch) {
        if (ch > 50 || ch < 0) {
            this.channel;
        } else {
            this.channel = ch;
        }
    };
    this.resetTv = function () {
        this.channel = 1;
        this.volume = 50;
        return;
    };
    this.status = function () {
        return this.brand + " at channel " + this.channel +
            ", volume " + this.volume;
    };
}
var newTv = new Tv("Samsung");
console.log(newTv.status());
newTv.tuneVolume("+", 55);
newTv.setChanel(25);
console.log(newTv.status());
newTv.resetTv();
console.log(newTv.status());
