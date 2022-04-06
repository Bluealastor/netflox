// API TMBD
const apiKey = "api_key=47308f84a54b5d91b280f332b551f284";
const baseUrl = "https://api.themoviedb.org/3/";
const apiUrl = baseUrl + "discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500/";

// selector
const getId = (element) => document.getElementById(element)
const create = (element) => document.createElement(element)
const main = getId("main")
const tags = getId("tags")


// funzione richiesta  fetch 
// const getApi = async(URL) => {
//     const res = await fetch(URL)

//     return res.json

// }

const getApi = (URL) => {
    fetch(URL).then(res => res.json()).then(data => {
        console.log(data)
        showMovies(data.results)
    })
}

// const getGenres = (URL) => {
//     fetch(URL).then(rus => rus.json()).then(dat => {
//         // console.log(dat)
//         showMovies(dat)
//     })

// }


// richiamo funzione

getApi(apiUrl)
    // getApi(baseUrl + "genre/movie/list?" + apiKey)

// getGenres(baseUrl + "genre/movie/list?" + apiKey)
// Create card in html


// const genresEl = ((generi) => {
//     tags.innerHTML = "";

//     generi.map(g => {
//         const { id, name } = g
//         const genEl = create("div")
//         genEl.classList.add("tag");
//         genEl.innerHTML = `
//         <div class="tag">${name.name}</div>
//         `
//         console.log(g)

//         tags.appendChild(genEl)
//     }).join("");
// })

// 
// const createCard = (title, poster_path, vote_average, overview, id)



// const serchGenres = ((data) => {
//     consol.log(data)
//     tags.innerHTML = "";


//     data.map(genres => {
//         // const { id, name } = gen
//         // const genreDiv = create("div");
//         // genreDiv.classList.add("tag");
//         // console.log(genres)
//         // genreDiv.innerHTML =

//         // tags.append(genreDiv)
//     })
// })


// getApi(apiUrl).then((movieApi) => {
//     movieApi.map((movies) => (
//         createCards(
//             movies.title,
//             movies.poster_path,
//             movies.vote_average,
//             movies.overview,
//             movies.id,

//         )
//     ))
// });


// const createCards = (title, poster_path, vote_average, overview, id) => {
//     const divEl = c("div");
//     const h3El = c("h3");
//     const descriptionEl = c("p");
//     const imgEl = c("img");





// }


const showMovies = ((data) => {
    main.innerHTML = "";


    main.innerHTML = data.map(movie => {
        console.log(movie)

        const { title, poster_path, vote_average, overview, id } = movie;
        const movieEl = create("div")
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <img class="poster"  src="${imgUrl+poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <div class="vote">${vote_average}</div>
        </div>
        <div class="overview">
            <p>${overview}</p>
        </div>
        `
        main.appendChild(movieEl)
    }).join("");



})