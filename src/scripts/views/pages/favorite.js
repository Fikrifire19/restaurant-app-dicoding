import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
    const restaurants = await TheRestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;