var inputSearch = window.document.querySelector("input");
var div = window.document.querySelector(".container");
var title = window.document.querySelector(".title");
var popular = window.document.querySelector(".popular");

function displayMovie(obj) {
    let html = `
    <div data-id="${obj?.show?.externals?.thetvdb ?? obj?.externals?.thetvdb
        }" data-src="${obj?.show?.id ?? obj?.id}" class="card" style="width: 18rem;">
    <img class="card-img-top" src="${obj?.show?.image?.medium ?? obj?.image?.medium
        }" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${obj?.show?.name ?? obj?.name}</h5>
     </div>
  </div>`;
    div.insertAdjacentHTML("beforeend", html);
};

function showPopular() {
    fetch("https://api.tvmaze.com/shows")
        .then((result) => result.json())
        .then((result) => {
            let arr = Array.from(result);
            let popularArr = arr
                .sort((a, b) => b.rating.average - a.rating.average)
                .slice(0, 50);
            return popularArr.forEach((obj) => displayMovie(obj));
        });
};

function clearPage() {
    popular.textContent = "Popular Shows";
    document.querySelector(".single_movie")?.remove();
    document.querySelector(".season_list")?.remove();
    document.querySelector(".character_list")?.remove();
    document.querySelector(".season_number")?.remove();
    document.querySelector(".cast")?.remove();
};

function clearCards() {
    return document.querySelectorAll(".card").forEach((el) => el?.remove());

};

window.addEventListener("load", showPopular);

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        clearPage();
        clearCards();
        fetch(`https://api.tvmaze.com/search/shows?q=${inputSearch.value}`)
            .then((result) => result.json())
            .then((result) => {
                let list = Array.from(result);
                list.forEach((obj) => displayMovie(obj));
            });
        inputSearch.value = "";
    }
});

title.addEventListener("click", function (e) {
    clearPage();
    clearCards();
    showPopular();
});

div.addEventListener("click", function (e) {
    let target = e.target.closest(".card");
    if (e.target.classList.contains("wrapper")) return;
    fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${target.dataset.id}`)
        .then((result) => result.json())
        .then((result) => {
            popular.textContent = `${result.name}`;

            div.insertAdjacentHTML(
                "afterbegin",
                `<div class="single_movie">
          <img src="${result.image.original}">
          <h2 class="show_details">Show Details</h2>
          ${result.summary}
         
          </div>`
            );
            return;
        });
    fetch(`https://api.tvmaze.com/shows/${target.dataset.src}/seasons`)
        .then((seasons) => seasons.json())
        .then((result) => {
            let seasonList = Array.from(result);
            div.insertAdjacentHTML(
                "beforeend",
                `<h2 class="season_number">Seasons (${seasonList.length})</h2>`
            );
            div.insertAdjacentHTML("beforeend", `<ul class="season_list"></ul>`);
            seasonList.forEach((season) => {
                let html = `
    <li>${season.premiereDate} - ${season.endDate}</li>
    `;

                document
                    .querySelector(".season_list")
                    .insertAdjacentHTML("beforeend", html);
            });
        });
    fetch(`https://api.tvmaze.com/shows/${target.dataset.src}/cast`)
        .then((result) => result.json())
        .then((result) => {
            div.insertAdjacentHTML("beforeend", `<h2 class="cast">Cast</h2>`);
            div.insertAdjacentHTML("beforeend", `<ul class="character_list"></ul>`);
            const list = result.slice(0, 10);
            list.forEach((char) => {
                document
                    .querySelector(".character_list")
                    .insertAdjacentHTML("beforeend", `<li>${char.person.name}</li>`);
            });
        });
    clearCards();
});