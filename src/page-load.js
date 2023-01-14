import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import gitHubIcon from './images/github.svg';

const contentDiv = document.querySelector('#content');

export default function loadPage() {
  createHeader();
  loadHome();
  createFooter();
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

  home.addEventListener('click', (event) => {
    clearContents();
    loadHome();
    unHighlightNav();
    highlightLi(event.target);
  });
  menu.addEventListener('click', (event) => {
    clearContents();
    loadMenu();
    unHighlightNav();
    highlightLi(event.target);
  });
  contact.addEventListener('click', (event) => {
    clearContents();
    loadContact();
    unHighlightNav();
    highlightLi(event.target);
  });
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = "© 2021 Ralph's Restaurant. Site by Sameer N.";

  const githubIconImg = new Image();
  githubIconImg.src = gitHubIcon;

  const githubLink = document.createElement('a');
  githubLink.setAttribute('href', 'https://github.com/snaeem3/');
  githubLink.appendChild(githubIconImg);

  footer.append(footerText, githubLink);
  document.body.appendChild(footer);
}

function clearContents() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
}

function highlightLi(li) {
  li.setAttribute('style', 'background: var(--primary-color)');
}

function unHighlightNav() {
  const lis = document.querySelectorAll('nav li');
  lis.forEach((li) => {
    li.setAttribute('style', 'background: transparent');
  });
}
