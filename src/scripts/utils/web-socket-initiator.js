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
      title: `${restaurant.title} is on cinema!`,
      options: {
        body: restaurant.descriptions,
        image: `${restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
