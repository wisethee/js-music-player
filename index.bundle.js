"use strict";
(self["webpackChunkjs_music_player"] = self["webpackChunkjs_music_player"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Spartan:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Images created by: https://unsplash.com/@pawel_czerwinski */\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  background: #c9ced3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Spartan, sans-serif;\n  font-size: 12px;\n}\n\n.player-container {\n  height: 500px;\n  width: 400px;\n  background: #e7e7e7;\n  border-radius: 20px;\n  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.3);\n}\n\n.img-container {\n  width: 300px;\n  height: 300px;\n  position: relative;\n  top: -50px;\n  left: 50px;\n}\n\n.img-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);\n}\n\nh2 {\n  font-size: 25px;\n  text-align: center;\n  margin: 0;\n}\n\nh3 {\n  font-size: 20px;\n  text-align: center;\n  font-weight: 400;\n  margin: 5px 0 0;\n}\n\n/* Progress */\n.progress-container {\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 40px 20px;\n  height: 4px;\n  width: 90%;\n}\n\n.progress {\n  background: #242323;\n  border-radius: 5px;\n  height: 100%;\n  width: 0%;\n  transition: width 0.1s linear;\n}\n\n.duration-wrapper {\n  position: relative;\n  top: -25px;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Controls */\n.player-controls {\n  position: relative;\n  top: -15px;\n  left: 120px;\n  width: 200px;\n}\n\n.fas {\n  font-size: 30px;\n  color: rgb(129, 129, 129);\n  margin-right: 30px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.fas:hover {\n  filter: brightness(80%);\n}\n\n.main-button {\n  font-size: 40px;\n  position: relative;\n  top: 3px;\n}\n\n/* Media Query: iPhone (Vertical) */\n@media screen and (max-width: 376px) {\n  .player-container {\n    width: 95vw;\n  }\n  .img-container {\n    left: 29px;\n  }\n  h2 {\n    font-size: 20px;\n  }\n  h3 {\n    font-size: 15px;\n  }\n  .player-controls {\n    top: -10px;\n    left: 100px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,8DAAA;AAIA;EACE,sBAAA;AADF;;AAIA;EACE,SAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,eAAA;AADF;;AAIA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,8CAAA;AADF;;AAIA;EACE,YAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AADF;;AAIA;EACE,YAAA;EACA,WAAA;EACA,iBAAA;EACA,mBAAA;EACA,6CAAA;AADF;;AAIA;EACE,eAAA;EACA,kBAAA;EACA,SAAA;AADF;;AAIA;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AADF;;AAIA,aAAA;AACA;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,UAAA;AADF;;AAIA;EACE,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,6BAAA;AADF;;AAIA;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;AADF;;AAIA,aAAA;AACA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AADF;;AAIA;EACE,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AADF;;AAIA;EACE,uBAAA;AADF;;AAIA;EACE,eAAA;EACA,kBAAA;EACA,QAAA;AADF;;AAIA,mCAAA;AACA;EACE;IACE,WAAA;EADF;EAIA;IACE,UAAA;EAFF;EAKA;IACE,eAAA;EAHF;EAMA;IACE,eAAA;EAJF;EAOA;IACE,UAAA;IACA,WAAA;EALF;AACF","sourcesContent":["/* Images created by: https://unsplash.com/@pawel_czerwinski */\n\n@import url(\"https://fonts.googleapis.com/css?family=Spartan:400,700&display=swap\");\n\nhtml {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  background: #c9ced3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: Spartan, sans-serif;\n  font-size: 12px;\n}\n\n.player-container {\n  height: 500px;\n  width: 400px;\n  background: #e7e7e7;\n  border-radius: 20px;\n  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.3);\n}\n\n.img-container {\n  width: 300px;\n  height: 300px;\n  position: relative;\n  top: -50px;\n  left: 50px;\n}\n\n.img-container img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.5);\n}\n\nh2 {\n  font-size: 25px;\n  text-align: center;\n  margin: 0;\n}\n\nh3 {\n  font-size: 20px;\n  text-align: center;\n  font-weight: 400;\n  margin: 5px 0 0;\n}\n\n/* Progress */\n.progress-container {\n  background: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 40px 20px;\n  height: 4px;\n  width: 90%;\n}\n\n.progress {\n  background: #242323;\n  border-radius: 5px;\n  height: 100%;\n  width: 0%;\n  transition: width 0.1s linear;\n}\n\n.duration-wrapper {\n  position: relative;\n  top: -25px;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Controls */\n.player-controls {\n  position: relative;\n  top: -15px;\n  left: 120px;\n  width: 200px;\n}\n\n.fas {\n  font-size: 30px;\n  color: rgb(129, 129, 129);\n  margin-right: 30px;\n  cursor: pointer;\n  user-select: none;\n}\n\n.fas:hover {\n  filter: brightness(80%);\n}\n\n.main-button {\n  font-size: 40px;\n  position: relative;\n  top: 3px;\n}\n\n/* Media Query: iPhone (Vertical) */\n@media screen and (max-width: 376px) {\n  .player-container {\n    width: 95vw;\n  }\n\n  .img-container {\n    left: 29px;\n  }\n\n  h2 {\n    font-size: 20px;\n  }\n\n  h3 {\n    font-size: 15px;\n  }\n\n  .player-controls {\n    top: -10px;\n    left: 100px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
var image1 = __webpack_require__(/*! ../assets/img/jacinto-1.jpg */ "./src/assets/img/jacinto-1.jpg");
var image2 = __webpack_require__(/*! ../assets/img/jacinto-2.jpg */ "./src/assets/img/jacinto-2.jpg");
var image3 = __webpack_require__(/*! ../assets/img/jacinto-3.jpg */ "./src/assets/img/jacinto-3.jpg");
var image4 = __webpack_require__(/*! ../assets/img/metric-1.jpg */ "./src/assets/img/metric-1.jpg");
var song1 = __webpack_require__(/*! ../assets/music/jacinto-1.mp3 */ "./src/assets/music/jacinto-1.mp3");
var song2 = __webpack_require__(/*! ../assets/music/jacinto-2.mp3 */ "./src/assets/music/jacinto-2.mp3");
var song3 = __webpack_require__(/*! ../assets/music/jacinto-3.mp3 */ "./src/assets/music/jacinto-3.mp3");
var song4 = __webpack_require__(/*! ../assets/music/metric-1.mp3 */ "./src/assets/music/metric-1.mp3");
var SONGS = [
    {
        name: image1,
        song: song1,
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design'
    },
    {
        name: image2,
        song: song2,
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design'
    },
    {
        name: image3,
        song: song3,
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design'
    },
    {
        name: image4,
        song: song4,
        displayName: 'Front Row (Remix)',
        artist: 'Metric/Jacinto Design'
    }
];
var App = /** @class */ (function () {
    function App() {
        this.image = document.querySelector('img');
        this.title = document.getElementById('title');
        this.artist = document.getElementById('artist');
        this.music = document.querySelector('audio');
        this.prevBtn = document.getElementById('prev');
        this.playBtn = document.getElementById('play');
        this.nextBtn = document.getElementById('next');
        this.progressContainer = document.getElementById('progress-container');
        this.progress = document.getElementById('progress');
        this.currentTimeEl = document.getElementById('current-time');
        this.durationEl = document.getElementById('duration');
        // Check if playing
        this.isPlaying = false;
        this.songIndex = 0;
        this.playOrPause();
        this.loadSong(SONGS[this.songIndex]);
        this.prev();
        this.next();
        this.progressChange();
        this.changeCurrentTime();
        this.playNextSong();
    }
    //Play
    App.prototype.playSong = function () {
        this.isPlaying = true;
        this.playBtn.classList.replace('fa-play', 'fa-pause');
        this.playBtn.setAttribute('title', 'Pause');
        this.music.play();
    };
    // Pause
    App.prototype.pauseSong = function () {
        this.isPlaying = false;
        this.playBtn.classList.replace('fa-pause', 'fa-play');
        this.playBtn.setAttribute('title', 'Play');
        this.music.pause();
    };
    // Play or pause event
    App.prototype.playOrPause = function () {
        var _this = this;
        this.playBtn.addEventListener('click', function () {
            _this.isPlaying ? _this.pauseSong() : _this.playSong();
        });
    };
    // Update the DOM
    App.prototype.loadSong = function (song) {
        this.title.textContent = song.displayName;
        this.artist.textContent = song.artist;
        this.music.src = song.song;
        this.image.src = song.name;
    };
    // Prev song
    App.prototype.prev = function () {
        this.prevBtn.addEventListener('click', this.prevSong.bind(this));
    };
    // Next song
    App.prototype.next = function () {
        this.nextBtn.addEventListener('click', this.nextSong.bind(this));
    };
    App.prototype.prevSong = function () {
        this.songIndex <= 0
            ? (this.songIndex = SONGS.length - 1)
            : this.songIndex--;
        this.loadSong(SONGS[this.songIndex]);
        this.playSong();
    };
    App.prototype.nextSong = function () {
        this.songIndex >= SONGS.length - 1
            ? (this.songIndex = 0)
            : this.songIndex++;
        this.loadSong(SONGS[this.songIndex]);
        this.playSong();
    };
    App.prototype.progressChange = function () {
        this.music.addEventListener('timeupdate', this.updateProgressbar.bind(this));
    };
    App.prototype.updateProgressbar = function (e) {
        if (this.isPlaying) {
            var _a = e.srcElement, duration = _a.duration, currentTime = _a.currentTime;
            var progressPercent = (currentTime / duration) * 100;
            this.progress.style.width = "".concat(progressPercent, "%");
            // Duration
            var durationMinutes = Math.floor(duration / 60);
            var durationSeconds = Math.floor(duration % 60);
            if (durationSeconds < 10) {
                durationSeconds = "0".concat(durationSeconds);
            }
            if (durationSeconds) {
                this.durationEl.textContent = "".concat(durationMinutes, ":").concat(durationSeconds);
            }
            // Current
            var currentMinutes = Math.floor(currentTime / 60);
            var currentSeconds = Math.floor(currentTime % 60);
            if (currentSeconds < 10) {
                currentSeconds = "0".concat(currentSeconds);
            }
            if (currentSeconds) {
                this.currentTimeEl.textContent = "".concat(currentMinutes, ":").concat(currentSeconds);
            }
        }
    };
    App.prototype.changeCurrentTime = function () {
        this.progressContainer.addEventListener('click', this.setProgressbar.bind(this));
    };
    App.prototype.setProgressbar = function (e) {
        var width = e.srcElement.clientWidth;
        var clickX = e.offsetX;
        var duration = this.music.duration;
        this.music.currentTime = (clickX / width) * duration;
    };
    App.prototype.playNextSong = function () {
        this.music.addEventListener('ended', this.nextSong.bind(this));
    };
    return App;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");


var app = new _app_app__WEBPACK_IMPORTED_MODULE_1__.App();


/***/ }),

/***/ "./src/assets/img/jacinto-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/jacinto-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cde6ea59eea34fcb047.jpg";

/***/ }),

/***/ "./src/assets/img/jacinto-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/jacinto-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c9aa71a929b5f7b56ce.jpg";

/***/ }),

/***/ "./src/assets/img/jacinto-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/jacinto-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b53e0450bb93dfdd68c.jpg";

/***/ }),

/***/ "./src/assets/img/metric-1.jpg":
/*!*************************************!*\
  !*** ./src/assets/img/metric-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e1489941989281ecb03.jpg";

/***/ }),

/***/ "./src/assets/music/jacinto-1.mp3":
/*!****************************************!*\
  !*** ./src/assets/music/jacinto-1.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e498a31ccbac6b45c31a.mp3";

/***/ }),

/***/ "./src/assets/music/jacinto-2.mp3":
/*!****************************************!*\
  !*** ./src/assets/music/jacinto-2.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbd7104ac5f73e037cb8.mp3";

/***/ }),

/***/ "./src/assets/music/jacinto-3.mp3":
/*!****************************************!*\
  !*** ./src/assets/music/jacinto-3.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6118693e25978a971cab.mp3";

/***/ }),

/***/ "./src/assets/music/metric-1.mp3":
/*!***************************************!*\
  !*** ./src/assets/music/metric-1.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edb80de463441f483a7c.mp3";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFFRCw0QkFBYyxHQUFkLFVBQWUsQ0FBTztRQUNwQixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2pCLFlBQVEsR0FBSyxJQUFJLENBQUMsS0FBSyxTQUFmLENBQWdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMEJBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwTDJCO0FBRUk7QUFFaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSx5Q0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLW11c2ljLXBsYXllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLW11c2ljLXBsYXllci8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vanMtbXVzaWMtcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLW11c2ljLXBsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtbXVzaWMtcGxheWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLW11c2ljLXBsYXllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9qcy1tdXNpYy1wbGF5ZXIvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3BhcnRhbjo0MDAsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEltYWdlcyBjcmVhdGVkIGJ5OiBodHRwczovL3Vuc3BsYXNoLmNvbS9AcGF3ZWxfY3plcndpbnNraSAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6ICNjOWNlZDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFNwYXJ0YW4sIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5wbGF5ZXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01MHB4O1xcbiAgbGVmdDogNTBweDtcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCA1cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDVweCAwIDA7XFxufVxcblxcbi8qIFByb2dyZXNzICovXFxuLnByb2dyZXNzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiA0MHB4IDIwcHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICBiYWNrZ3JvdW5kOiAjMjQyMzIzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XFxufVxcblxcbi5kdXJhdGlvbi13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBDb250cm9scyAqL1xcbi5wbGF5ZXItY29udHJvbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDEyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmFzIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiByZ2IoMTI5LCAxMjksIDEyOSk7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmZhczpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuXFxuLm1haW4tYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4O1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyeTogaVBob25lIChWZXJ0aWNhbCkgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCkge1xcbiAgLnBsYXllci1jb250YWluZXIge1xcbiAgICB3aWR0aDogOTV2dztcXG4gIH1cXG4gIC5pbWctY29udGFpbmVyIHtcXG4gICAgbGVmdDogMjlweDtcXG4gIH1cXG4gIGgyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxuICAucGxheWVyLWNvbnRyb2xzIHtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgbGVmdDogMTAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhEQUFBO0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBLGFBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBLGFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFJQSxtQ0FBQTtBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7RUFGRjtFQUtBO0lBQ0UsZUFBQTtFQUhGO0VBTUE7SUFDRSxlQUFBO0VBSkY7RUFPQTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VBTEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBJbWFnZXMgY3JlYXRlZCBieTogaHR0cHM6Ly91bnNwbGFzaC5jb20vQHBhd2VsX2N6ZXJ3aW5za2kgKi9cXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNwYXJ0YW46NDAwLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiAjYzljZWQzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBTcGFydGFuLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtNTBweDtcXG4gIGxlZnQ6IDUwcHg7XFxufVxcblxcbi5pbWctY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG5cXG4vKiBQcm9ncmVzcyAqL1xcbi5wcm9ncmVzcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogNDBweCAyMHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZDogIzI0MjMyMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMXMgbGluZWFyO1xcbn1cXG5cXG4uZHVyYXRpb24td3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0yNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogQ29udHJvbHMgKi9cXG4ucGxheWVyLWNvbnRyb2xzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE1cHg7XFxuICBsZWZ0OiAxMjBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZhcyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogcmdiKDEyOSwgMTI5LCAxMjkpO1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5mYXM6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbi5tYWluLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDNweDtcXG59XFxuXFxuLyogTWVkaWEgUXVlcnk6IGlQaG9uZSAoVmVydGljYWwpICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc2cHgpIHtcXG4gIC5wbGF5ZXItY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICB9XFxuXFxuICAuaW1nLWNvbnRhaW5lciB7XFxuICAgIGxlZnQ6IDI5cHg7XFxuICB9XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcblxcbiAgLnBsYXllci1jb250cm9scyB7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgaW1hZ2UxID0gcmVxdWlyZSgnLi4vYXNzZXRzL2ltZy9qYWNpbnRvLTEuanBnJyk7XG5jb25zdCBpbWFnZTIgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1nL2phY2ludG8tMi5qcGcnKTtcbmNvbnN0IGltYWdlMyA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9pbWcvamFjaW50by0zLmpwZycpO1xuY29uc3QgaW1hZ2U0ID0gcmVxdWlyZSgnLi4vYXNzZXRzL2ltZy9tZXRyaWMtMS5qcGcnKTtcblxuY29uc3Qgc29uZzEgPSByZXF1aXJlKCcuLi9hc3NldHMvbXVzaWMvamFjaW50by0xLm1wMycpO1xuY29uc3Qgc29uZzIgPSByZXF1aXJlKCcuLi9hc3NldHMvbXVzaWMvamFjaW50by0yLm1wMycpO1xuY29uc3Qgc29uZzMgPSByZXF1aXJlKCcuLi9hc3NldHMvbXVzaWMvamFjaW50by0zLm1wMycpO1xuY29uc3Qgc29uZzQgPSByZXF1aXJlKCcuLi9hc3NldHMvbXVzaWMvbWV0cmljLTEubXAzJyk7XG5cbmludGVyZmFjZSBTb25nIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzb25nOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGFydGlzdDogc3RyaW5nO1xufVxuXG5jb25zdCBTT05HUzogU29uZ1tdID0gW1xuICB7XG4gICAgbmFtZTogaW1hZ2UxLFxuICAgIHNvbmc6IHNvbmcxLFxuICAgIGRpc3BsYXlOYW1lOiAnRWxlY3RyaWMgQ2hpbGwgTWFjaGluZScsXG4gICAgYXJ0aXN0OiAnSmFjaW50byBEZXNpZ24nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBpbWFnZTIsXG4gICAgc29uZzogc29uZzIsXG4gICAgZGlzcGxheU5hbWU6ICdTZXZlbiBOYXRpb24gQXJteSAoUmVtaXgpJyxcbiAgICBhcnRpc3Q6ICdKYWNpbnRvIERlc2lnbidcbiAgfSxcbiAge1xuICAgIG5hbWU6IGltYWdlMyxcbiAgICBzb25nOiBzb25nMyxcbiAgICBkaXNwbGF5TmFtZTogJ0dvb2RuaWdodCwgRGlzY28gUXVlZW4nLFxuICAgIGFydGlzdDogJ0phY2ludG8gRGVzaWduJ1xuICB9LFxuICB7XG4gICAgbmFtZTogaW1hZ2U0LFxuICAgIHNvbmc6IHNvbmc0LFxuICAgIGRpc3BsYXlOYW1lOiAnRnJvbnQgUm93IChSZW1peCknLFxuICAgIGFydGlzdDogJ01ldHJpYy9KYWNpbnRvIERlc2lnbidcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheU9yUGF1c2UoKTtcbiAgICB0aGlzLmxvYWRTb25nKFNPTkdTW3RoaXMuc29uZ0luZGV4XSk7XG4gICAgdGhpcy5wcmV2KCk7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdGhpcy5wcm9ncmVzc0NoYW5nZSgpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudFRpbWUoKTtcbiAgICB0aGlzLnBsYXlOZXh0U29uZygpO1xuICB9XG5cbiAgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcbiAgYXJ0aXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGlzdCcpO1xuXG4gIG11c2ljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKSBhcyBIVE1MQXVkaW9FbGVtZW50O1xuICBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcGxheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzLWNvbnRhaW5lcicpO1xuICBwcm9ncmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpO1xuICBjdXJyZW50VGltZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGltZScpO1xuICBkdXJhdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cmF0aW9uJyk7XG5cbiAgLy8gQ2hlY2sgaWYgcGxheWluZ1xuICBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICBzb25nSW5kZXggPSAwO1xuXG4gIC8vUGxheVxuICBwbGF5U29uZygpIHtcbiAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XG4gICAgdGhpcy5wbGF5QnRuLmNsYXNzTGlzdC5yZXBsYWNlKCdmYS1wbGF5JywgJ2ZhLXBhdXNlJyk7XG4gICAgdGhpcy5wbGF5QnRuLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnUGF1c2UnKTtcbiAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgfVxuICAvLyBQYXVzZVxuICBwYXVzZVNvbmcoKSB7XG4gICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXlCdG4uY2xhc3NMaXN0LnJlcGxhY2UoJ2ZhLXBhdXNlJywgJ2ZhLXBsYXknKTtcbiAgICB0aGlzLnBsYXlCdG4uc2V0QXR0cmlidXRlKCd0aXRsZScsICdQbGF5Jyk7XG4gICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICB9XG5cbiAgLy8gUGxheSBvciBwYXVzZSBldmVudFxuICBwbGF5T3JQYXVzZSgpIHtcbiAgICB0aGlzLnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzUGxheWluZyA/IHRoaXMucGF1c2VTb25nKCkgOiB0aGlzLnBsYXlTb25nKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIERPTVxuICBsb2FkU29uZyhzb25nOiBTb25nKSB7XG4gICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9IHNvbmcuZGlzcGxheU5hbWU7XG4gICAgdGhpcy5hcnRpc3QudGV4dENvbnRlbnQgPSBzb25nLmFydGlzdDtcbiAgICB0aGlzLm11c2ljLnNyYyA9IHNvbmcuc29uZztcbiAgICB0aGlzLmltYWdlLnNyYyA9IHNvbmcubmFtZTtcbiAgfVxuXG4gIC8vIFByZXYgc29uZ1xuICBwcmV2KCkge1xuICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldlNvbmcuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvLyBOZXh0IHNvbmdcbiAgbmV4dCgpIHtcbiAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRTb25nLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJldlNvbmcoKSB7XG4gICAgdGhpcy5zb25nSW5kZXggPD0gMFxuICAgICAgPyAodGhpcy5zb25nSW5kZXggPSBTT05HUy5sZW5ndGggLSAxKVxuICAgICAgOiB0aGlzLnNvbmdJbmRleC0tO1xuICAgIHRoaXMubG9hZFNvbmcoU09OR1NbdGhpcy5zb25nSW5kZXhdKTtcbiAgICB0aGlzLnBsYXlTb25nKCk7XG4gIH1cblxuICBuZXh0U29uZygpIHtcbiAgICB0aGlzLnNvbmdJbmRleCA+PSBTT05HUy5sZW5ndGggLSAxXG4gICAgICA/ICh0aGlzLnNvbmdJbmRleCA9IDApXG4gICAgICA6IHRoaXMuc29uZ0luZGV4Kys7XG4gICAgdGhpcy5sb2FkU29uZyhTT05HU1t0aGlzLnNvbmdJbmRleF0pO1xuICAgIHRoaXMucGxheVNvbmcoKTtcbiAgfVxuXG4gIHByb2dyZXNzQ2hhbmdlKCkge1xuICAgIHRoaXMubXVzaWMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICd0aW1ldXBkYXRlJyxcbiAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NiYXIuYmluZCh0aGlzKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVQcm9ncmVzc2JhcihlPzogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICBjb25zdCB7IGR1cmF0aW9uLCBjdXJyZW50VGltZSB9ID0gZS5zcmNFbGVtZW50O1xuICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gKGN1cnJlbnRUaW1lIC8gZHVyYXRpb24pICogMTAwO1xuICAgICAgdGhpcy5wcm9ncmVzcy5zdHlsZS53aWR0aCA9IGAke3Byb2dyZXNzUGVyY2VudH0lYDtcbiAgICAgIC8vIER1cmF0aW9uXG4gICAgICBsZXQgZHVyYXRpb25NaW51dGVzID0gTWF0aC5mbG9vcihkdXJhdGlvbiAvIDYwKTtcbiAgICAgIGxldCBkdXJhdGlvblNlY29uZHM6IGFueSA9IE1hdGguZmxvb3IoZHVyYXRpb24gJSA2MCk7XG4gICAgICBpZiAoZHVyYXRpb25TZWNvbmRzIDwgMTApIHtcbiAgICAgICAgZHVyYXRpb25TZWNvbmRzID0gYDAke2R1cmF0aW9uU2Vjb25kc31gO1xuICAgICAgfVxuICAgICAgaWYgKGR1cmF0aW9uU2Vjb25kcykge1xuICAgICAgICB0aGlzLmR1cmF0aW9uRWwudGV4dENvbnRlbnQgPSBgJHtkdXJhdGlvbk1pbnV0ZXN9OiR7ZHVyYXRpb25TZWNvbmRzfWA7XG4gICAgICB9XG4gICAgICAvLyBDdXJyZW50XG4gICAgICBsZXQgY3VycmVudE1pbnV0ZXMgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lIC8gNjApO1xuICAgICAgbGV0IGN1cnJlbnRTZWNvbmRzOiBhbnkgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lICUgNjApO1xuICAgICAgaWYgKGN1cnJlbnRTZWNvbmRzIDwgMTApIHtcbiAgICAgICAgY3VycmVudFNlY29uZHMgPSBgMCR7Y3VycmVudFNlY29uZHN9YDtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U2Vjb25kcykge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lRWwudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TWludXRlc306JHtjdXJyZW50U2Vjb25kc31gO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUN1cnJlbnRUaW1lKCkge1xuICAgIHRoaXMucHJvZ3Jlc3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICB0aGlzLnNldFByb2dyZXNzYmFyLmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgc2V0UHJvZ3Jlc3NiYXIoZT86IGFueSkge1xuICAgIGNvbnN0IHdpZHRoID0gZS5zcmNFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGNsaWNrWCA9IGUub2Zmc2V0WDtcbiAgICBjb25zdCB7IGR1cmF0aW9uIH0gPSB0aGlzLm11c2ljO1xuICAgIHRoaXMubXVzaWMuY3VycmVudFRpbWUgPSAoY2xpY2tYIC8gd2lkdGgpICogZHVyYXRpb247XG4gIH1cblxuICBwbGF5TmV4dFNvbmcoKSB7XG4gICAgdGhpcy5tdXNpYy5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMubmV4dFNvbmcuYmluZCh0aGlzKSk7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAvYXBwJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9