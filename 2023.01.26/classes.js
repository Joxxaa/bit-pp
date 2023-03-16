class Car {
    constructor(brand, model, motion, speed) {
        (this.brand = brand),
            (this.model = model),
            (this.motion = motion),
            (this.speed = speed)
    }


    checkMotion() {
        if (this.speed > 0) {
            this.motion = "moving";
            return "This car is in motion";
        } else {
            this.motion = "not moving";
            return "This car is not in motion";
        }
    }
    accelerate(acc) {
        this.speed += acc;
        return this.speed;
    }
    breakCar(brk) {
        this.speed -= brk;
        if (this.speed <= 0) {
            this.speed = 0;
            this.motion = false;
        }
    }
    statusCar() {
        return this.brand + " " + this.model + " is running at " +
            this.speed + ", car is " + this.motion;
    }
    stopCar() {
        this.speed = 0;
        this.motion = "not moving";
    }
}

(function () {
    var vw = new Car("VW", "Tuareg", "moving", 65);
    var bmw = new Car("BMW", "X5", "not moving", 0);
    var audi = new Car("AUDI", "6", "moving", 82);
    console.log(vw.statusCar());
    console.log(bmw.statusCar());
    console.log(audi.statusCar());
    vw.breakCar(50);
    console.log(vw.checkMotion());
    console.log(vw.statusCar());
    bmw.accelerate(50);
    console.log(bmw.checkMotion());
    console.log(bmw.statusCar());
    audi.stopCar();
    audi.statusCar();
    console.log(audi.statusCar());
})();

/******************************************************** */

class Tv {
    constructor(brand) {
        (this.brand = brand),
            (this.channel = 1),
            (this.volume = 50)
    }
    tuneVolume(sign, num) {
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
    setChanel(ch) {
        if (ch > 50 || ch < 0) {
            this.channel;
        } else {
            this.channel = ch;
        }
    };
    resetTv() {
        this.channel = 1;
        this.volume = 50;
        return;
    };
    statusTv() {
        return this.brand + " at channel " + this.channel +
            ", volume " + this.volume;
    };
}

(function () {
    var newTv = new Tv("Samsung");
    console.log(newTv.statusTv());
    newTv.tuneVolume("+", 55);
    newTv.setChanel(25);
    console.log(newTv.statusTv());
    newTv.resetTv();
    console.log(newTv.statusTv());
})();