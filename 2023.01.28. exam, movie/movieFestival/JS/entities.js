function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
    this.genre = function () {
       
        let inic = genre[0] + genre[genre.length -1];
        return inic.toUpperCase();
    }
    this.getMovieData = function () {
        return this.title + ", " + this.length + "min, " + this.genre();
    }
}

