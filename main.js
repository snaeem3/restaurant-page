/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
const contentDiv = document.querySelector('#content');

function loadContact() {
  loadHeader();
  loadContactInfo();
  loadContactForm();
}

function loadHeader() {
  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact Us Today!';
  contentDiv.appendChild(contactHeader);
}

function loadContactInfo() {
  const contactInfoDiv = document.createElement('div');
  const emailAddress = document.createElement('p');
  const phoneNumber = document.createElement('p');

  emailAddress.textContent = 'Email: ralphsrestaurant@email.com';
  phoneNumber.textContent = 'Phone Number: (100)-123-4567';

  contactInfoDiv.append(emailAddress, phoneNumber);
  contentDiv.appendChild(contactInfoDiv);
}

function loadContactForm() {
  const contactForm = document.createElement('form');

  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'nameInput', 'nameInput', 'Name');

  const emailInput = document.createElement('input');
  setInputValues(emailInput, 'email', 'emailInput', 'emailInput', 'Email');

  const phoneNumberInput = document.createElement('input');
  setInputValues(
    phoneNumberInput,
    'tel',
    'phoneNumberInput',
    'phoneNumberInput',
    'Phone Number'
  );

  const subjectInput = document.createElement('select');
  subjectInput.setAttribute('name', 'subjectInput');
  const subjectPlaceholder = document.createElement('option');
  subjectPlaceholder.selected = true;
  subjectPlaceholder.disabled = true;
  subjectPlaceholder.value = '';
  subjectPlaceholder.text = 'What would contact us about?';
  subjectInput.appendChild(subjectPlaceholder);
  const subjectOptions = ['General', 'Press', 'Jobs'];
  subjectOptions.forEach((subjectOption) => {
    const currentSubject = document.createElement('option');
    currentSubject.value = subjectOption;
    currentSubject.textContent = subjectOption;
    subjectInput.appendChild(currentSubject);
  });

  const messageInput = document.createElement('input');
  setInputValues(
    messageInput,
    'text',
    'messageInput',
    'messageInput',
    'Your Message'
  );

  contactForm.append(
    nameInput,
    emailInput,
    phoneNumberInput,
    subjectInput,
    messageInput
  );
  contentDiv.appendChild(contactForm);

  function setInputValues(input, type, name, id, placeholder) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
  }
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant1.jpg */ "./src/images/restaurant1.jpg");


const contentDiv = document.querySelector('#content');

function loadHome() {
  loadImg();
  loadDescription();
  // loadReviews();
  loadRestaurantHours();
  loadLocation();
}

function loadImg() {
  const restaurantImg = new Image();
  restaurantImg.src = _images_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_0__;
  contentDiv.appendChild(restaurantImg);
}

function loadDescription() {
  const descriptionText = document.createElement('p');
  descriptionText.textContent =
    "We welcome you to Ralph's restaurant with locations all over the tri-state area. Since 2002, our restaurants have been serving award-winning food and drinks to give our customers an outstanding experience. We cannot wait to serve you!";
  contentDiv.appendChild(descriptionText);
}

function loadRestaurantHours() {
  const hoursHeader = document.createElement('h2');
  hoursHeader.textContent = 'Hours';

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

  contentDiv.append(hoursHeader, hoursTable);

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

function loadLocation() {
  const locationHeader = document.createElement('h2');
  locationHeader.textContent = 'Address';
  const address = document.createElement('p');
  address.innerText = '123 Main St \nNew Fork City, New York \n10234';

  contentDiv.append(locationHeader, address);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
const contentDiv = document.querySelector('#content');

function loadMenu() {
  //   const appetizers = [
  //     ['Fried Calamari', 9],
  //     ['Garlic Bread', 6],
  //     ['Nachos', 7],
  //   ];
  //   const entrees = [
  //     ['Steak', 21],
  //     ['Spaghetti and Meatballs', 16],
  //     ['Burrito', 11],
  //   ];

  const menuItems = [
    {
      name: 'Fried Calamari',
      cost: 9,
      description: 'Crispy, beer-battered fried calamari',
      category: 'Appetizer',
    },
    {
      name: 'Garlic Bread',
      cost: 6,
      description:
        'Cheesy delicious garlic bread made from fresh home-made bread',
      category: 'Appetizer',
    },
    {
      name: 'Steak',
      cost: 21,
      description: 'Sizzling steak',
      category: 'Entree',
    },
    {
      name: 'Hamburger',
      cost: 16,
      description: 'Juicy burger',
      category: 'Entree',
    },
    {
      name: 'Chocolate Cake',
      cost: 10,
      description: "A decadent, moist chocolate lover's dream",
      category: 'Dessert',
    },
    {
      name: 'Pumpkin Pie',
      cost: 9,
      description: 'A smooth fall-spiced pumpkin pie',
      category: 'Dessert',
    },
  ];

  // Sort menu items by category alphabetically
  // menuItems.sort((a, b) =>
  //   a.category > b.category ? 1 : b.category > a.category ? -1 : 0
  // );

  const categories = [];
  let currentCategory = menuItems[0].category;
  let currentCategoryDiv = document.createElement('div');
  let currentCategoryHeader = document.createElement('h2');

  currentCategoryDiv.setAttribute('id', currentCategory);
  currentCategoryHeader.textContent = currentCategory;
  for (let i = 0; i < menuItems.length; i++) {
    const menuItemDiv = document.createElement('div');
    const menuItemName = document.createElement('h3');
    const menuItemDescription = document.createElement('p');
    const menuItemCost = document.createElement('p');

    menuItemName.textContent = menuItems[i].name;
    menuItemDescription.textContent = menuItems[i].description;
    menuItemCost.textContent = menuItems[i].cost;

    menuItemDiv.append(menuItemName, menuItemDescription, menuItemCost);

    // create new category
    if (menuItems[i].category !== currentCategory) {
      contentDiv.append(currentCategoryHeader, currentCategoryDiv);
      currentCategory = menuItems[i].category;
      currentCategoryDiv = document.createElement('div');
      currentCategoryHeader = document.createElement('h2');
      currentCategoryDiv.setAttribute('id', currentCategory);
      currentCategoryHeader.textContent = currentCategory;
    }
    currentCategoryDiv.appendChild(menuItemDiv);
  }
  contentDiv.append(currentCategoryHeader, currentCategoryDiv);
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const contentDiv = document.querySelector('#content');

function loadPage() {
  console.log('page-load.js called');

  createHeader();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // loadMenu();
}

function createHeader() {
  // Restaurant name
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "Ralph's Restaurant";

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

  document.body.insertBefore(header, contentDiv);

  home.addEventListener('click', () => {
    clearContents();
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  menu.addEventListener('click', () => {
    clearContents();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  contact.addEventListener('click', () => {
    clearContents();
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
}

function clearContents() {
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild);
  }
}


/***/ }),

/***/ "./src/images/restaurant1.jpg":
/*!************************************!*\
  !*** ./src/images/restaurant1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5535ec84b985932df46c.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");
// console.log('Hello world');


(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGd0Q7O0FBRXhEOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDZDQUE2QztBQUM3QyxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUY4QjtBQUNBO0FBQ007O0FBRXBDOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNtQzs7QUFFbkMsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBsb2FkSGVhZGVyKCk7XG4gIGxvYWRDb250YWN0SW5mbygpO1xuICBsb2FkQ29udGFjdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyBUb2RheSEnO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdEluZm8oKSB7XG4gIGNvbnN0IGNvbnRhY3RJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgZW1haWxBZGRyZXNzLnRleHRDb250ZW50ID0gJ0VtYWlsOiByYWxwaHNyZXN0YXVyYW50QGVtYWlsLmNvbSc7XG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJ1Bob25lIE51bWJlcjogKDEwMCktMTIzLTQ1NjcnO1xuXG4gIGNvbnRhY3RJbmZvRGl2LmFwcGVuZChlbWFpbEFkZHJlc3MsIHBob25lTnVtYmVyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SW5mb0Rpdik7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMobmFtZUlucHV0LCAndGV4dCcsICduYW1lSW5wdXQnLCAnbmFtZUlucHV0JywgJ05hbWUnKTtcblxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMoZW1haWxJbnB1dCwgJ2VtYWlsJywgJ2VtYWlsSW5wdXQnLCAnZW1haWxJbnB1dCcsICdFbWFpbCcpO1xuXG4gIGNvbnN0IHBob25lTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhcbiAgICBwaG9uZU51bWJlcklucHV0LFxuICAgICd0ZWwnLFxuICAgICdwaG9uZU51bWJlcklucHV0JyxcbiAgICAncGhvbmVOdW1iZXJJbnB1dCcsXG4gICAgJ1Bob25lIE51bWJlcidcbiAgKTtcblxuICBjb25zdCBzdWJqZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJqZWN0SW5wdXQnKTtcbiAgY29uc3Qgc3ViamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIudGV4dCA9ICdXaGF0IHdvdWxkIGNvbnRhY3QgdXMgYWJvdXQ/JztcbiAgc3ViamVjdElucHV0LmFwcGVuZENoaWxkKHN1YmplY3RQbGFjZWhvbGRlcik7XG4gIGNvbnN0IHN1YmplY3RPcHRpb25zID0gWydHZW5lcmFsJywgJ1ByZXNzJywgJ0pvYnMnXTtcbiAgc3ViamVjdE9wdGlvbnMuZm9yRWFjaCgoc3ViamVjdE9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY3VycmVudFN1YmplY3QudmFsdWUgPSBzdWJqZWN0T3B0aW9uO1xuICAgIGN1cnJlbnRTdWJqZWN0LnRleHRDb250ZW50ID0gc3ViamVjdE9wdGlvbjtcbiAgICBzdWJqZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY3VycmVudFN1YmplY3QpO1xuICB9KTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhcbiAgICBtZXNzYWdlSW5wdXQsXG4gICAgJ3RleHQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdZb3VyIE1lc3NhZ2UnXG4gICk7XG5cbiAgY29udGFjdEZvcm0uYXBwZW5kKFxuICAgIG5hbWVJbnB1dCxcbiAgICBlbWFpbElucHV0LFxuICAgIHBob25lTnVtYmVySW5wdXQsXG4gICAgc3ViamVjdElucHV0LFxuICAgIG1lc3NhZ2VJbnB1dFxuICApO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcblxuICBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlcyhpbnB1dCwgdHlwZSwgbmFtZSwgaWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgcmVzdGF1cmFudEltZ1NyYyBmcm9tICcuL2ltYWdlcy9yZXN0YXVyYW50MS5qcGcnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGxvYWRJbWcoKTtcbiAgbG9hZERlc2NyaXB0aW9uKCk7XG4gIC8vIGxvYWRSZXZpZXdzKCk7XG4gIGxvYWRSZXN0YXVyYW50SG91cnMoKTtcbiAgbG9hZExvY2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWcoKSB7XG4gIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVzdGF1cmFudEltZy5zcmMgPSByZXN0YXVyYW50SW1nU3JjO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xufVxuXG5mdW5jdGlvbiBsb2FkRGVzY3JpcHRpb24oKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID1cbiAgICBcIldlIHdlbGNvbWUgeW91IHRvIFJhbHBoJ3MgcmVzdGF1cmFudCB3aXRoIGxvY2F0aW9ucyBhbGwgb3ZlciB0aGUgdHJpLXN0YXRlIGFyZWEuIFNpbmNlIDIwMDIsIG91ciByZXN0YXVyYW50cyBoYXZlIGJlZW4gc2VydmluZyBhd2FyZC13aW5uaW5nIGZvb2QgYW5kIGRyaW5rcyB0byBnaXZlIG91ciBjdXN0b21lcnMgYW4gb3V0c3RhbmRpbmcgZXhwZXJpZW5jZS4gV2UgY2Fubm90IHdhaXQgdG8gc2VydmUgeW91IVwiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZXN0YXVyYW50SG91cnMoKSB7XG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IGhvdXJzQXJyYXkgPSBbXG4gICAgWydNb25kYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydUdWVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnV2VkbmVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnVGh1cnNkYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydGcmlkYXknLCAnNDowMCBQTSAtIDExOjAwIFBNJ10sXG4gICAgWydTYXR1cmRheScsICc0OjAwIFBNIC0gMTE6MDAgUE0nXSxcbiAgICBbJ1N1bmRheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgXTtcblxuICBjb25zdCBob3Vyc1RhYmxlID0gYXJyYXlUb1RhYmxlKGhvdXJzQXJyYXkpO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kKGhvdXJzSGVhZGVyLCBob3Vyc1RhYmxlKTtcblxuICBmdW5jdGlvbiBhcnJheVRvVGFibGUodGFibGVEYXRhKSB7XG4gICAgY29uc3QgdGFibGVSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRhYmxlUmVzdWx0Lmluc2VydFJvdygtMSk7IC8vIEluc2VydCByb3cgYXQgZW5kIG9mIHRhYmxlXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhYmxlRGF0YVtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoaik7XG4gICAgICAgIGNvbnN0IGNlbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGFibGVEYXRhW2ldW2pdKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsVGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYmxlUmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRMb2NhdGlvbigpIHtcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdBZGRyZXNzJztcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzcy5pbm5lclRleHQgPSAnMTIzIE1haW4gU3QgXFxuTmV3IEZvcmsgQ2l0eSwgTmV3IFlvcmsgXFxuMTAyMzQnO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kKGxvY2F0aW9uSGVhZGVyLCBhZGRyZXNzKTtcbn1cbiIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgLy8gICBjb25zdCBhcHBldGl6ZXJzID0gW1xuICAvLyAgICAgWydGcmllZCBDYWxhbWFyaScsIDldLFxuICAvLyAgICAgWydHYXJsaWMgQnJlYWQnLCA2XSxcbiAgLy8gICAgIFsnTmFjaG9zJywgN10sXG4gIC8vICAgXTtcbiAgLy8gICBjb25zdCBlbnRyZWVzID0gW1xuICAvLyAgICAgWydTdGVhaycsIDIxXSxcbiAgLy8gICAgIFsnU3BhZ2hldHRpIGFuZCBNZWF0YmFsbHMnLCAxNl0sXG4gIC8vICAgICBbJ0J1cnJpdG8nLCAxMV0sXG4gIC8vICAgXTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0ZyaWVkIENhbGFtYXJpJyxcbiAgICAgIGNvc3Q6IDksXG4gICAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSwgYmVlci1iYXR0ZXJlZCBmcmllZCBjYWxhbWFyaScsXG4gICAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR2FybGljIEJyZWFkJyxcbiAgICAgIGNvc3Q6IDYsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0NoZWVzeSBkZWxpY2lvdXMgZ2FybGljIGJyZWFkIG1hZGUgZnJvbSBmcmVzaCBob21lLW1hZGUgYnJlYWQnLFxuICAgICAgY2F0ZWdvcnk6ICdBcHBldGl6ZXInLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1N0ZWFrJyxcbiAgICAgIGNvc3Q6IDIxLFxuICAgICAgZGVzY3JpcHRpb246ICdTaXp6bGluZyBzdGVhaycsXG4gICAgICBjYXRlZ29yeTogJ0VudHJlZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSGFtYnVyZ2VyJyxcbiAgICAgIGNvc3Q6IDE2LFxuICAgICAgZGVzY3JpcHRpb246ICdKdWljeSBidXJnZXInLFxuICAgICAgY2F0ZWdvcnk6ICdFbnRyZWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Nob2NvbGF0ZSBDYWtlJyxcbiAgICAgIGNvc3Q6IDEwLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBkZWNhZGVudCwgbW9pc3QgY2hvY29sYXRlIGxvdmVyJ3MgZHJlYW1cIixcbiAgICAgIGNhdGVnb3J5OiAnRGVzc2VydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHVtcGtpbiBQaWUnLFxuICAgICAgY29zdDogOSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBzbW9vdGggZmFsbC1zcGljZWQgcHVtcGtpbiBwaWUnLFxuICAgICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcbiAgICB9LFxuICBdO1xuXG4gIC8vIFNvcnQgbWVudSBpdGVtcyBieSBjYXRlZ29yeSBhbHBoYWJldGljYWxseVxuICAvLyBtZW51SXRlbXMuc29ydCgoYSwgYikgPT5cbiAgLy8gICBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiBiLmNhdGVnb3J5ID4gYS5jYXRlZ29yeSA/IC0xIDogMFxuICAvLyApO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IG1lbnVJdGVtc1swXS5jYXRlZ29yeTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgY3VycmVudENhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBjdXJyZW50Q2F0ZWdvcnlEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGN1cnJlbnRDYXRlZ29yeSk7XG4gIGN1cnJlbnRDYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXRlZ29yeTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZW51SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBtZW51SXRlbUNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBtZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0ubmFtZTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLmRlc2NyaXB0aW9uO1xuICAgIG1lbnVJdGVtQ29zdC50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5jb3N0O1xuXG4gICAgbWVudUl0ZW1EaXYuYXBwZW5kKG1lbnVJdGVtTmFtZSwgbWVudUl0ZW1EZXNjcmlwdGlvbiwgbWVudUl0ZW1Db3N0KTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgY2F0ZWdvcnlcbiAgICBpZiAobWVudUl0ZW1zW2ldLmNhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeUhlYWRlciwgY3VycmVudENhdGVnb3J5RGl2KTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeSA9IG1lbnVJdGVtc1tpXS5jYXRlZ29yeTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3VycmVudENhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudENhdGVnb3J5KTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXRlZ29yeTtcbiAgICB9XG4gICAgY3VycmVudENhdGVnb3J5RGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2KTtcbiAgfVxuICBjb250ZW50RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlIZWFkZXIsIGN1cnJlbnRDYXRlZ29yeURpdik7XG59XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc29sZS5sb2coJ3BhZ2UtbG9hZC5qcyBjYWxsZWQnKTtcblxuICBjcmVhdGVIZWFkZXIoKTtcbiAgbG9hZEhvbWUoKTtcbiAgLy8gbG9hZE1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAvLyBSZXN0YXVyYW50IG5hbWVcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlJhbHBoJ3MgUmVzdGF1cmFudFwiO1xuXG4gIC8vIEhvbWUgTWVudSBDb250YWN0XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBwYWdlTGlzdC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gIG5hdi5hcHBlbmRDaGlsZChwYWdlTGlzdCk7XG5cbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50RGl2KTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRzKCkge1xuICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBjb25zb2xlLmxvZygnSGVsbG8gd29ybGQnKTtcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=