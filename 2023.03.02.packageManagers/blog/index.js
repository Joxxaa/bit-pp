const main = window.document.querySelector("main");

const renderPost = function (data) {
    let html = `
      <div class="post">
      <h2 class="postTitle">${data.title}</h2>
      <p class="postBody">
        ${data.intro}
      </p>
    </div>
    `;
    main.insertAdjacentHTML("beforeend", html);
  };

  const fetchData = async function () {
    const res = await fetch("http://127.0.0.1:5500");
    const data = await res.json();
    console.log(data);
    data.forEach((post) => renderPost(post));
  };

  window.addEventListener("load", fetchData);