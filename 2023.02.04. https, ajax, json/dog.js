// JSON
// Use Dog API
// You can find the documentation for this API at https://dog.ceo/dog-api/
// Check out the documentation to see how to use this API
// Create a function which is sending request via AJAX and getting data in JSON format
// When data is received from the server, extract image url, and use that url to create
// image element and add it to html page.
// There is a button on HTML page!
// Each time when user click the button this function for getting image data is invoked and
// new picture is added to the page.
var butt = window.document.querySelector("#button");
var image = window.document.querySelector("#dogPic");

butt.addEventListener("click", function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => image.src = json.message);
})
