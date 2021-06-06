import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import data from '../data/DATA.json';

// const hamburgerButtonElement = document.querySelector("#hamburger");
// const drawerElement = document.querySelector("#drawer");
// const mainElement = document.querySelector("main"); 

// hamburgerButtonElement.addEventListener("click", event => {
//     drawerElement.classList.toggle("open");
//     event.stopPropagation();
// });

// mainElement.addEventListener("click", event => {
//     drawerElement.classList.remove("open");
//     event.stopPropagation();
// });

const getData = (data) => {
    let restaurantList = '';

    data.restaurants.map((restaurant) => {
        restaurantList += `
            <article class="restaurant-item">
                <div class="restaurant-item-image">
                    <img class="restaurant-item-thumbmail" src=${restaurant.pictureId} alt="gambar-restaurant">
                    <div id="city">${restaurant.city}</div>
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