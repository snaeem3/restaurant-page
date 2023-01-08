import restaurantImgSrc from './images/restaurant1.jpg';

const contentDiv = document.querySelector('#content');

export default function loadHome() {
  loadHero();
  // loadReviews();
  loadHoursAndLocation();
  // loadFooter();
}

function loadImg() {
  const restaurantImg = new Image();
  restaurantImg.src = restaurantImgSrc;
  contentDiv.appendChild(restaurantImg);
}

function loadHero() {
  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'restaurant-hero');
  heroDiv.classList.add('hero');
  loadDescription(heroDiv);
  contentDiv.appendChild(heroDiv);
}

function loadDescription(parentDiv) {
  const descriptionText = document.createElement('p');
  descriptionText.textContent =
    "We welcome you to Ralph's restaurant located in the heart of tri-state area. Since 2002, our restaurant has been serving award-winning food and drinks to give our customers an outstanding experience. We cannot wait to serve you!";
  parentDiv.appendChild(descriptionText);

  descriptionText.setAttribute('id', 'restaurant-description');
}

function loadHoursAndLocation() {
  const hoursAndLocDiv = document.createElement('div');
  hoursAndLocDiv.setAttribute('id', 'hours-location');
  loadRestaurantHours(hoursAndLocDiv);
  loadLocation(hoursAndLocDiv);
  contentDiv.appendChild(hoursAndLocDiv);
}

function loadRestaurantHours(parentDiv) {
  const hoursDiv = document.createElement('div');
  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';
  hoursHeader.setAttribute('id', 'hours-header');

  const hoursArray = [
    ['Monday', '4:00 PM - 10:00 PM'],
    ['Tuesday', '4:00 PM - 10:00 PM'],
    ['Wednesday', '4:00 PM - 10:00 PM'],
    ['Thursday', '4:00 PM - 10:00 PM'],
    ['Friday', '4:00 PM - 11:00 PM'],
    ['Saturday', '4:00 PM - 11:00 PM'],
    ['Sunday', '4:00 PM - 10:00 PM'],
  ];

  const hoursTable = arrayToTable(hoursArray);

  hoursTable.setAttribute('id', 'hours-table');

  hoursDiv.append(hoursHeader, hoursTable);
  parentDiv.appendChild(hoursDiv);

  function arrayToTable(tableData) {
    const tableResult = document.createElement('table');

    for (let i = 0; i < tableData.length; i++) {
      const row = tableResult.insertRow(-1); // Insert row at end of table
      for (let j = 0; j < tableData[i].length; j++) {
        const cell = row.insertCell(j);
        const cellText = document.createTextNode(tableData[i][j]);
        cell.appendChild(cellText);
      }
    }

    return tableResult;
  }
}

function loadLocation(parentDiv) {
  const locationDiv = document.createElement('div');
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Address';
  locationHeader.setAttribute('id', 'location-header');

  const address = document.createElement('p');
  address.innerText = '123 Main St \nNew Fork City, New York \n10234';

  locationDiv.append(locationHeader, address);
  parentDiv.appendChild(locationDiv);

  address.setAttribute('id', 'address');
}
