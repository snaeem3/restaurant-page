import restaurantImgSrc from './images/restaurant1.jpg';
const contentDiv = document.querySelector('#content');

export default function loadPage() {
    console.log('page-load.js called');

    const restaurantImg = new Image();
    restaurantImg.src = restaurantImgSrc;
    createHeader();
    contentDiv.appendChild(restaurantImg);
}

function createHeader() {
    const header  = document.createElement('header');
    const restaurantHeader = document.createElement('h1');
    restaurantHeader.textContent = "Maria's Restaurant";
    header.appendChild(restaurantHeader);
    contentDiv.appendChild(header);
}