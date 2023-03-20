var titleIn = window.document.getElementById("movieTitle");
var lengthIn = window.document.getElementById("movieLength");
var genreIn = window.document.getElementById("genre");
var butt = window.document.getElementById("createMovie");
var movieList = window.document.getElementById("showMovie");
var error = window.document.getElementById("error");

function createMovie(title, length, genre) {
    return new Movie(title, length, genre);
}

function insertMovie(movie) {
    let html = `<p> 
    ${movie.getMovieData()}
    </p>`
    movieList.insertAdjacentHTML("beforeend", html);
}

function validate(title, length, genre) {
    if (title.length == 0) {
        let html = `<p id="errorText"> You have to enter movie title!!! </p>`
        error.insertAdjacentHTML("beforeend", html);
        return;
    }
    if (length.length == 0) {
        let html = `<p id="errorText"> You have to enter movie length!!! </p>`
        error.insertAdjacentHTML("beforeend", html);
        return;
    }
    if (genre == "Genre") {
        let html = `<p id="errorText"> You have to enter movie genre!!! </p>`
        error.insertAdjacentHTML("beforeend", html);
        return;
    }
}

butt.addEventListener("click", function () {
    var movieObject;
    let title = titleIn.value;
    let length = lengthIn.value;
    let genre = genreIn.value;
    movieObject = createMovie(title, length, genre);
    validate(title, length, genre);
    insertMovie(movieObject);
});