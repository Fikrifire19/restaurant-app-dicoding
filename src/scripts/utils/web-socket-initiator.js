/* eslint-disable no-underscore-dangle */
import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.title}`,
      options: {
        body: restaurant.description,
        image: `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
