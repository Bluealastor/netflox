import {
    getId,
    create,
} from "./first.js"

const urlId = new URLSearchParams(window.location.search)

var id = 0;

if (urlId.has("id")) {
    id = urlId.get("id");
}

const movieDetail = (title, homepage, genres, overview, imgURL) => {
    const divEldetail = document.querySelector("div");
    const h2ElDetail = document.querySelector("h2");
    const genresElDetail = document.querySelector("h4");
    const descElDetail = document.querySelector("p");
    const imgElDetail = document.querySelector("img");

    imgElDetail.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + imgURL);
    imgElDetail.setAttribute("alt", "poster");
    h2ElDetail.textContent = title;
    linkElDetail.setAttribute("href", homepage);
    genresElDetail.textContent = "Generi: " + genres.map(item => item.name).join(", ");
    descElDetail.textContent = overview;
};

async function getData() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=47308f84a54b5d91b280f332b551f284`);
    return response.json();
}


getData()
    .then((movieInfo) => {
        // console.log(movieInfo)
        movieDetail(
            movieInfo.title,
            movieInfo.homepage,
            movieInfo.genres,
            movieInfo.overview,
            movieInfo.poster_path
        );
    });