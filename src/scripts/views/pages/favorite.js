import FavoriteRestaurantIdb from '../../data/favorite-restaurant-db';
import { createNoRestaurantFavorited, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section id="content" class="content">
            <h1 class="content-heading">Favorite Restaurant</h1>
            <div id="restaurants" class="restaurants"></div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML += createNoRestaurantFavorited();
    }
  },
};

export default Favorite;
