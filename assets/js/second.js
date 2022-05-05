// const currentUrl = new URL(window.Location.href)
// console.log(currentUrl);
// const getId = currentUrl.searchParams.getId('id');
// console.log(getId);
const getId = (element) => document.getElementById(element)
const create = (element) => document.createElement(element)
const main = getId("main")



// RICHIESTA API
const getApi = async (URL) => {
 const get = await fetch(URL)
 const res = get.json()
  return res

}

let currentUrl = new URLSearchParams(document.location.search)
    // console.log(currentUrl);
const getIdUrl = currentUrl.get('id');
// console.log('getIdUrl', getIdUrl)
// // console.log(getId);

// https://api.themoviedb.org/3/movie/823625?api_key=47308f84a54b5d91b280f332b551f284
// https://api.themoviedb.org/3/movie/{getIdUrl}?api_key=47308f84a54b5d91b280f332b551f284


getApi(`https://api.themoviedb.org/3/movie/${getIdUrl}?api_key=47308f84a54b5d91b280f332b551f284`).then((data) => showMovies(data))


// CREATE CARD IN HTML

const showMovies = ((data) => {

    main.innerHTML = "";

// data === undefined ? null : data.map((movie) => movie.id)
//  data.map((movie) => {
//     console.log('movie.id', movie.id)

    // data.map((movie) => {

            const divEl = create("div")
            divEl.classList.add("movie")
            divEl.innerHTML = `
        <div class="movieCard">
        <div class="card" >

        <img class="imagin" src="${"https://image.tmdb.org/t/p/w500/"+ data?.poster_path}" alt="${data?.title}"> 
        </div>
        <div class="movieInfo">
        <h2>  ${data?.title} </h2>
        <div class="overview">
        <h3>  Trama  </h3>
        <p>   ${data?.overview}  </p>
        </div>
        </div>
        </div>

        `

            main.appendChild(divEl)
        })




showMovies()