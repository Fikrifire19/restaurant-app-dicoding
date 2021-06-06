const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant-title">${}</h2>
<img class="restaurant-poster" src="${}" alt="${}" />
<div class="restaurant-info">
<h3>Information</h3>
  <h4>Tagline</h4>
  <p>${}</p>
  <h4>Release Date</h4>
  <p>${}</p>
  <h4>Duration</h4>
  <p>${} minutes</p>
  <h4>Rating</h4>
  <p>${}</p>
</div>
<div class="restaurant-overview">
  <h3>Overview</h3>
  <p>${}</p>
</div>
`;

const createRestaurantItemTemplate = `
    <div class="restaurant-item">
    <div class="restaurant-item-header">
        <img class="restaurant-item-header-poster" alt="${}"
            src="${}">
        <div class="restaurant-item-header-rating">
            <p>⭐️<span class="restaurant-item-header-rating-score">${}</span></p>
        </div>
    </div>
    <div class="restaurant-item-content">
        <h3><a href="${`/#/detail/${}`}">${}</a></h3>
        <p>${}</p>
    </div>
    </div>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
};