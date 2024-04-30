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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --sidebar-color: #b3cfc2;
  --bg-color: #5ac18f;
}

* {
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
  background-color: var(--sidebar-color);
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
  width: 24px;
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
  background-color: var(--bg-color);
  color: white;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: start;
}

footer a {
  align-items: center;
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  justify-self: start;
  text-decoration: none;
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

header .slantedBackground + h2 {
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
  min-height: 150px;
  padding: 0.5rem 1rem;
}

.project p {
  color: #00000088;
  font-family: Arial, Helvetica, sans-serif;
}

.slantedBackground {
  background-color: var(--bg-color);
  bottom: 4vh;
  height: 100vh;
  left: 0;
  transform-origin: bottom left;
  transform: translateX(-7vw) scale(10) rotate(-15deg);
  position: absolute;
  width: 100vw;
  z-index: -2;
}

@media (hover: hover) {
  .project {
    opacity: 70%;
    -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);
  }

  .project:hover {
    opacity: 100%;
    -webkit-box-shadow: 2px 2px 8px 0px #b5b818;
    -moz-box-shadow: 2px 2px 8px 0px #b5b818;
    box-shadow: 2px 2px 8px 0px #b5b818;
  }
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
    min-height: 200px;
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

    main {
      grid-column: 2 / -2;
      grid-row: 2 / -2;
    }

    .slantedBackground {
      transform: translateX(calc((2000px-100vw) / 2));
    }
  }
}

@media (1000px > width >= 650px) {
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

  header .slantedBackground + h2 {
    top: 0%;
    right: -100%;
    transform: translateX(-1rem);
  }

  .project > div:last-child {
    min-height: 190px;
  }

  .slantedBackground {
    bottom: -5vh;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --sidebar-color: #b3cfc2;\n  --bg-color: #5ac18f;\n}\n\n* {\n  color: inherit;\n  margin: 0;\n  max-height: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n\nbody > div {\n  align-content: space-between;\n  display: grid;\n  justify-content: center;\n  min-height: 100vh;\n  overflow: hidden;\n  row-gap: 3rem;\n}\n\nbody > div > div {\n  background-color: var(--sidebar-color);\n  display: none;\n  position: relative;\n  z-index: 1;\n}\n\n.contact {\n  display: grid;\n}\n\n.contact a {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n  text-decoration: none;\n}\n\n.contact a img {\n  filter: invert(100%);\n  width: 24px;\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\nfooter,\nheader,\nmain {\n  box-sizing: border-box;\n  padding: 5vh 7vw;\n}\n\nfooter {\n  background-color: var(--bg-color);\n  color: white;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-content: start;\n}\n\nfooter a {\n  align-items: center;\n  display: flex;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  justify-self: start;\n  text-decoration: none;\n}\n\nfooter button {\n  background-color: #ffffff00;\n  border: none;\n}\n\nfooter > div {\n  align-items: center;\n  display: grid;\n  gap: 2vh;\n  overflow: hidden;\n}\n\nfooter > div:first-child {\n  display: grid;\n  flex: 1 1 0;\n  gap: 1.25rem;\n  grid-auto-rows: max-content;\n}\n\nfooter > div:first-child > div {\n  display: grid;\n  gap: 0.25rem;\n}\n\nfooter > div:first-child > div:last-child {\n  display: flex;\n  gap: 0.5rem;\n}\n\nfooter > div > picture > img {\n  max-width: 800px;\n  object-fit: cover;\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n}\n\nheader {\n  align-items: stretch;\n  display: grid;\n  height: fit-content;\n  justify-content: stretch;\n  position: relative;\n}\n\nheader > div:first-child {\n  display: inline-flex;\n  flex: 2 0 300px;\n  position: relative;\n}\n\nheader > div:last-child {\n  background-color: white;\n  display: flex;\n  flex: 1 0 30vw;\n  flex-direction: column;\n  gap: 2rem;\n  height: fit-content;\n  justify-content: center;\n  margin: 3rem 0;\n  max-width: 1260px;\n  min-width: 300px;\n  padding: 3rem 1rem;\n}\n\nheader > div > div {\n  display: flex;\n  justify-content: end;\n}\n\nheader > div > img {\n  height: auto;\n  object-fit: cover;\n  width: auto;\n}\n\nheader .slantedBackground + h2 {\n  bottom: 1rem;\n  color: white;\n  font-size: 4rem;\n  max-width: 50vw;\n  position: absolute;\n  text-align: end;\n  text-shadow: 2px 0px 2px rgba(0, 0, 0, 0.6);\n  text-wrap: pretty;\n  transform: translateX(1rem);\n}\n\nmain {\n  background-color: #ffffff;\n  display: grid;\n  gap: 0.5rem;\n}\n\np {\n  max-width: 99%;\n}\n\n.projectGrid {\n  column-gap: 3vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  row-gap: 5vh;\n}\n\n.project {\n  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n}\n\n.project > *:first-child {\n  aspect-ratio: 5 / 4;\n  background-color: green;\n  color: white;\n  display: grid;\n  height: auto;\n  place-content: center;\n  width: 100%;\n}\n\n.project > div > div:first-child {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project > div > div:first-child > div {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n}\n\n.project > div:last-child {\n  align-items: start;\n  display: grid;\n  gap: 0.75rem;\n  grid-auto-rows: max-content;\n  min-height: 150px;\n  padding: 0.5rem 1rem;\n}\n\n.project p {\n  color: #00000088;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.slantedBackground {\n  background-color: var(--bg-color);\n  bottom: 4vh;\n  height: 100vh;\n  left: 0;\n  transform-origin: bottom left;\n  transform: translateX(-7vw) scale(10) rotate(-15deg);\n  position: absolute;\n  width: 100vw;\n  z-index: -2;\n}\n\n@media (hover: hover) {\n  .project {\n    opacity: 70%;\n    -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .project:hover {\n    opacity: 100%;\n    -webkit-box-shadow: 2px 2px 8px 0px #b5b818;\n    -moz-box-shadow: 2px 2px 8px 0px #b5b818;\n    box-shadow: 2px 2px 8px 0px #b5b818;\n  }\n}\n@media (width >= 1000px) {\n  header {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  header > div:last-child {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .project > div:last-child {\n    min-height: 200px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n\n  @media (width >= 2000px) {\n    body > div {\n      grid-template-columns: 1fr 2000px 1fr;\n      grid-template-rows: max-content max-content max-content;\n    }\n\n    body > div > div {\n      display: block;\n      grid-row: 1 / -1;\n    }\n\n    body > div > div:first-child {\n      grid-column: 1 / 2;\n    }\n\n    body > div > div:last-child {\n      grid-column: -2 / -1;\n    }\n\n    footer {\n      grid-column: 2 / -2;\n      grid-row: -2 / -1;\n    }\n\n    footer,\n    header,\n    main {\n      padding: 5vh 140px;\n    }\n\n    header {\n      grid-column: 2 / -2;\n      grid-row: 1 / 2;\n    }\n\n    header > div > img {\n      min-width: 600px;\n    }\n\n    main {\n      grid-column: 2 / -2;\n      grid-row: 2 / -2;\n    }\n\n    .slantedBackground {\n      transform: translateX(calc((2000px-100vw) / 2));\n    }\n  }\n}\n\n@media (1000px > width >= 650px) {\n  body {\n    gap: 0;\n  }\n\n  header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 2fr;\n  }\n\n  header > div:first-child {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n  }\n\n  header > div:last-child {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    margin-bottom: 0px;\n  }\n\n  header .slantedBackground + h2 {\n    top: 0%;\n    right: -100%;\n    transform: translateX(-1rem);\n  }\n\n  .project > div:last-child {\n    min-height: 190px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/media/mail_FILL0_wght400_GRAD0_opsz24.svg":
/*!*******************************************************!*\
  !*** ./src/media/mail_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a993830408a8604bfac2.svg";

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
/* harmony import */ var _src_media_mail_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/media/mail_FILL0_wght400_GRAD0_opsz24.svg */ "./src/media/mail_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _src_media_icons8_open_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/media/icons8-open.svg */ "./src/media/icons8-open.svg");
/* harmony import */ var _src_media_Screenshots_battleship_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/media/Screenshots/battleship.jpeg */ "./src/media/Screenshots/battleship.jpeg");
/* harmony import */ var _src_media_Screenshots_business_page_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/media/Screenshots/business_page.jpeg */ "./src/media/Screenshots/business_page.jpeg");
/* harmony import */ var _src_media_Screenshots_calculator_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/media/Screenshots/calculator.jpeg */ "./src/media/Screenshots/calculator.jpeg");
/* harmony import */ var _src_media_Screenshots_dashboard_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/media/Screenshots/dashboard.jpeg */ "./src/media/Screenshots/dashboard.jpeg");
/* harmony import */ var _src_media_Screenshots_etch_a_sketch_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/media/Screenshots/etch-a-sketch.jpeg */ "./src/media/Screenshots/etch-a-sketch.jpeg");
/* harmony import */ var _src_media_Screenshots_library_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/media/Screenshots/library.jpeg */ "./src/media/Screenshots/library.jpeg");
/* harmony import */ var _src_media_Screenshots_rock_paper_scissors_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/media/Screenshots/rock_paper_scissors.jpeg */ "./src/media/Screenshots/rock_paper_scissors.jpeg");
/* harmony import */ var _src_media_Screenshots_signup_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/media/Screenshots/signup.jpeg */ "./src/media/Screenshots/signup.jpeg");
/* harmony import */ var _src_media_Screenshots_tic_tac_toe_jpeg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/media/Screenshots/tic-tac-toe.jpeg */ "./src/media/Screenshots/tic-tac-toe.jpeg");
/* harmony import */ var _src_media_Screenshots_to_do_list_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/media/Screenshots/to-do-list.jpeg */ "./src/media/Screenshots/to-do-list.jpeg");















const buildProjectList = () => {
  const projectList = [];

  const addProject = (
    screenshot,
    altText,
    projectName,
    gitHubLink,
    livePreviewLink,
    projectDescription
  ) => {
    const projectObject = {};
    projectObject.screenshot = screenshot;
    projectObject.name = projectName;
    projectObject.description = projectDescription;
    projectObject.alt = altText;
    projectObject.git = gitHubLink;
    projectObject.preview = livePreviewLink;
    projectList.push(projectObject);
  };

  addProject(
    _src_media_Screenshots_battleship_jpeg__WEBPACK_IMPORTED_MODULE_4__,
    "battleship game part way through",
    "Battleship Game",
    "https://github.com/aRav3n/battleship",
    "https://arav3n.github.io/battleship/",
    "This is a Battleship game written in JavaScript, HTML, and CSS. It was my first project that utilized Jest tests and I found them to be helpful."
  );

  addProject(
    _src_media_Screenshots_to_do_list_jpeg__WEBPACK_IMPORTED_MODULE_13__,
    "to-do list app",
    "To-Do List",
    "https://github.com/aRav3n/todo-list",
    "https://arav3n.github.io/todo-list/",
    "This project is my take on a simple to-do list. In doing this project I got some hands-on learning for long-term browser storage as well as storing values to, and retrieving them from, JSON."
  );

  addProject(
    _src_media_Screenshots_business_page_jpeg__WEBPACK_IMPORTED_MODULE_5__,
    "homepage for a massage business in Mexico City",
    "Business Homepage",
    "https://github.com/aRav3n/punto-de-calma-homepage",
    "https://arav3n.github.io/punto-de-calma-homepage/",
    "This was my first in depth project utilizing webpack. It was a lot of fun to work on, so much so that I had to be reminded to take breaks to eat!"
  );

  addProject(
    _src_media_Screenshots_tic_tac_toe_jpeg__WEBPACK_IMPORTED_MODULE_12__,
    "tic tac toe game",
    "Tic-Tac-Toe Game",
    "https://github.com/aRav3n/tic-tac-toe",
    "http://arav3n.github.io/tic-tac-toe",
    "This was my first project using factory functions. It took longer to click for me that I would've thought and was a huge relief when it finally did."
  );

  addProject(
    _src_media_Screenshots_library_jpeg__WEBPACK_IMPORTED_MODULE_9__,
    "virtual library collection",
    "Library Application",
    "https://github.com/aRav3n/library_app",
    "http://arav3n.github.io/library_app/",
    "My first project using JavaScript objects was this virtual library application. It was fun to build and I also enjoyed spending some time on designing the color scheme."
  );

  addProject(
    _src_media_Screenshots_dashboard_jpeg__WEBPACK_IMPORTED_MODULE_7__,
    "admin dashboard project",
    "Admin Dashboard",
    "https://github.com/aRav3n/dashboard_project",
    "http://arav3n.github.io/dashboard_project/",
    "Learning CSS grids was a game changer for me. The dashboard that I built for this project was the first time I really got to play with combining grid and flexbox; it was a blast!"
  );

  addProject(
    _src_media_Screenshots_signup_jpeg__WEBPACK_IMPORTED_MODULE_11__,
    "signup form",
    "Signup Form",
    "https://github.com/aRav3n/sign.up.form.project",
    "http://arav3n.github.io/sign.up.form.project/",
    "This is probably the project I refer back to the most when I need to remember something. It is a pretty simple form but I'd given myself the added challenge of making it work on mobile, without media queries, as well."
  );

  addProject(
    _src_media_Screenshots_calculator_jpeg__WEBPACK_IMPORTED_MODULE_6__,
    "simple calculator app",
    "Calculator App",
    "https://github.com/aRav3n/calculator",
    "http://arav3n.github.io/calculator/",
    "This is a simple calculator application, one of the first projects I ever built with JavaScript."
  );

  addProject(
    _src_media_Screenshots_etch_a_sketch_jpeg__WEBPACK_IMPORTED_MODULE_8__,
    "etch-a-sketch app",
    "Etch-A-Sketch",
    "https://github.com/aRav3n/etchASketch",
    "http://arav3n.github.io/etchASketch/",
    "Simple Etch-A-Sketch app that uses mouse cursor hover or finger drag to simulate the effect of an Etch-A-Sketch."
  );

  addProject(
    _src_media_Screenshots_rock_paper_scissors_jpeg__WEBPACK_IMPORTED_MODULE_10__,
    "rock paper scissors game",
    "Rock Paper Scissors",
    "https://github.com/aRav3n/rockPaperScissors",
    "http://arav3n.github.io/rockPaperScissors/",
    "Looking back on this application that I built 15 months ago makes me really excited to see where I'll be in another 15 months! I remember it being quite a challenge to get the game logic just right."
  );

  return projectList;
};

const buildMain = () => {
  buildProjectList();
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
    const linkDiv = document.createElement("div");
    const gitLink = document.createElement("a");
    gitLink.setAttribute("href", projectObject.git);
    gitLink.setAttribute("target", "_blank");
    gitLink.setAttribute("rel", "noopener noreferrer");
    const gitImg = new Image();
    gitImg.src = _src_media_icons8_github_svg__WEBPACK_IMPORTED_MODULE_1__;
    gitImg.setAttribute("alt", "project git hub");
    gitLink.appendChild(gitImg);
    const previewLink = document.createElement("a");
    previewLink.setAttribute("href", projectObject.preview);
    previewLink.setAttribute("target", "_blank");
    previewLink.setAttribute("rel", "noopener noreferrer");
    const previewImg = new Image();
    previewImg.src = _src_media_icons8_open_svg__WEBPACK_IMPORTED_MODULE_3__;
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

buildMain();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFB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O0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zaWRlYmFyLWNvbG9yOiAjYjNjZmMyO1xuICAtLWJnLWNvbG9yOiAjNWFjMThmO1xufVxuXG4qIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5ID4gZGl2IHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICByb3ctZ2FwOiAzcmVtO1xufVxuXG5ib2R5ID4gZGl2ID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRhY3Qge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY29udGFjdCBhIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxdnc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhY3QgYSBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbmRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmZvb3RlcixcbmhlYWRlcixcbm1haW4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1dmggN3Z3O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuZm9vdGVyIGEge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5mb290ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvb3RlciA+IGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMnZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBmbGV4OiAxIDEgMDtcbiAgZ2FwOiAxLjI1cmVtO1xuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XG59XG5cbmZvb3RlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbn1cblxuZm9vdGVyID4gZGl2ID4gcGljdHVyZSA+IGltZyB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oZWFkZXIge1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4OiAyIDAgMzAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDMwdnc7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogM3JlbSAwO1xuICBtYXgtd2lkdGg6IDEyNjBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xufVxuXG5oZWFkZXIgPiBkaXYgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuaGVhZGVyID4gZGl2ID4gaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IGF1dG87XG59XG5cbmhlYWRlciAuc2xhbnRlZEJhY2tncm91bmQgKyBoMiB7XG4gIGJvdHRvbTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1heC13aWR0aDogNTB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIHRleHQtc2hhZG93OiAycHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRleHQtd3JhcDogcHJldHR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNXJlbTtcbn1cblxucCB7XG4gIG1heC13aWR0aDogOTklO1xufVxuXG4ucHJvamVjdEdyaWQge1xuICBjb2x1bW4tZ2FwOiAzdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICByb3ctZ2FwOiA1dmg7XG59XG5cbi5wcm9qZWN0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wcm9qZWN0ID4gKjpmaXJzdC1jaGlsZCB7XG4gIGFzcGVjdC1yYXRpbzogNSAvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogYXV0bztcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxdnc7XG59XG5cbi5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5wcm9qZWN0IHAge1xuICBjb2xvcjogIzAwMDAwMDg4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnNsYW50ZWRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBib3R0b206IDR2aDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtN3Z3KSBzY2FsZSgxMCkgcm90YXRlKC0xNWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiAtMjtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgLnByb2plY3Qge1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIH1cblxuICAucHJvamVjdDpob3ZlciB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCAjYjViODE4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4ICNiNWI4MTg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4ICNiNWI4MTg7XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPj0gMTAwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgfVxuXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcbiAgICBib3R0b206IC01dmg7XG4gIH1cblxuICBAbWVkaWEgKHdpZHRoID49IDIwMDBweCkge1xuICAgIGJvZHkgPiBkaXYge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwMHB4IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XG4gICAgfVxuXG4gICAgYm9keSA+IGRpdiA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XG4gICAgfVxuXG4gICAgYm9keSA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgfVxuXG4gICAgYm9keSA+IGRpdiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgIGdyaWQtY29sdW1uOiAtMiAvIC0xO1xuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xuICAgICAgZ3JpZC1yb3c6IC0yIC8gLTE7XG4gICAgfVxuXG4gICAgZm9vdGVyLFxuICAgIGhlYWRlcixcbiAgICBtYWluIHtcbiAgICAgIHBhZGRpbmc6IDV2aCAxNDBweDtcbiAgICB9XG5cbiAgICBoZWFkZXIge1xuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICB9XG5cbiAgICBoZWFkZXIgPiBkaXYgPiBpbWcge1xuICAgICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICB9XG5cbiAgICBtYWluIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gLTI7XG4gICAgICBncmlkLXJvdzogMiAvIC0yO1xuICAgIH1cblxuICAgIC5zbGFudGVkQmFja2dyb3VuZCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygoMjAwMHB4LTEwMHZ3KSAvIDIpKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhICgxMDAwcHggPiB3aWR0aCA+PSA2NTBweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDA7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIGhlYWRlciAuc2xhbnRlZEJhY2tncm91bmQgKyBoMiB7XG4gICAgdG9wOiAwJTtcbiAgICByaWdodDogLTEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xuICB9XG5cbiAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcbiAgICBib3R0b206IC01dmg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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TztJQUNQLFlBQVk7SUFDWiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXNpZGViYXItY29sb3I6ICNiM2NmYzI7XFxuICAtLWJnLWNvbG9yOiAjNWFjMThmO1xcbn1cXG5cXG4qIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkgPiBkaXYge1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHJvdy1nYXA6IDNyZW07XFxufVxcblxcbmJvZHkgPiBkaXYgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNvbnRhY3QgYSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXZ3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY29udGFjdCBhIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG4gIHdpZHRoOiAyNHB4O1xcbn1cXG5cXG5kaXYge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5tYWluIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1dmggN3Z3O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmZvb3RlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJ2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmZvb3RlciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZmxleDogMSAxIDA7XFxuICBnYXA6IDEuMjVyZW07XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxufVxcblxcbmZvb3RlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjI1cmVtO1xcbn1cXG5cXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvb3RlciA+IGRpdiA+IHBpY3R1cmUgPiBpbWcge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDIgMCAzMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDMwdnc7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAzcmVtIDA7XFxuICBtYXgtd2lkdGg6IDEyNjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAzcmVtIDFyZW07XFxufVxcblxcbmhlYWRlciA+IGRpdiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbmhlYWRlciA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIgLnNsYW50ZWRCYWNrZ3JvdW5kICsgaDIge1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHRleHQtd3JhcDogcHJldHR5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xcbn1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbnAge1xcbiAgbWF4LXdpZHRoOiA5OSU7XFxufVxcblxcbi5wcm9qZWN0R3JpZCB7XFxuICBjb2x1bW4tZ2FwOiAzdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICByb3ctZ2FwOiA1dmg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbi5wcm9qZWN0ID4gKjpmaXJzdC1jaGlsZCB7XFxuICBhc3BlY3QtcmF0aW86IDUgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4ucHJvamVjdCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNzVyZW07XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiAxNTBweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdCBwIHtcXG4gIGNvbG9yOiAjMDAwMDAwODg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNsYW50ZWRCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGJvdHRvbTogNHZoO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtN3Z3KSBzY2FsZSgxMCkgcm90YXRlKC0xNWRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICB6LWluZGV4OiAtMjtcXG59XFxuXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIC5wcm9qZWN0IHtcXG4gICAgb3BhY2l0eTogNzAlO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggI2I1YjgxODtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggI2I1YjgxODtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4ICNiNWI4MTg7XFxuICB9XFxufVxcbkBtZWRpYSAod2lkdGggPj0gMTAwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB9XFxuXFxuICBoZWFkZXIgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgfVxcblxcbiAgLnByb2plY3QgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcXG4gICAgYm90dG9tOiAtNXZoO1xcbiAgfVxcblxcbiAgQG1lZGlhICh3aWR0aCA+PSAyMDAwcHgpIHtcXG4gICAgYm9keSA+IGRpdiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwMHB4IDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIGJvZHkgPiBkaXYgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgYm9keSA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIGJvZHkgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xcbiAgICAgIGdyaWQtcm93OiAtMiAvIC0xO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlcixcXG4gICAgaGVhZGVyLFxcbiAgICBtYWluIHtcXG4gICAgICBwYWRkaW5nOiA1dmggMTQwcHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgPiBkaXYgPiBpbWcge1xcbiAgICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIH1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAtMjtcXG4gICAgICBncmlkLXJvdzogMiAvIC0yO1xcbiAgICB9XFxuXFxuICAgIC5zbGFudGVkQmFja2dyb3VuZCB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoKDIwMDBweC0xMDB2dykgLyAyKSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhICgxMDAwcHggPiB3aWR0aCA+PSA2NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGdhcDogMDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIH1cXG5cXG4gIGhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAuc2xhbnRlZEJhY2tncm91bmQgKyBoMiB7XFxuICAgIHRvcDogMCU7XFxuICAgIHJpZ2h0OiAtMTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcXG4gIH1cXG5cXG4gIC5zbGFudGVkQmFja2dyb3VuZCB7XFxuICAgIGJvdHRvbTogLTV2aDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vc3JjL21lZGlhL2ljb25zOC1naXRodWIuc3ZnXCI7XG5pbXBvcnQgRW1haWxJY29uIGZyb20gXCIuLi9zcmMvbWVkaWEvbWFpbF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcbmltcG9ydCBPcGVuTGlua0ljb24gZnJvbSBcIi4uL3NyYy9tZWRpYS9pY29uczgtb3Blbi5zdmdcIjtcbmltcG9ydCBiYXR0bGVzaGlwSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvYmF0dGxlc2hpcC5qcGVnXCI7XG5pbXBvcnQgYnVzaW5lc3NQYWdlSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvYnVzaW5lc3NfcGFnZS5qcGVnXCI7XG5pbXBvcnQgY2FsY3VsYXRvckltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2NhbGN1bGF0b3IuanBlZ1wiO1xuaW1wb3J0IGRhc2hib2FyZEltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2Rhc2hib2FyZC5qcGVnXCI7XG5pbXBvcnQgZXRjaEFTa2V0Y2hJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9ldGNoLWEtc2tldGNoLmpwZWdcIjtcbmltcG9ydCBsaWJyYXJ5SW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvbGlicmFyeS5qcGVnXCI7XG5pbXBvcnQgcm9ja1BhcGVyU2Npc3NvcnNJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9yb2NrX3BhcGVyX3NjaXNzb3JzLmpwZWdcIjtcbmltcG9ydCBzaWdudXBJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9zaWdudXAuanBlZ1wiO1xuaW1wb3J0IHRpY2tUYWNrVG9lSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvdGljLXRhYy10b2UuanBlZ1wiO1xuaW1wb3J0IHRvRG9MaXN0SW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvdG8tZG8tbGlzdC5qcGVnXCI7XG5cbmNvbnN0IGJ1aWxkUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gW107XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChcbiAgICBzY3JlZW5zaG90LFxuICAgIGFsdFRleHQsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgZ2l0SHViTGluayxcbiAgICBsaXZlUHJldmlld0xpbmssXG4gICAgcHJvamVjdERlc2NyaXB0aW9uXG4gICkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPYmplY3QgPSB7fTtcbiAgICBwcm9qZWN0T2JqZWN0LnNjcmVlbnNob3QgPSBzY3JlZW5zaG90O1xuICAgIHByb2plY3RPYmplY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHByb2plY3RPYmplY3QuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgcHJvamVjdE9iamVjdC5hbHQgPSBhbHRUZXh0O1xuICAgIHByb2plY3RPYmplY3QuZ2l0ID0gZ2l0SHViTGluaztcbiAgICBwcm9qZWN0T2JqZWN0LnByZXZpZXcgPSBsaXZlUHJldmlld0xpbms7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0T2JqZWN0KTtcbiAgfTtcblxuICBhZGRQcm9qZWN0KFxuICAgIGJhdHRsZXNoaXBJbWcsXG4gICAgXCJiYXR0bGVzaGlwIGdhbWUgcGFydCB3YXkgdGhyb3VnaFwiLFxuICAgIFwiQmF0dGxlc2hpcCBHYW1lXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20vYVJhdjNuL2JhdHRsZXNoaXBcIixcbiAgICBcImh0dHBzOi8vYXJhdjNuLmdpdGh1Yi5pby9iYXR0bGVzaGlwL1wiLFxuICAgIFwiVGhpcyBpcyBhIEJhdHRsZXNoaXAgZ2FtZSB3cml0dGVuIGluIEphdmFTY3JpcHQsIEhUTUwsIGFuZCBDU1MuIEl0IHdhcyBteSBmaXJzdCBwcm9qZWN0IHRoYXQgdXRpbGl6ZWQgSmVzdCB0ZXN0cyBhbmQgSSBmb3VuZCB0aGVtIHRvIGJlIGhlbHBmdWwuXCJcbiAgKTtcblxuICBhZGRQcm9qZWN0KFxuICAgIHRvRG9MaXN0SW1nLFxuICAgIFwidG8tZG8gbGlzdCBhcHBcIixcbiAgICBcIlRvLURvIExpc3RcIixcbiAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9hUmF2M24vdG9kby1saXN0XCIsXG4gICAgXCJodHRwczovL2FyYXYzbi5naXRodWIuaW8vdG9kby1saXN0L1wiLFxuICAgIFwiVGhpcyBwcm9qZWN0IGlzIG15IHRha2Ugb24gYSBzaW1wbGUgdG8tZG8gbGlzdC4gSW4gZG9pbmcgdGhpcyBwcm9qZWN0IEkgZ290IHNvbWUgaGFuZHMtb24gbGVhcm5pbmcgZm9yIGxvbmctdGVybSBicm93c2VyIHN0b3JhZ2UgYXMgd2VsbCBhcyBzdG9yaW5nIHZhbHVlcyB0bywgYW5kIHJldHJpZXZpbmcgdGhlbSBmcm9tLCBKU09OLlwiXG4gICk7XG5cbiAgYWRkUHJvamVjdChcbiAgICBidXNpbmVzc1BhZ2VJbWcsXG4gICAgXCJob21lcGFnZSBmb3IgYSBtYXNzYWdlIGJ1c2luZXNzIGluIE1leGljbyBDaXR5XCIsXG4gICAgXCJCdXNpbmVzcyBIb21lcGFnZVwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FSYXYzbi9wdW50by1kZS1jYWxtYS1ob21lcGFnZVwiLFxuICAgIFwiaHR0cHM6Ly9hcmF2M24uZ2l0aHViLmlvL3B1bnRvLWRlLWNhbG1hLWhvbWVwYWdlL1wiLFxuICAgIFwiVGhpcyB3YXMgbXkgZmlyc3QgaW4gZGVwdGggcHJvamVjdCB1dGlsaXppbmcgd2VicGFjay4gSXQgd2FzIGEgbG90IG9mIGZ1biB0byB3b3JrIG9uLCBzbyBtdWNoIHNvIHRoYXQgSSBoYWQgdG8gYmUgcmVtaW5kZWQgdG8gdGFrZSBicmVha3MgdG8gZWF0IVwiXG4gICk7XG5cbiAgYWRkUHJvamVjdChcbiAgICB0aWNrVGFja1RvZUltZyxcbiAgICBcInRpYyB0YWMgdG9lIGdhbWVcIixcbiAgICBcIlRpYy1UYWMtVG9lIEdhbWVcIixcbiAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9hUmF2M24vdGljLXRhYy10b2VcIixcbiAgICBcImh0dHA6Ly9hcmF2M24uZ2l0aHViLmlvL3RpYy10YWMtdG9lXCIsXG4gICAgXCJUaGlzIHdhcyBteSBmaXJzdCBwcm9qZWN0IHVzaW5nIGZhY3RvcnkgZnVuY3Rpb25zLiBJdCB0b29rIGxvbmdlciB0byBjbGljayBmb3IgbWUgdGhhdCBJIHdvdWxkJ3ZlIHRob3VnaHQgYW5kIHdhcyBhIGh1Z2UgcmVsaWVmIHdoZW4gaXQgZmluYWxseSBkaWQuXCJcbiAgKTtcblxuICBhZGRQcm9qZWN0KFxuICAgIGxpYnJhcnlJbWcsXG4gICAgXCJ2aXJ0dWFsIGxpYnJhcnkgY29sbGVjdGlvblwiLFxuICAgIFwiTGlicmFyeSBBcHBsaWNhdGlvblwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FSYXYzbi9saWJyYXJ5X2FwcFwiLFxuICAgIFwiaHR0cDovL2FyYXYzbi5naXRodWIuaW8vbGlicmFyeV9hcHAvXCIsXG4gICAgXCJNeSBmaXJzdCBwcm9qZWN0IHVzaW5nIEphdmFTY3JpcHQgb2JqZWN0cyB3YXMgdGhpcyB2aXJ0dWFsIGxpYnJhcnkgYXBwbGljYXRpb24uIEl0IHdhcyBmdW4gdG8gYnVpbGQgYW5kIEkgYWxzbyBlbmpveWVkIHNwZW5kaW5nIHNvbWUgdGltZSBvbiBkZXNpZ25pbmcgdGhlIGNvbG9yIHNjaGVtZS5cIlxuICApO1xuXG4gIGFkZFByb2plY3QoXG4gICAgZGFzaGJvYXJkSW1nLFxuICAgIFwiYWRtaW4gZGFzaGJvYXJkIHByb2plY3RcIixcbiAgICBcIkFkbWluIERhc2hib2FyZFwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FSYXYzbi9kYXNoYm9hcmRfcHJvamVjdFwiLFxuICAgIFwiaHR0cDovL2FyYXYzbi5naXRodWIuaW8vZGFzaGJvYXJkX3Byb2plY3QvXCIsXG4gICAgXCJMZWFybmluZyBDU1MgZ3JpZHMgd2FzIGEgZ2FtZSBjaGFuZ2VyIGZvciBtZS4gVGhlIGRhc2hib2FyZCB0aGF0IEkgYnVpbHQgZm9yIHRoaXMgcHJvamVjdCB3YXMgdGhlIGZpcnN0IHRpbWUgSSByZWFsbHkgZ290IHRvIHBsYXkgd2l0aCBjb21iaW5pbmcgZ3JpZCBhbmQgZmxleGJveDsgaXQgd2FzIGEgYmxhc3QhXCJcbiAgKTtcblxuICBhZGRQcm9qZWN0KFxuICAgIHNpZ251cEltZyxcbiAgICBcInNpZ251cCBmb3JtXCIsXG4gICAgXCJTaWdudXAgRm9ybVwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FSYXYzbi9zaWduLnVwLmZvcm0ucHJvamVjdFwiLFxuICAgIFwiaHR0cDovL2FyYXYzbi5naXRodWIuaW8vc2lnbi51cC5mb3JtLnByb2plY3QvXCIsXG4gICAgXCJUaGlzIGlzIHByb2JhYmx5IHRoZSBwcm9qZWN0IEkgcmVmZXIgYmFjayB0byB0aGUgbW9zdCB3aGVuIEkgbmVlZCB0byByZW1lbWJlciBzb21ldGhpbmcuIEl0IGlzIGEgcHJldHR5IHNpbXBsZSBmb3JtIGJ1dCBJJ2QgZ2l2ZW4gbXlzZWxmIHRoZSBhZGRlZCBjaGFsbGVuZ2Ugb2YgbWFraW5nIGl0IHdvcmsgb24gbW9iaWxlLCB3aXRob3V0IG1lZGlhIHF1ZXJpZXMsIGFzIHdlbGwuXCJcbiAgKTtcblxuICBhZGRQcm9qZWN0KFxuICAgIGNhbGN1bGF0b3JJbWcsXG4gICAgXCJzaW1wbGUgY2FsY3VsYXRvciBhcHBcIixcbiAgICBcIkNhbGN1bGF0b3IgQXBwXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20vYVJhdjNuL2NhbGN1bGF0b3JcIixcbiAgICBcImh0dHA6Ly9hcmF2M24uZ2l0aHViLmlvL2NhbGN1bGF0b3IvXCIsXG4gICAgXCJUaGlzIGlzIGEgc2ltcGxlIGNhbGN1bGF0b3IgYXBwbGljYXRpb24sIG9uZSBvZiB0aGUgZmlyc3QgcHJvamVjdHMgSSBldmVyIGJ1aWx0IHdpdGggSmF2YVNjcmlwdC5cIlxuICApO1xuXG4gIGFkZFByb2plY3QoXG4gICAgZXRjaEFTa2V0Y2hJbWcsXG4gICAgXCJldGNoLWEtc2tldGNoIGFwcFwiLFxuICAgIFwiRXRjaC1BLVNrZXRjaFwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FSYXYzbi9ldGNoQVNrZXRjaFwiLFxuICAgIFwiaHR0cDovL2FyYXYzbi5naXRodWIuaW8vZXRjaEFTa2V0Y2gvXCIsXG4gICAgXCJTaW1wbGUgRXRjaC1BLVNrZXRjaCBhcHAgdGhhdCB1c2VzIG1vdXNlIGN1cnNvciBob3ZlciBvciBmaW5nZXIgZHJhZyB0byBzaW11bGF0ZSB0aGUgZWZmZWN0IG9mIGFuIEV0Y2gtQS1Ta2V0Y2guXCJcbiAgKTtcblxuICBhZGRQcm9qZWN0KFxuICAgIHJvY2tQYXBlclNjaXNzb3JzSW1nLFxuICAgIFwicm9jayBwYXBlciBzY2lzc29ycyBnYW1lXCIsXG4gICAgXCJSb2NrIFBhcGVyIFNjaXNzb3JzXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20vYVJhdjNuL3JvY2tQYXBlclNjaXNzb3JzXCIsXG4gICAgXCJodHRwOi8vYXJhdjNuLmdpdGh1Yi5pby9yb2NrUGFwZXJTY2lzc29ycy9cIixcbiAgICBcIkxvb2tpbmcgYmFjayBvbiB0aGlzIGFwcGxpY2F0aW9uIHRoYXQgSSBidWlsdCAxNSBtb250aHMgYWdvIG1ha2VzIG1lIHJlYWxseSBleGNpdGVkIHRvIHNlZSB3aGVyZSBJJ2xsIGJlIGluIGFub3RoZXIgMTUgbW9udGhzISBJIHJlbWVtYmVyIGl0IGJlaW5nIHF1aXRlIGEgY2hhbGxlbmdlIHRvIGdldCB0aGUgZ2FtZSBsb2dpYyBqdXN0IHJpZ2h0LlwiXG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3RMaXN0O1xufTtcblxuY29uc3QgYnVpbGRNYWluID0gKCkgPT4ge1xuICBidWlsZFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gYnVpbGRQcm9qZWN0TGlzdCgpO1xuICBjb25zdCBtYWluRG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJFeGFtcGxlcyBvZiBNeSBXb3JrXCI7XG5cbiAgY29uc3QgcHJvamVjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0R3JpZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEdyaWRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb2plY3RPYmplY3QgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgY29uc3Qgc2NyZWVuc2hvdCA9IG5ldyBJbWFnZSgpO1xuICAgIHNjcmVlbnNob3Quc2V0QXR0cmlidXRlKFwiYWx0XCIsIHByb2plY3RPYmplY3QuYWx0KTtcbiAgICBzY3JlZW5zaG90LnNyYyA9IHByb2plY3RPYmplY3Quc2NyZWVuc2hvdDtcbiAgICBjb25zdCBzY3JlZW5zaG90RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JlZW5zaG90RGl2LmFwcGVuZENoaWxkKHNjcmVlbnNob3QpO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdE9iamVjdC5uYW1lO1xuICAgIGNvbnN0IGxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBnaXRMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcHJvamVjdE9iamVjdC5naXQpO1xuICAgIGdpdExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgIGdpdExpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgICBjb25zdCBnaXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRJbWcuc3JjID0gR2l0aHViSWNvbjtcbiAgICBnaXRJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwicHJvamVjdCBnaXQgaHViXCIpO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SW1nKTtcbiAgICBjb25zdCBwcmV2aWV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHByZXZpZXdMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgcHJvamVjdE9iamVjdC5wcmV2aWV3KTtcbiAgICBwcmV2aWV3TGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgcHJldmlld0xpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgICBjb25zdCBwcmV2aWV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgcHJldmlld0ltZy5zcmMgPSBPcGVuTGlua0ljb247XG4gICAgcHJldmlld0ltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJsaXZlIHByZXZpZXcgb2YgdGhlIHByb2plY3RcIik7XG4gICAgcHJldmlld0xpbmsuYXBwZW5kQ2hpbGQocHJldmlld0ltZyk7XG4gICAgbGlua0Rpdi5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBsaW5rRGl2LmFwcGVuZENoaWxkKHByZXZpZXdMaW5rKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGxpbmtEaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25QLmlubmVySFRNTCA9IHByb2plY3RPYmplY3QuZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGV0YWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuICAgIGRldGFpbERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblApO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChzY3JlZW5zaG90RGl2KTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRldGFpbERpdik7XG4gICAgcHJvamVjdEdyaWQuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH1cblxuICBtYWluRG9tRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluRG9tRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWFpbkRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEdyaWQpO1xufTtcblxuYnVpbGRNYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=