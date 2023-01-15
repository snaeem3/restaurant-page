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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: #00af98;\n  --primary-color-dark: #007a6a;\n  --shade-color: #494949da;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n  text-transform: uppercase;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: 2rem;\n  background: var(--primary-color);\n  font-size: 4rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  /* width: 75%; */\n  border: solid 2px black;\n}\n\n#reviews-container {\n  padding: 2rem var(--section-padding);\n  font-size: 2rem;\n  /* background: var(--primary-color-dark); */\n  background-color: #494949da;\n  background-image: radial-gradient(#00af98 1.6px, transparent 1.6px),\n    radial-gradient(#00af98 1.6px, #494949 1.6px);\n  background-size: 64px 64px;\n  background-position: 0 0, 32px 32px;\n  width: clamp(75vw, 90vw, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reviews {\n  position: relative;\n  width: 75%;\n  text-align: center;\n  margin: 0 -16px;\n  background: rgb(65, 65, 65);\n  border: solid 2px black;\n  border-radius: var(--border-radius-default);\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n}\n\n.review:not(.active) {\n  display: none;\n}\n\nblockquote::before {\n  content: open-quote;\n  font-size: 3rem;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nblockquote::after {\n  content: close-quote;\n  font-size: 3rem;\n}\n\n.author::before {\n  content: \"- \";\n}\n\n.author {\n  text-align: right;\n}\n\n.dot-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n}\n\n.dot {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: solid 2px black;\n  background: rgb(163, 163, 163);\n  opacity: 0.8;\n}\n\n.dot.active {\n  background: white;\n  border: none;\n  opacity: 1;\n}\n\n.dot:hover {\n  background: white;\n  box-shadow: 0 0 11px var(--shade-color);\n}\n\n#prev,\n#next {\n  position: absolute;\n  top: 25%;\n  padding: var(--section-padding);\n  font-weight: 700;\n  opacity: 0.7;\n}\n#prev {\n  right: 100%;\n}\n#next {\n  left: 100%;\n}\n\n#prev:hover,\n#next:hover {\n  /* box-shadow: 0 0 20px var(--shade-color); */\n  opacity: 1;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#hours-container,\n#location-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: var(--section-padding);\n}\n\n#hours-table {\n  flex: 1;\n}\n\ntd {\n  padding: 4px;\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #hours-location {\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: var(--section-padding);\n  background: black;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Raleway&display=swap\");\n\n:root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: #00af98;\n  --primary-color-dark: #007a6a;\n  --shade-color: #494949da;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Raleway\", sans-serif;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding) calc(var(--section-padding) * 2);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n  text-transform: uppercase;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: 2rem;\n  background: var(--primary-color);\n  font-size: 4rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(\"./images/restaurant2.jpg\");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(\"./images/restaurant1.jpg\");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  /* width: 75%; */\n  border: solid 2px black;\n}\n\n#reviews-container {\n  padding: 2rem var(--section-padding);\n  font-size: 2rem;\n  /* background: var(--primary-color-dark); */\n  background-color: #494949da;\n  background-image: radial-gradient(#00af98 1.6px, transparent 1.6px),\n    radial-gradient(#00af98 1.6px, #494949 1.6px);\n  background-size: 64px 64px;\n  background-position: 0 0, 32px 32px;\n  width: clamp(75vw, 90vw, 600px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reviews {\n  position: relative;\n  width: 75%;\n  text-align: center;\n  margin: 0 -16px;\n  background: rgb(65, 65, 65);\n  border: solid 2px black;\n  border-radius: var(--border-radius-default);\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n}\n\n.review:not(.active) {\n  display: none;\n}\n\nblockquote::before {\n  content: open-quote;\n  font-size: 3rem;\n}\n\nblockquote {\n  font-style: italic;\n}\n\nblockquote::after {\n  content: close-quote;\n  font-size: 3rem;\n}\n\n.author::before {\n  content: \"- \";\n}\n\n.author {\n  text-align: right;\n}\n\n.dot-container {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  position: relative;\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n}\n\n.dot {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: solid 2px black;\n  background: rgb(163, 163, 163);\n  opacity: 0.8;\n}\n\n.dot.active {\n  background: white;\n  border: none;\n  opacity: 1;\n}\n\n.dot:hover {\n  background: white;\n  box-shadow: 0 0 11px var(--shade-color);\n}\n\n#prev,\n#next {\n  position: absolute;\n  top: 25%;\n  padding: var(--section-padding);\n  font-weight: 700;\n  opacity: 0.7;\n}\n#prev {\n  right: 100%;\n}\n#next {\n  left: 100%;\n}\n\n#prev:hover,\n#next:hover {\n  /* box-shadow: 0 0 20px var(--shade-color); */\n  opacity: 1;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#hours-container,\n#location-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: var(--section-padding);\n}\n\n#hours-table {\n  flex: 1;\n}\n\ntd {\n  padding: 4px;\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n  text-transform: uppercase;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #hours-location {\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(./images/mail.svg);\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(./images/phone.svg);\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: var(--section-padding);\n  background: black;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUl3RDtBQUNWOztBQUU5Qzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksOERBQW1CLEVBQUU7QUFDM0M7QUFDQSxtQkFBbUIsdURBQVksVUFBVSx1REFBWTtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FtQztBQUNiOztBQUV0QixzREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXZpZXdRdW90ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BsYW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1zaGFkb3c6IGdyZXk7XFxuICAtLXNlY3Rpb24tcGFkZGluZzogOHB4O1xcbiAgLS1zZWN0aW9uLW1hcmdpbjogOHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQ6IDAuNzVyZW07XFxuICAtLXByaW1hcnktY29sb3I6ICMwMGFmOTg7XFxuICAtLXByaW1hcnktY29sb3ItZGFyazogIzAwN2E2YTtcXG4gIC0tc2hhZGUtY29sb3I6ICM0OTQ5NDlkYTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgY2FsYyh2YXIoLS1zZWN0aW9uLXBhZGRpbmcpICogMik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgNjUsIDY1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDNweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbm5hdiB1bCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbmxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgMnJlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5uYXYgbGk6Zm9jdXMge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDIwMHB4IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWhlcm8gYnV0dG9uIHtcXG4gIC8qIHdpZHRoOiA3NSU7ICovXFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG59XFxuXFxuI3Jldmlld3MtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW0gdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIC8qIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItZGFyayk7ICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5ZGE7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIzAwYWY5OCAxLjZweCwgdHJhbnNwYXJlbnQgMS42cHgpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoIzAwYWY5OCAxLjZweCwgIzQ5NDk0OSAxLjZweCk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDY0cHggNjRweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMzJweCAzMnB4O1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Jldmlld3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAtMTZweDtcXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgNjUsIDY1KTtcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG59XFxuXFxuLnJldmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG4ucmV2aWV3Om5vdCguYWN0aXZlKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjpiZWZvcmUge1xcbiAgY29udGVudDogb3Blbi1xdW90ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuYmxvY2txdW90ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmJsb2NrcXVvdGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYXV0aG9yOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi0gXFxcIjtcXG59XFxuXFxuLmF1dGhvciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmRvdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYigxNjMsIDE2MywgMTYzKTtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZG90OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDExcHggdmFyKC0tc2hhZGUtY29sb3IpO1xcbn1cXG5cXG4jcHJldixcXG4jbmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1JTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG4jcHJldiB7XFxuICByaWdodDogMTAwJTtcXG59XFxuI25leHQge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuI3ByZXY6aG92ZXIsXFxuI25leHQ6aG92ZXIge1xcbiAgLyogYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tc2hhZGUtY29sb3IpOyAqL1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuI2hvdXJzLWxvY2F0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjksIDI5LCAyOSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG59XFxuXFxuI2hvdXJzLWNvbnRhaW5lcixcXG4jbG9jYXRpb24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2hvdXJzLXRhYmxlIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbnRkIHtcXG4gIHBhZGRpbmc6IDRweDtcXG59XFxuXFxuI21lbnUge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgNDMsIDQzLCAwLjgyMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg1MDBweCwgOTB2dywgNTB2dyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKSAwO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI2KTsgKi9cXG59XFxuXFxuLmNhdGVnb3J5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG59XFxuXFxuLmZvb2QtbmFtZSBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi52ZWdldGFyaWFuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNpY29uTGVnZW5kIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBib3JkZXItdG9wOiBkb3VibGUgNHB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEuNXJlbSAxLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG1hcmdpbjogMCB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMiAqIHZhcigtLXNlY3Rpb24tcGFkZGluZykpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAjY29udGFjdC1pbmZvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gICNob3Vycy1sb2NhdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAjcmVzdGF1cmFudC1oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxufVxcblxcbiNjb250YWN0LWluZm8gPiAqIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzIHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbiNjb250YWN0LXBob25lLW51bWJlcjo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6IFxcXCJQaG9uZSBOdW1iZXI6IFxcXCI7ICovXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2NvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jbWVzc2FnZUlucHV0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7Ozs7RUFJRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnRUFBZ0U7RUFDaEUscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7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QUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdEQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMseUNBQXlDO0VBQ3pDLDZCQUE2QjtFQUM3QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tY29sb3Itc2hhZG93OiBncmV5O1xcbiAgLS1zZWN0aW9uLXBhZGRpbmc6IDhweDtcXG4gIC0tc2VjdGlvbi1tYXJnaW46IDhweDtcXG4gIC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0OiAwLjc1cmVtO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDBhZjk4O1xcbiAgLS1wcmltYXJ5LWNvbG9yLWRhcms6ICMwMDdhNmE7XFxuICAtLXNoYWRlLWNvbG9yOiAjNDk0OTQ5ZGE7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpIGNhbGModmFyKC0tc2VjdGlvbi1wYWRkaW5nKSAqIDIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAzcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG5uYXYgdWwge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG5saSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBsaSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpIDJyZW07XFxuICBvcGFjaXR5OiAwLjg7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxubmF2IGxpOmZvY3VzIHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtbmFtZS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwYWRkaW5nOiAyMDBweCB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yZXN0YXVyYW50Mi5qcGdcXFwiKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9yZXN0YXVyYW50MS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1kZXNjcmlwdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1oZXJvIGJ1dHRvbiB7XFxuICAvKiB3aWR0aDogNzUlOyAqL1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxufVxcblxcbiNyZXZpZXdzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAycmVtIHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspOyAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OWRhO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCMwMGFmOTggMS42cHgsIHRyYW5zcGFyZW50IDEuNnB4KSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KCMwMGFmOTggMS42cHgsICM0OTQ5NDkgMS42cHgpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDY0cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDMycHggMzJweDtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXZpZXdzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA3NSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgLTE2cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbi5yZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG59XFxuXFxuLnJldmlldzpub3QoLmFjdGl2ZSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IG9wZW4tcXVvdGU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmJsb2NrcXVvdGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5ibG9ja3F1b3RlOjphZnRlciB7XFxuICBjb250ZW50OiBjbG9zZS1xdW90ZTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmF1dGhvcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCItIFxcXCI7XFxufVxcblxcbi5hdXRob3Ige1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5kb3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRvdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHZhcigtLXNoYWRlLWNvbG9yKTtcXG59XFxuXFxuI3ByZXYsXFxuI25leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNSU7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuI3ByZXYge1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbiNuZXh0IHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbiNwcmV2OmhvdmVyLFxcbiNuZXh0OmhvdmVyIHtcXG4gIC8qIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLXNoYWRlLWNvbG9yKTsgKi9cXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbiNob3Vycy1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI5LCAyOSwgMjkpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxufVxcblxcbiNob3Vycy1jb250YWluZXIsXFxuI2xvY2F0aW9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxufVxcblxcbiNob3Vycy10YWJsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG50ZCB7XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbiNtZW51IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB3aWR0aDogY2xhbXAoNTAwcHgsIDkwdncsIDUwdncpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7ICovXFxufVxcblxcbi5jYXRlZ29yeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pIDA7XFxufVxcblxcbi5mb29kLW5hbWUgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4udmVnZXRhcmlhbjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9wbGFudC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS41cmVtIDEuNXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jaWNvbkxlZ2VuZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXRvcDogZG91YmxlIDRweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI3ZlZ0ljb25MZWdlbmQge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI3ZlZ0ljb25MZWdlbmQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BsYW50LnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjYWxjKDIgKiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2NvbnRhY3QtaW5mbyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAjaG91cnMtbG9jYXRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgI3Jlc3RhdXJhbnQtaGVybyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gICNyZXN0YXVyYW50LWRlc2NyaXB0aW9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgfVxcbn1cXG5cXG4jY29udGFjdC1pbmZvID4gKiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzcyB7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbiNjb250YWN0LWVtYWlsLWFkZHJlc3M6OmJlZm9yZSB7XFxuICBjb250ZW50OiB1cmwoLi9pbWFnZXMvbWFpbC5zdmcpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4jY29udGFjdC1waG9uZS1udW1iZXI6OmJlZm9yZSB7XFxuICAvKiBjb250ZW50OiBcXFwiUGhvbmUgTnVtYmVyOiBcXFwiOyAqL1xcbiAgY29udGVudDogdXJsKC4vaW1hZ2VzL3Bob25lLnN2Zyk7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgNDMsIDQzLCAwLjgyMik7XFxuICBwYWRkaW5nOiBjYWxjKDIgKiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG59XFxuXFxuI2NvbnRhY3RGb3JtID4gKiB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4jY29udGFjdC1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNtZXNzYWdlSW5wdXQge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtID4gaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICBsb2FkSGVybygpO1xuICBsb2FkQ29udGFjdEluZm8oKTtcbiAgbG9hZENvbnRhY3RGb3JtKCk7XG59XG5mdW5jdGlvbiBsb2FkSGVybygpIHtcbiAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZXJvJyk7XG4gIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBsb2FkSGVhZGVyKGhlcm9EaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKHBhcmVudERpdikge1xuICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzIFRvZGF5ISc7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcbiAgY29udGFjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVhZGVyJyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0SW5mbygpIHtcbiAgY29uc3QgY29udGFjdEluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEluZm9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWluZm8nKTtcbiAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBlbWFpbEFkZHJlc3Muc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWVtYWlsLWFkZHJlc3MnKTtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBob25lTnVtYmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1waG9uZS1udW1iZXInKTtcblxuICBlbWFpbEFkZHJlc3MuaHJlZiA9ICdtYWlsdG86cmFscGhzcmVzdGF1cmFudEBleGFtcGxlLmNvbSc7XG4gIGVtYWlsQWRkcmVzcy50ZXh0Q29udGVudCA9ICdyYWxwaHNyZXN0YXVyYW50QGV4YW1wbGUuY29tJztcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKDEwMCktMTIzLTQ1NjcnO1xuXG4gIGNvbnRhY3RJbmZvRGl2LmFwcGVuZChlbWFpbEFkZHJlc3MsIHBob25lTnVtYmVyKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SW5mb0Rpdik7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEZvcm0nKTtcblxuICBjb25zdCBjb250YWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnRhY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZGVzY3JpcHRpb24nKTtcbiAgY29udGFjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAnUGxlYXNlIHNlbmQgdXMgYSBtZXNzYWdlIGFuZCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHdlIGNhbiEgVGhhbmsgeW91Lic7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMobmFtZUlucHV0LCAndGV4dCcsICduYW1lSW5wdXQnLCAnbmFtZUlucHV0JywgJ05hbWUnKTtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVMYWJlbCgnTmFtZSAnLCBuYW1lSW5wdXQpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhlbWFpbElucHV0LCAnZW1haWwnLCAnZW1haWxJbnB1dCcsICdlbWFpbElucHV0JywgJ0VtYWlsJyk7XG5cbiAgY29uc3QgZW1haWxMYWJlbCA9IGNyZWF0ZUxhYmVsKCdFbWFpbCAnLCBlbWFpbElucHV0KTtcblxuICBjb25zdCBwaG9uZU51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMoXG4gICAgcGhvbmVOdW1iZXJJbnB1dCxcbiAgICAndGVsJyxcbiAgICAncGhvbmVOdW1iZXJJbnB1dCcsXG4gICAgJ3Bob25lTnVtYmVySW5wdXQnLFxuICAgICdQaG9uZSBOdW1iZXInXG4gICk7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXJMYWJlbCA9IGNyZWF0ZUxhYmVsKCdQaG9uZSBOdW1iZXIgJywgcGhvbmVOdW1iZXJJbnB1dCk7XG5cbiAgLy8gU3ViamVjdCBJbnB1dFxuICBjb25zdCBzdWJqZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJqZWN0SW5wdXQnKTtcbiAgY29uc3Qgc3ViamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIudGV4dCA9ICdXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGNvbnRhY3QgdXMgYWJvdXQ/JztcbiAgc3ViamVjdElucHV0LmFwcGVuZENoaWxkKHN1YmplY3RQbGFjZWhvbGRlcik7XG4gIGNvbnN0IHN1YmplY3RPcHRpb25zID0gWydHZW5lcmFsJywgJ1ByZXNzJywgJ0pvYnMnXTtcbiAgc3ViamVjdE9wdGlvbnMuZm9yRWFjaCgoc3ViamVjdE9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY3VycmVudFN1YmplY3QudmFsdWUgPSBzdWJqZWN0T3B0aW9uO1xuICAgIGN1cnJlbnRTdWJqZWN0LnRleHRDb250ZW50ID0gc3ViamVjdE9wdGlvbjtcbiAgICBzdWJqZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY3VycmVudFN1YmplY3QpO1xuICB9KTtcblxuICBjb25zdCBzdWJqZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzdWJqZWN0UGxhY2Vob2xkZXIudGV4dCwgc3ViamVjdElucHV0KTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBzZXRJbnB1dFZhbHVlcyhcbiAgICBtZXNzYWdlSW5wdXQsXG4gICAgJ3RleHQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdZb3VyIE1lc3NhZ2UnXG4gICk7XG5cbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gY3JlYXRlTGFiZWwoJ1lvdXIgTWVzc2FnZSAnLCBtZXNzYWdlSW5wdXQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgLy8gUHJldmVudCByZWxvYWQgb24gc3VibWl0IGJ1dHRvbiBjbGlja1xuICBjb250YWN0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIG5hbWVMYWJlbC5hcHBlbmQobmFtZUlucHV0KTtcblxuICBjb250YWN0Rm9ybS5hcHBlbmQoXG4gICAgY29udGFjdERlc2NyaXB0aW9uLFxuICAgIG5hbWVMYWJlbCxcbiAgICBuYW1lSW5wdXQsXG4gICAgZW1haWxMYWJlbCxcbiAgICBlbWFpbElucHV0LFxuICAgIHBob25lTnVtYmVyTGFiZWwsXG4gICAgcGhvbmVOdW1iZXJJbnB1dCxcbiAgICBzdWJqZWN0TGFiZWwsXG4gICAgc3ViamVjdElucHV0LFxuICAgIG1lc3NhZ2VMYWJlbCxcbiAgICBtZXNzYWdlSW5wdXQsXG4gICAgc3VibWl0QnRuXG4gICk7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSk7XG5cbiAgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZXMoaW5wdXQsIHR5cGUsIG5hbWUsIGlkLCBwbGFjZWhvbGRlcikge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUxhYmVsKHRleHQsIGlucHV0TmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGFiZWwuaHRtbEZvciA9IGlucHV0TmFtZTtcbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cbiIsImltcG9ydCByZXN0YXVyYW50SW1nU3JjIGZyb20gJy4vaW1hZ2VzL3Jlc3RhdXJhbnQxLmpwZyc7XG5pbXBvcnQgeyByZXZpZXdRdW90ZXMgfSBmcm9tICcuL3Jldmlld1F1b3Rlcyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgbG9hZEhlcm8oKTtcbiAgbG9hZFJldmlld3MoKTtcbiAgbG9hZEhvdXJzQW5kTG9jYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gbG9hZEltZygpIHtcbiAgY29uc3QgcmVzdGF1cmFudEltZyA9IG5ldyBJbWFnZSgpO1xuICByZXN0YXVyYW50SW1nLnNyYyA9IHJlc3RhdXJhbnRJbWdTcmM7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZXJvKCkge1xuICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50LWhlcm8nKTtcbiAgaGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGxvYWREZXNjcmlwdGlvbihoZXJvRGl2KTtcblxuICBjb25zdCByZXNlcnZhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBvcmRlck9ubGluZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHJlc2VydmF0aW9uQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmUgYSBUYWJsZSc7XG4gIG9yZGVyT25saW5lQnRuLnRleHRDb250ZW50ID0gJ09yZGVyIE9ubGluZSc7XG5cbiAgaGVyb0Rpdi5hcHBlbmQocmVzZXJ2YXRpb25CdG4sIG9yZGVyT25saW5lQnRuKTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlcm9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkRGVzY3JpcHRpb24ocGFyZW50RGl2KSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID1cbiAgICBcIldlIHdlbGNvbWUgeW91IHRvIFJhbHBoJ3MgcmVzdGF1cmFudCBsb2NhdGVkIGluIHRoZSBoZWFydCBvZiB0cmktc3RhdGUgYXJlYS4gU2luY2UgMjAwMiwgb3VyIHJlc3RhdXJhbnQgaGFzIGJlZW4gc2VydmluZyBhd2FyZC13aW5uaW5nIGZvb2QgYW5kIGRyaW5rcyB0byBnaXZlIG91ciBjdXN0b21lcnMgYW4gb3V0c3RhbmRpbmcgZXhwZXJpZW5jZS4gV2UgY2Fubm90IHdhaXQgdG8gc2VydmUgeW91IVwiO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcblxuICBkZXNjcmlwdGlvblRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50LWRlc2NyaXB0aW9uJyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZXZpZXdzKCkge1xuICBjb25zdCByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV2aWV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3cy1jb250YWluZXInKTtcbiAgY29uc3QgcmV2aWV3c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXZpZXdzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncmV2aWV3cycpO1xuICBjb25zdCBkb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvdC1jb250YWluZXInKTtcbiAgY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgcHJldkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgcHJldkJ1dHRvbi50ZXh0Q29udGVudCA9ICc8JztcbiAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHQnKTtcbiAgbmV4dEJ1dHRvbi50ZXh0Q29udGVudCA9ICc+JztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld1F1b3Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldmlld3NEaXYuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVSZXZpZXcocmV2aWV3UXVvdGVzW2ldLnRleHQsIHJldmlld1F1b3Rlc1tpXS5hdXRob3IsIGkpXG4gICAgKTtcbiAgICBjcmVhdGVEb3QoZG90Q29udGFpbmVyLCBpKTtcbiAgfVxuXG4gIHJldmlld3NEaXYuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgZG90Q29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgcmV2aWV3c0Rpdi5hcHBlbmQocHJldkJ1dHRvbiwgbmV4dEJ1dHRvbik7XG4gIHJldmlld0NvbnRhaW5lci5hcHBlbmQocmV2aWV3c0RpdiwgZG90Q29udGFpbmVyKTtcbiAgY29udGVudERpdi5hcHBlbmQocmV2aWV3Q29udGFpbmVyKTtcblxuICBmdW5jdGlvbiBjcmVhdGVSZXZpZXcodGV4dCwgYXV0aG9yLCBpbmRleCkge1xuICAgIGNvbnN0IHJldmlld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlld0Rpdi5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGByZXZpZXctJHtpbmRleH1gKTtcblxuICAgIGNvbnN0IHJldmlld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdibG9ja3F1b3RlJyk7XG4gICAgcmV2aWV3VGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICBjb25zdCByZXZpZXdBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3QXV0aG9yLmNsYXNzTGlzdC5hZGQoJ2F1dGhvcicpO1xuICAgIHJldmlld0F1dGhvci50ZXh0Q29udGVudCA9IGF1dGhvcjtcblxuICAgIHJldmlld0Rpdi5hcHBlbmQocmV2aWV3VGV4dCwgcmV2aWV3QXV0aG9yKTtcblxuICAgIHJldHVybiByZXZpZXdEaXY7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb3QocGFyZW50Q29udGFpbmVyLCBpbmRleCkge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkb3QuY2xhc3NMaXN0LmFkZChgZG90YCk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgnaWQnLCBgZG90LSR7aW5kZXh9YCk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRvdCk7XG5cbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNoYW5nZVNsaWRlKGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlIGNvbnRyb2xzXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2xpZGUoaW5kZXgpIHtcbiAgICBjb25zdCByZXZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlldycpO1xuICAgIGNvbnN0IGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XG5cbiAgICAvLyBDaGVjayBpZiBpbmRleCBpcyBpbiBib3VuZHNcbiAgICBpZiAoaW5kZXggPiByZXZpZXdzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSByZXZpZXdzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgcmV2aWV3cy5mb3JFYWNoKChyZXZpZXcpID0+IHtcbiAgICAgIC8vIFJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgcmV2aWV3c1xuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgY29uc3QgcmV2aWV3SW5kZXggPSBwYXJzZUludChcbiAgICAgICAgcmV2aWV3LmlkLnN1YnN0cmluZyhyZXZpZXcuaWQuaW5kZXhPZignLScpICsgMSlcbiAgICAgICk7XG5cbiAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0ZWQgcmV2aWV3XG4gICAgICBpZiAocmV2aWV3SW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvdHMuZm9yRWFjaCgoZG90KSA9PiB7XG4gICAgICAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gYWxsIGRvdHNcbiAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGNvbnN0IHJldmlld0luZGV4ID0gcGFyc2VJbnQoZG90LmlkLnN1YnN0cmluZyhkb3QuaWQuaW5kZXhPZignLScpICsgMSkpO1xuXG4gICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdGVkIGRvdFxuICAgICAgaWYgKHJldmlld0luZGV4ID09PSBpbmRleCkge1xuICAgICAgICBkb3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50SW5kZXgoKSB7XG4gICAgY29uc3QgY3VycmVudFJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKTtcbiAgICBjb25zdCBjdXJyZW50UmV2aWV3SW5kZXggPSBwYXJzZUludChcbiAgICAgIGN1cnJlbnRSZXZpZXcuaWQuc3Vic3RyaW5nKGN1cnJlbnRSZXZpZXcuaWQuaW5kZXhPZignLScpICsgMSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRSZXZpZXdJbmRleDtcbiAgfVxuXG4gIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlU2xpZGUoZ2V0Q3VycmVudEluZGV4KCkgKyAxKTtcbiAgfSk7XG5cbiAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaGFuZ2VTbGlkZShnZXRDdXJyZW50SW5kZXgoKSAtIDEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvdXJzQW5kTG9jYXRpb24oKSB7XG4gIGNvbnN0IGhvdXJzQW5kTG9jRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvdXJzQW5kTG9jRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnMtbG9jYXRpb24nKTtcbiAgbG9hZFJlc3RhdXJhbnRIb3Vycyhob3Vyc0FuZExvY0Rpdik7XG4gIGxvYWRMb2NhdGlvbihob3Vyc0FuZExvY0Rpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNBbmRMb2NEaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkUmVzdGF1cmFudEhvdXJzKHBhcmVudERpdikge1xuICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vyc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWNvbnRhaW5lcicpO1xuICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgaG91cnNIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1oZWFkZXInKTtcblxuICBjb25zdCBob3Vyc0FycmF5ID0gW1xuICAgIFsnTW9uZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnVHVlc2RheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ1dlZG5lc2RheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgICBbJ1RodXJzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnRnJpZGF5JywgJzQ6MDAgUE0gLSAxMTowMCBQTSddLFxuICAgIFsnU2F0dXJkYXknLCAnNDowMCBQTSAtIDExOjAwIFBNJ10sXG4gICAgWydTdW5kYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gIF07XG5cbiAgY29uc3QgaG91cnNUYWJsZSA9IGFycmF5VG9UYWJsZShob3Vyc0FycmF5KTtcblxuICBob3Vyc1RhYmxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnMtdGFibGUnKTtcblxuICBob3Vyc0Rpdi5hcHBlbmQoaG91cnNIZWFkZXIsIGhvdXJzVGFibGUpO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNEaXYpO1xuXG4gIGZ1bmN0aW9uIGFycmF5VG9UYWJsZSh0YWJsZURhdGEpIHtcbiAgICBjb25zdCB0YWJsZVJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gdGFibGVSZXN1bHQuaW5zZXJ0Um93KC0xKTsgLy8gSW5zZXJ0IHJvdyBhdCBlbmQgb2YgdGFibGVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFibGVEYXRhW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbChqKTtcbiAgICAgICAgY29uc3QgY2VsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YWJsZURhdGFbaV1bal0pO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxUZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGVSZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZExvY2F0aW9uKHBhcmVudERpdikge1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLWRpdicpO1xuICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xuICBsb2NhdGlvbkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLWhlYWRlcicpO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3Muc2V0QXR0cmlidXRlKCdpZCcsICdhZGRyZXNzJyk7XG4gIGFkZHJlc3MuaW5uZXJUZXh0ID0gJzEyMyBNYWluIFN0IFxcbk5ldyBGb3JrIENpdHksIE5ldyBZb3JrIFxcbjEwMjM0JztcblxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgbWFwLnNyYyA9XG4gICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDExMTQxMS44Njg1NTQzNTA1ITJkLTcyLjI4NjQyMjU0NDQwNjg2ITNkNzcuMzk5MjE1MzcwNTA4ODQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGMwNWNlMjQ3YzRhMTkwMjkhMnpOemZDc0RJekp6TTRMalVpVGlBM01jS3dOVFluTURndU9DSlghNWUwITNtMiExc2VuITJzdXMhNHYxNjczNzM2NDk4MTU2ITVtMiExc2VuITJzdXMnO1xuICBsb2NhdGlvbkRpdi5hcHBlbmQobG9jYXRpb25IZWFkZXIsIGFkZHJlc3MsIG1hcCk7XG4gIHBhcmVudERpdi5hcHBlbmQobG9jYXRpb25EaXYpO1xufVxuIiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9tZW51SXRlbXMnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIC8vIFNvcnQgbWVudSBpdGVtcyBieSBjYXRlZ29yeSBhbHBoYWJldGljYWxseVxuICAvLyBtZW51SXRlbXMuc29ydCgoYSwgYikgPT5cbiAgLy8gICBhLmNhdGVnb3J5ID4gYi5jYXRlZ29yeSA/IDEgOiBiLmNhdGVnb3J5ID4gYS5jYXRlZ29yeSA/IC0xIDogMFxuICAvLyApO1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuICBsZXQgY3VycmVudENhdGVnb3J5ID0gbWVudUl0ZW1zWzBdLmNhdGVnb3J5O1xuICBsZXQgY3VycmVudENhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gIGN1cnJlbnRDYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXRlZ29yeTtcblxuICBjdXJyZW50Q2F0ZWdvcnlEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeUhlYWRlcik7XG5cbiAgY3VycmVudENhdGVnb3J5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Q2F0ZWdvcnkpO1xuICBjdXJyZW50Q2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgY3VycmVudENhdGVnb3J5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWhlYWRlcicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVudUl0ZW1Db3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtbmFtZScpO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBtZW51SXRlbUNvc3QuY2xhc3NMaXN0LmFkZCgnY29zdCcpO1xuXG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLm5hbWU7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBtZW51SXRlbUNvc3QudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0uY29zdDtcblxuICAgIGlmIChtZW51SXRlbXNbaV0udmVnZXRhcmlhbikge1xuICAgICAgbWVudUl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ3ZlZ2V0YXJpYW4nKTtcbiAgICB9XG4gICAgbWVudUl0ZW1EaXYuYXBwZW5kKG1lbnVJdGVtTmFtZSwgbWVudUl0ZW1EZXNjcmlwdGlvbiwgbWVudUl0ZW1Db3N0KTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgY2F0ZWdvcnlcbiAgICBpZiAobWVudUl0ZW1zW2ldLmNhdGVnb3J5ICE9PSBjdXJyZW50Q2F0ZWdvcnkpIHtcbiAgICAgIG1lbnVEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeURpdik7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnkgPSBtZW51SXRlbXNbaV0uY2F0ZWdvcnk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50Q2F0ZWdvcnk7XG5cbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdi5hcHBlbmQoY3VycmVudENhdGVnb3J5SGVhZGVyKTtcblxuICAgICAgY3VycmVudENhdGVnb3J5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJyZW50Q2F0ZWdvcnkpO1xuICAgICAgY3VycmVudENhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktaGVhZGVyJyk7XG4gICAgfVxuICAgIGN1cnJlbnRDYXRlZ29yeURpdi5hcHBlbmQobWVudUl0ZW1EaXYpO1xuICB9XG4gIG1lbnVEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeURpdik7XG5cbiAgY29uc3QgaWNvbkxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpY29uTGVnZW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnaWNvbkxlZ2VuZCcpO1xuICBjb25zdCB2ZWdJY29uTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB2ZWdJY29uTGVnZW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAndmVnSWNvbkxlZ2VuZCcpO1xuICB2ZWdJY29uTGVnZW5kLnRleHRDb250ZW50ID0gJ1ZlZ2V0YXJpYW4nO1xuXG4gIGljb25MZWdlbmQuYXBwZW5kKHZlZ0ljb25MZWdlbmQpO1xuXG4gIGNvbnN0IGZvb2REaXNjbGFpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcbiAgZm9vZERpc2NsYWltZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb29kLWRpc2NsYWltZXInKTtcbiAgZm9vZERpc2NsYWltZXIudGV4dENvbnRlbnQgPVxuICAgICdDb25zdW1pbmcgcmF3IG9yIHVuZGVyY29va2VkIGZvb2RzIG1heSBpbmNyZWFzZSB5b3VyIHJpc2sgb2YgZm9vZCBib3VybmUgaWxsbmVzcyc7XG4gIG1lbnVEaXYuYXBwZW5kKGljb25MZWdlbmQsIGZvb2REaXNjbGFpbWVyKTtcbiAgY29udGVudERpdi5hcHBlbmQobWVudURpdik7XG59XG4iLCJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogJ0ZyaWVkIENhbGFtYXJpJyxcbiAgICBjb3N0OiA5LFxuICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5LCBiZWVyLWJhdHRlcmVkIGZyaWVkIGNhbGFtYXJpJyxcbiAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgdmVnZXRhcmlhbjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR2FybGljIEJyZWFkJyxcbiAgICBjb3N0OiA2LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0NoZWVzeSBkZWxpY2lvdXMgZ2FybGljIGJyZWFkIG1hZGUgZnJvbSBmcmVzaCBob21lLW1hZGUgYnJlYWQnLFxuICAgIGNhdGVnb3J5OiAnQXBwZXRpemVyJyxcbiAgICB2ZWdldGFyaWFuOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZWFrJyxcbiAgICBjb3N0OiAyMSxcbiAgICBkZXNjcmlwdGlvbjogJ1NpenpsaW5nIHN0ZWFrJyxcbiAgICBjYXRlZ29yeTogJ0VudHJlZScsXG4gICAgdmVnZXRhcmlhbjogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSGFtYnVyZ2VyJyxcbiAgICBjb3N0OiAxNixcbiAgICBkZXNjcmlwdGlvbjogJ0p1aWN5IGJ1cmdlcicsXG4gICAgY2F0ZWdvcnk6ICdFbnRyZWUnLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0Nob2NvbGF0ZSBDYWtlJyxcbiAgICBjb3N0OiAxMCxcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRlY2FkZW50LCBtb2lzdCBjaG9jb2xhdGUgbG92ZXIncyBkcmVhbVwiLFxuICAgIGNhdGVnb3J5OiAnRGVzc2VydCcsXG4gICAgdmVnZXRhcmlhbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdW1wa2luIFBpZScsXG4gICAgY29zdDogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0Egc21vb3RoIGZhbGwtc3BpY2VkIHB1bXBraW4gcGllJyxcbiAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxuICAgIHZlZ2V0YXJpYW46IHRydWUsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IGdpdEh1Ykljb24gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLnN2Zyc7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgY3JlYXRlSGVhZGVyKCk7XG4gIGxvYWRIb21lKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIC8vIFJlc3RhdXJhbnQgbmFtZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiUmFscGgncyBSZXN0YXVyYW50XCI7XG4gIHJlc3RhdXJhbnROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1uYW1lLWhlYWRlcicpO1xuXG4gIC8vIEhvbWUgTWVudSBDb250YWN0XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBwYWdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBwYWdlTGlzdC5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gIG5hdi5hcHBlbmRDaGlsZChwYWdlTGlzdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgLy8gSW5zZXJ0IGhlYWRlciBhbmQgcmVzdGF1cmFudCBuYW1lXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlciwgY29udGVudERpdik7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHJlc3RhdXJhbnROYW1lLCBjb250ZW50RGl2KTtcblxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRIb21lKCk7XG4gICAgdW5IaWdobGlnaHROYXYoKTtcbiAgICBoaWdobGlnaHRMaShldmVudC50YXJnZXQpO1xuICB9KTtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkTWVudSgpO1xuICAgIHVuSGlnaGxpZ2h0TmF2KCk7XG4gICAgaGlnaGxpZ2h0TGkoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG4gIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgICB1bkhpZ2hsaWdodE5hdigpO1xuICAgIGhpZ2hsaWdodExpKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gXCLCqSAyMDIxIFJhbHBoJ3MgUmVzdGF1cmFudC4gU2l0ZSBieSBTYW1lZXIgTi5cIjtcblxuICBjb25zdCBnaXRodWJJY29uSW1nID0gbmV3IEltYWdlKCk7XG4gIGdpdGh1Ykljb25JbWcuc3JjID0gZ2l0SHViSWNvbjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vc25hZWVtMy8nKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uSW1nKTtcblxuICBmb290ZXIuYXBwZW5kKGZvb3RlclRleHQsIGdpdGh1YkxpbmspO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0TGkobGkpIHtcbiAgbGkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKScpO1xufVxuXG5mdW5jdGlvbiB1bkhpZ2hsaWdodE5hdigpIHtcbiAgY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpJyk7XG4gIGxpcy5mb3JFYWNoKChsaSkgPT4ge1xuICAgIGxpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogdHJhbnNwYXJlbnQnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgcmV2aWV3UXVvdGVzID0gW1xuICB7XG4gICAgdGV4dDogXCJUaGUgYmVzdCBmb29kIEkndmUgZXZlciBlYXRlbiFcIixcbiAgICByYXRpbmc6IDUsXG4gICAgYXV0aG9yOiAnQmlsbCBHLicsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlJhbHBoJ3MgcmVzdGF1cmFudCBpcyBteSBob21lIGF3YXkgZnJvbSBob21lIVwiLFxuICAgIHJhdGluZzogNSxcbiAgICBhdXRob3I6ICdKZWZmIEIuJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGcmllbmRseSBzdGFmZiBhbmQgZXhjZWxsZW50IHNlcnZpY2UhJyxcbiAgICByYXRpbmc6IDUsXG4gICAgYXV0aG9yOiAnRWxvbiBNLicsXG4gIH0sXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=