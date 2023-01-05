// console.log('Hello world');
const contentDiv = document.querySelector('#content');
const restaurantImg = document.createElement('img');
const header  = document.createElement('header');
const restaurantHeader = document.createElement('h1');
restaurantHeader.textContent = "Ralph's Restaurant";

header.appendChild(restaurantHeader);
contentDiv.appendChild(header);