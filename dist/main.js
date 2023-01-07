/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    loadContact();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0Isc0JBQXNCO0FBQzFDLDZDQUE2QztBQUM3QyxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRjhCO0FBQ0E7O0FBRTlCOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDbUM7O0FBRW5DLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0YXVyYW50SW1nU3JjIGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQxLmpwZyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgbG9hZEltZygpO1xuICBsb2FkRGVzY3JpcHRpb24oKTtcbiAgLy8gbG9hZFJldmlld3MoKTtcbiAgbG9hZFJlc3RhdXJhbnRIb3VycygpO1xuICBsb2FkTG9jYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gbG9hZEltZygpIHtcbiAgY29uc3QgcmVzdGF1cmFudEltZyA9IG5ldyBJbWFnZSgpO1xuICByZXN0YXVyYW50SW1nLnNyYyA9IHJlc3RhdXJhbnRJbWdTcmM7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XG59XG5cbmZ1bmN0aW9uIGxvYWREZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvblRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiV2Ugd2VsY29tZSB5b3UgdG8gUmFscGgncyByZXN0YXVyYW50IHdpdGggbG9jYXRpb25zIGFsbCBvdmVyIHRoZSB0cmktc3RhdGUgYXJlYS4gU2luY2UgMjAwMiwgb3VyIHJlc3RhdXJhbnRzIGhhdmUgYmVlbiBzZXJ2aW5nIGF3YXJkLXdpbm5pbmcgZm9vZCBhbmQgZHJpbmtzIHRvIGdpdmUgb3VyIGN1c3RvbWVycyBhbiBvdXRzdGFuZGluZyBleHBlcmllbmNlLiBXZSBjYW5ub3Qgd2FpdCB0byBzZXJ2ZSB5b3UhXCI7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFJlc3RhdXJhbnRIb3VycygpIHtcbiAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgY29uc3QgaG91cnNBcnJheSA9IFtcbiAgICBbJ01vbmRheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ1R1ZXNkYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydXZWRuZXNkYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydUaHVyc2RheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ0ZyaWRheScsICc0OjAwIFBNIC0gMTE6MDAgUE0nXSxcbiAgICBbJ1NhdHVyZGF5JywgJzQ6MDAgUE0gLSAxMTowMCBQTSddLFxuICAgIFsnU3VuZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICBdO1xuXG4gIGNvbnN0IGhvdXJzVGFibGUgPSBhcnJheVRvVGFibGUoaG91cnNBcnJheSk7XG5cbiAgY29udGVudERpdi5hcHBlbmQoaG91cnNIZWFkZXIsIGhvdXJzVGFibGUpO1xuXG4gIGZ1bmN0aW9uIGFycmF5VG9UYWJsZSh0YWJsZURhdGEpIHtcbiAgICBjb25zdCB0YWJsZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGFibGVSZXN1bHQuaW5zZXJ0Um93KC0xKTsgLy8gSW5zZXJ0IHJvdyBhdCBlbmQgb2YgdGFibGVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVEYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChqKTtcbiAgICAgICAgY29uc3QgY2VsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWJsZURhdGFbaV1bal0pO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxUZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGVSZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExvY2F0aW9uKCkge1xuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLmlubmVyVGV4dCA9ICcxMjMgTWFpbiBTdCBcXG5OZXcgRm9yayBDaXR5LCBOZXcgWW9yayBcXG4xMDIzNCc7XG5cbiAgY29udGVudERpdi5hcHBlbmQobG9jYXRpb25IZWFkZXIsIGFkZHJlc3MpO1xufVxuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAvLyAgIGNvbnN0IGFwcGV0aXplcnMgPSBbXG4gIC8vICAgICBbJ0ZyaWVkIENhbGFtYXJpJywgOV0sXG4gIC8vICAgICBbJ0dhcmxpYyBCcmVhZCcsIDZdLFxuICAvLyAgICAgWydOYWNob3MnLCA3XSxcbiAgLy8gICBdO1xuICAvLyAgIGNvbnN0IGVudHJlZXMgPSBbXG4gIC8vICAgICBbJ1N0ZWFrJywgMjFdLFxuICAvLyAgICAgWydTcGFnaGV0dGkgYW5kIE1lYXRiYWxscycsIDE2XSxcbiAgLy8gICAgIFsnQnVycml0bycsIDExXSxcbiAgLy8gICBdO1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnRnJpZWQgQ2FsYW1hcmknLFxuICAgICAgY29zdDogOSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5LCBiZWVyLWJhdHRlcmVkIGZyaWVkIGNhbGFtYXJpJyxcbiAgICAgIGNhdGVnb3J5OiAnQXBwZXRpemVyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHYXJsaWMgQnJlYWQnLFxuICAgICAgY29zdDogNixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQ2hlZXN5IGRlbGljaW91cyBnYXJsaWMgYnJlYWQgbWFkZSBmcm9tIGZyZXNoIGhvbWUtbWFkZSBicmVhZCcsXG4gICAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU3RlYWsnLFxuICAgICAgY29zdDogMjEsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpenpsaW5nIHN0ZWFrJyxcbiAgICAgIGNhdGVnb3J5OiAnRW50cmVlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdIYW1idXJnZXInLFxuICAgICAgY29zdDogMTYsXG4gICAgICBkZXNjcmlwdGlvbjogJ0p1aWN5IGJ1cmdlcicsXG4gICAgICBjYXRlZ29yeTogJ0VudHJlZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hvY29sYXRlIENha2UnLFxuICAgICAgY29zdDogMTAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIGRlY2FkZW50LCBtb2lzdCBjaG9jb2xhdGUgbG92ZXIncyBkcmVhbVwiLFxuICAgICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQdW1wa2luIFBpZScsXG4gICAgICBjb3N0OiA5LFxuICAgICAgZGVzY3JpcHRpb246ICdBIHNtb290aCBmYWxsLXNwaWNlZCBwdW1wa2luIHBpZScsXG4gICAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxuICAgIH0sXG4gIF07XG5cbiAgLy8gU29ydCBtZW51IGl0ZW1zIGJ5IGNhdGVnb3J5IGFscGhhYmV0aWNhbGx5XG4gIC8vIG1lbnVJdGVtcy5zb3J0KChhLCBiKSA9PlxuICAvLyAgIGEuY2F0ZWdvcnkgPiBiLmNhdGVnb3J5ID8gMSA6IGIuY2F0ZWdvcnkgPiBhLmNhdGVnb3J5ID8gLTEgOiAwXG4gIC8vICk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuICBsZXQgY3VycmVudENhdGVnb3J5ID0gbWVudUl0ZW1zWzBdLmNhdGVnb3J5O1xuICBsZXQgY3VycmVudENhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGN1cnJlbnRDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudENhdGVnb3J5KTtcbiAgY3VycmVudENhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY3VycmVudENhdGVnb3J5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnVJdGVtQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5uYW1lO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgbWVudUl0ZW1Db3N0LnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLmNvc3Q7XG5cbiAgICBtZW51SXRlbURpdi5hcHBlbmQobWVudUl0ZW1OYW1lLCBtZW51SXRlbURlc2NyaXB0aW9uLCBtZW51SXRlbUNvc3QpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBjYXRlZ29yeVxuICAgIGlmIChtZW51SXRlbXNbaV0uY2F0ZWdvcnkgIT09IGN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgY29udGVudERpdi5hcHBlbmQoY3VycmVudENhdGVnb3J5SGVhZGVyLCBjdXJyZW50Q2F0ZWdvcnlEaXYpO1xuICAgICAgY3VycmVudENhdGVnb3J5ID0gbWVudUl0ZW1zW2ldLmNhdGVnb3J5O1xuICAgICAgY3VycmVudENhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY3VycmVudENhdGVnb3J5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Q2F0ZWdvcnkpO1xuICAgICAgY3VycmVudENhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY3VycmVudENhdGVnb3J5O1xuICAgIH1cbiAgICBjdXJyZW50Q2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1EaXYpO1xuICB9XG4gIGNvbnRlbnREaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeUhlYWRlciwgY3VycmVudENhdGVnb3J5RGl2KTtcbn1cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY29uc29sZS5sb2coJ3BhZ2UtbG9hZC5qcyBjYWxsZWQnKTtcblxuICBjcmVhdGVIZWFkZXIoKTtcbiAgbG9hZEhvbWUoKTtcbiAgLy8gbG9hZE1lbnUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAvLyBSZXN0YXVyYW50IG5hbWVcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlJhbHBoJ3MgUmVzdGF1cmFudFwiO1xuXG4gIC8vIEhvbWUgTWVudSBDb250YWN0XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBwYWdlTGlzdC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gIG5hdi5hcHBlbmRDaGlsZChwYWdlTGlzdCk7XG5cbiAgLy8gaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50RGl2KTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkSG9tZSgpO1xuICB9KTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRzKCkge1xuICB3aGlsZSAoY29udGVudERpdi5maXJzdENoaWxkKSB7XG4gICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBjb25zb2xlLmxvZygnSGVsbG8gd29ybGQnKTtcbmltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=