import restaurantImgSrc from './images/restaurant1.jpg';
import { reviewQuotes } from './reviewQuotes';

const contentDiv = document.querySelector('#content');

export default function loadHome() {
  loadHero();
  loadReviews();
  loadHoursAndLocation();
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

  const reservationBtn = document.createElement('button');
  const orderOnlineBtn = document.createElement('button');

  reservationBtn.textContent = 'Reserve a Table';
  orderOnlineBtn.textContent = 'Order Online';

  heroDiv.append(reservationBtn, orderOnlineBtn);

  contentDiv.appendChild(heroDiv);
}

function loadDescription(parentDiv) {
  const descriptionText = document.createElement('p');
  descriptionText.textContent =
    "We welcome you to Ralph's restaurant located in the heart of tri-state area. Since 2002, our restaurant has been serving award-winning food and drinks to give our customers an outstanding experience. We cannot wait to serve you!";
  parentDiv.appendChild(descriptionText);

  descriptionText.setAttribute('id', 'restaurant-description');
}

function loadReviews() {
  const reviewContainer = document.createElement('div');
  reviewContainer.setAttribute('id', 'reviews-container');
  const reviewsDiv = document.createElement('div');
  reviewsDiv.setAttribute('id', 'reviews');
  const dotContainer = document.createElement('div');
  dotContainer.classList.add('dot-container');
  const prevButton = document.createElement('a');
  prevButton.setAttribute('id', 'prev');
  prevButton.textContent = '<';
  const nextButton = document.createElement('a');
  nextButton.setAttribute('id', 'next');
  nextButton.textContent = '>';

  for (let i = 0; i < reviewQuotes.length; i++) {
    reviewsDiv.appendChild(
      createReview(reviewQuotes[i].text, reviewQuotes[i].author, i)
    );
    createDot(dotContainer, i);
  }

  reviewsDiv.firstChild.classList.add('active');

  reviewsDiv.append(prevButton, nextButton);
  reviewContainer.append(reviewsDiv, dotContainer);
  contentDiv.append(reviewContainer);

  function createReview(text, author, index) {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.setAttribute('id', `review-${index}`);

    const reviewText = document.createElement('blockquote');
    reviewText.textContent = text;

    const reviewAuthor = document.createElement('p');
    reviewAuthor.classList.add('author');
    reviewAuthor.textContent = author;

    reviewDiv.append(reviewText, reviewAuthor);

    return reviewDiv;
  }

  function createDot(parentContainer, index) {
    const dot = document.createElement('a');
    dot.classList.add(`dot`);
    dot.setAttribute('id', `dot-${index}`);
    parentContainer.appendChild(dot);

    dot.addEventListener('click', (event) => {
      changeSlide(index);
    });
  }

  // Slide controls

  function changeSlide(index) {
    const reviews = document.querySelectorAll('.review');

    // Check if index is in bounds
    if (index > reviews.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = reviews.length - 1;
    }

    reviews.forEach((review) => {
      // Remove active class from all reviews
      review.classList.remove('active');
      const reviewIndex = parseInt(
        review.id.substring(review.id.indexOf('-') + 1)
      );

      // Add active class to selected review
      if (reviewIndex === index) {
        review.classList.add('active');
      }
    });
  }

  function getCurrentIndex() {
    const currentReview = document.querySelector('.active');
    const currentReviewIndex = parseInt(
      currentReview.id.substring(currentReview.id.indexOf('-') + 1)
    );

    return currentReviewIndex;
  }

  nextButton.addEventListener('click', () => {
    changeSlide(getCurrentIndex() + 1);
  });

  prevButton.addEventListener('click', () => {
    changeSlide(getCurrentIndex() - 1);
  });
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
