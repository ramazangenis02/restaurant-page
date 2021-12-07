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
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");

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
  menuImgWrapper.src = _img_menu_png__WEBPACK_IMPORTED_MODULE_0__;

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

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9ced5e12f3b203b5ce6.jpg";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dd259a3c7db46a7084d.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLHVCQUF1QiwwQkFBMEIsS0FBSyx1QkFBdUIscUJBQXFCLEtBQUssR0FBRyxTQUFTLHVGQUF1RixRQUFRLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssWUFBWSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxN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RUEsRUFBRSxvREFBVztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiA8LSBHbG9iYWwgU3R5bGVzIFN0YXJ0IC0+ICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIDwtIEdsb2JhbCBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogPC0gTGFuZGluZyBTdHlsZXMgU3RhcnQgLT4gKi9cXG4ubGFuZGluZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGFuZGluZy1jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQwJSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaW50cm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbi5pbnRyby10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgZm9udC1zaXplOiA0LjVlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG4vKiA8LSBMYW5kaW5nIFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiAgPC0gTmF2YmFyIFN0eWxlcyBTdGFydCAtPiAqL1xcbi5uYXZiYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDQwcHggNDBweCAwIDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YjtcXG59XFxuXFxuLm5hdi1hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YiAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiAgPC0gTmF2YmFyIFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiA8LSBNZW51IFN0eWxlcyBTdGFydCAtPiAqL1xcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG4ubWVudS1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgaGVpZ2h0OiA3NTBweDtcXG59XFxuLyogPC0gTWVudSBTdHlsZXMgRW5kIC0+ICovXFxuLyogPC0gQ29udGFjdCBTdHlsZXMgU3RhcnQgLT4gKi9cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5tYXAge1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgaGVpZ2h0OiA3NTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgYmFja2dyb3VuZDogIzQxNTA2YjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uaW5mby10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5pbmZvLW9wZW4tZGF5cy10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uaW5mby1vcGVuLWRheXMge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLmluZm8tYWRkcmVzcyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLyogPC0gQ29udGFjdCBTdHlsZXMgRW5kIC0+ICovXFxuXFxuLyogUmVzcG9uc2l2ZSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgxMHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2NzRweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTU4cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzdweCkge1xcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzU4cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMy41ZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMzdweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NnB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuN2VtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjNweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjJlbTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyM3B4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rcyB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTFweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5pbmZvLW9wZW4tZGF5cyB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICh3aWR0aDogNDk1cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XFxuICAuaW50cm8tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH1cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmluZm8tb3Blbi1kYXlzIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEJBQThCO0FBQzlCOzs7RUFHRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUEsNEJBQTRCOztBQUU1QiwrQkFBK0I7QUFDL0I7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLGFBQWE7RUFDYixtREFBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixzQkFBc0I7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OztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIDwtIEdsb2JhbCBTdHlsZXMgU3RhcnQgLT4gKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogPC0gR2xvYmFsIFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiA8LSBMYW5kaW5nIFN0eWxlcyBTdGFydCAtPiAqL1xcbi5sYW5kaW5nLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sYW5kaW5nLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHVybCguL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoNDAlKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5pbnRyby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODV2aDtcXG59XFxuXFxuLmludHJvLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBmb250LXNpemU6IDQuNWVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcbi8qIDwtIExhbmRpbmcgU3R5bGVzIEVuZCAtPiAqL1xcblxcbi8qICA8LSBOYXZiYXIgU3R5bGVzIFN0YXJ0IC0+ICovXFxuLm5hdmJhci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogNDBweCA0MHB4IDAgNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNDE1MDZiO1xcbn1cXG5cXG4ubmF2LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjNDE1MDZiICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qICA8LSBOYXZiYXIgU3R5bGVzIEVuZCAtPiAqL1xcblxcbi8qIDwtIE1lbnUgU3R5bGVzIFN0YXJ0IC0+ICovXFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcbi5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBoZWlnaHQ6IDc1MHB4O1xcbn1cXG4vKiA8LSBNZW51IFN0eWxlcyBFbmQgLT4gKi9cXG4vKiA8LSBDb250YWN0IFN0eWxlcyBTdGFydCAtPiAqL1xcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLm1hcCB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDc1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBiYWNrZ3JvdW5kOiAjNDE1MDZiO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5pbmZvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmluZm8tb3Blbi1kYXlzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5pbmZvLW9wZW4tZGF5cyB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4uaW5mby1hZGRyZXNzIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4vKiA8LSBDb250YWN0IFN0eWxlcyBFbmQgLT4gKi9cXG5cXG4vKiBSZXNwb25zaXZlICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODEwcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIHdpZHRoOiA2NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTY3NHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NThweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ3N3B4KSB7XFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNThweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzLjVlbTtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIzN3B4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIgaW1nIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDc2cHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi43ZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2M3B4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuMmVtO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtaW5mbyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIzcHgpIHtcXG4gIC5pbnRyby10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICB9XFxuXFxuICAubmF2LWxpbmtzIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxMXB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuaW50cm8tdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5uYXYtbGlua3Mge1xcbiAgICBtYXJnaW46IDIwcHggMjBweCAwIDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxuXFxuICAuY29udGFjdC1pbmZvIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLmluZm8tb3Blbi1kYXlzIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKHdpZHRoOiA0OTVweCkge1xcbiAgLmludHJvLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWNvbnRhaW5lciBpbWcge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gIC5pbnRyby1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgfVxcbiAgLm1hcCB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG5cXG4gIC5jb250YWN0LWluZm8ge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuaW5mby1vcGVuLWRheXMge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNvbnRhY3RGdW5jKCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgbGFuZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZGluZy1jb250YWluZXJcIik7XG4gIGNvbnN0IGludHJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyby1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG5cbiAgaWYgKGxhbmRpbmdDb250YWluZXIuY29udGFpbnMoaW50cm9Db250YWluZXIpKSB7XG4gICAgbGFuZGluZ0NvbnRhaW5lci5yZW1vdmVDaGlsZChpbnRyb0NvbnRhaW5lcik7XG4gIH1cblxuICBpZiAobWFpbkNvbnRlbnQuY29udGFpbnMobWVudUNvbnRhaW5lcikpIHtcbiAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjb250YWN0TWFwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RNYXBXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LW1hcFwiKTtcblxuICBjb25zdCBjb250YWN0SW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5mb1wiKTtcblxuICBjb25zdCBjb250YWN0Q29udGFpbmVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TWFwV3JhcHBlcik7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm9XcmFwcGVyKTtcblxuICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICBpZnJhbWUuc3JjID1cbiAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE5MzU5NS45MTQ3NzEwMDkzOCEyZC03NC4xMTk3NjMzNDM0ODkyMyEzZDQwLjY5NzQwMzQ0MTk5MTU1NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODljMjRmYTVkMzNmMDgzYiUzQTB4YzgwYjhmMDZlMTc3ZmU2MiEyc05ldyUyMFlvcmslMkMlMjBBbWVyaWthJTIwQmlybGUlQzUlOUZpayUyMERldmxldGxlcmkhNWUwITNtMiExc3RyITJzdHIhNHYxNjM4NjIxNjE4NDU4ITVtMiExc3RyITJzdHJcIjtcblxuICBpZnJhbWUuY2xhc3NMaXN0LmFkZChcIm1hcFwiKTtcblxuICBpZiAoIW1haW5Db250ZW50LmNvbnRhaW5zKGNvbnRhY3RDb250YWluZXJXcmFwcGVyKSkge1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICB9XG4gIGNvbnRhY3RNYXBXcmFwcGVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm8tdGl0bGVcIik7XG4gIGluZm9UaXRsZS5pbm5lckhUTUwgPSBcIkZpbmQgVXMgSGVyZVwiO1xuXG4gIGNvbnRhY3RJbmZvV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvVGl0bGUpO1xuICBjb25zdCBpbmZvT3BlbkRheXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvT3BlbkRheXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm8tb3Blbi1kYXlzLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBpbmZvT3BlbkRheXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgaW5mb09wZW5EYXlzVGl0bGUuY2xhc3NMaXN0LmFkZChcImluZm8tb3Blbi1kYXlzLXRpdGxlXCIpO1xuICBpbmZvT3BlbkRheXNUaXRsZS5pbm5lckhUTUwgPSBcIlRoZSBkYXlzIHdlIGFyZSBvcGVuXCI7XG5cbiAgY29uc3QgaW5mb09wZW5EYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9PcGVuRGF5cy5jbGFzc0xpc3QuYWRkKFwiaW5mby1vcGVuLWRheXNcIik7XG4gIGluZm9PcGVuRGF5cy5pbm5lckhUTUwgPSBcIk1vbmRheSBUdWVzZGF5IFdlZG5lc2RheSBUaHVyc2RheSBGcmlkYXlcIjtcblxuICBpbmZvT3BlbkRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb09wZW5EYXlzVGl0bGUpO1xuICBpbmZvT3BlbkRheXNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb09wZW5EYXlzKTtcbiAgY29udGFjdEluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGluZm9PcGVuRGF5c0NvbnRhaW5lcik7XG5cbiAgY29uc3QgaW5mb0FkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mb0FkZHJlc3MuY2xhc3NMaXN0LmFkZChcImluZm8tYWRkcmVzc1wiKTtcbiAgaW5mb0FkZHJlc3MuaW5uZXJIVE1MID0gXCIxODQgQ29uc3RhbnRpbiBCdXJnIEVzcGVyYW56YWJ1cmdoIFwiO1xuXG4gIGNvbnRhY3RJbmZvV3JhcHBlci5hcHBlbmRDaGlsZChpbmZvQWRkcmVzcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RGdW5jO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmNvbnN0IGxhbmRpbmdQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGxhbmRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmdDb250YWluZXIpO1xuXG4gIGxhbmRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGludHJvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50cm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImludHJvLWNvbnRhaW5lclwiKTtcblxuICBsYW5kaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyKTtcblxuICBjb25zdCBpbnRyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBpbnRyb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbnRyby10aXRsZVwiKTtcbiAgaW50cm9UaXRsZS5pbm5lclRleHQgPSBcIlRIRSBXT1JMRCdTIE1PU1QtTE9WRUQgQ0FGRSAmIFJFU1RBVVJBTlRcIjtcblxuICBpbnRyb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbnRyb1RpdGxlKTtcblxuICBjb25zdCBpbnRyb0NvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIGZ1bmN0aW9uIGxhbmRpbmdGdW5jKCkge1xuICAgIGlmICghbGFuZGluZ0NvbnRhaW5lci5jb250YWlucyhpbnRyb0NvbnRhaW5lcldyYXBwZXIpKSB7XG4gICAgICBsYW5kaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvQ29udGFpbmVyV3JhcHBlcik7XG4gICAgfVxuXG4gICAgaWYgKCFtYWluQ29udGVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImxhbmRpbmctY29udGFpbmVyXCIpKSB7XG4gICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBsYW5kaW5nRnVuYyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbGFuZGluZ1BhZ2U7XG4iLCJpbXBvcnQgbWVudUltZyBmcm9tIFwiLi9pbWcvbWVudS5wbmdcIjtcbmZ1bmN0aW9uIG1lbnVGdW5jKCkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgbGFuZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFuZGluZy1jb250YWluZXJcIik7XG4gIGNvbnN0IGludHJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyby1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IG1lbnVDb250YWluZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcblxuICBpZiAobGFuZGluZ0NvbnRhaW5lci5jb250YWlucyhpbnRyb0NvbnRhaW5lcikpIHtcbiAgICBsYW5kaW5nQ29udGFpbmVyLnJlbW92ZUNoaWxkKGludHJvQ29udGFpbmVyKTtcbiAgfVxuXG4gIGlmICghbWFpbkNvbnRlbnQuY29udGFpbnMobWVudUNvbnRhaW5lcldyYXBwZXIpKSB7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIH1cblxuICBjb25zdCBtZW51SW1nV3JhcHBlciA9IG5ldyBJbWFnZSgpO1xuICBtZW51SW1nV3JhcHBlci5zcmMgPSBtZW51SW1nO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUltZ1dyYXBwZXIpO1xuXG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpO1xuXG4gIGlmIChtYWluQ29udGVudC5jb250YWlucyhjb250YWN0Q29udGFpbmVyKSkge1xuICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVGdW5jO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgbmF2QmFyID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgbmF2QmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2QmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbmF2QmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItY29udGFpbmVyXCIpO1xuICBuYXZCYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItd3JhcHBlclwiKTtcblxuICBuYXZCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyV3JhcHBlcik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG5hdkJhckNvbnRhaW5lcik7XG5cbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xuXG4gIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG5cbiAgbmF2QmFyV3JhcHBlci5hcHBlbmRDaGlsZChob21lKTtcbiAgbmF2QmFyV3JhcHBlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgbmF2QmFyV3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICByZXR1cm4ge1xuICAgIGhvbWUsXG4gICAgbWVudSxcbiAgICBjb250YWN0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgbmF2QmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IG1lbnVGdW5jIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjb250YWN0RnVuYyBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgbGFuZGluZ1BhZ2UgZnJvbSBcIi4vbGFuZGluZ1wiO1xuXG5jb25zdCBuYXZIb21lID0gbmF2QmFyLmhvbWU7XG5jb25zdCBuYXZNZW51ID0gbmF2QmFyLm1lbnU7XG5jb25zdCBuYXZDb250YWN0ID0gbmF2QmFyLmNvbnRhY3Q7XG5cbm5hdkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2LWFjdGl2ZVwiKTtcblxuICBuYXZNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xuICBuYXZDb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYWN0aXZlXCIpO1xuXG4gIGxhbmRpbmdQYWdlLmxhbmRpbmdGdW5jKCk7XG59KTtcblxubmF2TWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtYWN0aXZlXCIpO1xuXG4gIG5hdkhvbWUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XG4gIG5hdkNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1hY3RpdmVcIik7XG5cbiAgbWVudUZ1bmMoKTtcbn0pO1xuXG5uYXZDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5hdkNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdi1hY3RpdmVcIik7XG5cbiAgbmF2TWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcbiAgbmF2SG9tZS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWFjdGl2ZVwiKTtcblxuICBjb250YWN0RnVuYygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=