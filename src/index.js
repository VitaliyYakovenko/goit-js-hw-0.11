import Notiflix from 'notiflix';
import { getImages } from './js/rest-api';
import createMarkup from "./js/createMarkup";
import createButton from './js/createButton';
import initializeLightbox from "./js/simpleLightbox";
const formEl = document.querySelector(".search-form");
const rootImages = document.querySelector(".gallery");
const buttonContainerEl = document.querySelector(".button-container");
const buttonEl = createButton();
let query = "";
let page = 1;
let maxLength = 0;
let counter = 20;
formEl.addEventListener("submit", onSeacrh);



function onSeacrh(e) {
    e.preventDefault();
    page = 1;
    query = e.target.elements[0].value.trim();
    rootImages.innerHTML = "";

    getImages(query).then((data) => {
        maxLength = data.totalHits;

        if (query === "") {
            buttonContainerEl.innerHTML = "";
            Notiflix.Notify.failure('Please try entering another word.');
            return
        }

    
        if (maxLength === 0)  {
            buttonContainerEl.innerHTML = "";
            Notiflix.Notify.failure('Please try entering another word.');
            return;
        };

        Notiflix.Notify.success(`Found ${data.totalHits} articles`);

        if (maxLength <= 20) {
            buttonContainerEl.innerHTML = "";
        } else {
           buttonContainerEl.appendChild(buttonEl);
           buttonEl.addEventListener("click", onLoadMore);
        };
        
        const markup = createMarkup(data.hits);
        rootImages.insertAdjacentHTML("beforeend", markup);
        initializeLightbox();
    })
    .finally(formEl.reset());
};


function onLoadMore() {
    page += 1;
    buttonEl.textContent = "Loading...";
    buttonEl.classList.add("loading");
    buttonEl.disabled = true;

    
    getImages(query, page).then((data) => {
        const markup = createMarkup(data.hits);
        rootImages.insertAdjacentHTML("beforeend", markup);

        counter += 20;
        
        if (counter >= maxLength) {
          buttonContainerEl.innerHTML = "";
        }
       
          initializeLightbox();
    }).finally(() => {
        buttonEl.textContent = "Load more";
        buttonEl.disabled = false;
         buttonEl.classList.remove("loading");
    });
};
