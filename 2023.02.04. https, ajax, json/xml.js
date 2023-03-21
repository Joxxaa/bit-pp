// XML
// Use Geolocation API service
// You can find the documentation for this API at
// https://www.geoplugin.com/webservices/xml
// Check out the documentation to see how to use this API
// Create a function which is sending request via AJAX and getting data in XML format
// When data is received from the server, extract country name which is detected based on
// IP address, and show it on the screen.
// Extra:
// There is a button and input field on HTML page!
// Each time user clicks the button, function for getting geolocation data is invoked and
// new ip address written in input field is used when sending request.

var input = window.document.querySelector("#ipAddress");
var butt = window.document.querySelector("#show");

butt.addEventListener("click", function () {
    var request = $.ajax({
        url: `http://www.geoplugin.net/xml.gp?ip=${input.textContent}`,
        method: "GET"
    });

    request.done(function (response) {
        alert(response.getElementsByTagName("geoplugin_countryName")[0].textContent);
        alert(response.getElementsByTagName("geoplugin_city")[0].textContent);
    });
})