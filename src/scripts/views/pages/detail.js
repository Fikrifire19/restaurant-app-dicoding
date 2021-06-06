import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
