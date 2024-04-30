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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  color: inherit;
  margin: 0;
  max-height: 100%;
  max-width: 100%;
  padding: 0;
}

body > div {
  align-content: space-between;
  display: grid;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  row-gap: 3rem;
}

body > div > div {
  background-color: #5ba5b8;
  display: none;
  position: relative;
  z-index: 1;
}

.contact {
  display: grid;
}

.contact a {
  align-items: center;
  display: flex;
  gap: 1vw;
  text-decoration: none;
}

.contact a img {
  filter: invert(100%);
}

div {
  box-sizing: border-box;
}

footer,
header,
main {
  box-sizing: border-box;
  padding: 5vh 7vw;
}

footer {
  background-color: #0891b2;
  color: white;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
}

footer button {
  background-color: #ffffff00;
  border: none;
}

footer > div {
  align-items: center;
  display: grid;
  gap: 2vh;
  overflow: hidden;
}

footer > div:first-child {
  display: grid;
  flex: 1 1 0;
  gap: 1.25rem;
  grid-auto-rows: max-content;
}

footer > div:first-child > div {
  display: grid;
  gap: 0.25rem;
}

footer > div:first-child > div:last-child {
  display: flex;
  gap: 0.5rem;
}

footer > div > picture > img {
  max-width: 800px;
  object-fit: cover;
}

h1,
h2,
h3 {
  font-family: "Trebuchet MS", Helvetica, sans-serif;
}

header {
  align-items: stretch;
  display: grid;
  height: fit-content;
  justify-content: stretch;
  position: relative;
}

header > div:first-child {
  display: inline-flex;
  flex: 2 0 300px;
  position: relative;
}

header > div:last-child {
  background-color: white;
  display: flex;
  flex: 1 0 30vw;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  justify-content: center;
  margin: 3rem 0;
  max-width: 1260px;
  min-width: 300px;
  padding: 3rem 1rem;
  position: relative;
  z-index: -1;
}

header > div > div {
  display: flex;
  justify-content: end;
}

header > div > img {
  height: auto;
  object-fit: cover;
  width: auto;
}

header h1 {
  bottom: 1rem;
  color: white;
  font-size: 4rem;
  max-width: 50vw;
  position: absolute;
  text-align: end;
  text-shadow: 2px 0px 2px rgba(0, 0, 0, 0.6);
  text-wrap: pretty;
  transform: translateX(1rem);
}

main {
  background-color: #ffffff;
  display: grid;
  gap: 0.5rem;
}

p {
  max-width: 99%;
}

.projectGrid {
  column-gap: 3vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 5vh;
}

.project {
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
}

.project > *:first-child {
  aspect-ratio: 5 / 4;
  background-color: green;
  color: white;
  display: grid;
  height: auto;
  place-content: center;
  width: 100%;
}

.project > div > div:first-child {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.project > div > div:first-child > div {
  align-items: center;
  display: flex;
  gap: 1vw;
}

.project > div:last-child {
  align-items: start;
  display: grid;
  gap: 0.75rem;
  grid-auto-rows: max-content;
  height: 180px;
  padding: 0.5rem 1rem;
}

.project p {
  color: #00000088;
  font-family: Arial, Helvetica, sans-serif;
}

.slantedBackground {
  background-color: #0891b2;
  bottom: 4vh;
  height: 100vh;
  left: 0;
  transform-origin: bottom left;
  transform: translateX(-7vw) scale(10) rotate(-15deg);
  position: absolute;
  width: 100vw;
  z-index: -2;
}

@media (width >= 1000px) {
  header {
    grid-template-columns: 1fr 1fr;
  }

  header > div:last-child {
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }

  .project > div:last-child {
    height: 200px;
  }

  .slantedBackground {
    bottom: -5vh;
  }

  @media (width >= 2000px) {
    body > div {
      grid-template-columns: 1fr 2000px 1fr;
      grid-template-rows: max-content max-content max-content;
    }

    body > div > div {
      display: block;
      grid-row: 1 / -1;
    }

    body > div > div:first-child {
      grid-column: 1 / 2;
    }

    body > div > div:last-child {
      grid-column: -2 / -1;
    }

    footer {
      grid-column: 2 / -2;
      grid-row: -2 / -1;
    }

    footer,
    header,
    main {
      padding: 5vh 140px;
    }

    header {
      grid-column: 2 / -2;
      grid-row: 1 / 2;
    }

    header > div > img {
      min-width: 600px;
    }

    header > div:last-child {
    }

    main {
      grid-column: 2 / -2;
      grid-row: 2 / -2;
    }

    .slantedBackground {
      transform: translateX(calc((2000px-100vw) / 2));
    }
  }
}

@media (1000px > width >= 500px) {
  body {
    gap: 0;
  }

  header {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr 2fr;
  }

  header > div:first-child {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  header > div:last-child {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
    margin-bottom: 0px;
  }

  header h1 {
    top: 0%;
    right: -100%;
    transform: translateX(-1rem);
  }

  .project > div:last-child {
    height: 190px;
  }

  .slantedBackground {
    bottom: -5vh;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,SAAS;EACT,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;EAGE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,2DAA2D;EAC3D,8BAA8B;AAChC;;AAEA;EACE,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;;EAGE,kDAAkD;AACpD;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,2CAA2C;EAC3C,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,2DAA2D;EAC3D,YAAY;AACd;;AAEA;EACE,uDAAuD;EACvD,oDAAoD;EACpD,+CAA+C;AACjD;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,2BAA2B;EAC3B,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,OAAO;EACP,6BAA6B;EAC7B,oDAAoD;EACpD,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,uDAAuD;IACvD,oDAAoD;IACpD,+CAA+C;EACjD;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE;MACE,qCAAqC;MACrC,uDAAuD;IACzD;;IAEA;MACE,cAAc;MACd,gBAAgB;IAClB;;IAEA;MACE,kBAAkB;IACpB;;IAEA;MACE,oBAAoB;IACtB;;IAEA;MACE,mBAAmB;MACnB,iBAAiB;IACnB;;IAEA;;;MAGE,kBAAkB;IACpB;;IAEA;MACE,mBAAmB;MACnB,eAAe;IACjB;;IAEA;MACE,gBAAgB;IAClB;;IAEA;IACA;;IAEA;MACE,mBAAmB;MACnB,gBAAgB;IAClB;;IAEA;MACE,+CAA+C;IACjD;EACF;AACF;;AAEA;EACE;IACE,MAAM;EACR;;EAEA;IACE,8BAA8B;IAC9B,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,uDAAuD;IACvD,oDAAoD;IACpD,+CAA+C;IAC/C,kBAAkB;EACpB;;EAEA;IACE,OAAO;IACP,YAAY;IACZ,4BAA4B;EAC9B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["* {\n  color: inherit;\n  margin: 0;\n  max-height: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n\nbody > div {\n  align-content: space-between;\n  display: grid;\n  justify-content: center;\n  min-height: 100vh;\n  overflow: hidden;\n  row-gap: 3rem;\n}\n\nbody > div > div {\n  background-color: #5ba5b8;\n  display: none;\n  position: relative;\n  z-index: 1;\n}\n\n.contact {\n  display: grid;\n}\n\n.contact a {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n  text-decoration: none;\n}\n\n.contact a img {\n  filter: invert(100%);\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\nfooter,\nheader,\nmain {\n  box-sizing: border-box;\n  padding: 5vh 7vw;\n}\n\nfooter {\n  background-color: #0891b2;\n  color: white;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-content: space-between;\n}\n\nfooter button {\n  background-color: #ffffff00;\n  border: none;\n}\n\nfooter > div {\n  align-items: center;\n  display: grid;\n  gap: 2vh;\n  overflow: hidden;\n}\n\nfooter > div:first-child {\n  display: grid;\n  flex: 1 1 0;\n  gap: 1.25rem;\n  grid-auto-rows: max-content;\n}\n\nfooter > div:first-child > div {\n  display: grid;\n  gap: 0.25rem;\n}\n\nfooter > div:first-child > div:last-child {\n  display: flex;\n  gap: 0.5rem;\n}\n\nfooter > div > picture > img {\n  max-width: 800px;\n  object-fit: cover;\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n}\n\nheader {\n  align-items: stretch;\n  display: grid;\n  height: fit-content;\n  justify-content: stretch;\n  position: relative;\n}\n\nheader > div:first-child {\n  display: inline-flex;\n  flex: 2 0 300px;\n  position: relative;\n}\n\nheader > div:last-child {\n  background-color: white;\n  display: flex;\n  flex: 1 0 30vw;\n  flex-direction: column;\n  gap: 2rem;\n  height: fit-content;\n  justify-content: center;\n  margin: 3rem 0;\n  max-width: 1260px;\n  min-width: 300px;\n  padding: 3rem 1rem;\n  position: relative;\n  z-index: -1;\n}\n\nheader > div > div {\n  display: flex;\n  justify-content: end;\n}\n\nheader > div > img {\n  height: auto;\n  object-fit: cover;\n  width: auto;\n}\n\nheader h1 {\n  bottom: 1rem;\n  color: white;\n  font-size: 4rem;\n  max-width: 50vw;\n  position: absolute;\n  text-align: end;\n  text-shadow: 2px 0px 2px rgba(0, 0, 0, 0.6);\n  text-wrap: pretty;\n  transform: translateX(1rem);\n}\n\nmain {\n  background-color: #ffffff;\n  display: grid;\n  gap: 0.5rem;\n}\n\np {\n  max-width: 99%;\n}\n\n.projectGrid {\n  column-gap: 3vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  row-gap: 5vh;\n}\n\n.project {\n  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n}\n\n.project > *:first-child {\n  aspect-ratio: 5 / 4;\n  background-color: green;\n  color: white;\n  display: grid;\n  height: auto;\n  place-content: center;\n  width: 100%;\n}\n\n.project > div > div:first-child {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project > div > div:first-child > div {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n}\n\n.project > div:last-child {\n  align-items: start;\n  display: grid;\n  gap: 0.75rem;\n  grid-auto-rows: max-content;\n  height: 180px;\n  padding: 0.5rem 1rem;\n}\n\n.project p {\n  color: #00000088;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.slantedBackground {\n  background-color: #0891b2;\n  bottom: 4vh;\n  height: 100vh;\n  left: 0;\n  transform-origin: bottom left;\n  transform: translateX(-7vw) scale(10) rotate(-15deg);\n  position: absolute;\n  width: 100vw;\n  z-index: -2;\n}\n\n@media (width >= 1000px) {\n  header {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  header > div:last-child {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .project > div:last-child {\n    height: 200px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n\n  @media (width >= 2000px) {\n    body > div {\n      grid-template-columns: 1fr 2000px 1fr;\n      grid-template-rows: max-content max-content max-content;\n    }\n\n    body > div > div {\n      display: block;\n      grid-row: 1 / -1;\n    }\n\n    body > div > div:first-child {\n      grid-column: 1 / 2;\n    }\n\n    body > div > div:last-child {\n      grid-column: -2 / -1;\n    }\n\n    footer {\n      grid-column: 2 / -2;\n      grid-row: -2 / -1;\n    }\n\n    footer,\n    header,\n    main {\n      padding: 5vh 140px;\n    }\n\n    header {\n      grid-column: 2 / -2;\n      grid-row: 1 / 2;\n    }\n\n    header > div > img {\n      min-width: 600px;\n    }\n\n    header > div:last-child {\n    }\n\n    main {\n      grid-column: 2 / -2;\n      grid-row: 2 / -2;\n    }\n\n    .slantedBackground {\n      transform: translateX(calc((2000px-100vw) / 2));\n    }\n  }\n}\n\n@media (1000px > width >= 500px) {\n  body {\n    gap: 0;\n  }\n\n  header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 2fr;\n  }\n\n  header > div:first-child {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n  }\n\n  header > div:last-child {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    margin-bottom: 0px;\n  }\n\n  header h1 {\n    top: 0%;\n    right: -100%;\n    transform: translateX(-1rem);\n  }\n\n  .project > div:last-child {\n    height: 190px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/media/Screenshots/battleship.jpeg":
/*!***********************************************!*\
  !*** ./src/media/Screenshots/battleship.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57ae2d5859ddf99d3481.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/business_page.jpeg":
/*!**************************************************!*\
  !*** ./src/media/Screenshots/business_page.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "848be7dff0dd900b9333.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/calculator.jpeg":
/*!***********************************************!*\
  !*** ./src/media/Screenshots/calculator.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac101c5d9537393f10ab.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/dashboard.jpeg":
/*!**********************************************!*\
  !*** ./src/media/Screenshots/dashboard.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c33da716b7f55be4c0d3.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/etch-a-sketch.jpeg":
/*!**************************************************!*\
  !*** ./src/media/Screenshots/etch-a-sketch.jpeg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02bd18b9bde14309dc51.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/library.jpeg":
/*!********************************************!*\
  !*** ./src/media/Screenshots/library.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5a78444e87b9b6ace9e.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/rock_paper_scissors.jpeg":
/*!********************************************************!*\
  !*** ./src/media/Screenshots/rock_paper_scissors.jpeg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "699e2db7554e98cc2e92.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/signup.jpeg":
/*!*******************************************!*\
  !*** ./src/media/Screenshots/signup.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6ca8a881bae285d8f35.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/tic-tac-toe.jpeg":
/*!************************************************!*\
  !*** ./src/media/Screenshots/tic-tac-toe.jpeg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53fab099e834fc7e8935.jpeg";

/***/ }),

/***/ "./src/media/Screenshots/to-do-list.jpeg":
/*!***********************************************!*\
  !*** ./src/media/Screenshots/to-do-list.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c06b9751b81e6a6ca934.jpeg";

/***/ }),

/***/ "./src/media/icons8-github.svg":
/*!*************************************!*\
  !*** ./src/media/icons8-github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7e2bc8e3b94958f09a2.svg";

/***/ }),

/***/ "./src/media/icons8-open.svg":
/*!***********************************!*\
  !*** ./src/media/icons8-open.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0ebcdde9cad293aa981.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_media_icons8_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/media/icons8-github.svg */ "./src/media/icons8-github.svg");
/* harmony import */ var _src_media_icons8_open_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/media/icons8-open.svg */ "./src/media/icons8-open.svg");
/* harmony import */ var _src_media_Screenshots_battleship_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/media/Screenshots/battleship.jpeg */ "./src/media/Screenshots/battleship.jpeg");
/* harmony import */ var _src_media_Screenshots_business_page_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/media/Screenshots/business_page.jpeg */ "./src/media/Screenshots/business_page.jpeg");
/* harmony import */ var _src_media_Screenshots_calculator_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/media/Screenshots/calculator.jpeg */ "./src/media/Screenshots/calculator.jpeg");
/* harmony import */ var _src_media_Screenshots_dashboard_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/media/Screenshots/dashboard.jpeg */ "./src/media/Screenshots/dashboard.jpeg");
/* harmony import */ var _src_media_Screenshots_etch_a_sketch_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/media/Screenshots/etch-a-sketch.jpeg */ "./src/media/Screenshots/etch-a-sketch.jpeg");
/* harmony import */ var _src_media_Screenshots_library_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/media/Screenshots/library.jpeg */ "./src/media/Screenshots/library.jpeg");
/* harmony import */ var _src_media_Screenshots_rock_paper_scissors_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/media/Screenshots/rock_paper_scissors.jpeg */ "./src/media/Screenshots/rock_paper_scissors.jpeg");
/* harmony import */ var _src_media_Screenshots_signup_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/media/Screenshots/signup.jpeg */ "./src/media/Screenshots/signup.jpeg");
/* harmony import */ var _src_media_Screenshots_tic_tac_toe_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/media/Screenshots/tic-tac-toe.jpeg */ "./src/media/Screenshots/tic-tac-toe.jpeg");
/* harmony import */ var _src_media_Screenshots_to_do_list_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/media/Screenshots/to-do-list.jpeg */ "./src/media/Screenshots/to-do-list.jpeg");














const buildProjectList = () => {
  const projectList = [];

  const addProject = (
    screenshotSrc,
    imageAltText,
    projectName,
    projectDescription,
    gitHubLink,
    livePreviewLink
  ) => {
    const projectObject = {};
    projectObject.screenshot = screenshotSrc;
    projectObject.name = projectName;
    projectObject.description = projectDescription;
    projectObject.alt = imageAltText;
    projectObject.git = gitHubLink;
    projectObject.preview = livePreviewLink;
    projectList.push(projectObject);
  };

  return projectList;
};

const buildProjectDOM = () => {
  const projectList = buildProjectList();
  const mainDomElement = document.querySelector("main");

  const heading = document.createElement("h2");
  heading.innerHTML = "Examples of My Work";

  const projectGrid = document.createElement("div");
  projectGrid.classList.add("projectGrid");

  for (let i = 0; i < projectList.length; i++) {
    const projectObject = projectList[i];
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const screenshot = new Image();
    screenshot.setAttribute("alt", projectObject.alt);
    screenshot.src = projectObject.screenshot;
    const screenshotDiv = document.createElement("div");
    screenshotDiv.appendChild(screenshot);

    const titleDiv = document.createElement("div");
    const projectTitle = document.createElement("h3");
    projectTitle.innerHTML = projectObject.name;
    const linkDiv = document.createElement;
    const gitLink = document.createElement("a");
    gitLink.setAttribute("href", projectObject.git);
    const gitImg = new Image();
    gitImg.src = _src_media_icons8_github_svg__WEBPACK_IMPORTED_MODULE_1__;
    gitImg.setAttribute("alt", "project git hub");
    gitLink.appendChild(gitImg);
    const previewLink = document.createElement("a");
    previewLink.setAttribute("href", projectObject.preview);
    const previewImg = new Image();
    previewImg.src = _src_media_icons8_open_svg__WEBPACK_IMPORTED_MODULE_2__;
    previewImg.setAttribute("alt", "live preview of the project");
    previewLink.appendChild(previewImg);
    linkDiv.appendChild(gitLink);
    linkDiv.appendChild(previewLink);
    titleDiv.appendChild(projectTitle);
    titleDiv.appendChild(linkDiv);

    const descriptionP = document.createElement("p");
    descriptionP.innerHTML = projectObject.description;
    const detailDiv = document.createElement("div");
    detailDiv.appendChild(titleDiv);
    detailDiv.appendChild(descriptionP);

    projectDiv.appendChild(screenshotDiv);
    projectDiv.appendChild(detailDiv);
    projectGrid.appendChild(projectDiv);
  }

  mainDomElement.innerHTML = "";
  mainDomElement.appendChild(heading);
  mainDomElement.appendChild(projectGrid);
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8s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Li9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSA+IGRpdiB7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcm93LWdhcDogM3JlbTtcbn1cblxuYm9keSA+IGRpdiA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmE1Yjg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhY3Qge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY29udGFjdCBhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxdnc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3QgYSBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbn1cblxuZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZm9vdGVyLFxuaGVhZGVyLFxubWFpbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDV2aCA3dnc7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODkxYjI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5mb290ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvb3RlciA+IGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBmbGV4OiAxIDEgMDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG59XG5cbmZvb3RlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuZm9vdGVyID4gZGl2ID4gcGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oZWFkZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4OiAyIDAgMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDMwdnc7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwO1xuICBtYXgtd2lkdGg6IDEyNjBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5oZWFkZXIgPiBkaXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuaGVhZGVyID4gZGl2ID4gaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmhlYWRlciBoMSB7XG4gIGJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1heC13aWR0aDogNTB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHRleHQtc2hhZG93OiAycHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNXJlbTtcbn1cblxucCB7XG4gIG1heC13aWR0aDogOTklO1xufVxuXG4ucHJvamVjdEdyaWQge1xuICBjb2x1bW4tZ2FwOiAzdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICByb3ctZ2FwOiA1dmg7XG59XG5cbi5wcm9qZWN0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wcm9qZWN0ID4gKjpmaXJzdC1jaGlsZCB7XG4gIGFzcGVjdC1yYXRpbzogNSAvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogYXV0bztcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxdnc7XG59XG5cbi5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuICBoZWlnaHQ6IDE4MHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cblxuLnByb2plY3QgcCB7XG4gIGNvbG9yOiAjMDAwMDAwODg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uc2xhbnRlZEJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xuICBib3R0b206IDR2aDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtN3Z3KSBzY2FsZSgxMCkgcm90YXRlKC0xNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAtMjtcbn1cblxuQG1lZGlhICh3aWR0aCA+PSAxMDAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBoZWFkZXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB9XG5cbiAgLnByb2plY3QgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5zbGFudGVkQmFja2dyb3VuZCB7XG4gICAgYm90dG9tOiAtNXZoO1xuICB9XG5cbiAgQG1lZGlhICh3aWR0aCA+PSAyMDAwcHgpIHtcbiAgICBib2R5ID4gZGl2IHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMDBweCAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50O1xuICAgIH1cblxuICAgIGJvZHkgPiBkaXYgPiBkaXYge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBncmlkLXJvdzogMSAvIC0xO1xuICAgIH1cblxuICAgIGJvZHkgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIH1cblxuICAgIGJvZHkgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICBncmlkLWNvbHVtbjogLTIgLyAtMTtcbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcbiAgICAgIGdyaWQtcm93OiAtMiAvIC0xO1xuICAgIH1cblxuICAgIGZvb3RlcixcbiAgICBoZWFkZXIsXG4gICAgbWFpbiB7XG4gICAgICBwYWRkaW5nOiA1dmggMTQwcHg7XG4gICAgfVxuXG4gICAgaGVhZGVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gLTI7XG4gICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgfVxuXG4gICAgaGVhZGVyID4gZGl2ID4gaW1nIHtcbiAgICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgfVxuXG4gICAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIH1cblxuICAgIG1haW4ge1xuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcbiAgICAgIGdyaWQtcm93OiAyIC8gLTI7XG4gICAgfVxuXG4gICAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKCgyMDAwcHgtMTAwdncpIC8gMikpO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKDEwMDBweCA+IHdpZHRoID49IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIGdhcDogMDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gIH1cblxuICBoZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIDM7XG4gIH1cblxuICBoZWFkZXIgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgaGVhZGVyIGgxIHtcbiAgICB0b3A6IDAlO1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xuICB9XG5cbiAgLnByb2plY3QgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgfVxuXG4gIC5zbGFudGVkQmFja2dyb3VuZCB7XG4gICAgYm90dG9tOiAtNXZoO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkRBQTJEO0VBQzNELDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFFBQVE7RUFDUixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FB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QUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcm93LWdhcDogM3JlbTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhNWI4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250YWN0IGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDF2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QgYSBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbmRpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5mb290ZXIsXFxuaGVhZGVyLFxcbm1haW4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDV2aCA3dnc7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9vdGVyID4gZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAydmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZsZXg6IDEgMSAwO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG5cXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYgPiBwaWN0dXJlID4gaW1nIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4OiAyIDAgMzAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAzMHZ3O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogM3JlbSAwO1xcbiAgbWF4LXdpZHRoOiAxMjYwcHg7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbmhlYWRlciA+IGRpdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbmhlYWRlciA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHRleHQtd3JhcDogcHJldHR5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbnAge1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxufVxcblxcbi5wcm9qZWN0R3JpZCB7XFxuICBjb2x1bW4tZ2FwOiAzdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICByb3ctZ2FwOiA1dmg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi5wcm9qZWN0ID4gKjpmaXJzdC1jaGlsZCB7XFxuICBhc3BlY3QtcmF0aW86IDUgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNzVyZW07XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxufVxcblxcbi5wcm9qZWN0IHAge1xcbiAgY29sb3I6ICMwMDAwMDA4ODtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2xhbnRlZEJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcXG4gIGJvdHRvbTogNHZoO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtN3Z3KSBzY2FsZSgxMCkgcm90YXRlKC0xNWRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAtMjtcXG59XFxuXFxuQG1lZGlhICh3aWR0aCA+PSAxMDAwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIGhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICB9XFxuXFxuICAucHJvamVjdCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gIH1cXG5cXG4gIC5zbGFudGVkQmFja2dyb3VuZCB7XFxuICAgIGJvdHRvbTogLTV2aDtcXG4gIH1cXG5cXG4gIEBtZWRpYSAod2lkdGggPj0gMjAwMHB4KSB7XFxuICAgIGJvZHkgPiBkaXYge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMDBweCAxZnI7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcXG4gICAgfVxcblxcbiAgICBib2R5ID4gZGl2ID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICB9XFxuXFxuICAgIGJvZHkgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICBib2R5ID4gZGl2ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgIGdyaWQtY29sdW1uOiAtMiAvIC0xO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcXG4gICAgICBncmlkLXJvdzogLTIgLyAtMTtcXG4gICAgfVxcblxcbiAgICBmb290ZXIsXFxuICAgIGhlYWRlcixcXG4gICAgbWFpbiB7XFxuICAgICAgcGFkZGluZzogNXZoIDE0MHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcXG4gICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyID4gZGl2ID4gaW1nIHtcXG4gICAgICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgICB9XFxuXFxuICAgIGhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgfVxcblxcbiAgICBtYWluIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xcbiAgICAgIGdyaWQtcm93OiAyIC8gLTI7XFxuICAgIH1cXG5cXG4gICAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygoMjAwMHB4LTEwMHZ3KSAvIDIpKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKDEwMDBweCA+IHdpZHRoID49IDUwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICB9XFxuXFxuICBoZWFkZXIgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIGgxIHtcXG4gICAgdG9wOiAwJTtcXG4gICAgcmlnaHQ6IC0xMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pO1xcbiAgfVxcblxcbiAgLnByb2plY3QgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIGhlaWdodDogMTkwcHg7XFxuICB9XFxuXFxuICAuc2xhbnRlZEJhY2tncm91bmQge1xcbiAgICBib3R0b206IC01dmg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEdpdGh1Ykljb24gZnJvbSBcIi4uL3NyYy9tZWRpYS9pY29uczgtZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IE9wZW5MaW5rSWNvbiBmcm9tIFwiLi4vc3JjL21lZGlhL2ljb25zOC1vcGVuLnN2Z1wiO1xuaW1wb3J0IGJhdHRsZXNoaXBJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9iYXR0bGVzaGlwLmpwZWdcIjtcbmltcG9ydCBidXNpbmVzc1BhZ2VJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9idXNpbmVzc19wYWdlLmpwZWdcIjtcbmltcG9ydCBjYWxjdWxhdG9ySW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvY2FsY3VsYXRvci5qcGVnXCI7XG5pbXBvcnQgZGFzaGJvYXJkSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvZGFzaGJvYXJkLmpwZWdcIjtcbmltcG9ydCBldGNoQVNrZXRjaEltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2V0Y2gtYS1za2V0Y2guanBlZ1wiO1xuaW1wb3J0IGxpYnJhcnlJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9saWJyYXJ5LmpwZWdcIjtcbmltcG9ydCByb2NrUGFwZXJTY2lzc29yc0ltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL3JvY2tfcGFwZXJfc2Npc3NvcnMuanBlZ1wiO1xuaW1wb3J0IHNpZ251cEltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL3NpZ251cC5qcGVnXCI7XG5pbXBvcnQgdGlja1RhY2tUb2VJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy90aWMtdGFjLXRvZS5qcGVnXCI7XG5pbXBvcnQgdG9Eb0xpc3RJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy90by1kby1saXN0LmpwZWdcIjtcblxuY29uc3QgYnVpbGRQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKFxuICAgIHNjcmVlbnNob3RTcmMsXG4gICAgaW1hZ2VBbHRUZXh0LFxuICAgIHByb2plY3ROYW1lLFxuICAgIHByb2plY3REZXNjcmlwdGlvbixcbiAgICBnaXRIdWJMaW5rLFxuICAgIGxpdmVQcmV2aWV3TGlua1xuICApID0+IHtcbiAgICBjb25zdCBwcm9qZWN0T2JqZWN0ID0ge307XG4gICAgcHJvamVjdE9iamVjdC5zY3JlZW5zaG90ID0gc2NyZWVuc2hvdFNyYztcbiAgICBwcm9qZWN0T2JqZWN0Lm5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0T2JqZWN0LmRlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgIHByb2plY3RPYmplY3QuYWx0ID0gaW1hZ2VBbHRUZXh0O1xuICAgIHByb2plY3RPYmplY3QuZ2l0ID0gZ2l0SHViTGluaztcbiAgICBwcm9qZWN0T2JqZWN0LnByZXZpZXcgPSBsaXZlUHJldmlld0xpbms7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgfTtcblxuICByZXR1cm4gcHJvamVjdExpc3Q7XG59O1xuXG5jb25zdCBidWlsZFByb2plY3RET00gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYnVpbGRQcm9qZWN0TGlzdCgpO1xuICBjb25zdCBtYWluRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJFeGFtcGxlcyBvZiBNeSBXb3JrXCI7XG5cbiAgY29uc3QgcHJvamVjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0R3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEdyaWRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RPYmplY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3Qgc2NyZWVuc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgIHNjcmVlbnNob3Quc2V0QXR0cmlidXRlKFwiYWx0XCIsIHByb2plY3RPYmplY3QuYWx0KTtcbiAgICBzY3JlZW5zaG90LnNyYyA9IHByb2plY3RPYmplY3Quc2NyZWVuc2hvdDtcbiAgICBjb25zdCBzY3JlZW5zaG90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5zaG90RGl2LmFwcGVuZENoaWxkKHNjcmVlbnNob3QpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdE9iamVjdC5uYW1lO1xuICAgIGNvbnN0IGxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50O1xuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcHJvamVjdE9iamVjdC5naXQpO1xuICAgIGNvbnN0IGdpdEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdEltZy5zcmMgPSBHaXRodWJJY29uO1xuICAgIGdpdEltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwcm9qZWN0IGdpdCBodWJcIik7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJbWcpO1xuICAgIGNvbnN0IHByZXZpZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgcHJldmlld0xpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBwcm9qZWN0T2JqZWN0LnByZXZpZXcpO1xuICAgIGNvbnN0IHByZXZpZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBwcmV2aWV3SW1nLnNyYyA9IE9wZW5MaW5rSWNvbjtcbiAgICBwcmV2aWV3SW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImxpdmUgcHJldmlldyBvZiB0aGUgcHJvamVjdFwiKTtcbiAgICBwcmV2aWV3TGluay5hcHBlbmRDaGlsZChwcmV2aWV3SW1nKTtcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGxpbmtEaXYuYXBwZW5kQ2hpbGQocHJldmlld0xpbmspO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQobGlua0Rpdik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvblAuaW5uZXJIVE1MID0gcHJvamVjdE9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkZXRhaWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbERpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG4gICAgZGV0YWlsRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHNjcmVlbnNob3REaXYpO1xuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGV0YWlsRGl2KTtcbiAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfVxuXG4gIG1haW5Eb21FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW5Eb21FbGVtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBtYWluRG9tRWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0R3JpZCk7XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=