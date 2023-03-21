// GitHubSearcher
// Create a page that contains a logo and a search box (as shown on the mock)
// The page is initially empty (there are no listed users)
// The user can input some text in the search box
// When the user clicks enter, a request is sent using jQuery Ajax API
// The request is sent to GitHub’s endpoint for searching users
// Documentation can be found at https://developer.github.com/v3
// Try to find URL and structure of a request for searching users
// When a response is received, print an image and a username on the page for all the
// users in the response

var inputSearch = window.document.querySelector("input");
var main = window.document.querySelector("main");

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let request = $.ajax({
            url: `https://api.github.com/users/${inputSearch.value}`,
            method: "GET"
        });
        request.done(function (msg) {
            
            let html = `
            <div id="showResult">
            <img src="${msg.avatar_url}"/>
            <p>${msg.login}</p>
            </div>
            `;
            main.insertAdjacentHTML("beforeend", html);
        })
        request.fail(function( jqXHR, textStatus ) {

            alert( "Request failed: " + textStatus );
            
            });
    }
})

