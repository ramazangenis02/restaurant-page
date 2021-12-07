/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* <- Global Styles Start -> */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  max-height: 100vh;\n}\n\n/* <- Global Styles End -> */\n\n/* <- Landing Styles Start -> */\n.landing-container {\n  position: relative;\n}\n\n.landing-container::before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  filter: brightness(40%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.intro-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85vh;\n}\n\n.intro-title {\n  text-align: center;\n  width: 60%;\n  font-size: 4.5em;\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n/* <- Landing Styles End -> */\n\n/*  <- Navbar Styles Start -> */\n.navbar-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.nav-links {\n  font-size: 40px;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border-radius: 50px;\n  margin: 40px 40px 0 40px;\n  padding: 10px;\n  display: block;\n  text-align: center;\n}\n\n.nav-links:hover {\n  background: #41506b;\n}\n\n.nav-active {\n  background: #41506b !important;\n}\n\n/*  <- Navbar Styles End -> */\n\n/* <- Menu Styles Start -> */\n\n.menu-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.menu-container img {\n  width: 70%;\n  border-radius: 50px;\n  height: 750px;\n}\n/* <- Menu Styles End -> */\n/* <- Contact Styles Start -> */\n.contact-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 40px;\n}\n.map {\n  width: 900px;\n  height: 750px;\n  border-radius: 20px;\n}\n\n.contact-info {\n  background: #41506b;\n  width: 400px;\n  height: 400px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: #fff;\n}\n.info-title {\n  font-size: 3em;\n  margin-top: 20px;\n}\n\n.info-open-days-title {\n  font-size: 1.5em;\n}\n\n.info-open-days {\n  margin-top: 5px;\n  font-size: 1.2em;\n}\n\n.info-address {\n  font-size: 1.5em;\n  margin-bottom: 20px;\n}\n/* <- Contact Styles End -> */\n\n/* Responsive */\n@media only screen and (max-width: 1810px) {\n  .intro-title {\n    width: 65%;\n  }\n}\n\n@media only screen and (max-width: 1674px) {\n  .intro-title {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 1558px) {\n  .intro-title {\n    font-size: 4em;\n  }\n}\n\n@media only screen and (max-width: 1477px) {\n  .map {\n    width: 700px;\n  }\n}\n\n@media only screen and (max-width: 1358px) {\n  .intro-title {\n    font-size: 3.5em;\n  }\n\n  .map {\n    width: 500px;\n  }\n}\n\n@media only screen and (max-width: 1237px) {\n  .intro-title {\n    font-size: 3em;\n  }\n\n  .nav-links {\n    font-size: 30px;\n  }\n\n  .menu-container img {\n    width: 95%;\n  }\n}\n\n@media only screen and (max-width: 1076px) {\n  .intro-title {\n    font-size: 2.7em;\n  }\n\n  .map {\n    width: 400px;\n  }\n\n  .contact-info {\n    width: 350px;\n  }\n}\n\n@media only screen and (max-width: 980px) {\n  .intro-title {\n    width: 80%;\n  }\n\n  .menu-container img {\n    height: 600px;\n  }\n}\n\n@media only screen and (max-width: 863px) {\n  .intro-title {\n    font-size: 2.2em;\n  }\n\n  .contact-info {\n    width: 300px;\n  }\n\n  .map {\n    width: 350px;\n  }\n}\n\n@media only screen and (max-width: 723px) {\n  .intro-title {\n    font-size: 1.8em;\n  }\n\n  .nav-links {\n    font-size: 25px;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n\n  .map {\n    width: 400px;\n    height: 500px;\n  }\n\n  .contact-info {\n    width: 400px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n}\n\n@media only screen and (max-width: 611px) {\n  .intro-title {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .intro-title {\n    font-size: 1.2em !important;\n  }\n  .intro-title {\n    width: 100%;\n  }\n\n  .nav-links {\n    margin: 20px 20px 0 20px;\n    font-size: 15px;\n  }\n\n  .menu-container img {\n    height: 500px;\n    width: 95%;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n\n  .map {\n    width: 300px;\n    height: 300px;\n  }\n\n  .contact-info {\n    width: 300px;\n    height: 250px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n\n  .info-open-days {\n    font-size: 1em;\n  }\n}\n\n@media only screen and (width: 495px) {\n  .intro-title {\n    font-size: 1.5em;\n  }\n\n  .menu-container img {\n    width: 95%;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n}\n\n@media only screen and (max-height: 800px) {\n  .intro-container {\n    height: 400px;\n  }\n  .map {\n    width: 350px;\n    height: 300px;\n  }\n\n  .contact-info {\n    width: 350px;\n    height: 250px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n\n  .info-open-days {\n    font-size: 1em;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;;;EAGE,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA,4BAA4B;;AAE5B,+BAA+B;AAC/B;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,OAAO;EACP,MAAM;EACN,WAAW;EACX,aAAa;EACb,mDAAqC;EACrC,uBAAuB;EACvB,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;AACA,6BAA6B;;AAE7B,+BAA+B;AAC/B;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,yBAAyB;EACzB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,wBAAwB;EACxB,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;AAChC;;AAEA,6BAA6B;;AAE7B,4BAA4B;;AAE5B;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,mBAAmB;EACnB,aAAa;AACf;AACA,0BAA0B;AAC1B,+BAA+B;AAC/B;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,4CAA4C;EAC5C,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA,6BAA6B;;AAE7B,eAAe;AACf;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;EACA;IACE,WAAW;EACb;;EAEA;IACE,wBAAwB;IACxB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,UAAU;EACZ;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,YAAY;IACZ,aAAa;EACf;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;AACF","sourcesContent":["/* <- Global Styles Start -> */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n}\n\nhtml,\nbody {\n  max-height: 100vh;\n}\n\n/* <- Global Styles End -> */\n\n/* <- Landing Styles Start -> */\n.landing-container {\n  position: relative;\n}\n\n.landing-container::before {\n  content: \"\";\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: url(./img/background.jpg);\n  filter: brightness(40%);\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.intro-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85vh;\n}\n\n.intro-title {\n  text-align: center;\n  width: 60%;\n  font-size: 4.5em;\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n/* <- Landing Styles End -> */\n\n/*  <- Navbar Styles Start -> */\n.navbar-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.nav-links {\n  font-size: 40px;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border-radius: 50px;\n  margin: 40px 40px 0 40px;\n  padding: 10px;\n  display: block;\n  text-align: center;\n}\n\n.nav-links:hover {\n  background: #41506b;\n}\n\n.nav-active {\n  background: #41506b !important;\n}\n\n/*  <- Navbar Styles End -> */\n\n/* <- Menu Styles Start -> */\n\n.menu-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n.menu-container img {\n  width: 70%;\n  border-radius: 50px;\n  height: 750px;\n}\n/* <- Menu Styles End -> */\n/* <- Contact Styles Start -> */\n.contact-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 40px;\n}\n.map {\n  width: 900px;\n  height: 750px;\n  border-radius: 20px;\n}\n\n.contact-info {\n  background: #41506b;\n  width: 400px;\n  height: 400px;\n  border-radius: 15px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: #fff;\n}\n.info-title {\n  font-size: 3em;\n  margin-top: 20px;\n}\n\n.info-open-days-title {\n  font-size: 1.5em;\n}\n\n.info-open-days {\n  margin-top: 5px;\n  font-size: 1.2em;\n}\n\n.info-address {\n  font-size: 1.5em;\n  margin-bottom: 20px;\n}\n/* <- Contact Styles End -> */\n\n/* Responsive */\n@media only screen and (max-width: 1810px) {\n  .intro-title {\n    width: 65%;\n  }\n}\n\n@media only screen and (max-width: 1674px) {\n  .intro-title {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 1558px) {\n  .intro-title {\n    font-size: 4em;\n  }\n}\n\n@media only screen and (max-width: 1477px) {\n  .map {\n    width: 700px;\n  }\n}\n\n@media only screen and (max-width: 1358px) {\n  .intro-title {\n    font-size: 3.5em;\n  }\n\n  .map {\n    width: 500px;\n  }\n}\n\n@media only screen and (max-width: 1237px) {\n  .intro-title {\n    font-size: 3em;\n  }\n\n  .nav-links {\n    font-size: 30px;\n  }\n\n  .menu-container img {\n    width: 95%;\n  }\n}\n\n@media only screen and (max-width: 1076px) {\n  .intro-title {\n    font-size: 2.7em;\n  }\n\n  .map {\n    width: 400px;\n  }\n\n  .contact-info {\n    width: 350px;\n  }\n}\n\n@media only screen and (max-width: 980px) {\n  .intro-title {\n    width: 80%;\n  }\n\n  .menu-container img {\n    height: 600px;\n  }\n}\n\n@media only screen and (max-width: 863px) {\n  .intro-title {\n    font-size: 2.2em;\n  }\n\n  .contact-info {\n    width: 300px;\n  }\n\n  .map {\n    width: 350px;\n  }\n}\n\n@media only screen and (max-width: 723px) {\n  .intro-title {\n    font-size: 1.8em;\n  }\n\n  .nav-links {\n    font-size: 25px;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n\n  .map {\n    width: 400px;\n    height: 500px;\n  }\n\n  .contact-info {\n    width: 400px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n}\n\n@media only screen and (max-width: 611px) {\n  .intro-title {\n    width: 90%;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .intro-title {\n    font-size: 1.2em !important;\n  }\n  .intro-title {\n    width: 100%;\n  }\n\n  .nav-links {\n    margin: 20px 20px 0 20px;\n    font-size: 15px;\n  }\n\n  .menu-container img {\n    height: 500px;\n    width: 95%;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n\n  .map {\n    width: 300px;\n    height: 300px;\n  }\n\n  .contact-info {\n    width: 300px;\n    height: 250px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n\n  .info-open-days {\n    font-size: 1em;\n  }\n}\n\n@media only screen and (width: 495px) {\n  .intro-title {\n    font-size: 1.5em;\n  }\n\n  .menu-container img {\n    width: 95%;\n  }\n\n  .contact-container {\n    flex-direction: column;\n  }\n}\n\n@media only screen and (max-height: 800px) {\n  .intro-container {\n    height: 400px;\n  }\n  .map {\n    width: 350px;\n    height: 300px;\n  }\n\n  .contact-info {\n    width: 350px;\n    height: 250px;\n    margin-top: 30px;\n    margin-bottom: 20px;\n  }\n\n  .info-open-days {\n    font-size: 1em;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactFunc() {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.querySelector(".landing-container");
  const introContainer = document.querySelector(".intro-container");

  const menuContainer = document.querySelector(".menu-container");

  if (landingContainer.contains(introContainer)) {
    landingContainer.removeChild(introContainer);
  }

  if (mainContent.contains(menuContainer)) {
    mainContent.removeChild(menuContainer);
  }

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactMapWrapper = document.createElement("div");
  contactMapWrapper.classList.add("contact-map");

  const contactInfoWrapper = document.createElement("div");
  contactInfoWrapper.classList.add("contact-info");

  const contactContainerWrapper = document.querySelector(".contact-container");

  contactContainer.appendChild(contactMapWrapper);
  contactContainer.appendChild(contactInfoWrapper);

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477100938!2d-74.11976334348923!3d40.697403441991554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1638621618458!5m2!1str!2str";

  iframe.classList.add("map");

  if (!mainContent.contains(contactContainerWrapper)) {
    mainContent.appendChild(contactContainer);
  }
  contactMapWrapper.appendChild(iframe);

  const infoTitle = document.createElement("h3");
  infoTitle.classList.add("info-title");
  infoTitle.innerHTML = "Find Us Here";

  contactInfoWrapper.appendChild(infoTitle);
  const infoOpenDaysContainer = document.createElement("div");
  infoOpenDaysContainer.classList.add("info-open-days-container");

  const infoOpenDaysTitle = document.createElement("h4");
  infoOpenDaysTitle.classList.add("info-open-days-title");
  infoOpenDaysTitle.innerHTML = "The days we are open";

  const infoOpenDays = document.createElement("p");
  infoOpenDays.classList.add("info-open-days");
  infoOpenDays.innerHTML = "Monday Tuesday Wednesday Thursday Friday";

  infoOpenDaysContainer.appendChild(infoOpenDaysTitle);
  infoOpenDaysContainer.appendChild(infoOpenDays);
  contactInfoWrapper.appendChild(infoOpenDaysContainer);

  const infoAddress = document.createElement("p");
  infoAddress.classList.add("info-address");
  infoAddress.innerHTML = "184 Constantin Burg Esperanzaburgh ";

  contactInfoWrapper.appendChild(infoAddress);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactFunc);


/***/ }),

/***/ "./src/landing.js":
/*!************************!*\
  !*** ./src/landing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const landingPage = (() => {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.createElement("div");

  mainContent.appendChild(landingContainer);

  landingContainer.classList.add("landing-container");

  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  landingContainer.appendChild(introContainer);

  const introTitle = document.createElement("h1");
  introTitle.classList.add("intro-title");
  introTitle.innerText = "THE WORLD'S MOST-LOVED CAFE & RESTAURANT";

  introContainer.appendChild(introTitle);

  const introContainerWrapper = document.querySelector(".intro-container");
  const menuContainerWrapper = document.querySelector(".menu-container");

  function landingFunc() {
    if (!landingContainer.contains(introContainerWrapper)) {
      landingContainer.appendChild(introContainerWrapper);
    }

    if (!mainContent.lastElementChild.classList.contains("landing-container")) {
      mainContent.removeChild(mainContent.lastElementChild);
    }
  }

  return { landingFunc };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (landingPage);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_Black_and_White_Minimalist_BBQ_Menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Black and White Minimalist BBQ Menu.png */ "./src/img/Black and White Minimalist BBQ Menu.png");

function menuFunc() {
  const mainContent = document.querySelector("#content");
  const landingContainer = document.querySelector(".landing-container");
  const introContainer = document.querySelector(".intro-container");
  const menuContainer = document.createElement("div");

  menuContainer.classList.add("menu-container");

  const menuContainerWrapper = document.querySelector(".menu-container");

  if (landingContainer.contains(introContainer)) {
    landingContainer.removeChild(introContainer);
  }

  if (!mainContent.contains(menuContainerWrapper)) {
    mainContent.appendChild(menuContainer);
  }

  const menuImgWrapper = new Image();
  menuImgWrapper.src = _img_Black_and_White_Minimalist_BBQ_Menu_png__WEBPACK_IMPORTED_MODULE_0__;

  menuContainer.appendChild(menuImgWrapper);

  const contactContainer = document.querySelector(".contact-container");

  if (mainContent.contains(contactContainer)) {
    mainContent.removeChild(contactContainer);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunc);


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const navBar = (() => {
  const mainContent = document.querySelector("#content");

  const navBarContainer = document.createElement("div");
  const navBarWrapper = document.createElement("div");

  navBarContainer.classList.add("navbar-container");
  navBarWrapper.classList.add("navbar-wrapper");

  navBarContainer.appendChild(navBarWrapper);
  mainContent.appendChild(navBarContainer);

  const home = document.createElement("span");
  const menu = document.createElement("span");
  const contact = document.createElement("span");

  home.classList.add("nav-links");
  home.classList.add("nav-active");
  menu.classList.add("nav-links");
  contact.classList.add("nav-links");

  home.innerText = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";

  navBarWrapper.appendChild(home);
  navBarWrapper.appendChild(menu);
  navBarWrapper.appendChild(contact);

  return {
    home,
    menu,
    contact,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);


/***/ }),

/***/ "./src/img/Black and White Minimalist BBQ Menu.png":
/*!*********************************************************!*\
  !*** ./src/img/Black and White Minimalist BBQ Menu.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dd259a3c7db46a7084d.png";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9ced5e12f3b203b5ce6.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing */ "./src/landing.js");





const navHome = _navbar__WEBPACK_IMPORTED_MODULE_0__["default"].home;
const navMenu = _navbar__WEBPACK_IMPORTED_MODULE_0__["default"].menu;
const navContact = _navbar__WEBPACK_IMPORTED_MODULE_0__["default"].contact;

navHome.addEventListener("click", () => {
  navHome.classList.add("nav-active");

  navMenu.classList.remove("nav-active");
  navContact.classList.remove("nav-active");

  _landing__WEBPACK_IMPORTED_MODULE_3__["default"].landingFunc();
});

navMenu.addEventListener("click", () => {
  navMenu.classList.add("nav-active");

  navHome.classList.remove("nav-active");
  navContact.classList.remove("nav-active");

  (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

navContact.addEventListener("click", () => {
  navContact.classList.add("nav-active");

  navMenu.classList.remove("nav-active");
  navHome.classList.remove("nav-active");

  (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLHVCQUF1QiwwQkFBMEIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssR0FBRyxTQUFTLHVGQUF1RixRQUFRLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxN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QUVBLEVBQUUsb0RBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPC0gR2xvYmFsIFN0eWxlcyBTdGFydCAtPiAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiA8LSBHbG9iYWwgU3R5bGVzIEVuZCAtPiAqL1xcblxcbi8qIDwtIExhbmRpbmcgU3R5bGVzIFN0YXJ0IC0+ICovXFxuLmxhbmRpbmctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxhbmRpbmctY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg0MCUpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmludHJvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbn1cXG5cXG4uaW50cm8tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGZvbnQtc2l6ZTogNC41ZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuLyogPC0gTGFuZGluZyBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogIDwtIE5hdmJhciBTdHlsZXMgU3RhcnQgLT4gKi9cXG4ubmF2YmFyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbWFyZ2luOiA0MHB4IDQwcHggMCA0MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWxpbmtzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM0MTUwNmI7XFxufVxcblxcbi5uYXYtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM0MTUwNmIgIWltcG9ydGFudDtcXG59XFxuXFxuLyogIDwtIE5hdmJhciBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogPC0gTWVudSBTdHlsZXMgU3RhcnQgLT4gKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGhlaWdodDogNzUwcHg7XFxufVxcbi8qIDwtIE1lbnUgU3R5bGVzIEVuZCAtPiAqL1xcbi8qIDwtIENvbnRhY3QgU3R5bGVzIFN0YXJ0IC0+ICovXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4ubWFwIHtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogNzUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIGJhY2tncm91bmQ6ICM0MTUwNmI7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmluZm8tdGl0bGUge1xcbiAgZm9udC1zaXplOiAzZW07XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaW5mby1vcGVuLWRheXMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmluZm8tb3Blbi1kYXlzIHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5pbmZvLWFkZHJlc3Mge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi8qIDwtIENvbnRhY3QgU3R5bGVzIEVuZCAtPiAqL1xcblxcbi8qIFJlc3BvbnNpdmUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MTBweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjc0cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU1OHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDc3cHgpIHtcXG4gIC5tYXAge1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1OHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDMuNWVtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjM3cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzZweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjdlbTtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYzcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi4yZW07XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjExcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyB7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuaW5mby1vcGVuLWRheXMge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAod2lkdGg6IDQ5NXB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgLmludHJvLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICB9XFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5pbmZvLW9wZW4tZGF5cyB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5Qjs7O0VBR0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBLDRCQUE0Qjs7QUFFNUIsK0JBQStCO0FBQy9CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbURBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBLDZCQUE2Qjs7QUFFN0IsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSw2QkFBNkI7O0FBRTdCLDRCQUE0Qjs7QUFFNUI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUIsK0JBQStCO0FBQy9CO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0EsNkJBQTZCOztBQUU3QixlQUFlO0FBQ2Y7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiA8LSBHbG9iYWwgU3R5bGVzIFN0YXJ0IC0+ICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIDwtIEdsb2JhbCBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogPC0gTGFuZGluZyBTdHlsZXMgU3RhcnQgLT4gKi9cXG4ubGFuZGluZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGFuZGluZy1jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWcvYmFja2dyb3VuZC5qcGcpO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaW50cm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5pbnRyby10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgZm9udC1zaXplOiA0LjVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4vKiA8LSBMYW5kaW5nIFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiAgPC0gTmF2YmFyIFN0eWxlcyBTdGFydCAtPiAqL1xcbi5uYXZiYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDQwcHggNDBweCAwIDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YjtcXG59XFxuXFxuLm5hdi1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiAgPC0gTmF2YmFyIFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiA8LSBNZW51IFN0eWxlcyBTdGFydCAtPiAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4ubWVudS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgaGVpZ2h0OiA3NTBweDtcXG59XFxuLyogPC0gTWVudSBTdHlsZXMgRW5kIC0+ICovXFxuLyogPC0gQ29udGFjdCBTdHlsZXMgU3RhcnQgLT4gKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5tYXAge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA3NTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uaW5mby10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbmZvLW9wZW4tZGF5cy10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uaW5mby1vcGVuLWRheXMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmluZm8tYWRkcmVzcyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLyogPC0gQ29udGFjdCBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogUmVzcG9uc2l2ZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgxMHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzRweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTU4cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzdweCkge1xcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzU4cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMy41ZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzdweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NnB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuN2VtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjNweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyM3B4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTFweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5pbmZvLW9wZW4tZGF5cyB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aDogNDk1cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XFxuICAuaW50cm8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH1cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmluZm8tb3Blbi1kYXlzIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0RnVuYygpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGxhbmRpbmdDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmRpbmctY29udGFpbmVyXCIpO1xuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm8tY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIGlmIChsYW5kaW5nQ29udGFpbmVyLmNvbnRhaW5zKGludHJvQ29udGFpbmVyKSkge1xuICAgIGxhbmRpbmdDb250YWluZXIucmVtb3ZlQ2hpbGQoaW50cm9Db250YWluZXIpO1xuICB9XG5cbiAgaWYgKG1haW5Db250ZW50LmNvbnRhaW5zKG1lbnVDb250YWluZXIpKSB7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIH1cblxuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgY29udGFjdE1hcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0TWFwV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1tYXBcIik7XG5cbiAgY29uc3QgY29udGFjdEluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWluZm9cIik7XG5cbiAgY29uc3QgY29udGFjdENvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1hcFdyYXBwZXIpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvV3JhcHBlcik7XG5cbiAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgaWZyYW1lLnNyYyA9XG4gICAgXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxOTM1OTUuOTE0NzcxMDA5MzghMmQtNzQuMTE5NzYzMzQzNDg5MjMhM2Q0MC42OTc0MDM0NDE5OTE1NTQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5YzI0ZmE1ZDMzZjA4M2IlM0EweGM4MGI4ZjA2ZTE3N2ZlNjIhMnNOZXclMjBZb3JrJTJDJTIwQW1lcmlrYSUyMEJpcmxlJUM1JTlGaWslMjBEZXZsZXRsZXJpITVlMCEzbTIhMXN0ciEyc3RyITR2MTYzODYyMTYxODQ1OCE1bTIhMXN0ciEyc3RyXCI7XG5cbiAgaWZyYW1lLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XG5cbiAgaWYgKCFtYWluQ29udGVudC5jb250YWlucyhjb250YWN0Q29udGFpbmVyV3JhcHBlcikpIHtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgfVxuICBjb250YWN0TWFwV3JhcHBlci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXRpdGxlXCIpO1xuICBpbmZvVGl0bGUuaW5uZXJIVE1MID0gXCJGaW5kIFVzIEhlcmVcIjtcblxuICBjb250YWN0SW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb1RpdGxlKTtcbiAgY29uc3QgaW5mb09wZW5EYXlzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb09wZW5EYXlzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLW9wZW4tZGF5cy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgaW5mb09wZW5EYXlzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGluZm9PcGVuRGF5c1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbmZvLW9wZW4tZGF5cy10aXRsZVwiKTtcbiAgaW5mb09wZW5EYXlzVGl0bGUuaW5uZXJIVE1MID0gXCJUaGUgZGF5cyB3ZSBhcmUgb3BlblwiO1xuXG4gIGNvbnN0IGluZm9PcGVuRGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbmZvT3BlbkRheXMuY2xhc3NMaXN0LmFkZChcImluZm8tb3Blbi1kYXlzXCIpO1xuICBpbmZvT3BlbkRheXMuaW5uZXJIVE1MID0gXCJNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5XCI7XG5cbiAgaW5mb09wZW5EYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9PcGVuRGF5c1RpdGxlKTtcbiAgaW5mb09wZW5EYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9PcGVuRGF5cyk7XG4gIGNvbnRhY3RJbmZvV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvT3BlbkRheXNDb250YWluZXIpO1xuXG4gIGNvbnN0IGluZm9BZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9BZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWFkZHJlc3NcIik7XG4gIGluZm9BZGRyZXNzLmlubmVySFRNTCA9IFwiMTg0IENvbnN0YW50aW4gQnVyZyBFc3BlcmFuemFidXJnaCBcIjtcblxuICBjb250YWN0SW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5mb0FkZHJlc3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0RnVuYztcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCBsYW5kaW5nUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBsYW5kaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChsYW5kaW5nQ29udGFpbmVyKTtcblxuICBsYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBpbnRyb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnRyby1jb250YWluZXJcIik7XG5cbiAgbGFuZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0NvbnRhaW5lcik7XG5cbiAgY29uc3QgaW50cm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaW50cm9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW50cm8tdGl0bGVcIik7XG4gIGludHJvVGl0bGUuaW5uZXJUZXh0ID0gXCJUSEUgV09STEQnUyBNT1NULUxPVkVEIENBRkUgJiBSRVNUQVVSQU5UXCI7XG5cbiAgaW50cm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaW50cm9UaXRsZSk7XG5cbiAgY29uc3QgaW50cm9Db250YWluZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyby1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcblxuICBmdW5jdGlvbiBsYW5kaW5nRnVuYygpIHtcbiAgICBpZiAoIWxhbmRpbmdDb250YWluZXIuY29udGFpbnMoaW50cm9Db250YWluZXJXcmFwcGVyKSkge1xuICAgICAgbGFuZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb0NvbnRhaW5lcldyYXBwZXIpO1xuICAgIH1cblxuICAgIGlmICghbWFpbkNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYW5kaW5nLWNvbnRhaW5lclwiKSkge1xuICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbGFuZGluZ0Z1bmMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmdQYWdlO1xuIiwiaW1wb3J0IG1lbnVJbWcgZnJvbSBcIi4vaW1nL0JsYWNrIGFuZCBXaGl0ZSBNaW5pbWFsaXN0IEJCUSBNZW51LnBuZ1wiO1xuZnVuY3Rpb24gbWVudUZ1bmMoKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBsYW5kaW5nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYW5kaW5nLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgaW50cm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIGlmIChsYW5kaW5nQ29udGFpbmVyLmNvbnRhaW5zKGludHJvQ29udGFpbmVyKSkge1xuICAgIGxhbmRpbmdDb250YWluZXIucmVtb3ZlQ2hpbGQoaW50cm9Db250YWluZXIpO1xuICB9XG5cbiAgaWYgKCFtYWluQ29udGVudC5jb250YWlucyhtZW51Q29udGFpbmVyV3JhcHBlcikpIHtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVJbWdXcmFwcGVyID0gbmV3IEltYWdlKCk7XG4gIG1lbnVJbWdXcmFwcGVyLnNyYyA9IG1lbnVJbWc7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SW1nV3JhcHBlcik7XG5cbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgaWYgKG1haW5Db250ZW50LmNvbnRhaW5zKGNvbnRhY3RDb250YWluZXIpKSB7XG4gICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudUZ1bmM7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBuYXZCYXIgPSAoKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBuYXZCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYXZCYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBuYXZCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1jb250YWluZXJcIik7XG4gIG5hdkJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci13cmFwcGVyXCIpO1xuXG4gIG5hdkJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXJXcmFwcGVyKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyQ29udGFpbmVyKTtcblxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG5cbiAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgbWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICBuYXZCYXJXcmFwcGVyLmFwcGVuZENoaWxkKGhvbWUpO1xuICBuYXZCYXJXcmFwcGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICBuYXZCYXJXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIHJldHVybiB7XG4gICAgaG9tZSxcbiAgICBtZW51LFxuICAgIGNvbnRhY3QsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBuYXZCYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgbWVudUZ1bmMgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RGdW5jIGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBsYW5kaW5nUGFnZSBmcm9tIFwiLi9sYW5kaW5nXCI7XG5cbmNvbnN0IG5hdkhvbWUgPSBuYXZCYXIuaG9tZTtcbmNvbnN0IG5hdk1lbnUgPSBuYXZCYXIubWVudTtcbmNvbnN0IG5hdkNvbnRhY3QgPSBuYXZCYXIuY29udGFjdDtcblxubmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuYXZIb21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtYWN0aXZlXCIpO1xuXG4gIG5hdk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XG4gIG5hdkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XG5cbiAgbGFuZGluZ1BhZ2UubGFuZGluZ0Z1bmMoKTtcbn0pO1xuXG5uYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5hdk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIik7XG5cbiAgbmF2SG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcbiAgbmF2Q29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcblxuICBtZW51RnVuYygpO1xufSk7XG5cbm5hdkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmF2Q29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcblxuICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xuICBuYXZIb21lLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xuXG4gIGNvbnRhY3RGdW5jKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==