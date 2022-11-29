/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
var choiceButton1 = document.getElementById('choiceButton1');
var choiceButton2 = document.getElementById('choiceButton2');
var forgetPassword = document.getElementById('forget');
var confirmPassword = document.getElementById('confirm');
choiceButton1 === null || choiceButton1 === void 0 ? void 0 : choiceButton1.addEventListener('click', function () {
    if (choiceButton2 === null || choiceButton2 === void 0 ? void 0 : choiceButton2.classList.contains('active')) {
        choiceButton2.classList.remove('active');
        choiceButton1 === null || choiceButton1 === void 0 ? void 0 : choiceButton1.classList.add('active');
        //@ts-ignore
        forgetPassword === null || forgetPassword === void 0 ? void 0 : forgetPassword.style.display = 'none';
        //@ts-ignore
        confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.style.display = 'block';
    }
});
choiceButton2 === null || choiceButton2 === void 0 ? void 0 : choiceButton2.addEventListener('click', function () {
    if (choiceButton1 === null || choiceButton1 === void 0 ? void 0 : choiceButton1.classList.contains('active')) {
        choiceButton1.classList.remove('active');
        choiceButton2 === null || choiceButton2 === void 0 ? void 0 : choiceButton2.classList.add('active');
        //@ts-ignore
        forgetPassword === null || forgetPassword === void 0 ? void 0 : forgetPassword.style.display = 'block';
        //@ts-ignore
        confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.style.display = 'none';
    }
});


/******/ })()
;