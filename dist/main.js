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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: rgb(0, 175, 152);\n  --primary-color-dark: rgb(0, 122, 106);\n  --shade-color: rgba(73, 73, 73, 0.856);\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: var(--section-padding);\n  background: var(--primary-color);\n  font-size: 3rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  width: 75%;\n  border: solid 2px black;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  padding: var(--section-padding);\n  background: black;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: rgb(0, 175, 152);\n  --primary-color-dark: rgb(0, 122, 106);\n  --shade-color: rgba(73, 73, 73, 0.856);\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbutton {\n  background-color: var(--primary-color);\n  color: white;\n  border: none;\n  border-radius: 32px;\n  padding: var(--section-padding);\n  text-decoration: none;\n  font-size: 1.5rem;\n  transition-duration: 0.2s;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: var(--primary-color-dark);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n  transition: 0.1s;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: var(--section-padding);\n  background: var(--primary-color);\n  font-size: 3rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(\"./images/restaurant2.jpg\");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(\"./images/restaurant1.jpg\");\n  background-position: center bottom;\n  position: relative;\n\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#restaurant-hero button {\n  width: 75%;\n  border: solid 2px black;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.food-name img {\n  height: 1.5rem;\n}\n\n.vegetarian::after {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n}\n\n.description {\n  font-style: italic;\n}\n\n#iconLegend {\n  padding: var(--section-padding);\n  border-top: double 4px var(--primary-color);\n}\n\n#vegIconLegend {\n  padding: var(--section-padding);\n}\n\n#vegIconLegend::before {\n  background-image: url(\"./images/plant.svg\");\n  background-size: 1.5rem 1.5rem;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  content: \"\";\n  margin: 0 var(--section-margin);\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n\n  #restaurant-hero {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  #restaurant-description {\n    grid-column: 1 / 3;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n  display: flex;\n  gap: 0.75rem;\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: url(./images/mail.svg);\n  color: black;\n  align-self: flex-start;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  /* content: \"Phone Number: \"; */\n  content: url(./images/phone.svg);\n  align-self: flex-start;\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#contact-description {\n  margin-bottom: var(--section-margin);\n  border-bottom: solid 2px var(--primary-color);\n  text-align: center;\n  font-style: italic;\n}\n\n#messageInput {\n  padding-bottom: 100px;\n  resize: vertical;\n}\n\n#contactForm > input,\ntextarea,\nselect {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  padding: var(--section-padding);\n  background: black;\n}\n"],"sourceRoot":""}]);
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


const contentDiv = document.querySelector('#content');

function loadHome() {
  loadHero();
  // loadReviews();
  loadHoursAndLocation();
  // loadFooter();
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
  footerText.textContent = "© 2021 Ralph's Restaurant";

  footer.appendChild(footerText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBbUM7QUFDYjs7QUFFdEIsc0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVzdGF1cmFudDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcmVzdGF1cmFudDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGxhbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9waG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1zaGFkb3c6IGdyZXk7XFxuICAtLXNlY3Rpb24tcGFkZGluZzogOHB4O1xcbiAgLS1zZWN0aW9uLW1hcmdpbjogOHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQ6IDAuNzVyZW07XFxuICAtLXByaW1hcnktY29sb3I6IHJnYigwLCAxNzUsIDE1Mik7XFxuICAtLXByaW1hcnktY29sb3ItZGFyazogcmdiKDAsIDEyMiwgMTA2KTtcXG4gIC0tc2hhZGUtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NTYpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1kYXJrKTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAzcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbmxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgMnJlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5uYXYgbGk6Zm9jdXMge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDIwMHB4IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXVyYW50LWhlcm8gYnV0dG9uIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG59XFxuXFxuI2hvdXJzLWxvY2F0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyOSwgMjksIDI5KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbn1cXG5cXG4jbWVudSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQzLCA0MywgNDMsIDAuODIyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgd2lkdGg6IGNsYW1wKDUwMHB4LCA5MHZ3LCA1MHZ3KTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pIDA7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyAqL1xcbn1cXG5cXG4uY2F0ZWdvcnktaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pIDA7XFxufVxcblxcbi5mb29kLW5hbWUgaW1nIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4udmVnZXRhcmlhbjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMS41cmVtIDEuNXJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jaWNvbkxlZ2VuZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYm9yZGVyLXRvcDogZG91YmxlIDRweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuI3ZlZ0ljb25MZWdlbmQge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI3ZlZ0ljb25MZWdlbmQ6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBtYXJnaW46IDAgdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjYWxjKDIgKiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2NvbnRhY3QtaW5mbyB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAjcmVzdGF1cmFudC1oZXJvIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICB9XFxufVxcblxcbiNjb250YWN0LWluZm8gPiAqIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzIHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbiNjb250YWN0LXBob25lLW51bWJlcjo6YmVmb3JlIHtcXG4gIC8qIGNvbnRlbnQ6IFxcXCJQaG9uZSBOdW1iZXI6IFxcXCI7ICovXFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2NvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jbWVzc2FnZUlucHV0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsc0NBQXNDO0VBQ3RDLHNDQUFzQztBQUN4Qzs7QUFFQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwr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QUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnREFBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLXNoYWRvdzogZ3JleTtcXG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA4cHg7XFxuICAtLXNlY3Rpb24tbWFyZ2luOiA4cHg7XFxuICAtLWJvcmRlci1yYWRpdXMtZGVmYXVsdDogMC43NXJlbTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogcmdiKDAsIDE3NSwgMTUyKTtcXG4gIC0tcHJpbWFyeS1jb2xvci1kYXJrOiByZ2IoMCwgMTIyLCAxMDYpO1xcbiAgLS1zaGFkZS1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1Nik7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWRhcmspO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gIGJhY2tncm91bmQ6IHJnYig2NSwgNjUsIDY1KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDNweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG59XFxuXFxubGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSAycmVtO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbm5hdiBsaTpmb2N1cyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMjAwcHggdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmVzdGF1cmFudDIuanBnXFxcIik7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmVzdGF1cmFudDEuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtaGVybyBidXR0b24ge1xcbiAgd2lkdGg6IDc1JTtcXG4gIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbn1cXG5cXG4jaG91cnMtbG9jYXRpb24ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiKDI5LCAyOSwgMjkpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxufVxcblxcbiNtZW51IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB3aWR0aDogY2xhbXAoNTAwcHgsIDkwdncsIDUwdncpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNik7ICovXFxufVxcblxcbi5jYXRlZ29yeS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbikgMDtcXG59XFxuXFxuLmZvb2QtbmFtZSBpbWcge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi52ZWdldGFyaWFuOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL3BsYW50LnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNpY29uTGVnZW5kIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBib3JkZXItdG9wOiBkb3VibGUgNHB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4jdmVnSWNvbkxlZ2VuZDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcGxhbnQuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEuNXJlbSAxLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG1hcmdpbjogMCB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMiAqIHZhcigtLXNlY3Rpb24tcGFkZGluZykpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAjY29udGFjdC1pbmZvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gICNyZXN0YXVyYW50LWhlcm8ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICAjcmVzdGF1cmFudC1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIH1cXG59XFxuXFxuI2NvbnRhY3QtaW5mbyA+ICoge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbmE6bGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb250YWN0LWVtYWlsLWFkZHJlc3Mge1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzOjpiZWZvcmUge1xcbiAgY29udGVudDogdXJsKC4vaW1hZ2VzL21haWwuc3ZnKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNjb250YWN0LWluZm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuI2NvbnRhY3QtcGhvbmUtbnVtYmVyOjpiZWZvcmUge1xcbiAgLyogY29udGVudDogXFxcIlBob25lIE51bWJlcjogXFxcIjsgKi9cXG4gIGNvbnRlbnQ6IHVybCguL2ltYWdlcy9waG9uZS5zdmcpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI2NvbnRhY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jbWVzc2FnZUlucHV0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IGlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGxvYWRIZXJvKCk7XG4gIGxvYWRDb250YWN0SW5mbygpO1xuICBsb2FkQ29udGFjdEZvcm0oKTtcbn1cbmZ1bmN0aW9uIGxvYWRIZXJvKCkge1xuICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlcm8nKTtcbiAgaGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGxvYWRIZWFkZXIoaGVyb0Rpdik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIocGFyZW50RGl2KSB7XG4gIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMgVG9kYXkhJztcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuICBjb250YWN0SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1oZWFkZXInKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RJbmZvKCkge1xuICBjb25zdCBjb250YWN0SW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0SW5mb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaW5mbycpO1xuICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGVtYWlsQWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtZW1haWwtYWRkcmVzcycpO1xuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGhvbmVOdW1iZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LXBob25lLW51bWJlcicpO1xuXG4gIGVtYWlsQWRkcmVzcy5ocmVmID0gJ21haWx0bzpyYWxwaHNyZXN0YXVyYW50QGV4YW1wbGUuY29tJztcbiAgZW1haWxBZGRyZXNzLnRleHRDb250ZW50ID0gJ3JhbHBoc3Jlc3RhdXJhbnRAZXhhbXBsZS5jb20nO1xuICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcoMTAwKS0xMjMtNDU2Nyc7XG5cbiAgY29udGFjdEluZm9EaXYuYXBwZW5kKGVtYWlsQWRkcmVzcywgcGhvbmVOdW1iZXIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Rm9ybScpO1xuXG4gIGNvbnN0IGNvbnRhY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29udGFjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1kZXNjcmlwdGlvbicpO1xuICBjb250YWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICdQbGVhc2Ugc2VuZCB1cyBhIG1lc3NhZ2UgYW5kIHdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuISBUaGFuayB5b3UuJztcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhuYW1lSW5wdXQsICd0ZXh0JywgJ25hbWVJbnB1dCcsICduYW1lSW5wdXQnLCAnTmFtZScpO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGNyZWF0ZUxhYmVsKCdOYW1lICcsIG5hbWVJbnB1dCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNldElucHV0VmFsdWVzKGVtYWlsSW5wdXQsICdlbWFpbCcsICdlbWFpbElucHV0JywgJ2VtYWlsSW5wdXQnLCAnRW1haWwnKTtcblxuICBjb25zdCBlbWFpbExhYmVsID0gY3JlYXRlTGFiZWwoJ0VtYWlsICcsIGVtYWlsSW5wdXQpO1xuXG4gIGNvbnN0IHBob25lTnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhcbiAgICBwaG9uZU51bWJlcklucHV0LFxuICAgICd0ZWwnLFxuICAgICdwaG9uZU51bWJlcklucHV0JyxcbiAgICAncGhvbmVOdW1iZXJJbnB1dCcsXG4gICAgJ1Bob25lIE51bWJlcidcbiAgKTtcblxuICBjb25zdCBwaG9uZU51bWJlckxhYmVsID0gY3JlYXRlTGFiZWwoJ1Bob25lIE51bWJlciAnLCBwaG9uZU51bWJlcklucHV0KTtcblxuICAvLyBTdWJqZWN0IElucHV0XG4gIGNvbnN0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzdWJqZWN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3N1YmplY3RJbnB1dCcpO1xuICBjb25zdCBzdWJqZWN0UGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgc3ViamVjdFBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgc3ViamVjdFBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgc3ViamVjdFBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gIHN1YmplY3RQbGFjZWhvbGRlci50ZXh0ID0gJ1doYXQgd291bGQgeW91IGxpa2UgdG8gY29udGFjdCB1cyBhYm91dD8nO1xuICBzdWJqZWN0SW5wdXQuYXBwZW5kQ2hpbGQoc3ViamVjdFBsYWNlaG9sZGVyKTtcbiAgY29uc3Qgc3ViamVjdE9wdGlvbnMgPSBbJ0dlbmVyYWwnLCAnUHJlc3MnLCAnSm9icyddO1xuICBzdWJqZWN0T3B0aW9ucy5mb3JFYWNoKChzdWJqZWN0T3B0aW9uKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN1YmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjdXJyZW50U3ViamVjdC52YWx1ZSA9IHN1YmplY3RPcHRpb247XG4gICAgY3VycmVudFN1YmplY3QudGV4dENvbnRlbnQgPSBzdWJqZWN0T3B0aW9uO1xuICAgIHN1YmplY3RJbnB1dC5hcHBlbmRDaGlsZChjdXJyZW50U3ViamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IHN1YmplY3RMYWJlbCA9IGNyZWF0ZUxhYmVsKHN1YmplY3RQbGFjZWhvbGRlci50ZXh0LCBzdWJqZWN0SW5wdXQpO1xuXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHNldElucHV0VmFsdWVzKFxuICAgIG1lc3NhZ2VJbnB1dCxcbiAgICAndGV4dCcsXG4gICAgJ21lc3NhZ2VJbnB1dCcsXG4gICAgJ21lc3NhZ2VJbnB1dCcsXG4gICAgJ1lvdXIgTWVzc2FnZSdcbiAgKTtcblxuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBjcmVhdGVMYWJlbCgnWW91ciBNZXNzYWdlICcsIG1lc3NhZ2VJbnB1dCk7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCcpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAvLyBQcmV2ZW50IHJlbG9hZCBvbiBzdWJtaXQgYnV0dG9uIGNsaWNrXG4gIGNvbnRhY3RGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgbmFtZUxhYmVsLmFwcGVuZChuYW1lSW5wdXQpO1xuXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChcbiAgICBjb250YWN0RGVzY3JpcHRpb24sXG4gICAgbmFtZUxhYmVsLFxuICAgIG5hbWVJbnB1dCxcbiAgICBlbWFpbExhYmVsLFxuICAgIGVtYWlsSW5wdXQsXG4gICAgcGhvbmVOdW1iZXJMYWJlbCxcbiAgICBwaG9uZU51bWJlcklucHV0LFxuICAgIHN1YmplY3RMYWJlbCxcbiAgICBzdWJqZWN0SW5wdXQsXG4gICAgbWVzc2FnZUxhYmVsLFxuICAgIG1lc3NhZ2VJbnB1dCxcbiAgICBzdWJtaXRCdG5cbiAgKTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcblxuICBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlcyhpbnB1dCwgdHlwZSwgbmFtZSwgaWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCwgaW5wdXROYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBsYWJlbC5odG1sRm9yID0gaW5wdXROYW1lO1xuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuIiwiaW1wb3J0IHJlc3RhdXJhbnRJbWdTcmMgZnJvbSAnLi9pbWFnZXMvcmVzdGF1cmFudDEuanBnJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBsb2FkSGVybygpO1xuICAvLyBsb2FkUmV2aWV3cygpO1xuICBsb2FkSG91cnNBbmRMb2NhdGlvbigpO1xuICAvLyBsb2FkRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRJbWcoKSB7XG4gIGNvbnN0IHJlc3RhdXJhbnRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVzdGF1cmFudEltZy5zcmMgPSByZXN0YXVyYW50SW1nU3JjO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVybygpIHtcbiAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1oZXJvJyk7XG4gIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBsb2FkRGVzY3JpcHRpb24oaGVyb0Rpdik7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3Qgb3JkZXJPbmxpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICByZXNlcnZhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZlIGEgVGFibGUnO1xuICBvcmRlck9ubGluZUJ0bi50ZXh0Q29udGVudCA9ICdPcmRlciBPbmxpbmUnO1xuXG4gIGhlcm9EaXYuYXBwZW5kKHJlc2VydmF0aW9uQnRuLCBvcmRlck9ubGluZUJ0bik7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZERlc2NyaXB0aW9uKHBhcmVudERpdikge1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJXZSB3ZWxjb21lIHlvdSB0byBSYWxwaCdzIHJlc3RhdXJhbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdHJpLXN0YXRlIGFyZWEuIFNpbmNlIDIwMDIsIG91ciByZXN0YXVyYW50IGhhcyBiZWVuIHNlcnZpbmcgYXdhcmQtd2lubmluZyBmb29kIGFuZCBkcmlua3MgdG8gZ2l2ZSBvdXIgY3VzdG9tZXJzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIFdlIGNhbm5vdCB3YWl0IHRvIHNlcnZlIHlvdSFcIjtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgZGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1kZXNjcmlwdGlvbicpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG91cnNBbmRMb2NhdGlvbigpIHtcbiAgY29uc3QgaG91cnNBbmRMb2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cnNBbmRMb2NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1sb2NhdGlvbicpO1xuICBsb2FkUmVzdGF1cmFudEhvdXJzKGhvdXJzQW5kTG9jRGl2KTtcbiAgbG9hZExvY2F0aW9uKGhvdXJzQW5kTG9jRGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob3Vyc0FuZExvY0Rpdik7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZXN0YXVyYW50SG91cnMocGFyZW50RGl2KSB7XG4gIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBob3Vyc0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWhlYWRlcicpO1xuXG4gIGNvbnN0IGhvdXJzQXJyYXkgPSBbXG4gICAgWydNb25kYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydUdWVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnV2VkbmVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnVGh1cnNkYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydGcmlkYXknLCAnNDowMCBQTSAtIDExOjAwIFBNJ10sXG4gICAgWydTYXR1cmRheScsICc0OjAwIFBNIC0gMTE6MDAgUE0nXSxcbiAgICBbJ1N1bmRheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgXTtcblxuICBjb25zdCBob3Vyc1RhYmxlID0gYXJyYXlUb1RhYmxlKGhvdXJzQXJyYXkpO1xuXG4gIGhvdXJzVGFibGUuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy10YWJsZScpO1xuXG4gIGhvdXJzRGl2LmFwcGVuZChob3Vyc0hlYWRlciwgaG91cnNUYWJsZSk7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG5cbiAgZnVuY3Rpb24gYXJyYXlUb1RhYmxlKHRhYmxlRGF0YSkge1xuICAgIGNvbnN0IHRhYmxlUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0YWJsZVJlc3VsdC5pbnNlcnRSb3coLTEpOyAvLyBJbnNlcnQgcm93IGF0IGVuZCBvZiB0YWJsZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJsZURhdGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGopO1xuICAgICAgICBjb25zdCBjZWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhYmxlRGF0YVtpXVtqXSk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbFRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJsZVJlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTG9jYXRpb24ocGFyZW50RGl2KSB7XG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG4gIGxvY2F0aW9uSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24taGVhZGVyJyk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzcy5pbm5lclRleHQgPSAnMTIzIE1haW4gU3QgXFxuTmV3IEZvcmsgQ2l0eSwgTmV3IFlvcmsgXFxuMTAyMzQnO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZChsb2NhdGlvbkhlYWRlciwgYWRkcmVzcyk7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcbn1cbiIsImltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vbWVudUl0ZW1zJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAvLyBTb3J0IG1lbnUgaXRlbXMgYnkgY2F0ZWdvcnkgYWxwaGFiZXRpY2FsbHlcbiAgLy8gbWVudUl0ZW1zLnNvcnQoKGEsIGIpID0+XG4gIC8vICAgYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogYi5jYXRlZ29yeSA+IGEuY2F0ZWdvcnkgPyAtMSA6IDBcbiAgLy8gKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IG1lbnVJdGVtc1swXS5jYXRlZ29yeTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgY3VycmVudENhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50Q2F0ZWdvcnk7XG5cbiAgY3VycmVudENhdGVnb3J5RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlIZWFkZXIpO1xuXG4gIGN1cnJlbnRDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudENhdGVnb3J5KTtcbiAgY3VycmVudENhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gIGN1cnJlbnRDYXRlZ29yeUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1oZWFkZXInKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnVJdGVtQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1lbnVJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kLW5hbWUnKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbWVudUl0ZW1Db3N0LmNsYXNzTGlzdC5hZGQoJ2Nvc3QnKTtcblxuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5uYW1lO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgbWVudUl0ZW1Db3N0LnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLmNvc3Q7XG5cbiAgICBpZiAobWVudUl0ZW1zW2ldLnZlZ2V0YXJpYW4pIHtcbiAgICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd2ZWdldGFyaWFuJyk7XG4gICAgfVxuICAgIG1lbnVJdGVtRGl2LmFwcGVuZChtZW51SXRlbU5hbWUsIG1lbnVJdGVtRGVzY3JpcHRpb24sIG1lbnVJdGVtQ29zdCk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGNhdGVnb3J5XG4gICAgaWYgKG1lbnVJdGVtc1tpXS5jYXRlZ29yeSAhPT0gY3VycmVudENhdGVnb3J5KSB7XG4gICAgICBtZW51RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlEaXYpO1xuICAgICAgY3VycmVudENhdGVnb3J5ID0gbWVudUl0ZW1zW2ldLmNhdGVnb3J5O1xuICAgICAgY3VycmVudENhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgY3VycmVudENhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY3VycmVudENhdGVnb3J5O1xuXG4gICAgICBjdXJyZW50Q2F0ZWdvcnlEaXYuYXBwZW5kKGN1cnJlbnRDYXRlZ29yeUhlYWRlcik7XG5cbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudENhdGVnb3J5KTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgICAgY3VycmVudENhdGVnb3J5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWhlYWRlcicpO1xuICAgIH1cbiAgICBjdXJyZW50Q2F0ZWdvcnlEaXYuYXBwZW5kKG1lbnVJdGVtRGl2KTtcbiAgfVxuICBtZW51RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlEaXYpO1xuXG4gIGNvbnN0IGljb25MZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaWNvbkxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ljb25MZWdlbmQnKTtcbiAgY29uc3QgdmVnSWNvbkxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdmVnSWNvbkxlZ2VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ZlZ0ljb25MZWdlbmQnKTtcbiAgdmVnSWNvbkxlZ2VuZC50ZXh0Q29udGVudCA9ICdWZWdldGFyaWFuJztcblxuICBpY29uTGVnZW5kLmFwcGVuZCh2ZWdJY29uTGVnZW5kKTtcblxuICBjb25zdCBmb29kRGlzY2xhaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGZvb2REaXNjbGFpbWVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZC1kaXNjbGFpbWVyJyk7XG4gIGZvb2REaXNjbGFpbWVyLnRleHRDb250ZW50ID1cbiAgICAnQ29uc3VtaW5nIHJhdyBvciB1bmRlcmNvb2tlZCBmb29kcyBtYXkgaW5jcmVhc2UgeW91ciByaXNrIG9mIGZvb2QgYm91cm5lIGlsbG5lc3MnO1xuICBtZW51RGl2LmFwcGVuZChpY29uTGVnZW5kLCBmb29kRGlzY2xhaW1lcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kKG1lbnVEaXYpO1xufVxuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6ICdGcmllZCBDYWxhbWFyaScsXG4gICAgY29zdDogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSwgYmVlci1iYXR0ZXJlZCBmcmllZCBjYWxhbWFyaScsXG4gICAgY2F0ZWdvcnk6ICdBcHBldGl6ZXInLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dhcmxpYyBCcmVhZCcsXG4gICAgY29zdDogNixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDaGVlc3kgZGVsaWNpb3VzIGdhcmxpYyBicmVhZCBtYWRlIGZyb20gZnJlc2ggaG9tZS1tYWRlIGJyZWFkJyxcbiAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgdmVnZXRhcmlhbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVhaycsXG4gICAgY29zdDogMjEsXG4gICAgZGVzY3JpcHRpb246ICdTaXp6bGluZyBzdGVhaycsXG4gICAgY2F0ZWdvcnk6ICdFbnRyZWUnLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0hhbWJ1cmdlcicsXG4gICAgY29zdDogMTYsXG4gICAgZGVzY3JpcHRpb246ICdKdWljeSBidXJnZXInLFxuICAgIGNhdGVnb3J5OiAnRW50cmVlJyxcbiAgICB2ZWdldGFyaWFuOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDaG9jb2xhdGUgQ2FrZScsXG4gICAgY29zdDogMTAsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkZWNhZGVudCwgbW9pc3QgY2hvY29sYXRlIGxvdmVyJ3MgZHJlYW1cIixcbiAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxuICAgIHZlZ2V0YXJpYW46IHRydWUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVtcGtpbiBQaWUnLFxuICAgIGNvc3Q6IDksXG4gICAgZGVzY3JpcHRpb246ICdBIHNtb290aCBmYWxsLXNwaWNlZCBwdW1wa2luIHBpZScsXG4gICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcbiAgICB2ZWdldGFyaWFuOiB0cnVlLFxuICB9LFxuXTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgbG9hZEhvbWUoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgLy8gUmVzdGF1cmFudCBuYW1lXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJSYWxwaCdzIFJlc3RhdXJhbnRcIjtcbiAgcmVzdGF1cmFudE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50LW5hbWUtaGVhZGVyJyk7XG5cbiAgLy8gSG9tZSBNZW51IENvbnRhY3RcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHBhZ2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIHBhZ2VMaXN0LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgbmF2LmFwcGVuZENoaWxkKHBhZ2VMaXN0KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAvLyBJbnNlcnQgaGVhZGVyIGFuZCByZXN0YXVyYW50IG5hbWVcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoaGVhZGVyLCBjb250ZW50RGl2KTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUocmVzdGF1cmFudE5hbWUsIGNvbnRlbnREaXYpO1xuXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZEhvbWUoKTtcbiAgICB1bkhpZ2hsaWdodE5hdigpO1xuICAgIGhpZ2hsaWdodExpKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRNZW51KCk7XG4gICAgdW5IaWdobGlnaHROYXYoKTtcbiAgICBoaWdobGlnaHRMaShldmVudC50YXJnZXQpO1xuICB9KTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICAgIHVuSGlnaGxpZ2h0TmF2KCk7XG4gICAgaGlnaGxpZ2h0TGkoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIsKpIDIwMjEgUmFscGgncyBSZXN0YXVyYW50XCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XG4gIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNvbnRlbnREaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0TGkobGkpIHtcbiAgbGkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKScpO1xufVxuXG5mdW5jdGlvbiB1bkhpZ2hsaWdodE5hdigpIHtcbiAgY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGxpJyk7XG4gIGxpcy5mb3JFYWNoKChsaSkgPT4ge1xuICAgIGxpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDogdHJhbnNwYXJlbnQnKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==