"use strict";
(self["webpackChunkdevelopment"] = self["webpackChunkdevelopment"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");


const root = document.getElementById("root");

const el = `
<div>Hello Webpack</div>
<button class='btn'>Click me and check the console!</button>
`;

root.innerHTML = el;

document.querySelector(".btn").addEventListener("click", _print_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log("I get called from print.js!");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5REFBeUQsaURBQU87Ozs7Ozs7Ozs7Ozs7OztBQ1hqRDtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpbnRNZSBmcm9tIFwiLi9wcmludC5qc1wiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG5jb25zdCBlbCA9IGBcbjxkaXY+SGVsbG8gV2VicGFjazwvZGl2PlxuPGJ1dHRvbiBjbGFzcz0nYnRuJz5DbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhPC9idXR0b24+XG5gO1xuXG5yb290LmlubmVySFRNTCA9IGVsO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJpbnRNZSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBjb25zb2xlLmxvZyhcIkkgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIVwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==