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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  color: inherit;\n  margin: 0;\n  max-height: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n\nbody > div {\n  align-content: space-between;\n  display: grid;\n  justify-content: center;\n  min-height: 100vh;\n  overflow: hidden;\n  row-gap: 3rem;\n}\n\nbody > div > div {\n  background-color: #5ba5b8;\n  display: none;\n  position: relative;\n  z-index: 1;\n}\n\n.contact {\n  display: grid;\n}\n\n.contact a {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n  text-decoration: none;\n}\n\n.contact a img {\n  filter: invert(100%);\n}\n\ndiv {\n  box-sizing: border-box;\n}\n\nfooter,\nheader,\nmain {\n  box-sizing: border-box;\n  padding: 5vh 7vw;\n}\n\nfooter {\n  background-color: #0891b2;\n  color: white;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-content: space-between;\n}\n\nfooter button {\n  background-color: #ffffff00;\n  border: none;\n}\n\nfooter > div {\n  align-items: center;\n  display: grid;\n  gap: 2vh;\n  overflow: hidden;\n}\n\nfooter > div:first-child {\n  display: grid;\n  flex: 1 1 0;\n  gap: 1.25rem;\n  grid-auto-rows: max-content;\n}\n\nfooter > div:first-child > div {\n  display: grid;\n  gap: 0.25rem;\n}\n\nfooter > div:first-child > div:last-child {\n  display: flex;\n  gap: 0.5rem;\n}\n\nfooter > div > picture > img {\n  object-fit: cover;\n}\n\nh1,\nh2,\nh3 {\n  font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n}\n\nheader {\n  align-items: stretch;\n  display: grid;\n  height: fit-content;\n  justify-content: stretch;\n  position: relative;\n}\n\nheader > div:first-child {\n  display: inline-flex;\n  flex: 2 0 300px;\n  position: relative;\n}\n\nheader > div:last-child {\n  background-color: white;\n  display: flex;\n  flex: 1 0 30vw;\n  flex-direction: column;\n  gap: 2rem;\n  height: fit-content;\n  justify-content: center;\n  margin: 3rem 0;\n  max-width: 1260px;\n  min-width: 300px;\n  padding: 3rem 1rem;\n  position: relative;\n  z-index: -1;\n}\n\nheader > div > div {\n  display: flex;\n  justify-content: end;\n}\n\nheader > div > img {\n  height: auto;\n  object-fit: cover;\n  width: auto;\n}\n\nheader h1 {\n  bottom: 1rem;\n  color: white;\n  font-size: 4rem;\n  max-width: 50vw;\n  position: absolute;\n  text-align: end;\n  text-shadow: 2px 0px 2px rgba(0, 0, 0, 0.6);\n  text-wrap: pretty;\n  transform: translateX(1rem);\n}\n\nmain {\n  background-color: #ffffff;\n  display: grid;\n  gap: 0.5rem;\n}\n\np {\n  max-width: 99%;\n}\n\n.projectGrid {\n  column-gap: 3vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  row-gap: 5vh;\n}\n\n.project {\n  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.75);\n}\n\n.project > *:first-child {\n  aspect-ratio: 5 / 4;\n  background-color: green;\n  color: white;\n  display: grid;\n  height: auto;\n  place-content: center;\n  width: 100%;\n}\n\n.project > div > div:first-child {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project > div > div:first-child > div {\n  align-items: center;\n  display: flex;\n  gap: 1vw;\n}\n\n.project > div:last-child {\n  align-items: start;\n  display: grid;\n  gap: 0.75rem;\n  grid-auto-rows: max-content;\n  height: 180px;\n  padding: 0.5rem 1rem;\n}\n\n.project p {\n  color: #00000088;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.slantedBackground {\n  background-color: #0891b2;\n  bottom: 4vh;\n  height: 100vh;\n  left: 0;\n  transform-origin: bottom left;\n  transform: translateX(-7vw) scale(10) rotate(-15deg);\n  position: absolute;\n  width: 100vw;\n  z-index: -2;\n}\n\n@media (width >= 1000px) {\n  header {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  header > div:last-child {\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n  }\n\n  .project > div:last-child {\n    height: 200px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n\n  @media (width >= 2000px) {\n    body > div {\n      grid-template-columns: 1fr 2000px 1fr;\n      grid-template-rows: max-content max-content max-content;\n    }\n\n    body > div > div {\n      display: block;\n      grid-row: 1 / -1;\n    }\n\n    body > div > div:first-child {\n      grid-column: 1 / 2;\n    }\n\n    body > div > div:last-child {\n      grid-column: -2 / -1;\n    }\n\n    footer {\n      grid-column: 2 / -2;\n      grid-row: -2 / -1;\n    }\n\n    footer,\n    header,\n    main {\n      padding: 5vh 140px;\n    }\n\n    header {\n      grid-column: 2 / -2;\n      grid-row: 1 / 2;\n    }\n\n    header > div > img {\n      min-width: 600px;\n    }\n\n    header > div:last-child {\n    }\n\n    main {\n      grid-column: 2 / -2;\n      grid-row: 2 / -2;\n    }\n\n    .slantedBackground {\n      transform: translateX(calc((2000px-100vw) / 2));\n    }\n  }\n}\n\n@media (1000px > width >= 500px) {\n  body {\n    gap: 0;\n  }\n\n  header {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 3fr 2fr;\n  }\n\n  header > div:first-child {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n  }\n\n  header > div:last-child {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n    margin-bottom: 0px;\n  }\n\n  header h1 {\n    top: 0%;\n    right: -100%;\n    transform: translateX(-1rem);\n  }\n\n  .project > div:last-child {\n    height: 190px;\n  }\n\n  .slantedBackground {\n    bottom: -5vh;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVks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IndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkgPiBkaXYge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJvdy1nYXA6IDNyZW07XG59XG5cbmJvZHkgPiBkaXYgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhNWI4O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNvbnRhY3QgYSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXZ3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWN0IGEgaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG59XG5cbmRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmZvb3RlcixcbmhlYWRlcixcbm1haW4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA1dmggN3Z3O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9vdGVyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb290ZXIgPiBkaXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDJ2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZmxleDogMSAxIDA7XG4gIGdhcDogMS4yNXJlbTtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xufVxuXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMjVyZW07XG59XG5cbmZvb3RlciA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbmZvb3RlciA+IGRpdiA+IHBpY3R1cmUgPiBpbWcge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleDogMiAwIDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCAzMHZ3O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDNyZW0gMDtcbiAgbWF4LXdpZHRoOiAxMjYwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuaGVhZGVyID4gZGl2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbmhlYWRlciA+IGRpdiA+IGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG5oZWFkZXIgaDEge1xuICBib3R0b206IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXgtd2lkdGg6IDUwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICB0ZXh0LXNoYWRvdzogMnB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbnAge1xuICBtYXgtd2lkdGg6IDk5JTtcbn1cblxuLnByb2plY3RHcmlkIHtcbiAgY29sdW1uLWdhcDogM3Z3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgcm93LWdhcDogNXZoO1xufVxuXG4ucHJvamVjdCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ucHJvamVjdCA+ICo6Zmlyc3QtY2hpbGQge1xuICBhc3BlY3QtcmF0aW86IDUgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvamVjdCA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXZ3O1xufVxuXG4ucHJvamVjdCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNzVyZW07XG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbi5wcm9qZWN0IHAge1xuICBjb2xvcjogIzAwMDAwMDg4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnNsYW50ZWRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcbiAgYm90dG9tOiA0dmg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTd2dykgc2NhbGUoMTApIHJvdGF0ZSgtMTVkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogLTI7XG59XG5cbkBtZWRpYSAod2lkdGggPj0gMTAwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgfVxuXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cblxuICAuc2xhbnRlZEJhY2tncm91bmQge1xuICAgIGJvdHRvbTogLTV2aDtcbiAgfVxuXG4gIEBtZWRpYSAod2lkdGggPj0gMjAwMHB4KSB7XG4gICAgYm9keSA+IGRpdiB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMDAwcHggMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcbiAgICB9XG5cbiAgICBib2R5ID4gZGl2ID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcbiAgICB9XG5cbiAgICBib2R5ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICB9XG5cbiAgICBib2R5ID4gZGl2ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gLTI7XG4gICAgICBncmlkLXJvdzogLTIgLyAtMTtcbiAgICB9XG5cbiAgICBmb290ZXIsXG4gICAgaGVhZGVyLFxuICAgIG1haW4ge1xuICAgICAgcGFkZGluZzogNXZoIDE0MHB4O1xuICAgIH1cblxuICAgIGhlYWRlciB7XG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xuICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIH1cblxuICAgIGhlYWRlciA+IGRpdiA+IGltZyB7XG4gICAgICBtaW4td2lkdGg6IDYwMHB4O1xuICAgIH1cblxuICAgIGhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICB9XG5cbiAgICBtYWluIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gLTI7XG4gICAgICBncmlkLXJvdzogMiAvIC0yO1xuICAgIH1cblxuICAgIC5zbGFudGVkQmFja2dyb3VuZCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygoMjAwMHB4LTEwMHZ3KSAvIDIpKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhICgxMDAwcHggPiB3aWR0aCA+PSA1MDBweCkge1xuICBib2R5IHtcbiAgICBnYXA6IDA7XG4gIH1cblxuICBoZWFkZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xuICB9XG5cbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIGhlYWRlciBoMSB7XG4gICAgdG9wOiAwJTtcbiAgICByaWdodDogLTEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKTtcbiAgfVxuXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cblxuICAuc2xhbnRlZEJhY2tncm91bmQge1xuICAgIGJvdHRvbTogLTV2aDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULDJEQUEyRDtFQUMzRCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFh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XFxuICBtYXJnaW46IDA7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSA+IGRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcm93LWdhcDogM3JlbTtcXG59XFxuXFxuYm9keSA+IGRpdiA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhNWI4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250YWN0IGEge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDF2dztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhY3QgYSBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbmRpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5mb290ZXIsXFxuaGVhZGVyLFxcbm1haW4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDV2aCA3dnc7XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb290ZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9vdGVyID4gZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAydmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZsZXg6IDEgMSAwO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xcbn1cXG5cXG5mb290ZXIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuZm9vdGVyID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG5mb290ZXIgPiBkaXYgPiBwaWN0dXJlID4gaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXg6IDIgMCAzMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDMwdnc7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAzcmVtIDA7XFxuICBtYXgtd2lkdGg6IDEyNjBweDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAzcmVtIDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuaGVhZGVyID4gZGl2ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuaGVhZGVyID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBib3R0b206IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXgtd2lkdGg6IDUwdnc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgdGV4dC13cmFwOiBwcmV0dHk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXJlbSk7XFxufVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxucCB7XFxuICBtYXgtd2lkdGg6IDk5JTtcXG59XFxuXFxuLnByb2plY3RHcmlkIHtcXG4gIGNvbHVtbi1nYXA6IDN2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIHJvdy1nYXA6IDV2aDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLnByb2plY3QgPiAqOmZpcnN0LWNoaWxkIHtcXG4gIGFzcGVjdC1yYXRpbzogNSAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2ID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC43NXJlbTtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLnByb2plY3QgcCB7XFxuICBjb2xvcjogIzAwMDAwMDg4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zbGFudGVkQmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg5MWIyO1xcbiAgYm90dG9tOiA0dmg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03dncpIHNjYWxlKDEwKSByb3RhdGUoLTE1ZGVnKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHotaW5kZXg6IC0yO1xcbn1cXG5cXG5AbWVkaWEgKHdpZHRoID49IDEwMDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgfVxcblxcbiAgLnNsYW50ZWRCYWNrZ3JvdW5kIHtcXG4gICAgYm90dG9tOiAtNXZoO1xcbiAgfVxcblxcbiAgQG1lZGlhICh3aWR0aCA+PSAyMDAwcHgpIHtcXG4gICAgYm9keSA+IGRpdiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwMHB4IDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgICB9XFxuXFxuICAgIGJvZHkgPiBkaXYgPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgYm9keSA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIGJvZHkgPiBkaXYgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgZ3JpZC1jb2x1bW46IC0yIC8gLTE7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xcbiAgICAgIGdyaWQtcm93OiAtMiAvIC0xO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlcixcXG4gICAgaGVhZGVyLFxcbiAgICBtYWluIHtcXG4gICAgICBwYWRkaW5nOiA1dmggMTQwcHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIC0yO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgPiBkaXYgPiBpbWcge1xcbiAgICAgIG1pbi13aWR0aDogNjAwcHg7XFxuICAgIH1cXG5cXG4gICAgaGVhZGVyID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICB9XFxuXFxuICAgIG1haW4ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gLTI7XFxuICAgICAgZ3JpZC1yb3c6IDIgLyAtMjtcXG4gICAgfVxcblxcbiAgICAuc2xhbnRlZEJhY2tncm91bmQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKCgyMDAwcHgtMTAwdncpIC8gMikpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAoMTAwMHB4ID4gd2lkdGggPj0gNTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBnYXA6IDA7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICB9XFxuXFxuICBoZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gIH1cXG5cXG4gIGhlYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICBoZWFkZXIgaDEge1xcbiAgICB0b3A6IDAlO1xcbiAgICByaWdodDogLTEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSk7XFxuICB9XFxuXFxuICAucHJvamVjdCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgaGVpZ2h0OiAxOTBweDtcXG4gIH1cXG5cXG4gIC5zbGFudGVkQmFja2dyb3VuZCB7XFxuICAgIGJvdHRvbTogLTV2aDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tIFwiLi4vc3JjL21lZGlhL2ljb25zOC1naXRodWIuc3ZnXCI7XG5pbXBvcnQgT3BlbkxpbmtJY29uIGZyb20gXCIuLi9zcmMvbWVkaWEvaWNvbnM4LW9wZW4uc3ZnXCI7XG5pbXBvcnQgYmF0dGxlc2hpcEltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2JhdHRsZXNoaXAuanBlZ1wiO1xuaW1wb3J0IGJ1c2luZXNzUGFnZUltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2J1c2luZXNzX3BhZ2UuanBlZ1wiO1xuaW1wb3J0IGNhbGN1bGF0b3JJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9jYWxjdWxhdG9yLmpwZWdcIjtcbmltcG9ydCBkYXNoYm9hcmRJbWcgZnJvbSBcIi4uL3NyYy9tZWRpYS9TY3JlZW5zaG90cy9kYXNoYm9hcmQuanBlZ1wiO1xuaW1wb3J0IGV0Y2hBU2tldGNoSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvZXRjaC1hLXNrZXRjaC5qcGVnXCI7XG5pbXBvcnQgbGlicmFyeUltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL2xpYnJhcnkuanBlZ1wiO1xuaW1wb3J0IHJvY2tQYXBlclNjaXNzb3JzSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvcm9ja19wYXBlcl9zY2lzc29ycy5qcGVnXCI7XG5pbXBvcnQgc2lnbnVwSW1nIGZyb20gXCIuLi9zcmMvbWVkaWEvU2NyZWVuc2hvdHMvc2lnbnVwLmpwZWdcIjtcbmltcG9ydCB0aWNrVGFja1RvZUltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL3RpYy10YWMtdG9lLmpwZWdcIjtcbmltcG9ydCB0b0RvTGlzdEltZyBmcm9tIFwiLi4vc3JjL21lZGlhL1NjcmVlbnNob3RzL3RvLWRvLWxpc3QuanBlZ1wiO1xuXG5jb25zdCBidWlsZFByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAoXG4gICAgc2NyZWVuc2hvdFNyYyxcbiAgICBpbWFnZUFsdFRleHQsXG4gICAgcHJvamVjdE5hbWUsXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgIGdpdEh1YkxpbmssXG4gICAgbGl2ZVByZXZpZXdMaW5rXG4gICkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RPYmplY3QgPSB7fTtcbiAgICBwcm9qZWN0T2JqZWN0LnNjcmVlbnNob3QgPSBzY3JlZW5zaG90U3JjO1xuICAgIHByb2plY3RPYmplY3QubmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHByb2plY3RPYmplY3QuZGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgcHJvamVjdE9iamVjdC5hbHQgPSBpbWFnZUFsdFRleHQ7XG4gICAgcHJvamVjdE9iamVjdC5naXQgPSBnaXRIdWJMaW5rO1xuICAgIHByb2plY3RPYmplY3QucHJldmlldyA9IGxpdmVQcmV2aWV3TGluaztcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3RPYmplY3QpO1xuICB9O1xuXG4gIHJldHVybiBwcm9qZWN0TGlzdDtcbn07XG5cbmNvbnN0IGJ1aWxkUHJvamVjdERPTSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBidWlsZFByb2plY3RMaXN0KCk7XG4gIGNvbnN0IG1haW5Eb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkV4YW1wbGVzIG9mIE15IFdvcmtcIjtcblxuICBjb25zdCBwcm9qZWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RHcmlkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0R3JpZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdE9iamVjdCA9IHByb2plY3RMaXN0W2ldO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICBjb25zdCBzY3JlZW5zaG90ID0gbmV3IEltYWdlKCk7XG4gICAgc2NyZWVuc2hvdC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgcHJvamVjdE9iamVjdC5hbHQpO1xuICAgIHNjcmVlbnNob3Quc3JjID0gcHJvamVjdE9iamVjdC5zY3JlZW5zaG90O1xuICAgIGNvbnN0IHNjcmVlbnNob3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcmVlbnNob3REaXYuYXBwZW5kQ2hpbGQoc2NyZWVuc2hvdCk7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0T2JqZWN0Lm5hbWU7XG4gICAgY29uc3QgbGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGdpdExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBwcm9qZWN0T2JqZWN0LmdpdCk7XG4gICAgY29uc3QgZ2l0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0SW1nLnNyYyA9IEdpdGh1Ykljb247XG4gICAgZ2l0SW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInByb2plY3QgZ2l0IGh1YlwiKTtcbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEltZyk7XG4gICAgY29uc3QgcHJldmlld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBwcmV2aWV3TGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHByb2plY3RPYmplY3QucHJldmlldyk7XG4gICAgY29uc3QgcHJldmlld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHByZXZpZXdJbWcuc3JjID0gT3BlbkxpbmtJY29uO1xuICAgIHByZXZpZXdJbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibGl2ZSBwcmV2aWV3IG9mIHRoZSBwcm9qZWN0XCIpO1xuICAgIHByZXZpZXdMaW5rLmFwcGVuZENoaWxkKHByZXZpZXdJbWcpO1xuICAgIGxpbmtEaXYuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgbGlua0Rpdi5hcHBlbmRDaGlsZChwcmV2aWV3TGluayk7XG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChsaW5rRGl2KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uUC5pbm5lckhUTUwgPSBwcm9qZWN0T2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGRldGFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QKTtcblxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoc2NyZWVuc2hvdERpdik7XG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZXRhaWxEaXYpO1xuICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9XG5cbiAgbWFpbkRvbUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbkRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1haW5Eb21FbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RHcmlkKTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==