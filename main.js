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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: rgb(0, 175, 152);\n  --shade-color: rgba(73, 73, 73, 0.822);\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: var(--section-padding);\n  background: var(--primary-color);\n  font-size: 3rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center bottom;\n  /* margin: 0 var(--section-margin); */\n  position: relative;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.description {\n  font-style: italic;\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: \"E-Mail: \";\n  color: black;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  content: \"Phone Number: \";\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#messageInput {\n  padding-bottom: 100px;\n}\n\n#contactForm > :not(label) {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;EACrB,gCAAgC;EAChC,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;;EAIE,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,gBAAgB;EAChB,QAAQ;EACR,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,qCAAqC;EACrC,yDAAiD;EACjD,+BAA+B;EAC/B,eAAe;;EAEf,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,yDAAiD;EACjD,kCAAkC;EAClC,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,2BAA2B;EAC3B,+BAA+B;EAC/B,+BAA+B;AACjC;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,6BAA6B;EAC7B,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;EAC/B,+BAA+B;EAC/B,qCAAqC;AACvC;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;EAClB,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;EAC/B,kBAAkB;EAClB,yCAAyC;EACzC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE;IACE,mBAAmB;IACnB,mBAAmB;EACrB;AACF;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;EACnC,yCAAyC;EACzC,6BAA6B;EAC7B,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[":root {\n  --color-shadow: grey;\n  --section-padding: 8px;\n  --section-margin: 8px;\n  --border-radius-default: 0.75rem;\n  --primary-color: rgb(0, 175, 152);\n  --shade-color: rgba(73, 73, 73, 0.822);\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nimg {\n  max-width: 100vw;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  background: rgb(65, 65, 65);\n  color: white;\n}\n\nheader {\n  padding: var(--section-padding);\n  position: sticky;\n  top: 0px;\n  background: inherit;\n  z-index: 1000;\n  border-bottom: black solid 3px;\n}\n\nnav ul {\n  justify-content: center;\n  display: flex;\n  gap: 1rem;\n  font-size: 2rem;\n  list-style: none;\n  margin: var(--section-margin);\n}\n\nli {\n  cursor: pointer;\n}\n\nnav li {\n  border-bottom: 2px solid transparent;\n  padding: var(--section-padding) 2rem;\n  opacity: 0.8;\n}\n\nnav li:hover {\n  border-bottom: 2px solid white;\n  opacity: 1;\n}\n\nnav li:focus {\n  color: green;\n}\n\n#restaurant-name-header {\n  text-align: center;\n  padding: var(--section-padding);\n  background: var(--primary-color);\n  font-size: 3rem;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hero {\n  align-self: center;\n  background-size: cover;\n  padding: 200px var(--section-padding);\n  background-image: url(\"./images/restaurant2.jpg\");\n  width: clamp(75vw, 90vw, 600px);\n  font-size: 2rem;\n\n  display: flex;\n  justify-content: center;\n}\n\n#restaurant-hero {\n  background-image: url(\"./images/restaurant1.jpg\");\n  background-position: center bottom;\n  /* margin: 0 var(--section-margin); */\n  position: relative;\n}\n\n#restaurant-description {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n#hours-location {\n  align-self: center;\n  display: flex;\n  justify-content: space-evenly;\n  text-align: center;\n  background: rgb(29, 29, 29);\n  padding: var(--section-padding);\n  width: clamp(75vw, 90vw, 600px);\n}\n\n#menu {\n  background: rgba(43, 43, 43, 0.822);\n  padding: var(--section-padding);\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n  text-align: center;\n}\n\n.category {\n  text-align: center;\n  padding: var(--section-padding);\n  width: clamp(500px, 90vw, 50vw);\n  margin: var(--section-margin) 0;\n  /* background: rgba(0, 0, 0, 0.26); */\n}\n\n.category-header {\n  background: var(--primary-color);\n  border-radius: 16px;\n  padding: var(--section-padding);\n  font-size: 2rem;\n}\n\n.menu-item {\n  padding: var(--section-padding);\n  margin: var(--section-margin) 0;\n}\n\n.description {\n  font-style: italic;\n}\n\n#contact-header {\n  background: var(--shade-color);\n  padding: 2rem 3rem;\n  text-align: center;\n  border-radius: var(--border-radius-default);\n  width: fit-content;\n}\n\n#contact-info {\n  background: var(--primary-color);\n  width: clamp(75vw, 90vw, 600px);\n  text-align: center;\n  padding: calc(2 * var(--section-padding));\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: black;\n}\n\n@media (min-width: 700px) {\n  #contact-info {\n    align-items: center;\n    flex-direction: row;\n  }\n}\n\n#contact-info > * {\n  padding: var(--section-padding);\n}\n\na:link {\n  text-decoration: none;\n}\n\n#contact-email-address {\n  order: -1;\n}\n\n#contact-email-address::before {\n  content: \"E-Mail: \";\n  color: black;\n}\n\n#contact-info::before {\n  content: \"\";\n  border: 1px solid black;\n  align-self: stretch;\n}\n\n#contact-phone-number::before {\n  content: \"Phone Number: \";\n}\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(43, 43, 43, 0.822);\n  padding: calc(2 * var(--section-padding));\n  margin: var(--section-margin);\n  border-radius: var(--border-radius-default);\n}\n\n#contactForm > * {\n  width: 400px;\n  padding: var(--section-padding);\n}\n\n#messageInput {\n  padding-bottom: 100px;\n}\n\n#contactForm > :not(label) {\n  margin-bottom: 1.5rem;\n}\n\n#contactForm label {\n  font-weight: 600;\n}\n"],"sourceRoot":""}]);
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

  nameLabel.append(nameInput);

  contactForm.append(
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

  const foodDisclaimer = document.createElement('em');
  foodDisclaimer.setAttribute('id', 'food-disclaimer');
  foodDisclaimer.textContent =
    'Consuming raw or undercooked foods may increase your risk of food bourne illness';
  menuDiv.append(foodDisclaimer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksb0RBQVc7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQW1DO0FBQ2I7O0FBRXRCLHNEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Jlc3RhdXJhbnQxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLXNoYWRvdzogZ3JleTtcXG4gIC0tc2VjdGlvbi1wYWRkaW5nOiA4cHg7XFxuICAtLXNlY3Rpb24tbWFyZ2luOiA4cHg7XFxuICAtLWJvcmRlci1yYWRpdXMtZGVmYXVsdDogMC43NXJlbTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogcmdiKDAsIDE3NSwgMTUyKTtcXG4gIC0tc2hhZGUtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44MjIpO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgYmFja2dyb3VuZDogcmdiKDY1LCA2NSwgNjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDBweDtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgc29saWQgM3B4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pO1xcbn1cXG5cXG5saSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBsaSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpIDJyZW07XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5uYXYgbGk6Zm9jdXMge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDIwMHB4IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIC8qIG1hcmdpbjogMCB2YXIoLS1zZWN0aW9uLW1hcmdpbik7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNyZXN0YXVyYW50LWRlc2NyaXB0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNoYWRlLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob3Vycy1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjksIDI5LCAyOSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG59XFxuXFxuI21lbnUge1xcbiAgYmFja2dyb3VuZDogcmdiYSg0MywgNDMsIDQzLCAwLjgyMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIHdpZHRoOiBjbGFtcCg1MDBweCwgOTB2dywgNTB2dyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKSAwO1xcbiAgLyogYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI2KTsgKi9cXG59XFxuXFxuLmNhdGVnb3J5LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKSAwO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jY29udGFjdC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI2NvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiBjbGFtcCg3NXZ3LCA5MHZ3LCA2MDBweCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiBjYWxjKDIgKiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAjY29udGFjdC1pbmZvIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuXFxuI2NvbnRhY3QtaW5mbyA+ICoge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuYTpsaW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzcyB7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbiNjb250YWN0LWVtYWlsLWFkZHJlc3M6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiRS1NYWlsOiBcXFwiO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jY29udGFjdC1pbmZvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbiNjb250YWN0LXBob25lLW51bWJlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJQaG9uZSBOdW1iZXI6IFxcXCI7XFxufVxcblxcbiNjb250YWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQzLCA0MywgNDMsIDAuODIyKTtcXG4gIHBhZGRpbmc6IGNhbGMoMiAqIHZhcigtLXNlY3Rpb24tcGFkZGluZykpO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbn1cXG5cXG4jY29udGFjdEZvcm0gPiAqIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxufVxcblxcbiNtZXNzYWdlSW5wdXQge1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4jY29udGFjdEZvcm0gPiA6bm90KGxhYmVsKSB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcblxcbiNjb250YWN0Rm9ybSBsYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsc0NBQXNDO0FBQ3hDOztBQUVB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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3Itc2hhZG93OiBncmV5O1xcbiAgLS1zZWN0aW9uLXBhZGRpbmc6IDhweDtcXG4gIC0tc2VjdGlvbi1tYXJnaW46IDhweDtcXG4gIC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0OiAwLjc1cmVtO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiByZ2IoMCwgMTc1LCAxNTIpO1xcbiAgLS1zaGFkZS1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjgyMik7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCA2NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAzcHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiB2YXIoLS1zZWN0aW9uLW1hcmdpbik7XFxufVxcblxcbmxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2IGxpIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZykgMnJlbTtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbm5hdiBsaTpmb2N1cyB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMjAwcHggdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmVzdGF1cmFudDIuanBnXFxcIik7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvcmVzdGF1cmFudDEuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgLyogbWFyZ2luOiAwIHZhcigtLXNlY3Rpb24tbWFyZ2luKTsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtZGVzY3JpcHRpb24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2hhZGUtY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1kZWZhdWx0KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hvdXJzLWxvY2F0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyOSwgMjksIDI5KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICB3aWR0aDogY2xhbXAoNzV2dywgOTB2dywgNjAwcHgpO1xcbn1cXG5cXG4jbWVudSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQzLCA0MywgNDMsIDAuODIyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbiAgd2lkdGg6IGNsYW1wKDUwMHB4LCA5MHZ3LCA1MHZ3KTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pIDA7XFxuICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyAqL1xcbn1cXG5cXG4uY2F0ZWdvcnktaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmc6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1tYXJnaW4pIDA7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNjb250YWN0LWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaGFkZS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtIDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWRlZmF1bHQpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgd2lkdGg6IGNsYW1wKDc1dncsIDkwdncsIDYwMHB4KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMiAqIHZhcigtLXNlY3Rpb24tcGFkZGluZykpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICNjb250YWN0LWluZm8ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5cXG4jY29udGFjdC1pbmZvID4gKiB7XFxuICBwYWRkaW5nOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jY29udGFjdC1lbWFpbC1hZGRyZXNzIHtcXG4gIG9yZGVyOiAtMTtcXG59XFxuXFxuI2NvbnRhY3QtZW1haWwtYWRkcmVzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJFLU1haWw6IFxcXCI7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNjb250YWN0LWluZm86OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuXFxuI2NvbnRhY3QtcGhvbmUtbnVtYmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlBob25lIE51bWJlcjogXFxcIjtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDMsIDQzLCA0MywgMC44MjIpO1xcbiAgcGFkZGluZzogY2FsYygyICogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKSk7XFxuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tbWFyZ2luKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtZGVmYXVsdCk7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+ICoge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgcGFkZGluZzogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcXG59XFxuXFxuI21lc3NhZ2VJbnB1dCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxufVxcblxcbiNjb250YWN0Rm9ybSA+IDpub3QobGFiZWwpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI2NvbnRhY3RGb3JtIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgbG9hZEhlcm8oKTtcbiAgbG9hZENvbnRhY3RJbmZvKCk7XG4gIGxvYWRDb250YWN0Rm9ybSgpO1xufVxuZnVuY3Rpb24gbG9hZEhlcm8oKSB7XG4gIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtaGVybycpO1xuICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgbG9hZEhlYWRlcihoZXJvRGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcihwYXJlbnREaXYpIHtcbiAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyBUb2RheSEnO1xuICBwYXJlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG4gIGNvbnRhY3RIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWhlYWRlcicpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdEluZm8oKSB7XG4gIGNvbnN0IGNvbnRhY3RJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RJbmZvRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1pbmZvJyk7XG4gIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgZW1haWxBZGRyZXNzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1lbWFpbC1hZGRyZXNzJyk7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZU51bWJlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtcGhvbmUtbnVtYmVyJyk7XG5cbiAgZW1haWxBZGRyZXNzLmhyZWYgPSAnbWFpbHRvOnJhbHBoc3Jlc3RhdXJhbnRAZXhhbXBsZS5jb20nO1xuICBlbWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSAncmFscGhzcmVzdGF1cmFudEBleGFtcGxlLmNvbSc7XG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJygxMDApLTEyMy00NTY3JztcblxuICBjb250YWN0SW5mb0Rpdi5hcHBlbmQoZW1haWxBZGRyZXNzLCBwaG9uZU51bWJlcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9EaXYpO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdEZvcm0oKSB7XG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RGb3JtJyk7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMobmFtZUlucHV0LCAndGV4dCcsICduYW1lSW5wdXQnLCAnbmFtZUlucHV0JywgJ05hbWUnKTtcblxuICBjb25zdCBuYW1lTGFiZWwgPSBjcmVhdGVMYWJlbCgnTmFtZSAnLCBuYW1lSW5wdXQpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZXRJbnB1dFZhbHVlcyhlbWFpbElucHV0LCAnZW1haWwnLCAnZW1haWxJbnB1dCcsICdlbWFpbElucHV0JywgJ0VtYWlsJyk7XG5cbiAgY29uc3QgZW1haWxMYWJlbCA9IGNyZWF0ZUxhYmVsKCdFbWFpbCAnLCBlbWFpbElucHV0KTtcblxuICBjb25zdCBwaG9uZU51bWJlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2V0SW5wdXRWYWx1ZXMoXG4gICAgcGhvbmVOdW1iZXJJbnB1dCxcbiAgICAndGVsJyxcbiAgICAncGhvbmVOdW1iZXJJbnB1dCcsXG4gICAgJ3Bob25lTnVtYmVySW5wdXQnLFxuICAgICdQaG9uZSBOdW1iZXInXG4gICk7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXJMYWJlbCA9IGNyZWF0ZUxhYmVsKCdQaG9uZSBOdW1iZXIgJywgcGhvbmVOdW1iZXJJbnB1dCk7XG5cbiAgLy8gU3ViamVjdCBJbnB1dFxuICBjb25zdCBzdWJqZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdWJqZWN0SW5wdXQnKTtcbiAgY29uc3Qgc3ViamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5zZWxlY3RlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gIHN1YmplY3RQbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICBzdWJqZWN0UGxhY2Vob2xkZXIudGV4dCA9ICdXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGNvbnRhY3QgdXMgYWJvdXQ/JztcbiAgc3ViamVjdElucHV0LmFwcGVuZENoaWxkKHN1YmplY3RQbGFjZWhvbGRlcik7XG4gIGNvbnN0IHN1YmplY3RPcHRpb25zID0gWydHZW5lcmFsJywgJ1ByZXNzJywgJ0pvYnMnXTtcbiAgc3ViamVjdE9wdGlvbnMuZm9yRWFjaCgoc3ViamVjdE9wdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdWJqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgY3VycmVudFN1YmplY3QudmFsdWUgPSBzdWJqZWN0T3B0aW9uO1xuICAgIGN1cnJlbnRTdWJqZWN0LnRleHRDb250ZW50ID0gc3ViamVjdE9wdGlvbjtcbiAgICBzdWJqZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY3VycmVudFN1YmplY3QpO1xuICB9KTtcblxuICBjb25zdCBzdWJqZWN0TGFiZWwgPSBjcmVhdGVMYWJlbChzdWJqZWN0UGxhY2Vob2xkZXIudGV4dCwgc3ViamVjdElucHV0KTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBzZXRJbnB1dFZhbHVlcyhcbiAgICBtZXNzYWdlSW5wdXQsXG4gICAgJ3RleHQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdtZXNzYWdlSW5wdXQnLFxuICAgICdZb3VyIE1lc3NhZ2UnXG4gICk7XG5cbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gY3JlYXRlTGFiZWwoJ1lvdXIgTWVzc2FnZSAnLCBtZXNzYWdlSW5wdXQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgbmFtZUxhYmVsLmFwcGVuZChuYW1lSW5wdXQpO1xuXG4gIGNvbnRhY3RGb3JtLmFwcGVuZChcbiAgICBuYW1lTGFiZWwsXG4gICAgbmFtZUlucHV0LFxuICAgIGVtYWlsTGFiZWwsXG4gICAgZW1haWxJbnB1dCxcbiAgICBwaG9uZU51bWJlckxhYmVsLFxuICAgIHBob25lTnVtYmVySW5wdXQsXG4gICAgc3ViamVjdExhYmVsLFxuICAgIHN1YmplY3RJbnB1dCxcbiAgICBtZXNzYWdlTGFiZWwsXG4gICAgbWVzc2FnZUlucHV0LFxuICAgIHN1Ym1pdEJ0blxuICApO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gIGZ1bmN0aW9uIHNldElucHV0VmFsdWVzKGlucHV0LCB0eXBlLCBuYW1lLCBpZCwgcGxhY2Vob2xkZXIpIHtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LCBpbnB1dE5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGxhYmVsLmh0bWxGb3IgPSBpbnB1dE5hbWU7XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG4iLCJpbXBvcnQgcmVzdGF1cmFudEltZ1NyYyBmcm9tICcuL2ltYWdlcy9yZXN0YXVyYW50MS5qcGcnO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGxvYWRIZXJvKCk7XG4gIC8vIGxvYWRSZXZpZXdzKCk7XG4gIGxvYWRIb3Vyc0FuZExvY2F0aW9uKCk7XG4gIC8vIGxvYWRGb290ZXIoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEltZygpIHtcbiAgY29uc3QgcmVzdGF1cmFudEltZyA9IG5ldyBJbWFnZSgpO1xuICByZXN0YXVyYW50SW1nLnNyYyA9IHJlc3RhdXJhbnRJbWdTcmM7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltZyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRIZXJvKCkge1xuICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXVyYW50LWhlcm8nKTtcbiAgaGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGxvYWREZXNjcmlwdGlvbihoZXJvRGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbn1cblxuZnVuY3Rpb24gbG9hZERlc2NyaXB0aW9uKHBhcmVudERpdikge1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJXZSB3ZWxjb21lIHlvdSB0byBSYWxwaCdzIHJlc3RhdXJhbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdHJpLXN0YXRlIGFyZWEuIFNpbmNlIDIwMDIsIG91ciByZXN0YXVyYW50IGhhcyBiZWVuIHNlcnZpbmcgYXdhcmQtd2lubmluZyBmb29kIGFuZCBkcmlua3MgdG8gZ2l2ZSBvdXIgY3VzdG9tZXJzIGFuIG91dHN0YW5kaW5nIGV4cGVyaWVuY2UuIFdlIGNhbm5vdCB3YWl0IHRvIHNlcnZlIHlvdSFcIjtcbiAgcGFyZW50RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgZGVzY3JpcHRpb25UZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmVzdGF1cmFudC1kZXNjcmlwdGlvbicpO1xufVxuXG5mdW5jdGlvbiBsb2FkSG91cnNBbmRMb2NhdGlvbigpIHtcbiAgY29uc3QgaG91cnNBbmRMb2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG91cnNBbmRMb2NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1sb2NhdGlvbicpO1xuICBsb2FkUmVzdGF1cmFudEhvdXJzKGhvdXJzQW5kTG9jRGl2KTtcbiAgbG9hZExvY2F0aW9uKGhvdXJzQW5kTG9jRGl2KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob3Vyc0FuZExvY0Rpdik7XG59XG5cbmZ1bmN0aW9uIGxvYWRSZXN0YXVyYW50SG91cnMocGFyZW50RGl2KSB7XG4gIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICBob3Vyc0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWhlYWRlcicpO1xuXG4gIGNvbnN0IGhvdXJzQXJyYXkgPSBbXG4gICAgWydNb25kYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydUdWVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnV2VkbmVzZGF5JywgJzQ6MDAgUE0gLSAxMDowMCBQTSddLFxuICAgIFsnVGh1cnNkYXknLCAnNDowMCBQTSAtIDEwOjAwIFBNJ10sXG4gICAgWydGcmlkYXknLCAnNDowMCBQTSAtIDExOjAwIFBNJ10sXG4gICAgWydTYXR1cmRheScsICc0OjAwIFBNIC0gMTE6MDAgUE0nXSxcbiAgICBbJ1N1bmRheScsICc0OjAwIFBNIC0gMTA6MDAgUE0nXSxcbiAgXTtcblxuICBjb25zdCBob3Vyc1RhYmxlID0gYXJyYXlUb1RhYmxlKGhvdXJzQXJyYXkpO1xuXG4gIGhvdXJzVGFibGUuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy10YWJsZScpO1xuXG4gIGhvdXJzRGl2LmFwcGVuZChob3Vyc0hlYWRlciwgaG91cnNUYWJsZSk7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChob3Vyc0Rpdik7XG5cbiAgZnVuY3Rpb24gYXJyYXlUb1RhYmxlKHRhYmxlRGF0YSkge1xuICAgIGNvbnN0IHRhYmxlUmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0YWJsZVJlc3VsdC5pbnNlcnRSb3coLTEpOyAvLyBJbnNlcnQgcm93IGF0IGVuZCBvZiB0YWJsZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YWJsZURhdGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKGopO1xuICAgICAgICBjb25zdCBjZWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhYmxlRGF0YVtpXVtqXSk7XG4gICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbFRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJsZVJlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTG9jYXRpb24ocGFyZW50RGl2KSB7XG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSAnQWRkcmVzcyc7XG4gIGxvY2F0aW9uSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24taGVhZGVyJyk7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkcmVzcy5pbm5lclRleHQgPSAnMTIzIE1haW4gU3QgXFxuTmV3IEZvcmsgQ2l0eSwgTmV3IFlvcmsgXFxuMTAyMzQnO1xuXG4gIGxvY2F0aW9uRGl2LmFwcGVuZChsb2NhdGlvbkhlYWRlciwgYWRkcmVzcyk7XG4gIHBhcmVudERpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cbiAgYWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcbn1cbiIsImltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vbWVudUl0ZW1zJztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAvLyBTb3J0IG1lbnUgaXRlbXMgYnkgY2F0ZWdvcnkgYWxwaGFiZXRpY2FsbHlcbiAgLy8gbWVudUl0ZW1zLnNvcnQoKGEsIGIpID0+XG4gIC8vICAgYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkgPyAxIDogYi5jYXRlZ29yeSA+IGEuY2F0ZWdvcnkgPyAtMSA6IDBcbiAgLy8gKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeSA9IG1lbnVJdGVtc1swXS5jYXRlZ29yeTtcbiAgbGV0IGN1cnJlbnRDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgY3VycmVudENhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBjdXJyZW50Q2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjdXJyZW50Q2F0ZWdvcnk7XG5cbiAgY3VycmVudENhdGVnb3J5RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlIZWFkZXIpO1xuXG4gIGN1cnJlbnRDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VycmVudENhdGVnb3J5KTtcbiAgY3VycmVudENhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5Jyk7XG4gIGN1cnJlbnRDYXRlZ29yeUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1oZWFkZXInKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtZW51SXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lbnVJdGVtQ29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIG1lbnVJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdmb29kLW5hbWUnKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgbWVudUl0ZW1Db3N0LmNsYXNzTGlzdC5hZGQoJ2Nvc3QnKTtcblxuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5uYW1lO1xuICAgIG1lbnVJdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0uZGVzY3JpcHRpb247XG4gICAgbWVudUl0ZW1Db3N0LnRleHRDb250ZW50ID0gbWVudUl0ZW1zW2ldLmNvc3Q7XG5cbiAgICBtZW51SXRlbURpdi5hcHBlbmQobWVudUl0ZW1OYW1lLCBtZW51SXRlbURlc2NyaXB0aW9uLCBtZW51SXRlbUNvc3QpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBjYXRlZ29yeVxuICAgIGlmIChtZW51SXRlbXNbaV0uY2F0ZWdvcnkgIT09IGN1cnJlbnRDYXRlZ29yeSkge1xuICAgICAgbWVudURpdi5hcHBlbmQoY3VycmVudENhdGVnb3J5RGl2KTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeSA9IG1lbnVJdGVtc1tpXS5jYXRlZ29yeTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY3VycmVudENhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeUhlYWRlci50ZXh0Q29udGVudCA9IGN1cnJlbnRDYXRlZ29yeTtcblxuICAgICAgY3VycmVudENhdGVnb3J5RGl2LmFwcGVuZChjdXJyZW50Q2F0ZWdvcnlIZWFkZXIpO1xuXG4gICAgICBjdXJyZW50Q2F0ZWdvcnlEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGN1cnJlbnRDYXRlZ29yeSk7XG4gICAgICBjdXJyZW50Q2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeUhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1oZWFkZXInKTtcbiAgICB9XG4gICAgY3VycmVudENhdGVnb3J5RGl2LmFwcGVuZChtZW51SXRlbURpdik7XG4gIH1cbiAgbWVudURpdi5hcHBlbmQoY3VycmVudENhdGVnb3J5RGl2KTtcblxuICBjb25zdCBmb29kRGlzY2xhaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gIGZvb2REaXNjbGFpbWVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vZC1kaXNjbGFpbWVyJyk7XG4gIGZvb2REaXNjbGFpbWVyLnRleHRDb250ZW50ID1cbiAgICAnQ29uc3VtaW5nIHJhdyBvciB1bmRlcmNvb2tlZCBmb29kcyBtYXkgaW5jcmVhc2UgeW91ciByaXNrIG9mIGZvb2QgYm91cm5lIGlsbG5lc3MnO1xuICBtZW51RGl2LmFwcGVuZChmb29kRGlzY2xhaW1lcik7XG4gIGNvbnRlbnREaXYuYXBwZW5kKG1lbnVEaXYpO1xufVxuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6ICdGcmllZCBDYWxhbWFyaScsXG4gICAgY29zdDogOSxcbiAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSwgYmVlci1iYXR0ZXJlZCBmcmllZCBjYWxhbWFyaScsXG4gICAgY2F0ZWdvcnk6ICdBcHBldGl6ZXInLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0dhcmxpYyBCcmVhZCcsXG4gICAgY29zdDogNixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDaGVlc3kgZGVsaWNpb3VzIGdhcmxpYyBicmVhZCBtYWRlIGZyb20gZnJlc2ggaG9tZS1tYWRlIGJyZWFkJyxcbiAgICBjYXRlZ29yeTogJ0FwcGV0aXplcicsXG4gICAgdmVnZXRhcmlhbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVhaycsXG4gICAgY29zdDogMjEsXG4gICAgZGVzY3JpcHRpb246ICdTaXp6bGluZyBzdGVhaycsXG4gICAgY2F0ZWdvcnk6ICdFbnRyZWUnLFxuICAgIHZlZ2V0YXJpYW46IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0hhbWJ1cmdlcicsXG4gICAgY29zdDogMTYsXG4gICAgZGVzY3JpcHRpb246ICdKdWljeSBidXJnZXInLFxuICAgIGNhdGVnb3J5OiAnRW50cmVlJyxcbiAgICB2ZWdldGFyaWFuOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDaG9jb2xhdGUgQ2FrZScsXG4gICAgY29zdDogMTAsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkZWNhZGVudCwgbW9pc3QgY2hvY29sYXRlIGxvdmVyJ3MgZHJlYW1cIixcbiAgICBjYXRlZ29yeTogJ0Rlc3NlcnQnLFxuICAgIHZlZ2V0YXJpYW46IHRydWUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUHVtcGtpbiBQaWUnLFxuICAgIGNvc3Q6IDksXG4gICAgZGVzY3JpcHRpb246ICdBIHNtb290aCBmYWxsLXNwaWNlZCBwdW1wa2luIHBpZScsXG4gICAgY2F0ZWdvcnk6ICdEZXNzZXJ0JyxcbiAgICB2ZWdldGFyaWFuOiB0cnVlLFxuICB9LFxuXTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgbG9hZEhvbWUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAvLyBSZXN0YXVyYW50IG5hbWVcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlJhbHBoJ3MgUmVzdGF1cmFudFwiO1xuICByZXN0YXVyYW50TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jlc3RhdXJhbnQtbmFtZS1oZWFkZXInKTtcblxuICAvLyBIb21lIE1lbnUgQ29udGFjdFxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3QgcGFnZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgcGFnZUxpc3QuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICBuYXYuYXBwZW5kQ2hpbGQocGFnZUxpc3QpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIC8vIEluc2VydCBoZWFkZXIgYW5kIHJlc3RhdXJhbnQgbmFtZVxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnREaXYpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShyZXN0YXVyYW50TmFtZSwgY29udGVudERpdik7XG5cbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNsZWFyQ29udGVudHMoKTtcbiAgICBsb2FkSG9tZSgpO1xuICAgIHVuSGlnaGxpZ2h0TmF2KCk7XG4gICAgaGlnaGxpZ2h0TGkoZXZlbnQudGFyZ2V0KTtcbiAgfSk7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjbGVhckNvbnRlbnRzKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgICB1bkhpZ2hsaWdodE5hdigpO1xuICAgIGhpZ2hsaWdodExpKGV2ZW50LnRhcmdldCk7XG4gIH0pO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY2xlYXJDb250ZW50cygpO1xuICAgIGxvYWRDb250YWN0KCk7XG4gICAgdW5IaWdobGlnaHROYXYoKTtcbiAgICBoaWdobGlnaHRMaShldmVudC50YXJnZXQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgd2hpbGUgKGNvbnRlbnREaXYuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudERpdi5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRMaShsaSkge1xuICBsaS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpJyk7XG59XG5cbmZ1bmN0aW9uIHVuSGlnaGxpZ2h0TmF2KCkge1xuICBjb25zdCBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgbGknKTtcbiAgbGlzLmZvckVhY2goKGxpKSA9PiB7XG4gICAgbGkuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCcpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9