import {
    getId,
    create,
} from "./first.js"

const urlId = new URLSearchParams(window.location.search)

var id = 0;

if (params.has("id")) {
    id = params.get("id");
} else {
    window.location = "/index.html";
}

const movieDetail = (title, homepage, genres, overview, imgURL) => {
    const divEldetail = document.querySelector("div");
    const h1ElDetail = document.querySelector("h2");
    const genresElDetail = document.querySelector("h4");
    const descElDetail = document.querySelector("p");
    const imgElDetail = document.querySelector(".img");

    imgElDetail.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + imgURL);
    imgElDetail.setAttribute("alt", "poster");
    h1ElDetail.textContent = title;
    linkElDetail.setAttribute("href", homepage);
    genresElDetail.textContent = "Generi: " + genres.map(item => item.name).join(", ");
    descElDetail.textContent = overview;
};

async function getData() {
    const response = await fetch("https://api.themoviedb.org/3/" + id + "?api_key=47308f84a54b5d91b280f332b551f284", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return response.json();
}


getData()
    .then((movieInfo) => {
        TVSeriesPreview(
            movieInfo.name,
            movieInfo.homepage,
            movieInfo.genres,
            movieInfo.overview,
            movieInfo.poster_path
        );
    });