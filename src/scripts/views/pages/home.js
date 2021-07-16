import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
            <picture>
              <source class="hero-image lazyload" media="(max-width: 600px)" srcset="/images/heros/hero-image-2-small.jpg" type="image/jpeg">
              <img class="hero-image lazyload" src="/images/heros/hero-image-2-large.jpg" alt="hero-image" />
            </picture>
            <div class="hero-inner">
                <h1 class="hero_title">Anda Lapar?</h1>
                <p class="hero_tagline">Ingat! Semua Orang Berhak Makan Enak!</p>
            </div>
        </div>
        <section id="content" class="content">
            <h1 class="content-heading">Explore Restaurant</h1>
            <div id="restaurants" class="restaurants"></div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.restaurantsList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
