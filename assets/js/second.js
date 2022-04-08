// const currentUrl = new URL(window.Location.href)
// console.log(currentUrl);
// const getId = currentUrl.searchParams.getId('id');
// console.log(getId);



// RICHIESTA API
const getApi = (URL) => {
    fetch(URL).then(res => res.json()).then(data => {
        // console.log(data)
        showMovies(data)
    })
}

getApi(apiUrl)

// CREATE CARD IN HTML

const showMovies = ((data) => {
    main.innerHTML = "";
    // const card = document.querySelectorAll(".card")

    data.results.map((movie) => {

        const { title, poster_path, overview, vote_average, id } = movie
        const currentUrl = new URL(window.Location.href)
        console.log(currentUrl);
        const getId = currentUrl.searchParams.getId('id');
        console.log(getId);
        const divEl = create("div")
        divEl.classList.add("movie")
        divEl.id = id
        divEl.innerHTML = `

        
         <div class="card " id="${id}" >
        <a href="movie.html?id=${id}">
        <img class="imagin" src="${imgUrl+ poster_path}" alt="${title}"> 
        </div>
        <div class="movieInfo">
        <h3>  ${title} </h3>
        <p class="Stars" style="--rating: ${vote_average};" aria-label="Rating of this product is 2.3 out of 5."></p>
        </a>
        </div>
    

        <div class="overview">
        <h3>  Trama  </h3>
        <p>   ${overview}  </p>
        </div>
        
        `

        main.appendChild(divEl)
    }).join("")

})