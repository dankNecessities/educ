/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/samo/workspace/ctr_projects/education_project/frontend/src/components/App.js: Unexpected token (3:12)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m\\u001b[33m,\\u001b[39m { \\u001b[33mComponent\\u001b[39m } from \\u001b[32m\\\"react\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m { render } from \\u001b[32m\\\"react-dom\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[33mTitle\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[90m//import Button from 'react-bootstrap/Button';\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[90m//import 'bootstrap/dist/css/bootstrap.min.css';\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:7017:17)\\n    at Object.unexpected (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:8395:16)\\n    at Object.expectContextual (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:8361:41)\\n    at Object.parseImport (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:12024:12)\\n    at Object.parseStatementContent (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:10788:27)\\n    at Object.parseStatement (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:10690:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:11264:25)\\n    at Object.parseBlockBody (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:11251:10)\\n    at Object.parseTopLevel (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:10621:10)\\n    at Object.parse (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:12222:10)\\n    at parse (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/parser/lib/index.js:12273:38)\\n    at parser (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/gensync/index.js:254:32)\\n    at gen.next (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/home/samo/workspace/ctr_projects/education_project/frontend/node_modules/gensync/index.js:216:11)\\n    at <anonymous>\");\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });