/* eslint-disable no-alert */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/web-socket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const filterContacts = (filter) => {
  filter(contacts, contactType.value === 'all' ? {} : { type: contactType.value })
    .forEach(renderContact);
};

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  import('lodash.filter')
    .then((module) => module.default)
    .then(filterContacts)
    .catch((error) => alert(error));
});
