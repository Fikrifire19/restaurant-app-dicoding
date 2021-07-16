const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant-title">${restaurant.name}</h2>
<picture>
  <source class="restaurant-poster lazyload" media="(max-width: 600px)" srcset="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" type="image/jpeg">
  <img class="restaurant-poster lazyload" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" />
</picture>
<div class="restaurant-info">
<h3>Information</h3>
  <h4>Kota</h4>
  <p>${restaurant.city}</p>
  <h4>Alamat</h4>
  <p>${restaurant.address}</p>
  <h4>Rating</h4>
  <p>⭐️<span>${restaurant.rating}</span></p>
</div>
<div class="restaurant-overview">
  <h3>OverView</h3>
  <h4>Description</h4>
  <p>${restaurant.description}</p>
  <p class="menu-category">Menu Category : ${restaurant.categories.map((category) => category.name)}</p>
  <p class="foods-menu">Foods Menu : ${restaurant.menus.foods.map((food) => food.name)}</p>
  <p class="drinks-menu">Drinks Menu : ${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  <h4>Reviews</h4>
  <div id="reviews" class="reviews">
    ${restaurant.customerReviews.map((customerReview) => `
      <div class="review">
        <p class="review-name">${customerReview.name}</p>
        <p class="review-content">${customerReview.review}</p>
        <p class="review-date">${customerReview.date}</p>
      </div>
    `)}
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item-header">
        <picture>
          <source class="restaurant-item-header-poster lazyload" media="(max-width: 600px)" srcset="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" type="image/jpeg">
          <img class="restaurant-item-header-poster lazyload" alt="${restaurant.name}" src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}">
        </picture>
        <div class="restaurant-item-header-city">
            <p>${restaurant.city}</p>
        </div>
    </div>
    <div class="restaurant-item-content">
        <h3>${restaurant.name}</h3>
        <p>⭐️<span class="restaurant-item-content-rating-score">${restaurant.rating}</span></p>
        <p>${restaurant.description}</p>
        <button class="restaurant-item-content-button"><a href="${`/#/detail/${restaurant.id}`}">Detail Restaurant</a>  </button>
    </div>
    </div>
`;

const createNoRestaurantFavorited = () => `
  <div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
  `;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createNoRestaurantFavorited,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
