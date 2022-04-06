import {
    q,
    qAll,
    c,
    apiRequest,
    box,
    modal,
    // createCard,
} from "./utili.js"


// console.log(apiRequest("https://api.themoviedb.org/3/movie/550?api_key=47308f84a54b5d91b280f332b551f284"))

const getMoviesData = async() => {
    const result = await apiRequest("https://api.themoviedb.org/3/movie/500?api_key=47308f84a54b5d91b280f332b551f284")
    return result
}

const movieMap = getMoviesData((data) => {
    data.map((movie, index) => [
        movie.title,
        movie.status,
        movie.runtime,
        movie.vote_average,
        movie.homepage,
        movie.id,
        movie.budget,
        index
    ])
})

const createCard = (title, desc, imgUrl, price, index) => {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const parDescEl = document.createElement("p");
    const imgEl = document.createElement("img");
    const parPriceEl = document.createElement("p");

    divEl.classList.add("card");
    parPriceEl.classList.add("price");
    parDescEl.classList.add("description");

    divEl.id = index;
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", "img cosi");
    h3El.textContent = title;
    parDescEl.textContent = desc;
    parPriceEl.textContent = price;

    divEl.append(imgEl, h3El, parDescEl, parPriceEl);
    document.querySelector(".wrapperMovies").appendChild(divEl);
};