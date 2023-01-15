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

  // Photo credit
  const p = document.createElement('p');
  p.classList.add('photo-credit');
  p.textContent = 'Photo by  at ';
  const unsplashAuthor = document.createElement('a');
  unsplashAuthor.href = 'https://unsplash.com/@brodatafotografia';
  unsplashAuthor.textContent = 'Piotr Szulawski';
  const unsplashLink = document.createElement('a');
  unsplashLink.href = 'https://unsplash.com/photos/DCmUhk54F6M';
  unsplashLink.textContent = 'Unsplash';

  p.insertBefore(unsplashAuthor, p.childNodes[0].splitText(9));
  p.appendChild(unsplashLink);

  heroDiv.append(reservationBtn, orderOnlineBtn);
  heroDiv.appendChild(p);
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
  dotContainer.firstChild.classList.add('active');

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
    const dots = document.querySelectorAll('.dot');

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

    dots.forEach((dot) => {
      // Remove active class from all dots
      dot.classList.remove('active');
      const reviewIndex = parseInt(dot.id.substring(dot.id.indexOf('-') + 1));

      // Add active class to selected dot
      if (reviewIndex === index) {
        dot.classList.add('active');
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
  hoursDiv.setAttribute('id', 'hours-container');
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
  locationDiv.setAttribute('id', 'location-div');
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Address';
  locationHeader.setAttribute('id', 'location-header');

  const address = document.createElement('p');
  address.setAttribute('id', 'address');
  address.innerText = '123 Main St \nNew Fork City, New York \n10234';

  const map = document.createElement('iframe');
  map.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111411.8685543505!2d-72.28642254440686!3d77.39921537050884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc05ce247c4a19029!2zNzfCsDIzJzM4LjUiTiA3McKwNTYnMDguOCJX!5e0!3m2!1sen!2sus!4v1673736498156!5m2!1sen!2sus';
  locationDiv.append(locationHeader, address, map);
  parentDiv.append(locationDiv);
}
