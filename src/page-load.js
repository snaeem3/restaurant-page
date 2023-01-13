import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const contentDiv = document.querySelector('#content');

export default function loadPage() {
  createHeader();
  loadHome();
}

function createHeader() {
  // Restaurant name
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "Ralph's Restaurant";
  restaurantName.setAttribute('id', 'restaurant-name-header');

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

  header.appendChild(nav);

  // Insert header and restaurant name
  document.body.insertBefore(header, contentDiv);
  document.body.insertBefore(restaurantName, contentDiv);

  home.addEventListener('click', () => {
    clearContents();
    loadHome();
  });
  menu.addEventListener('click', () => {
    clearContents();
    loadMenu();
  });
  contact.addEventListener('click', () => {
    clearContents();
    loadContact();
  });
}

function clearContents() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
}
