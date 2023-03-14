"use strict";

(function () {
    console.log("Hi!!!");
    var genreA = new Genre("action");
    var genreH = new Genre("horror");
    var genreTh = new Genre("Thriller")
    console.log(genreA.getData());
    console.log(genreH.getData());
    console.log(genreTh.getData());
    function createMovie(name, genre, length) {
        var movie = new Movie(name, genre, length);
        return movie;
    }
    function createProgram(date) {
        var program = new Program(date);
        return program;
    }
    var festival = new Festival("Belfest 2023");
    var firstDay = createProgram("10/25/2023");
    var secondDay = createProgram("10/26/2023");
    var avatar = createMovie("Avatar", genreA.getData(), 155);
    var lotr = createMovie("Lord of the rings - Two towers", genreA.getData(), 175);
    var saw = createMovie("Saw 3", genreH.getData(), 118);
    var im = createMovie("Invincible man", genreTh.getData(), 134);
    firstDay.addMovie(avatar);
    firstDay.addMovie(lotr);
    secondDay.addMovie(saw);
    secondDay.addMovie(im);
    festival.addProgram(firstDay);
    festival.addProgram(secondDay);
    // console.log(firstDay.getData());
    // console.log(avatar.getData());
    console.log(festival.getData());
}());

function Genre(name) {
    this.name = name;
    this.getData = function () {
        let inic = name[0] + name[name.length - 1];
        return JSON.stringify(inic.toUpperCase()) ;
    }
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
        return this.title + ", " + this.length + ", " + 
        this.genre;
    }
}

function Program(date, listOfMovies, moviesNum) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.moviesNum = 0;
    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.moviesNum++;
    }
    this.getData = function () {
        var arr = this.listOfMovies;
        var moviesDuration = function () { 
            var sum = 0;
        for ( var i = 0; i < arr.length; i++) {
            sum += arr[i].length;
        }
        return sum;
    };
        const printMovies = function () {
            let txt = "";
            for ( var i = 0; i < arr.length; i++) {
                txt += arr[i].getData() + "\n";
            }
            return txt;
        };
        var d = this.date.getDate() + ":" + 
        (this.date.getMonth() + 1) + ":" + this.date.getFullYear();
        return d + ", program duration " + moviesDuration() +
        " min \n" + printMovies();
    } 
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }
    var arr = this.listOfPrograms;
    var moviesNumFest = function () {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i].moviesNum;
        }
        return sum;
    }
    var printPrograms = function () {
        let txt = "";
        for (var i = 0; i < arr.length; i++) {
            txt += arr[i].getData() + "\n";
        }
        return txt;
    }
    this.getData = function () {
        return this.name + " has " + moviesNumFest() + " movie titles \n" +
        printPrograms();
    }
}
