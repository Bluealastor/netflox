// API TMBD
const apiKey = "api_key=47308f84a54b5d91b280f332b551f284";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500/";

// selector
const getId = (element) => document.getElementById(element)
const create = (element) => document.createElement(element)
const main = getId("main")
const tags = getId("tags")




const genres = [{
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

let selectorGen = []

// RICHIESTA API
const getApi = (URL) => {
    fetch(URL).then(res => res.json()).then(data => {
        console.log(data)
        showMovies(data)
    })
}

getApi(apiUrl)

// CREATE CARD IN HTML

const showMovies = ((data) => {
    main.innerHTML = "";

    data.results.map((movie) => {
        const { title, poster_path, overview, vote_average } = movie
        const divEl = create("div")
        divEl.classList.add("movie")
        divEl.innerHTML = `

        <a href=""movie.html"">
         <div class="card" ></div>
        <img class="imagin" src="${imgUrl+ poster_path}" alt="${title}"> 
        </div>
        <div class="movieInfo">
        <h3>  ${title} </h3>
        <p class="Stars" style="--rating: ${vote_average};" aria-label="Rating of this product is 2.3 out of 5."></p>
        </div>
        </a>

        <div class="overview">
        <h3>  Trama  </h3>
        <p>   ${overview}  </p>
        </div>
        
        `

        main.appendChild(divEl)
    }).join("")
})

// GENERES


const setGenre = (() => {

    tags.innerHTML = "";

    genres.forEach(genre => {
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.id = genre.id;
        tag.innerText = genre.name;
        tag.addEventListener("click", () => {
            if (selectorGen.length == 0) {
                selectorGen.push(genre.id);
            } else {
                if (selectorGen.includes(genre.id)) {
                    selectorGen.forEach((id, index) => {
                        if (id == genre.id) {
                            selectorGen.splice(index, 1);
                        }
                    })
                } else {
                    selectorGen.push(genre.id);
                }
            }
            // console.log(selectorGen)
            getApi(apiUrl + "&with_genres=" + encodeURI(selectorGen.join(",")))
        })

        tags.append(tag)
    })
})

setGenre()