/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant2.jpg */ "./src/images/restaurant2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant1.jpg */ "./src/images/restaurant1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/plant.svg */ "./src/images/plant.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mail.svg */ "./src/images/mail.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: #00af98;\n  --primary-color-dark: #007a6a;\n  --shade-color: #494949da;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: 2rem;\n  background: var(--primary-color);\n  font-size: 4rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  /* width: 75%; */\n  border: solid 2px black;\n}\n\n#reviews-container {\n  padding: 2rem var(--section-padding);\n  font-size: 2rem;\n  /* background: var(--primary-color-dark); */\n  background-color: #494949da;\n  background-image: radial-gradient(#00af98 1.6px, transparent 1.6px),\n    radial-gradient(#00af98 1.6px, #494949 1.6px);\n  background-size: 64px 64px;\n  background-position: 0 0, 32px 32px;\n  width: clamp(75vw, 90vw, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reviews {\n  position: relative;\n  width: 75%;\n  text-align: center;\n  margin: 0 -16px;\n  background: rgb(65, 65, 65);\n  border: solid 2px black;\n  border-radius: var(--border-radius-default);\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n}\n\n.review:not(.active) {\n  display: none;\n}\n\nblockquote::before {\n  content: open-quote;\n  font-size: 3rem;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nblockquote::after {\n  content: close-quote;\n  font-size: 3rem;\n}\n\n.author::before {\n  content: \"- \";\n}\n\n.author {\n  text-align: right;\n}\n\n.dot-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n}\n\n.dot {\n  width: 15px;\n  height: 15px;\n  background: rgb(189, 189, 189);\n  border-radius: 50%;\n}\n\n.dot:hover {\n  background: white;\n  box-shadow: 0 0 11px var(--shade-color);\n}\n\n#prev,\n#next {\n  position: absolute;\n  top: 25%;\n  padding: var(--section-padding);\n  font-weight: 700;\n  opacity: 0.7;\n}\n#prev {\n  right: 100%;\n}\n#next {\n  left: 100%;\n}\n\n#prev:hover,\n#next:hover {\n  /* box-shadow: 0 0 20px var(--shade-color); */\n  opacity: 1;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#hours-container,\n#location-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: var(--section-padding);\n}\n\n#hours-table {\n  flex: 1;\n}\n\ntd {\n  padding: 4px;\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #hours-location {\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: var(--section-padding);\n  background: black;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Raleway&display=swap\");\n\n:root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: #00af98;\n  --primary-color-dark: #007a6a;\n  --shade-color: #494949da;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: 2rem;\n  background: var(--primary-color);\n  font-size: 4rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(\"./images/restaurant2.jpg\");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(\"./images/restaurant1.jpg\");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  /* width: 75%; */\n  border: solid 2px black;\n}\n\n#reviews-container {\n  padding: 2rem var(--section-padding);\n  font-size: 2rem;\n  /* background: var(--primary-color-dark); */\n  background-color: #494949da;\n  background-image: radial-gradient(#00af98 1.6px, transparent 1.6px),\n    radial-gradient(#00af98 1.6px, #494949 1.6px);\n  background-size: 64px 64px;\n  background-position: 0 0, 32px 32px;\n  width: clamp(75vw, 90vw, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reviews {\n  position: relative;\n  width: 75%;\n  text-align: center;\n  margin: 0 -16px;\n  background: rgb(65, 65, 65);\n  border: solid 2px black;\n  border-radius: var(--border-radius-default);\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n}\n\n.review:not(.active) {\n  display: none;\n}\n\nblockquote::before {\n  content: open-quote;\n  font-size: 3rem;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nblockquote::after {\n  content: close-quote;\n  font-size: 3rem;\n}\n\n.author::before {\n  content: \"- \";\n}\n\n.author {\n  text-align: right;\n}\n\n.dot-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n}\n\n.dot {\n  width: 15px;\n  height: 15px;\n  background: rgb(189, 189, 189);\n  border-radius: 50%;\n}\n\n.dot:hover {\n  background: white;\n  box-shadow: 0 0 11px var(--shade-color);\n}\n\n#prev,\n#next {\n  position: absolute;\n  top: 25%;\n  padding: var(--section-padding);\n  font-weight: 700;\n  opacity: 0.7;\n}\n#prev {\n  right: 100%;\n}\n#next {\n  left: 100%;\n}\n\n#prev:hover,\n#next:hover {\n  /* box-shadow: 0 0 20px var(--shade-color); */\n  opacity: 1;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#hours-container,\n#location-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: var(--section-padding);\n}\n\n#hours-table {\n  flex: 1;\n}\n\ntd {\n  padding: 4px;\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #hours-location {\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(./images/mail.svg);\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(./images/phone.svg);\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: var(--section-padding);\n  background: black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
  loadHero();
  loadContactInfo();
  loadContactForm();
}
function loadHero() {
  const heroDiv = document.createElement('div');
  heroDiv.setAttribute('id', 'contact-hero');
  heroDiv.classList.add('hero');
  loadHeader(heroDiv);
  contentDiv.appendChild(heroDiv);
}

function loadHeader(parentDiv) {
  const contactHeader = document.createElement('h1');
  contactHeader.textContent = 'Contact Us Today!';
  parentDiv.appendChild(contactHeader);
  contactHeader.setAttribute('id', 'contact-header');
}

function loadContactInfo() {
  const contactInfoDiv = document.createElement('div');
  contactInfoDiv.setAttribute('id', 'contact-info');
  const emailAddress = document.createElement('a');
  emailAddress.setAttribute('id', 'contact-email-address');
  const phoneNumber = document.createElement('p');
  phoneNumber.setAttribute('id', 'contact-phone-number');

  emailAddress.href = 'mailto:ralphsrestaurant@example.com';
  emailAddress.textContent = 'ralphsrestaurant@example.com';
  phoneNumber.textContent = '(100)-123-4567';

  contactInfoDiv.append(emailAddress, phoneNumber);
  contentDiv.appendChild(contactInfoDiv);
}

function loadContactForm() {
  const contactForm = document.createElement('form');
  contactForm.setAttribute('id', 'contactForm');

  const contactDescription = document.createElement('p');
  contactDescription.setAttribute('id', 'contact-description');
  contactDescription.textContent =
    'Please send us a message and we will get back to you as soon as we can! Thank you.';

  const nameInput = document.createElement('input');
  setInputValues(nameInput, 'text', 'nameInput', 'nameInput', 'Name');

  const nameLabel = createLabel('Name ', nameInput);

  const emailInput = document.createElement('input');
  setInputValues(emailInput, 'email', 'emailInput', 'emailInput', 'Email');

  const emailLabel = createLabel('Email ', emailInput);

  const phoneNumberInput = document.createElement('input');
  setInputValues(
    phoneNumberInput,
    'tel',
    'phoneNumberInput',
    'phoneNumberInput',
    'Phone Number'
  );

  const phoneNumberLabel = createLabel('Phone Number ', phoneNumberInput);

  // Subject Input
  const subjectInput = document.createElement('select');
  subjectInput.setAttribute('name', 'subjectInput');
  const subjectPlaceholder = document.createElement('option');
  subjectPlaceholder.selected = true;
  subjectPlaceholder.disabled = true;
  subjectPlaceholder.value = '';
  subjectPlaceholder.text = 'What would you like to contact us about?';
  subjectInput.appendChild(subjectPlaceholder);
  const subjectOptions = ['General', 'Press', 'Jobs'];
  subjectOptions.forEach((subjectOption) => {
    const currentSubject = document.createElement('option');
    currentSubject.value = subjectOption;
    currentSubject.textContent = subjectOption;
    subjectInput.appendChild(currentSubject);
  });

  const subjectLabel = createLabel(subjectPlaceholder.text, subjectInput);

  const messageInput = document.createElement('textarea');
  setInputValues(
    messageInput,
    'text',
    'messageInput',
    'messageInput',
    'Your Message'
  );

  const messageLabel = createLabel('Your Message ', messageInput);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.textContent = 'Submit';

  // Prevent reload on submit button click
  contactForm.onsubmit = (e) => {
    e.preventDefault();
  };

  nameLabel.append(nameInput);

  contactForm.append(
    contactDescription,
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    phoneNumberLabel,
    phoneNumberInput,
    subjectLabel,
    subjectInput,
    messageLabel,
    messageInput,
    submitBtn
  );

  contentDiv.appendChild(contactForm);

  function setInputValues(input, type, name, id, placeholder) {
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder);
  }

  function createLabel(text, inputName) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = inputName;
    return label;
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
/* harmony import */ var _reviewQuotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewQuotes */ "./src/reviewQuotes.js");



const contentDiv = document.querySelector('#content');

function loadHome() {
  loadHero();
  loadReviews();
  loadHoursAndLocation();
}

function loadImg() {
  const restaurantImg = new Image();
  restaurantImg.src = _images_restaurant1_jpg__WEBPACK_IMPORTED_MODULE_0__;
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

  for (let i = 0; i < _reviewQuotes__WEBPACK_IMPORTED_MODULE_1__.reviewQuotes.length; i++) {
    reviewsDiv.appendChild(
      createReview(_reviewQuotes__WEBPACK_IMPORTED_MODULE_1__.reviewQuotes[i].text, _reviewQuotes__WEBPACK_IMPORTED_MODULE_1__.reviewQuotes[i].author, i)
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
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


const contentDiv = document.querySelector('#content');

function loadMenu() {
  // Sort menu items by category alphabetically
  // menuItems.sort((a, b) =>
  //   a.category > b.category ? 1 : b.category > a.category ? -1 : 0
  // );
  const menuDiv = document.createElement('div');
  menuDiv.setAttribute('id', 'menu');

  const categories = [];
  let currentCategory = _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[0].category;
  let currentCategoryDiv = document.createElement('div');
  let currentCategoryHeader = document.createElement('h2');

  currentCategoryHeader.textContent = currentCategory;

  currentCategoryDiv.append(currentCategoryHeader);

  currentCategoryDiv.setAttribute('id', currentCategory);
  currentCategoryDiv.classList.add('category');
  currentCategoryHeader.classList.add('category-header');

  for (let i = 0; i < _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems.length; i++) {
    const menuItemDiv = document.createElement('div');
    const menuItemName = document.createElement('h3');
    const menuItemDescription = document.createElement('p');
    const menuItemCost = document.createElement('p');

    menuItemDiv.classList.add('menu-item');
    menuItemName.classList.add('food-name');
    menuItemDescription.classList.add('description');
    menuItemCost.classList.add('cost');

    menuItemName.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].name;
    menuItemDescription.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].description;
    menuItemCost.textContent = _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].cost;

    if (_menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].vegetarian) {
      menuItemName.classList.add('vegetarian');
    }
    menuItemDiv.append(menuItemName, menuItemDescription, menuItemCost);

    // create new category
    if (_menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].category !== currentCategory) {
      menuDiv.append(currentCategoryDiv);
      currentCategory = _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[i].category;
      currentCategoryDiv = document.createElement('div');
      currentCategoryHeader = document.createElement('h2');
      currentCategoryHeader.textContent = currentCategory;

      currentCategoryDiv.append(currentCategoryHeader);

      currentCategoryDiv.setAttribute('id', currentCategory);
      currentCategoryDiv.classList.add('category');
      currentCategoryHeader.classList.add('category-header');
    }
    currentCategoryDiv.append(menuItemDiv);
  }
  menuDiv.append(currentCategoryDiv);

  const iconLegend = document.createElement('div');
  iconLegend.setAttribute('id', 'iconLegend');
  const vegIconLegend = document.createElement('p');
  vegIconLegend.setAttribute('id', 'vegIconLegend');
  vegIconLegend.textContent = 'Vegetarian';

  iconLegend.append(vegIconLegend);

  const foodDisclaimer = document.createElement('em');
  foodDisclaimer.setAttribute('id', 'food-disclaimer');
  foodDisclaimer.textContent =
    'Consuming raw or undercooked foods may increase your risk of food bourne illness';
  menuDiv.append(iconLegend, foodDisclaimer);
  contentDiv.append(menuDiv);
}


/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
const menuItems = [
  {
    name: 'Fried Calamari',
    cost: 9,
    description: 'Crispy, beer-battered fried calamari',
    category: 'Appetizer',
    vegetarian: false,
  },
  {
    name: 'Garlic Bread',
    cost: 6,
    description:
      'Cheesy delicious garlic bread made from fresh home-made bread',
    category: 'Appetizer',
    vegetarian: true,
  },
  {
    name: 'Steak',
    cost: 21,
    description: 'Sizzling steak',
    category: 'Entree',
    vegetarian: false,
  },
  {
    name: 'Hamburger',
    cost: 16,
    description: 'Juicy burger',
    category: 'Entree',
    vegetarian: false,
  },
  {
    name: 'Chocolate Cake',
    cost: 10,
    description: "A decadent, moist chocolate lover's dream",
    category: 'Dessert',
    vegetarian: true,
  },
  {
    name: 'Pumpkin Pie',
    cost: 9,
    description: 'A smooth fall-spiced pumpkin pie',
    category: 'Dessert',
    vegetarian: true,
  },
];


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
/* harmony import */ var _images_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/github.svg */ "./src/images/github.svg");





const contentDiv = document.querySelector('#content');

function loadPage() {
  createHeader();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    unHighlightNav();
    highlightLi(event.target);
  });
  menu.addEventListener('click', (event) => {
    clearContents();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    unHighlightNav();
    highlightLi(event.target);
  });
  contact.addEventListener('click', (event) => {
    clearContents();
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    unHighlightNav();
    highlightLi(event.target);
  });
}

function createFooter() {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.textContent = "© 2021 Ralph's Restaurant. Site by Sameer N.";

  const githubIconImg = new Image();
  githubIconImg.src = _images_github_svg__WEBPACK_IMPORTED_MODULE_3__;

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


/***/ }),

/***/ "./src/reviewQuotes.js":
/*!*****************************!*\
  !*** ./src/reviewQuotes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reviewQuotes": () => (/* binding */ reviewQuotes)
/* harmony export */ });
const reviewQuotes = [
  {
    text: "The best food I've ever eaten!",
    rating: 5,
    author: 'Bill G.',
  },
  {
    text: "Ralph's restaurant is my home away from home!",
    rating: 5,
    author: 'Jeff B.',
  },
  {
    text: 'Friendly staff and excellent service!',
    rating: 5,
    author: 'Elon M.',
  },
];


/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67300fa5fcd6e65b14bf.svg";

/***/ }),

/***/ "./src/images/mail.svg":
/*!*****************************!*\
  !*** ./src/images/mail.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eee1baa73917a6ad8cc5.svg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22904118b466d50710a6.svg";

/***/ }),

/***/ "./src/images/plant.svg":
/*!******************************!*\
  !*** ./src/images/plant.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f4f8cec05667c917d2b.svg";

/***/ }),

/***/ "./src/images/restaurant1.jpg":
/*!************************************!*\
  !*** ./src/images/restaurant1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee623a1e96abf17d0dd4.jpg";

/***/ }),

/***/ "./src/images/restaurant2.jpg":
/*!************************************!*\
  !*** ./src/images/restaurant2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9934ce261ef860ffe67.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQW9DLHNCQUFzQixHQUFHLFNBQVMsaUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNiOztBQUV0QixzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXZpZXdRdW90ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BsYW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1zaGFkb3c6IGdyZXk7XFxuICAtLXNlY3Rpb24tcGFkZGluZzogOHB4O1xcbiAgLS1zZWN0aW9uLW1hcmdpbjogOHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQ6IDAuNzVyZW07XFxuICAtLXByaW1hcnktY29sb3I6ICMwMGFmOTg7XFxuICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwN2E2YTtcXG4gIC0tc2hhZGUtY29sb3I6ICM0OTQ5NDlkYTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgY2FsYyh2YXIoLS1zZWN0aW9uLXBhZGRpbmcpICogMik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgNjUsIDY1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDNweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxubGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSAycmVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbm5hdiBsaTpmb2N1cyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMjAwcHggdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtaGVybyBidXR0b24ge1xcbiAgLyogd2lkdGg6IDc1JTsgKi9cXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4jcmV2aWV3cy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMnJlbSB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDlkYTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjMDBhZjk4IDEuNnB4LCB0cmFuc3BhcmVudCAxLjZweCksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgjMDBhZjk4IDEuNnB4LCAjNDk0OTQ5IDEuNnB4KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjRweCA2NHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAzMnB4IDMycHg7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmV2aWV3cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNzUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIC0xNnB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCA2NSwgNjUpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbn1cXG5cXG4ucmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbi5yZXZpZXc6bm90KC5hY3RpdmUpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBvcGVuLXF1b3RlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5ibG9ja3F1b3RlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuYmxvY2txdW90ZTo6YWZ0ZXIge1xcbiAgY29udGVudDogY2xvc2UtcXVvdGU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5hdXRob3I6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbn1cXG5cXG4uYXV0aG9yIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uZG90LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJhY2tncm91bmQ6IHJnYigxODksIDE4OSwgMTg5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmRvdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHZhcigtLXNoYWRlLWNvbG9yKTtcXG59XFxuXFxuI3ByZXYsXFxuI25leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNSU7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuI3ByZXYge1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbiNuZXh0IHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbiNwcmV2OmhvdmVyLFxcbiNuZXh0OmhvdmVyIHtcXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLXNoYWRlLWNvbG9yKTsgKi9cXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNob3Vycy1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI5LCAyOSwgMjkpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxufVxcblxcbiNob3Vycy1jb250YWluZXIsXFxuI2xvY2F0aW9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxufVxcblxcbiNob3Vycy10YWJsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG50ZCB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiNtZW51IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB3aWR0aDogY2xhbXAoNTAwcHgsIDkwdncsIDUwdncpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7ICovXFxufVxcblxcbi5jYXRlZ29yeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG59XFxuXFxuLmZvb2QtbmFtZSBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi52ZWdldGFyaWFuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNpY29uTGVnZW5kIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBib3JkZXItdG9wOiBkb3VibGUgNHB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEuNXJlbSAxLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG1hcmdpbjogMCB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMiAqIHZhcigtLXNlY3Rpb24tcGFkZGluZykpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAjY29udGFjdC1pbmZvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gICNob3Vycy1sb2NhdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAjcmVzdGF1cmFudC1oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxufVxcblxcbiNjb250YWN0LWluZm8gPiAqIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzIHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbiNjb250YWN0LXBob25lLW51bWJlcjo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6IFxcXCJQaG9uZSBOdW1iZXI6IFxcXCI7ICovXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2NvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jbWVzc2FnZUlucHV0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFB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cy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWNvbG9yLXNoYWRvdzogZ3JleTtcXG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA4cHg7XFxuICAtLXNlY3Rpb24tbWFyZ2luOiA4cHg7XFxuICAtLWJvcmRlci1yYWRpdXMtZGVmYXVsdDogMC43NXJlbTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzAwYWY5ODtcXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrOiAjMDA3YTZhO1xcbiAgLS1zaGFkZS1jb2xvcjogIzQ5NDk0OWRhO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSBjYWxjKHZhcigtLXNlY3Rpb24tcGFkZGluZykgKiAyKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCA2NSwgNjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgM3B4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG5saSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBsaSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpIDJyZW07XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxubmF2IGxpOmZvY3VzIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtbmFtZS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiAyMDBweCB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yZXN0YXVyYW50Mi5qcGdcXFwiKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yZXN0YXVyYW50MS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1kZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1oZXJvIGJ1dHRvbiB7XFxuICAvKiB3aWR0aDogNzUlOyAqL1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxufVxcblxcbiNyZXZpZXdzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtIHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OWRhO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMwMGFmOTggMS42cHgsIHRyYW5zcGFyZW50IDEuNnB4KSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KCMwMGFmOTggMS42cHgsICM0OTQ5NDkgMS42cHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDY0cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDMycHggMzJweDtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXZpZXdzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgLTE2cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbi5yZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLnJldmlldzpub3QoLmFjdGl2ZSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmJsb2NrcXVvdGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjphZnRlciB7XFxuICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmF1dGhvcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCItIFxcXCI7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5kb3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDE4OSwgMTg5LCAxODkpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZG90OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDExcHggdmFyKC0tc2hhZGUtY29sb3IpO1xcbn1cXG5cXG4jcHJldixcXG4jbmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1JTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4jcHJldiB7XFxuICByaWdodDogMTAwJTtcXG59XFxuI25leHQge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuI3ByZXY6aG92ZXIsXFxuI25leHQ6aG92ZXIge1xcbiAgLyogYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tc2hhZGUtY29sb3IpOyAqL1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2hvdXJzLWxvY2F0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjksIDI5LCAyOSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG59XFxuXFxuI2hvdXJzLWNvbnRhaW5lcixcXG4jbG9jYXRpb24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2hvdXJzLXRhYmxlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbnRkIHtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuI21lbnUge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgNDMsIDQzLCAwLjgyMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg1MDBweCwgOTB2dywgNTB2dyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKSAwO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI2KTsgKi9cXG59XFxuXFxuLmNhdGVnb3J5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKSAwO1xcbn1cXG5cXG4uZm9vZC1uYW1lIGltZyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnZlZ2V0YXJpYW46OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGxhbnQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEuNXJlbSAxLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI2ljb25MZWdlbmQge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJvcmRlci10b3A6IGRvdWJsZSA0cHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbiN2ZWdJY29uTGVnZW5kIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxufVxcblxcbiN2ZWdJY29uTGVnZW5kOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wbGFudC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS41cmVtIDEuNXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbWFyZ2luOiAwIHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxuI2NvbnRhY3QtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNjb250YWN0LWluZm8ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICNjb250YWN0LWluZm8ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgI2hvdXJzLWxvY2F0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gICNyZXN0YXVyYW50LWhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAjcmVzdGF1cmFudC1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIH1cXG59XFxuXFxuI2NvbnRhY3QtaW5mbyA+ICoge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbmE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb250YWN0LWVtYWlsLWFkZHJlc3Mge1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzOjpiZWZvcmUge1xcbiAgY29udGVudDogdXJsKC4vaW1hZ2VzL21haWwuc3ZnKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb250YWN0LWluZm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuI2NvbnRhY3QtcGhvbmUtbnVtYmVyOjpiZWZvcmUge1xcbiAgLyogY29udGVudDogXFxcIlBob25lIE51bWJlcjogXFxcIjsgKi9cXG4gIGNvbnRlbnQ6IHVybCguL2ltYWdlcy9waG9uZS5zdmcpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2NvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jbWVzc2FnZUlucHV0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgbG9hZEhlcm8oKTtcbiAgbG9hZENvbnRhY3RJbmZvKCk7XG4gIGxvYWRDb250YWN0Rm9ybSgpO1xufVxuZnVuY3Rpb24gbG9hZEhlcm8oKSB7XG4gIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVybycpO1xuICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgbG9hZEhlYWRlcihoZXJvRGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcihwYXJlbnREaXYpIHtcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyBUb2RheSEnO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gIGNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdEluZm8oKSB7XG4gIGNvbnN0IGNvbnRhY3RJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RJbmZvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbmZvJyk7XG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZW1haWxBZGRyZXNzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1lbWFpbC1hZGRyZXNzJyk7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtcGhvbmUtbnVtYmVyJyk7XG5cbiAgZW1haWxBZGRyZXNzLmhyZWYgPSAnbWFpbHRvOnJhbHBoc3Jlc3RhdXJhbnRAZXhhbXBsZS5jb20nO1xuICBlbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSAncmFscGhzcmVzdGF1cmFudEBleGFtcGxlLmNvbSc7XG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJygxMDApLTEyMy00NTY3JztcblxuICBjb250YWN0SW5mb0Rpdi5hcHBlbmQoZW1haWxBZGRyZXNzLCBwaG9uZU51bWJlcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdEZvcm0oKSB7XG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RGb3JtJyk7XG5cbiAgY29uc3QgY29udGFjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb250YWN0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWRlc2NyaXB0aW9uJyk7XG4gIGNvbnRhY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgJ1BsZWFzZSBzZW5kIHVzIGEgbWVzc2FnZSBhbmQgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4hIFRoYW5rIHlvdS4nO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNldElucHV0VmFsdWVzKG5hbWVJbnB1dCwgJ3RleHQnLCAnbmFtZUlucHV0JywgJ25hbWVJbnB1dCcsICdOYW1lJyk7XG5cbiAgY29uc3QgbmFtZUxhYmVsID0gY3JlYXRlTGFiZWwoJ05hbWUgJywgbmFtZUlucHV0KTtcblxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMoZW1haWxJbnB1dCwgJ2VtYWlsJywgJ2VtYWlsSW5wdXQnLCAnZW1haWxJbnB1dCcsICdFbWFpbCcpO1xuXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBjcmVhdGVMYWJlbCgnRW1haWwgJywgZW1haWxJbnB1dCk7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNldElucHV0VmFsdWVzKFxuICAgIHBob25lTnVtYmVySW5wdXQsXG4gICAgJ3RlbCcsXG4gICAgJ3Bob25lTnVtYmVySW5wdXQnLFxuICAgICdwaG9uZU51bWJlcklucHV0JyxcbiAgICAnUGhvbmUgTnVtYmVyJ1xuICApO1xuXG4gIGNvbnN0IHBob25lTnVtYmVyTGFiZWwgPSBjcmVhdGVMYWJlbCgnUGhvbmUgTnVtYmVyICcsIHBob25lTnVtYmVySW5wdXQpO1xuXG4gIC8vIFN1YmplY3QgSW5wdXRcbiAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHN1YmplY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3ViamVjdElucHV0Jyk7XG4gIGNvbnN0IHN1YmplY3RQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgc3ViamVjdFBsYWNlaG9sZGVyLnRleHQgPSAnV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBjb250YWN0IHVzIGFib3V0Pyc7XG4gIHN1YmplY3RJbnB1dC5hcHBlbmRDaGlsZChzdWJqZWN0UGxhY2Vob2xkZXIpO1xuICBjb25zdCBzdWJqZWN0T3B0aW9ucyA9IFsnR2VuZXJhbCcsICdQcmVzcycsICdKb2JzJ107XG4gIHN1YmplY3RPcHRpb25zLmZvckVhY2goKHN1YmplY3RPcHRpb24pID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3ViamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGN1cnJlbnRTdWJqZWN0LnZhbHVlID0gc3ViamVjdE9wdGlvbjtcbiAgICBjdXJyZW50U3ViamVjdC50ZXh0Q29udGVudCA9IHN1YmplY3RPcHRpb247XG4gICAgc3ViamVjdElucHV0LmFwcGVuZENoaWxkKGN1cnJlbnRTdWJqZWN0KTtcbiAgfSk7XG5cbiAgY29uc3Qgc3ViamVjdExhYmVsID0gY3JlYXRlTGFiZWwoc3ViamVjdFBsYWNlaG9sZGVyLnRleHQsIHN1YmplY3RJbnB1dCk7XG5cbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgc2V0SW5wdXRWYWx1ZXMoXG4gICAgbWVzc2FnZUlucHV0LFxuICAgICd0ZXh0JyxcbiAgICAnbWVzc2FnZUlucHV0JyxcbiAgICAnbWVzc2FnZUlucHV0JyxcbiAgICAnWW91ciBNZXNzYWdlJ1xuICApO1xuXG4gIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGNyZWF0ZUxhYmVsKCdZb3VyIE1lc3NhZ2UgJywgbWVzc2FnZUlucHV0KTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gIC8vIFByZXZlbnQgcmVsb2FkIG9uIHN1Ym1pdCBidXR0b24gY2xpY2tcbiAgY29udGFjdEZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBuYW1lTGFiZWwuYXBwZW5kKG5hbWVJbnB1dCk7XG5cbiAgY29udGFjdEZvcm0uYXBwZW5kKFxuICAgIGNvbnRhY3REZXNjcmlwdGlvbixcbiAgICBuYW1lTGFiZWwsXG4gICAgbmFtZUlucHV0LFxuICAgIGVtYWlsTGFiZWwsXG4gICAgZW1haWxJbnB1dCxcbiAgICBwaG9uZU51bWJlckxhYmVsLFxuICAgIHBob25lTnVtYmVySW5wdXQsXG4gICAgc3ViamVjdExhYmVsLFxuICAgIHN1YmplY3RJbnB1dCxcbiAgICBtZXNzYWdlTGFiZWwsXG4gICAgbWVzc2FnZUlucHV0LFxuICAgIHN1Ym1pdEJ0blxuICApO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gIGZ1bmN0aW9uIHNldElucHV0VmFsdWVzKGlucHV0LCB0eXBlLCBuYW1lLCBpZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LCBpbnB1dE5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxhYmVsLmh0bWxGb3IgPSBpbnB1dE5hbWU7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG4iLCJpbXBvcnQgcmVzdGF1cmFudEltZ1NyYyBmcm9tICcuL2ltYWdlcy9yZXN0YXVyYW50MS5qcGcnO1xuaW1wb3J0IHsgcmV2aWV3UXVvdGVzIH0gZnJvbSAnLi9yZXZpZXdRdW90ZXMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGxvYWRIZXJvKCk7XG4gIGxvYWRSZXZpZXdzKCk7XG4gIGxvYWRIb3Vyc0FuZExvY2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWcoKSB7XG4gIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVzdGF1cmFudEltZy5zcmMgPSByZXN0YXVyYW50SW1nU3JjO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVybygpIHtcbiAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1oZXJvJyk7XG4gIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBsb2FkRGVzY3JpcHRpb24oaGVyb0Rpdik7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3Qgb3JkZXJPbmxpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZlIGEgVGFibGUnO1xuICBvcmRlck9ubGluZUJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBPbmxpbmUnO1xuXG4gIGhlcm9EaXYuYXBwZW5kKHJlc2VydmF0aW9uQnRuLCBvcmRlck9ubGluZUJ0bik7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZERlc2NyaXB0aW9uKHBhcmVudERpdikge1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJXZSB3ZWxjb21lIHlvdSB0byBSYWxwaCdzIHJlc3RhdXJhbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdHJpLXN0YXRlIGFyZWEuIFNpbmNlIDIwMDIsIG91ciByZXN0YXVyYW50IGhhcyBiZWVuIHNlcnZpbmcgYXdhcmQtd2lubmluZyBmb29kIGFuZCBkcmlua3MgdG8gZ2l2ZSBvdXIgY3VzdG9tZXJzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIFdlIGNhbm5vdCB3YWl0IHRvIHNlcnZlIHlvdSFcIjtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgZGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1kZXNjcmlwdGlvbicpO1xufVxuXG5mdW5jdGlvbiBsb2FkUmV2aWV3cygpIHtcbiAgY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJldmlld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jldmlld3MtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJldmlld3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV2aWV3c0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jldmlld3MnKTtcbiAgY29uc3QgZG90Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb3QtY29udGFpbmVyJyk7XG4gIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIHByZXZCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Jyk7XG4gIHByZXZCdXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIG5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXZpZXdRdW90ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXZpZXdzRGl2LmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlUmV2aWV3KHJldmlld1F1b3Rlc1tpXS50ZXh0LCByZXZpZXdRdW90ZXNbaV0uYXV0aG9yLCBpKVxuICAgICk7XG4gICAgY3JlYXRlRG90KGRvdENvbnRhaW5lciwgaSk7XG4gIH1cblxuICByZXZpZXdzRGl2LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgcmV2aWV3c0Rpdi5hcHBlbmQocHJldkJ1dHRvbiwgbmV4dEJ1dHRvbik7XG4gIHJldmlld0NvbnRhaW5lci5hcHBlbmQocmV2aWV3c0RpdiwgZG90Q29udGFpbmVyKTtcbiAgY29udGVudERpdi5hcHBlbmQocmV2aWV3Q29udGFpbmVyKTtcblxuICBmdW5jdGlvbiBjcmVhdGVSZXZpZXcodGV4dCwgYXV0aG9yLCBpbmRleCkge1xuICAgIGNvbnN0IHJldmlld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0Rpdi5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGByZXZpZXctJHtpbmRleH1gKTtcblxuICAgIGNvbnN0IHJldmlld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJyk7XG4gICAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICBjb25zdCByZXZpZXdBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3QXV0aG9yLmNsYXNzTGlzdC5hZGQoJ2F1dGhvcicpO1xuICAgIHJldmlld0F1dGhvci50ZXh0Q29udGVudCA9IGF1dGhvcjtcblxuICAgIHJldmlld0Rpdi5hcHBlbmQocmV2aWV3VGV4dCwgcmV2aWV3QXV0aG9yKTtcblxuICAgIHJldHVybiByZXZpZXdEaXY7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb3QocGFyZW50Q29udGFpbmVyLCBpbmRleCkge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkb3QuY2xhc3NMaXN0LmFkZChgZG90YCk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgnaWQnLCBgZG90LSR7aW5kZXh9YCk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCk7XG5cbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNoYW5nZVNsaWRlKGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlIGNvbnRyb2xzXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2xpZGUoaW5kZXgpIHtcbiAgICBjb25zdCByZXZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldycpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaW5kZXggaXMgaW4gYm91bmRzXG4gICAgaWYgKGluZGV4ID4gcmV2aWV3cy5sZW5ndGggLSAxKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gcmV2aWV3cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHJldmlld3MuZm9yRWFjaCgocmV2aWV3KSA9PiB7XG4gICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIHJldmlld3NcbiAgICAgIHJldmlldy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IHJldmlld0luZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgIHJldmlldy5pZC5zdWJzdHJpbmcocmV2aWV3LmlkLmluZGV4T2YoJy0nKSArIDEpXG4gICAgICApO1xuXG4gICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdGVkIHJldmlld1xuICAgICAgaWYgKHJldmlld0luZGV4ID09PSBpbmRleCkge1xuICAgICAgICByZXZpZXcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50SW5kZXgoKSB7XG4gICAgY29uc3QgY3VycmVudFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICBjb25zdCBjdXJyZW50UmV2aWV3SW5kZXggPSBwYXJzZUludChcbiAgICAgIGN1cnJlbnRSZXZpZXcuaWQuc3Vic3RyaW5nKGN1cnJlbnRSZXZpZXcuaWQuaW5kZXhPZignLScpICsgMSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRSZXZpZXdJbmRleDtcbiAgfVxuXG4gIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlU2xpZGUoZ2V0Q3VycmVudEluZGV4KCkgKyAxKTtcbiAgfSk7XG5cbiAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VTbGlkZShnZXRDdXJyZW50SW5kZXgoKSAtIDEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvdXJzQW5kTG9jYXRpb24oKSB7XG4gIGNvbnN0IGhvdXJzQW5kTG9jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzQW5kTG9jRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnMtbG9jYXRpb24nKTtcbiAgbG9hZFJlc3RhdXJhbnRIb3Vycyhob3Vyc0FuZExvY0Rpdik7XG4gIGxvYWRMb2NhdGlvbihob3Vyc0FuZExvY0Rpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNBbmRMb2NEaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkUmVzdGF1cmFudEhvdXJzKHBhcmVudERpdikge1xuICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vyc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWNvbnRhaW5lcicpO1xuICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgaG91cnNIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1oZWFkZXInKTtcblxuICBjb25zdCBob3Vyc0FycmF5ID0gW1xuICAgIFsnTW9uZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnVHVlc2RheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ1dlZG5lc2RheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ1RodXJzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnRnJpZGF5JywgJzQ6MDAgUE0gLSAxMTowMCBQTSddLFxuICAgIFsnU2F0dXJkYXknLCAnNDowMCBQTSAtIDExOjAwIFBNJ10sXG4gICAgWydTdW5kYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gIF07XG5cbiAgY29uc3QgaG91cnNUYWJsZSA9IGFycmF5VG9UYWJsZShob3Vyc0FycmF5KTtcblxuICBob3Vyc1RhYmxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnMtdGFibGUnKTtcblxuICBob3Vyc0Rpdi5hcHBlbmQoaG91cnNIZWFkZXIsIGhvdXJzVGFibGUpO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuXG4gIGZ1bmN0aW9uIGFycmF5VG9UYWJsZSh0YWJsZURhdGEpIHtcbiAgICBjb25zdCB0YWJsZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGFibGVSZXN1bHQuaW5zZXJ0Um93KC0xKTsgLy8gSW5zZXJ0IHJvdyBhdCBlbmQgb2YgdGFibGVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVEYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChqKTtcbiAgICAgICAgY29uc3QgY2VsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWJsZURhdGFbaV1bal0pO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxUZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGVSZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExvY2F0aW9uKHBhcmVudERpdikge1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLWRpdicpO1xuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICBsb2NhdGlvbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLWhlYWRlcicpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3Muc2V0QXR0cmlidXRlKCdpZCcsICdhZGRyZXNzJyk7XG4gIGFkZHJlc3MuaW5uZXJUZXh0ID0gJzEyMyBNYWluIFN0IFxcbk5ldyBGb3JrIENpdHksIE5ldyBZb3JrIFxcbjEwMjM0JztcblxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgbWFwLnNyYyA9XG4gICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDExMTQxMS44Njg1NTQzNTA1ITJkLTcyLjI4NjQyMjU0NDQwNjg2ITNkNzcuMzk5MjE1MzcwNTA4ODQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGMwNWNlMjQ3YzRhMTkwMjkhMnpOemZDc0RJekp6TTRMalVpVGlBM01jS3dOVFluTURndU9DSlghNWUwITNtMiExc2VuITJzdXMhNHYxNjczNzM2NDk4MTU2ITVtMiExc2VuITJzdXMnO1xuICBsb2NhdGlvbkRpdi5hcHBlbmQobG9jYXRpb25IZWFkZXIsIGFkZHJlc3MsIG1hcCk7XG4gIHBhcmVudERpdi5hcHBlbmQobG9jYXRpb25EaXYpO1xufVxuIiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIC8vIFNvcnQgbWVudSBpdGVtcyBieSBjYXRlZ29yeSBhbHBoYWJldGljYWxseVxuICAvLyBtZW51SXRlbXMuc29ydCgoYSwgYikgPT5cbiAgLy8gICBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiBiLmNhdGVnb3J5ID4gYS5jYXRlZ29yeSA/IC0xIDogMFxuICAvLyApO1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuICBsZXQgY3VycmVudENhdGVnb3J5ID0gbWVudUl0ZW1zWzBdLmNhdGVnb3J5O1xuICBsZXQgY3VycmVudENhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGN1cnJlbnRDYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXRlZ29yeTtcblxuICBjdXJyZW50Q2F0ZWdvcnlEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeUhlYWRlcik7XG5cbiAgY3VycmVudENhdGVnb3J5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Q2F0ZWdvcnkpO1xuICBjdXJyZW50Q2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgY3VycmVudENhdGVnb3J5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWhlYWRlcicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudUl0ZW1Db3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbmFtZScpO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBtZW51SXRlbUNvc3QuY2xhc3NMaXN0LmFkZCgnY29zdCcpO1xuXG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLm5hbWU7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBtZW51SXRlbUNvc3QudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0uY29zdDtcblxuICAgIGlmIChtZW51SXRlbXNbaV0udmVnZXRhcmlhbikge1xuICAgICAgbWVudUl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ3ZlZ2V0YXJpYW4nKTtcbiAgICB9XG4gICAgbWVudUl0ZW1EaXYuYXBwZW5kKG1lbnVJdGVtTmFtZSwgbWVudUl0ZW1EZXNjcmlwdGlvbiwgbWVudUl0ZW1Db3N0KTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgY2F0ZWdvcnlcbiAgICBpZiAobWVudUl0ZW1zW2ldLmNhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgIG1lbnVEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeURpdik7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnkgPSBtZW51SXRlbXNbaV0uY2F0ZWdvcnk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50Q2F0ZWdvcnk7XG5cbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdi5hcHBlbmQoY3VycmVudENhdGVnb3J5SGVhZGVyKTtcblxuICAgICAgY3VycmVudENhdGVnb3J5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Q2F0ZWdvcnkpO1xuICAgICAgY3VycmVudENhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaGVhZGVyJyk7XG4gICAgfVxuICAgIGN1cnJlbnRDYXRlZ29yeURpdi5hcHBlbmQobWVudUl0ZW1EaXYpO1xuICB9XG4gIG1lbnVEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeURpdik7XG5cbiAgY29uc3QgaWNvbkxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uTGVnZW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWNvbkxlZ2VuZCcpO1xuICBjb25zdCB2ZWdJY29uTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB2ZWdJY29uTGVnZW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAndmVnSWNvbkxlZ2VuZCcpO1xuICB2ZWdJY29uTGVnZW5kLnRleHRDb250ZW50ID0gJ1ZlZ2V0YXJpYW4nO1xuXG4gIGljb25MZWdlbmQuYXBwZW5kKHZlZ0ljb25MZWdlbmQpO1xuXG4gIGNvbnN0IGZvb2REaXNjbGFpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgZm9vZERpc2NsYWltZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kLWRpc2NsYWltZXInKTtcbiAgZm9vZERpc2NsYWltZXIudGV4dENvbnRlbnQgPVxuICAgICdDb25zdW1pbmcgcmF3IG9yIHVuZGVyY29va2VkIGZvb2RzIG1heSBpbmNyZWFzZSB5b3VyIHJpc2sgb2YgZm9vZCBib3VybmUgaWxsbmVzcyc7XG4gIG1lbnVEaXYuYXBwZW5kKGljb25MZWdlbmQsIGZvb2REaXNjbGFpbWVyKTtcbiAgY29udGVudERpdi5hcHBlbmQobWVudURpdik7XG59XG4iLCJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogJ0ZyaWVkIENhbGFtYXJpJyxcbiAgICBjb3N0OiA5LFxuICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5LCBiZWVyLWJhdHRlcmVkIGZyaWVkIGNhbGFtYXJpJyxcbiAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgdmVnZXRhcmlhbjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR2FybGljIEJyZWFkJyxcbiAgICBjb3N0OiA2LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NoZWVzeSBkZWxpY2lvdXMgZ2FybGljIGJyZWFkIG1hZGUgZnJvbSBmcmVzaCBob21lLW1hZGUgYnJlYWQnLFxuICAgIGNhdGVnb3J5OiAnQXBwZXRpemVyJyxcbiAgICB2ZWdldGFyaWFuOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZWFrJyxcbiAgICBjb3N0OiAyMSxcbiAgICBkZXNjcmlwdGlvbjogJ1NpenpsaW5nIHN0ZWFrJyxcbiAgICBjYXRlZ29yeTogJ0VudHJlZScsXG4gICAgdmVnZXRhcmlhbjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSGFtYnVyZ2VyJyxcbiAgICBjb3N0OiAxNixcbiAgICBkZXNjcmlwdGlvbjogJ0p1aWN5IGJ1cmdlcicsXG4gICAgY2F0ZWdvcnk6ICdFbnRyZWUnLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nob2NvbGF0ZSBDYWtlJyxcbiAgICBjb3N0OiAxMCxcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRlY2FkZW50LCBtb2lzdCBjaG9jb2xhdGUgbG92ZXIncyBkcmVhbVwiLFxuICAgIGNhdGVnb3J5OiAnRGVzc2VydCcsXG4gICAgdmVnZXRhcmlhbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdW1wa2luIFBpZScsXG4gICAgY29zdDogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0Egc21vb3RoIGZhbGwtc3BpY2VkIHB1bXBraW4gcGllJyxcbiAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxuICAgIHZlZ2V0YXJpYW46IHRydWUsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGdpdEh1Ykljb24gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2Zyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGxvYWRIb21lKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIC8vIFJlc3RhdXJhbnQgbmFtZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUmFscGgncyBSZXN0YXVyYW50XCI7XG4gIHJlc3RhdXJhbnROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1uYW1lLWhlYWRlcicpO1xuXG4gIC8vIEhvbWUgTWVudSBDb250YWN0XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBwYWdlTGlzdC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gIG5hdi5hcHBlbmRDaGlsZChwYWdlTGlzdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgLy8gSW5zZXJ0IGhlYWRlciBhbmQgcmVzdGF1cmFudCBuYW1lXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudERpdik7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHJlc3RhdXJhbnROYW1lLCBjb250ZW50RGl2KTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRIb21lKCk7XG4gICAgdW5IaWdobGlnaHROYXYoKTtcbiAgICBoaWdobGlnaHRMaShldmVudC50YXJnZXQpO1xuICB9KTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkTWVudSgpO1xuICAgIHVuSGlnaGxpZ2h0TmF2KCk7XG4gICAgaGlnaGxpZ2h0TGkoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgICB1bkhpZ2hsaWdodE5hdigpO1xuICAgIGhpZ2hsaWdodExpKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCLCqSAyMDIxIFJhbHBoJ3MgUmVzdGF1cmFudC4gU2l0ZSBieSBTYW1lZXIgTi5cIjtcblxuICBjb25zdCBnaXRodWJJY29uSW1nID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Ykljb25JbWcuc3JjID0gZ2l0SHViSWNvbjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vc25hZWVtMy8nKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uSW1nKTtcblxuICBmb290ZXIuYXBwZW5kKGZvb3RlclRleHQsIGdpdGh1YkxpbmspO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0TGkobGkpIHtcbiAgbGkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKScpO1xufVxuXG5mdW5jdGlvbiB1bkhpZ2hsaWdodE5hdigpIHtcbiAgY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpJyk7XG4gIGxpcy5mb3JFYWNoKChsaSkgPT4ge1xuICAgIGxpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogdHJhbnNwYXJlbnQnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgcmV2aWV3UXVvdGVzID0gW1xuICB7XG4gICAgdGV4dDogXCJUaGUgYmVzdCBmb29kIEkndmUgZXZlciBlYXRlbiFcIixcbiAgICByYXRpbmc6IDUsXG4gICAgYXV0aG9yOiAnQmlsbCBHLicsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlJhbHBoJ3MgcmVzdGF1cmFudCBpcyBteSBob21lIGF3YXkgZnJvbSBob21lIVwiLFxuICAgIHJhdGluZzogNSxcbiAgICBhdXRob3I6ICdKZWZmIEIuJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGcmllbmRseSBzdGFmZiBhbmQgZXhjZWxsZW50IHNlcnZpY2UhJyxcbiAgICByYXRpbmc6IDUsXG4gICAgYXV0aG9yOiAnRWxvbiBNLicsXG4gIH0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=