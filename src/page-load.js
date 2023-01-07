import loadHome from './home';

const contentDiv = document.querySelector('#content');

export default function loadPage() {
  console.log('page-load.js called');

  createHeader();
  loadHome();
}

function createHeader() {
  // Restaurant name
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "Maria's Restaurant";

  // Home Menu Contact
  const nav = document.createElement('nav');
  const pageList = document.createElement('ul');
  const home = document.createElement('li');
  const menu = document.createElement('li');
  const contact = document.createElement('li');

  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  pageList.append(home, menu, contact);
  nav.appendChild(pageList);

  // header.appendChild(restaurantName);
  header.appendChild(nav);

  contentDiv.appendChild(header);
}
