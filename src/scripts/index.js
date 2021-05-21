import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../data/DATA.json';

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main"); 

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

// fetch('../data/DATA.json')
//     .then((data) => data.json())
//     .then((restaurants) => getData(restaurants));
console.log(data.restaurants);

// let restaurantList = document.querySelector("#restaurant-card");

const getData = (data) => {
    let restaurantList = '';

    data.restaurants.map((restaurant) => {
        restaurantList += `
            <article class="restaurant-item">
                <div class="restaurant-item-image">
                    <button id="button-city">${restaurant.city}</button>
                    <img class="restaurant-item-thumbmail" src=${restaurant.pictureId} alt="gambar-restaurant">
                </div>
                <div class="restaurant-item-content">
                    <p class="restaurant-rating">Rating : ${restaurant.rating}</p>
                    <h2 class="restaurant-name">${restaurant.name}</h2>
                    <p class="description">${restaurant.description}</p>
                </div>
            </article>
        `

        document.getElementById("restaurant-list").innerHTML += restaurantList;
    });
};

getData(data);

console.log(getData);