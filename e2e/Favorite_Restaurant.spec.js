/* eslint-disable no-unused-vars */
Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty Favorite Restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('Favorite one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant-item-content-button a');

  const firstRestaurant = locate('.restaurant-item-content-button a').first();
  const firstRestaurantButton = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item-content-button');

  const favoritedRestaurant = await I.grabTextFrom('.restaurant-item-content-button');
  assert.strictEqual(firstRestaurantButton, favoritedRestaurant);
});

Scenario('Unfavorite one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item-content-button a');

  const firstRestaurant = locate('.restaurant-item-content-button a').first();
  const firstRestaurantButton = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  const unfavoriteRestaurant = await I.grabTextFrom('.restaurant-item-content-button');
  assert.strictEqual(firstRestaurantButton, unfavoriteRestaurant);
});
