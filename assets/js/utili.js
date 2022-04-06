/********************************************
 *             UTILITIES                     *
 ********************************************/
const q = (element) => document.querySelector(element);
const c = (element) => document.createElement(element);
const qAll = (element) => document.querySelectorAll(element);

/********************************************
 *         SELECTOR HTML                    *
 ********************************************/

const box = q(".box")
const modal = q(".modal")


/********************************************
 *       FUNCTION FETCH REQUEST             *
 ********************************************/
const apiRequest = async(URL) => {
    const req = await fetch(URL);
    return await req.json();
}

/********************************************
 *            CARD CREATION                 *
 ********************************************/
// const createCard = (title, poster, id) => {
//     const divEl = c("div");
//     const h3El = c("h3");
//     const posterEl = c("img");

//     divEl.id = id

//     imgEl.setAttribute("src", poster);
//     divEl.classList.add("carts");
//     divEl.classList.add("cardMovie");
//     posterEl.classList.add("cardPoster")

//     h3El.textContent = title;
//     divEl.append(imgEl, h3El);
//     box.appendChild(divEl);
// }


export {
    q,
    qAll,
    c,
    apiRequest,
    box,
    modal,
    // createCard,
};