(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/app/App.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/app/App.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/common/NotFound.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/common/NotFound.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-not-found {\n    max-width: 500px;\n    margin: 0 auto;\n    margin-top: 50px;\n    padding: 40px;\n    border: 1px solid #c8c8c8; \n    text-align: center;   \n}\n\n.page-not-found .title {\n    font-size: 50px;\n    letter-spacing: 10px;\n    margin-bottom: 10px;\n}\n\n.page-not-found .desc {\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\n.go-back-btn {\n    min-width: 160px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main-page/MainPage.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/main-page/MainPage.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page-container {\n    text-align: center;\n    min-height: calc(100vh - 60px);\n    overflow: auto;\n    position: relative;\n    padding-top: 60px;\n}\n\n.main-page-title {\n    font-size: 25px;\n    font-weight: 400;\n    color: rgba(0,0,0,0.70);\n    margin-top: 50px; \n}\n\n.graf-bg-container {\n    width: 100%;\n    height: 310px;\n    overflow: hidden;\n    -webkit-perspective: 2000px;\n            perspective: 2000px;\n    opacity: .7\n}\n\n.graf-layout {\n    height: 100%;\n    margin: auto;\n    position: relative;\n    -webkit-perspective: 2000px;\n            perspective: 2000px;\n}\n\n.graf-circle:first-child {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateY(1000deg) rotateX(1000deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateY(1000deg) rotateX(1000deg) rotate(0deg);\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border: 5px solid #2098f3;\n    -webkit-animation: scaleOne 5.5s infinite alternate linear;\n            animation: scaleOne 5.5s infinite alternate linear;\n    opacity: 0\n}\n\n@-webkit-keyframes scaleOne {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(180deg) rotateX(90deg) rotate(1000deg);\n                transform: translate(-50%,-50%) rotateY(180deg) rotateX(90deg) rotate(1000deg);\n        opacity: 0\n    }\n}\n\n@keyframes scaleOne {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(180deg) rotateX(90deg) rotate(1000deg);\n                transform: translate(-50%,-50%) rotateY(180deg) rotateX(90deg) rotate(1000deg);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(2) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #ffa20a;\n    border-left: none;\n    border-top: none;\n    -webkit-animation: scaleTwo 5s infinite alternate linear;\n            animation: scaleTwo 5s infinite alternate linear\n}\n\n@-webkit-keyframes scaleTwo {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleTwo {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(135deg) rotateY(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(3) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #ec412c;\n    border-bottom: none;\n    border-left: none;\n    -webkit-animation: scaleThree 4.5s infinite alternate linear;\n            animation: scaleThree 4.5s infinite alternate linear\n}\n\n@-webkit-keyframes scaleThree {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleThree {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(45deg) rotateY(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(4) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(45deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #fcbd00;\n    border-top: none;\n    border-right: none;\n    -webkit-animation: scaleFour 4s infinite alternate linear;\n            animation: scaleFour 4s infinite alternate linear\n}\n\n@-webkit-keyframes scaleFour {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleFour {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(5) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(135deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #2da94f;\n    border-bottom: none;\n    border-left: none;\n    -webkit-animation: scaleFive 3.5s infinite alternate linear;\n            animation: scaleFive 3.5s infinite alternate linear\n}\n\n@-webkit-keyframes scaleFive {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleFive {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(6) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(100deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(100deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 15px solid #f57700;\n    border-bottom: none;\n    border-right: none;\n    -webkit-animation: scaleSix 3s infinite alternate linear;\n            animation: scaleSix 3s infinite alternate linear\n}\n\n@-webkit-keyframes scaleSix {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(100deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(100deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleSix {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(100deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(100deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(7) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateY(-105deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateY(-105deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 10px solid #2098f3;\n    border-bottom: none;\n    border-left: none;\n    -webkit-animation: scaleSeven 2.5s infinite alternate linear;\n            animation: scaleSeven 2.5s infinite alternate linear\n}\n\n@-webkit-keyframes scaleSeven {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(-105deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(-105deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleSeven {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(-105deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(-105deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(8) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #30bbb0;\n    border-bottom: none;\n    border-left: none;\n    -webkit-animation: scaleEight 2s infinite alternate linear;\n            animation: scaleEight 2s infinite alternate linear\n}\n\n@-webkit-keyframes scaleEight {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleEight {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(45deg) rotateX(45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(9) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #ff453c;\n    border-bottom: none;\n    border-right: none;\n    -webkit-animation: scaleNine 1.5s infinite alternate linear;\n            animation: scaleNine 1.5s infinite alternate linear\n}\n\n@-webkit-keyframes scaleNine {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleNine {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(135deg) rotateX(135deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(10) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #2098f3;\n    border-bottom: none;\n    border-right: none;\n    -webkit-animation: scaleTen 3s infinite alternate linear;\n            animation: scaleTen 3s infinite alternate linear\n}\n\n@-webkit-keyframes scaleTen {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleTen {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateY(113deg) rotateX(115deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n.graf-circle:nth-child(11) {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(0deg);\n            transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(0deg);\n    width: 310px;\n    height: 310px;\n    border-radius: 50%;\n    border: 5px solid #2098f3;\n    border-bottom: none;\n    border-right: none;\n    -webkit-animation: scaleEleven 2s infinite alternate linear;\n            animation: scaleEleven 2s infinite alternate linear\n}\n\n@-webkit-keyframes scaleEleven {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(1turn);\n        opacity: 0\n    }\n}\n\n@keyframes scaleEleven {\n    to {\n        border-radius: 50%;\n        -webkit-transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(1turn);\n                transform: translate(-50%,-50%) rotateX(-45deg) rotateY(-45deg) rotate(1turn);\n        opacity: 0\n    }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/login/Login.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/user/login/Login.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n    text-align: center;\n}\n\n@media screen and (min-width: 720px) {\n    .login-content {\n        width: 500px;\n    }\n}\n\n.login-content {\n    background: #fff;\n    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n    border-radius: 2px;\n    display: inline-block;\n    margin-top: 30px;\n    vertical-align: middle;\n    position: relative;    \n    padding: 35px;\n}\n\n.signup-link {\n    color: rgba(0, 0, 0, 0.65);\n    font-size: 14px;\n}\n\n.login-title {\n    font-size: 1.5em;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 30px;\n    color: rgba(0, 0, 0, 0.65);\n}\n\n.social-btn {\n    margin-bottom: 15px;\n    font-weight: 400;\n    font-size: 16px;\n}\n\n.social-btn {\n    font-weight: 400;\n    font-size: 16px;\n}\n\n.social-btn img {\n    height: 36px;\n    float: center;\n}\n\n.social-btn.google {\n    margin-top: 7px;\n    margin-bottom: 0px;\n}\n\n.social-btn.facebook img {\n    margin-top: -15px;\n    height: 34px;\n    margin-left: 3px;\n    margin-bottom: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/signup/Signup.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/user/signup/Signup.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-container {\n    text-align: center;\n}\n\n\n@media screen and (min-width: 720px) {\n    .signup-content {\n        width: 500px;\n    }\n}\n\n.signup-content {\n    background: #fff;\n    box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);\n    border-radius: 2px;\n    display: inline-block;\n    margin-top: 30px;\n    vertical-align: middle;\n    position: relative;    \n    padding: 35px;\n}\n\n.signup-content\n\n.social-btn {\n    font-weight: 400;\n    font-size: 16px;\n}\n\n.social-btn img {\n    height: 36px;\n    float: center;\n}\n\n.social-btn.google {\n    margin-top: 7px;\n    margin-bottom: 0px;\n}\n\n.social-btn.facebook img {\n    margin-top: -15px;\n    height: 34px;\n    margin-left: 3px;\n    margin-bottom: 15px;\n}\n\n.login-link {\n    color: rgba(0, 0, 0, 0.65);\n    font-size: 14px;\n}\n\n.signup-title {\n    font-size: 1.5em;\n    font-weight: 500;\n    margin-top: 0;\n    margin-bottom: 30px;\n    color: rgba(0, 0, 0, 0.65);\n}\n\ninput {\n    border-radius: 5px;\n    border-style: outset;\n    padding: 10px;\n}\n\n.form-item {\n    padding-bottom: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "./src/app/App.css":
/*!*************************!*\
  !*** ./src/app/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/app/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/app/App.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/app/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-s-alert/dist/s-alert-default.css */ "./node_modules/react-s-alert/dist/s-alert-default.css");
/* harmony import */ var react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-s-alert/dist/s-alert-css-effects/slide.css */ "./node_modules/react-s-alert/dist/s-alert-css-effects/slide.css");
/* harmony import */ var react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_s_alert_dist_s_alert_css_effects_slide_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./App.css */ "./src/app/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_NotFound__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/NotFound */ "./src/common/NotFound.js");
/* harmony import */ var _common_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/LoadingIndicator */ "./src/common/LoadingIndicator.js");
/* harmony import */ var _common_NavigationBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/NavigationBar */ "./src/common/NavigationBar.js");
/* harmony import */ var _main_page_MainPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../main-page/MainPage */ "./src/main-page/MainPage.js");
/* harmony import */ var _user_login_Login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user/login/Login */ "./src/user/login/Login.js");
/* harmony import */ var _user_signup_Signup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user/signup/Signup */ "./src/user/signup/Signup.js");
/* harmony import */ var _user_oauth2_OAuth2RedirectHandler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../user/oauth2/OAuth2RedirectHandler */ "./src/user/oauth2/OAuth2RedirectHandler.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_APIUtils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/APIUtils */ "./src/utils/APIUtils.js");






var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/app/App.js";
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      authenticated: false,
      user: null,
      loading: false
    };
    _this.loadCurrentlyLoggedInUser = _this.loadCurrentlyLoggedInUser.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleLogout = _this.handleLogout.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "loadCurrentlyLoggedInUser",
    value: function loadCurrentlyLoggedInUser() {
      var _this2 = this;

      this.setState({
        loading: true
      });
      Object(_utils_APIUtils__WEBPACK_IMPORTED_MODULE_20__["getCurrentUser"])().then(function (response) {
        _this2.setState({
          authenticated: true,
          user: response,
          loading: false
        });
      }).catch(function (error) {
        _this2.setState({
          loading: false
        });
      });
      return this.state.authenticated;
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_19__["ACCESS_TOKEN"]);
      this.setState({
        authenticated: false,
        user: null
      });
      react_s_alert__WEBPACK_IMPORTED_MODULE_8___default.a.success("Zostałeś wylogowany!");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCurrentlyLoggedInUser();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var childProps = {
        loadUser: this.loadCurrentlyLoggedInUser
      };

      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_LoadingIndicator__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "app-top-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_NavigationBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        authenticated: this.state.authenticated,
        user: this.state.user,
        onLogout: this.handleLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "app-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        exact: true,
        path: "/",
        component: _main_page_MainPage__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/login",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_user_login_Login__WEBPACK_IMPORTED_MODULE_16__["default"], Object.assign({
            authenticated: _this3.state.authenticated
          }, props, childProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/signup",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_user_signup_Signup__WEBPACK_IMPORTED_MODULE_17__["default"], Object.assign({
            authenticated: _this3.state.authenticated
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        path: "/oauth2/redirect",
        component: _user_oauth2_OAuth2RedirectHandler__WEBPACK_IMPORTED_MODULE_18__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), "}", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
        component: _common_NotFound__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_s_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
        stack: {
          limit: 3
        },
        timeout: 3000,
        position: "top-right",
        effect: "slide",
        offset: 65,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/images/fb-logo.png":
/*!***************************************!*\
  !*** ./src/assets/images/fb-logo.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/google-logo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/google-logo.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/common/LoadingIndicator.js":
/*!****************************************!*\
  !*** ./src/common/LoadingIndicator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingIndicator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/common/LoadingIndicator.js";

function LoadingIndicator(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-indicator",
    style: {
      display: 'block',
      textAlign: 'center',
      marginTop: '30px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "\u0141adowanie...");
}

/***/ }),

/***/ "./src/common/NavigationBar.js":
/*!*************************************!*\
  !*** ./src/common/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/common/NavigationBar.js";




var NavigationBar =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NavigationBar, _Component);

  function NavigationBar() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationBar);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        bg: "light",
        expand: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Brand, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "AdvertBoard"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Toggle, {
        "aria-controls": "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Collapse, {
        className: "justify-content-start",
        id: "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.authenticated ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Text, {
        className: "justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Zalogowany jako ", this.props.user.name)) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Collapse, {
        className: "justify-content-end",
        id: "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.authenticated ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
        href: "/profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "M\xF3j profil"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
        title: "logout",
        onClick: this.props.onLogout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Wyloguj si\u0119")) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Logowanie"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Rejestracja"))));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/common/NotFound.css":
/*!*********************************!*\
  !*** ./src/common/NotFound.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/common/NotFound.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/common/NotFound.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./NotFound.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/common/NotFound.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/common/NotFound.js":
/*!********************************!*\
  !*** ./src/common/NotFound.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotFound.css */ "./src/common/NotFound.css");
/* harmony import */ var _NotFound_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NotFound_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/common/NotFound.js";




var NotFound =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotFound, _Component);

  function NotFound() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotFound);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotFound).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotFound, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page-not-found",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "B\u0142\u0105d 404"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Strona o podanym adresie nie istnieje!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "go-back-btn btn btn-primary",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Wr\xF3\u0107")));
    }
  }]);

  return NotFound;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: API_BASE_URL, API_TRUE_URL, ACCESS_TOKEN, OAUTH2_REDIRECT_URI, GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_TRUE_URL", function() { return API_TRUE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH2_REDIRECT_URI", function() { return OAUTH2_REDIRECT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_AUTH_URL", function() { return GOOGLE_AUTH_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEBOOK_AUTH_URL", function() { return FACEBOOK_AUTH_URL; });
var API_BASE_URL = '/api';
var API_TRUE_URL = 'http://localhost:8080';
var ACCESS_TOKEN = 'accessToken';
var OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
var GOOGLE_AUTH_URL = API_TRUE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
var FACEBOOK_AUTH_URL = API_TRUE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/App */ "./src/app/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["register"]();

/***/ }),

/***/ "./src/main-page/MainPage.css":
/*!************************************!*\
  !*** ./src/main-page/MainPage.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MainPage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main-page/MainPage.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MainPage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main-page/MainPage.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./MainPage.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/main-page/MainPage.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/main-page/MainPage.js":
/*!***********************************!*\
  !*** ./src/main-page/MainPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _MainPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainPage.css */ "./src/main-page/MainPage.css");
/* harmony import */ var _MainPage_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MainPage_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/main-page/MainPage.js";



var MainPage =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPage, _Component);

  function MainPage() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPage);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPage).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "main-page-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-bg-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-layout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "graf-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "main-page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Test")));
    }
  }]);

  return MainPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MainPage);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/user/login/Login.css":
/*!**********************************!*\
  !*** ./src/user/login/Login.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/login/Login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/login/Login.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/login/Login.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/user/login/Login.js":
/*!*********************************!*\
  !*** ./src/user/login/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Login.css */ "./src/user/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/fb-logo.png */ "./src/assets/images/fb-logo.png");
/* harmony import */ var _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/google-logo.png */ "./src/assets/images/google-logo.png");
/* harmony import */ var _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_APIUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/APIUtils */ "./src/utils/APIUtils.js");








var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/user/login/Login.js";









var LoginForm =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginForm, _Component);

  function LoginForm(props) {
    var _this;

    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LoginForm);

    _this = Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginForm).call(this, props));
    _this.state = {
      userInfo: {
        email: '',
        password: ''
      }
    };
    _this.handleInputChange = _this.handleInputChange.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)));
    return _this;
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var inputName = target.name;
      var inputValue = target.value;
      this.setState({
        userInfo: Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.state.userInfo, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputName, inputValue))
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.state.userInfo.email.length > 0 && this.state.userInfo.password.length > 0) {
        var loginRequest = Object.assign({}, this.state.userInfo);
        Object(_utils_APIUtils__WEBPACK_IMPORTED_MODULE_15__["login"])(loginRequest).then(function (response) {
          localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_14__["ACCESS_TOKEN"], response.accessToken);
          react_s_alert__WEBPACK_IMPORTED_MODULE_10___default.a.success("Zostałeś zalogowany!");

          _this2.props.loadUser();

          _this2.props.history.push({
            pathname: "/",
            state: {
              authenticated: true,
              from: _this2.props.location
            }
          });
        }).catch(function (error) {
          react_s_alert__WEBPACK_IMPORTED_MODULE_10___default.a.error(error && error.message || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!");
        });
      } else {
        react_s_alert__WEBPACK_IMPORTED_MODULE_10___default.a.error("Żadne z pól nie może być puste!");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        name: "email",
        className: "form-control",
        placeholder: "Email",
        value: this.state.userInfo.email,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "form-control",
        placeholder: "Has\u0142o",
        value: this.state.userInfo.password,
        onChange: this.handleInputChange,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-block btn-primary",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Zaloguj si\u0119!")));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var SocialLogin =
/*#__PURE__*/
function (_Component2) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SocialLogin, _Component2);

  function SocialLogin() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SocialLogin);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SocialLogin).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SocialLogin, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "social-signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "btn btn-block social-btn google",
        href: _constants__WEBPACK_IMPORTED_MODULE_14__["GOOGLE_AUTH_URL"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "btn btn-block social-btn facebook",
        href: _constants__WEBPACK_IMPORTED_MODULE_14__["FACEBOOK_AUTH_URL"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })));
    }
  }]);

  return SocialLogin;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var Login =
/*#__PURE__*/
function (_Component3) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _Component3);

  function Login() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Login);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Login).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.props.location.state && this.props.state.error) {
        setTimeout(function () {
          react_s_alert__WEBPACK_IMPORTED_MODULE_10___default.a.error(_this3.props.location.state.error, {
            timeout: 5000
          });

          _this3.props.history.replace({
            pathname: _this3.props.location.pathname,
            state: {}
          });
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.authenticated) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
          to: {
            pathname: "/",
            state: {
              from: this.props.location
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "login-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "login-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "login-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Zaloguj si\u0119 do serwisu!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(LoginForm, Object.assign({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "signup-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Nie masz konta?", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Zarejestruj si\u0119!")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "or-separator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "or-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "lub skorzystaj z logowania przez:")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "social-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SocialLogin, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/user/oauth2/OAuth2RedirectHandler.js":
/*!**************************************************!*\
  !*** ./src/user/oauth2/OAuth2RedirectHandler.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");





var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/user/oauth2/OAuth2RedirectHandler.js";




var OAuth2RedirectHandler =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OAuth2RedirectHandler, _Component);

  function OAuth2RedirectHandler() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OAuth2RedirectHandler);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OAuth2RedirectHandler).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OAuth2RedirectHandler, [{
    key: "getUrlParameter",
    value: function getUrlParameter(name) {
      name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(this.props.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
  }, {
    key: "render",
    value: function render() {
      var token = this.getUrlParameter('token');
      var error = this.getUrlParameter('error');

      if (token) {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN"], token);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
          to: {
            pathname: "/profile",
            state: {
              from: this.props.location
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
          to: {
            pathname: "/login",
            state: {
              from: this.props.location,
              error: error
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        });
      }
    }
  }]);

  return OAuth2RedirectHandler;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (OAuth2RedirectHandler);

/***/ }),

/***/ "./src/user/signup/Signup.css":
/*!************************************!*\
  !*** ./src/user/signup/Signup.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/signup/Signup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/signup/Signup.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Signup.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/user/signup/Signup.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/user/signup/Signup.js":
/*!***********************************!*\
  !*** ./src/user/signup/Signup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-s-alert */ "./node_modules/react-s-alert/index.js");
/* harmony import */ var react_s_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_s_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
/* harmony import */ var _utils_APIUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/APIUtils */ "./src/utils/APIUtils.js");
/* harmony import */ var _utils_InputValidator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/InputValidator */ "./src/utils/InputValidator.js");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Signup.css */ "./src/user/signup/Signup.css");
/* harmony import */ var _Signup_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Signup_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/google-logo.png */ "./src/assets/images/google-logo.png");
/* harmony import */ var _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/fb-logo.png */ "./src/assets/images/fb-logo.png");
/* harmony import */ var _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/user/signup/Signup.js";










var SignupForm =
/*#__PURE__*/
function (_Component) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SignupForm, _Component);

  function SignupForm(props) {
    var _this;

    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignupForm);

    _this = Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignupForm).call(this, props));
    _this.state = {
      userInfo: {
        login: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    };
    _this.validator = new _utils_InputValidator__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _this.handleInputChange = _this.handleInputChange.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignupForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event, inputFieldName) {
      var newState = Object.assign({}, this.state);
      newState.userInfo[inputFieldName] = event.target.value;
      this.setState(newState);

      if (inputFieldName === 'password_confirm') {
        this.validator.updateValidator(inputFieldName, this.state.userInfo.password_confirm, this.state.userInfo.password);
      } else {
        this.validator.updateValidator(inputFieldName, event.target.value);
      }
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.validator.getStatus()) {
        var request_body = {
          name: this.state.userInfo.login,
          email: this.state.userInfo.email,
          password: this.state.userInfo.password
        };
        var signUpRequest = Object.assign({}, request_body);
        Object(_utils_APIUtils__WEBPACK_IMPORTED_MODULE_10__["signup"])(signUpRequest).then(function (response) {
          react_s_alert__WEBPACK_IMPORTED_MODULE_8___default.a.success("Twoje konto zostało pomyślnie założone!. Zostaniesz teraz przekierowany do strony logowania.");

          _this2.props.history.push("/login");
        }).catch(function (error) {
          react_s_alert__WEBPACK_IMPORTED_MODULE_8___default.a.error(error && error.message || "Wystąpił nieznany błąd! Skontaktuj się z administratorem!");
        });
      } else {
        react_s_alert__WEBPACK_IMPORTED_MODULE_8___default.a.error("Formularz nie został poprawnie wypełniony!");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "login",
        className: "form-control",
        placeholder: "Login",
        value: this.state.userInfo.login,
        onChange: function onChange(event) {
          return _this3.handleInputChange(event, 'login');
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), this.validator.displayValidatorErrors('login')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "email",
        className: "form-control",
        placeholder: "Email",
        value: this.state.userInfo.email,
        onChange: function onChange(event) {
          return _this3.handleInputChange(event, 'email');
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), this.validator.displayValidatorErrors('email')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "form-control",
        placeholder: "Has\u0142o",
        value: this.state.userInfo.password,
        onChange: function onChange(event) {
          return _this3.handleInputChange(event, 'password');
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), this.validator.displayValidatorErrors('password')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        name: "password_confirm",
        className: "form-control",
        placeholder: "Powt\xF3rz has\u0142o!",
        value: this.state.userInfo.password_confirm,
        onChange: function onChange(event) {
          return _this3.handleInputChange(event, 'password_confirm');
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), this.validator.displayValidatorErrors('password_confirm')), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "form-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-block btn-primary",
        onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Zarejestruj si\u0119!")));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var SocialSignup =
/*#__PURE__*/
function (_Component2) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SocialSignup, _Component2);

  function SocialSignup() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SocialSignup);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SocialSignup).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SocialSignup, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "social-signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-block social-btn google",
        href: _constants__WEBPACK_IMPORTED_MODULE_9__["GOOGLE_AUTH_URL"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_images_google_logo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Google",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "btn btn-block social-btn facebook",
        href: _constants__WEBPACK_IMPORTED_MODULE_9__["FACEBOOK_AUTH_URL"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: _assets_images_fb_logo_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "Facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })));
    }
  }]);

  return SocialSignup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var Signup =
/*#__PURE__*/
function (_Component3) {
  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, _Component3);

  function Signup() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    return Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup).apply(this, arguments));
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "render",
    value: function render() {
      if (this.props.authenticated) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
          to: {
            pathname: "/",
            state: {
              from: this.props.location
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "signup-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "signup-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "signup-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Zarejestruj si\u0119!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SignupForm, Object.assign({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "signup-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Masz ju\u017C konto?", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Zaloguj si\u0119!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "or-separator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "or-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "lub skorzystaj z logowania przez:")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "social-buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SocialSignup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/utils/APIUtils.js":
/*!*******************************!*\
  !*** ./src/utils/APIUtils.js ***!
  \*******************************/
/*! exports provided: getCurrentUser, login, signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");


var request = function request(options) {
  var headers = new Headers({
    'Content-Type': 'application/json'
  });

  if (localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"])) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"]));
  }

  var defaults = {
    headers: headers
  };
  options = Object.assign({}, defaults, options);
  return fetch(options.url, options).then(function (response) {
    return response.json().then(function (json) {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    });
  });
};

function getCurrentUser() {
  if (!localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"])) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: _constants__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"] + "/user/me",
    method: 'GET'
  });
}
function login(loginRequest) {
  return request({
    url: _constants__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"] + "/auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}
function signup(signupRequest) {
  return request({
    url: _constants__WEBPACK_IMPORTED_MODULE_0__["API_BASE_URL"] + "/auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}

/***/ }),

/***/ "./src/utils/InputValidator.js":
/*!*************************************!*\
  !*** ./src/utils/InputValidator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _ValidatorRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValidatorRules */ "./src/utils/ValidatorRules.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/utils/InputValidator.js";



var InputValidator =
/*#__PURE__*/
function () {
  function InputValidator() {
    Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InputValidator);

    this.validator = _ValidatorRules__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.resetValidator();
    this.displayValidatorErrors = this.displayValidatorErrors.bind(this);
    this.updateValidator = this.updateValidator.bind(this);
    this.resetValidator = this.resetValidator.bind(this);
    this.getStatus = this.getStatus.bind(this);
  }

  Object(_home_przemek_Data_Programowanie_PWr_ZTW_AdvertBoard_Front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InputValidator, [{
    key: "updateValidator",
    value: function updateValidator(fieldName, value) {
      var _this = this;

      var compared_value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.validator[fieldName].errors = [];
      this.validator[fieldName].state = value;
      this.validator[fieldName].valid = true;
      this.validator[fieldName].rules.forEach(function (rule) {
        if (rule.type === 'regex' && rule.test instanceof RegExp) {
          if (!rule.test.test(value)) {
            _this.validator[fieldName].errors.push(rule.message);

            _this.validator[fieldName].valid = false;
          }
        } else if (rule.type === 'function' && typeof rule.test === 'function') {
          if (!rule.test(value)) {
            _this.validator[fieldName].errors.push(rule.message);

            _this.validator[fieldName].valid = false;
          }
        } else if (rule.type === 'comparator' && typeof rule.test === 'function') {
          if (compared_value != null && !rule.test(value, compared_value)) {
            _this.validator[fieldName].errors.push(rule.message);

            _this.validator[fieldName].valid = false;
          }
        }
      });
    }
  }, {
    key: "resetValidator",
    value: function resetValidator() {
      var _this2 = this;

      Object.keys(this.validator).forEach(function (fieldName) {
        _this2.validator[fieldName].errors = [];
        _this2.validator[fieldName].state = '';
        _this2.validator[fieldName].valid = false;
      });
    }
  }, {
    key: "displayValidatorErrors",
    value: function displayValidatorErrors(fieldName) {
      var field_validator = this.validator[fieldName];
      var result = '';

      if (field_validator && !field_validator.valid) {
        var errors = field_validator.errors.map(function (info, index) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
            className: "error",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, "* ", info, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }));
        });
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "col s12 row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, errors);
      }

      return result;
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      var _this3 = this;

      var status = false;

      if (this.validator != null) {
        status = true;
        Object.keys(this.validator).forEach(function (field) {
          if (!_this3.validator[field].valid) {
            status = false;
          }
        });
      }

      return status;
    }
  }]);

  return InputValidator;
}();

/* harmony default export */ __webpack_exports__["default"] = (InputValidator);

/***/ }),

/***/ "./src/utils/ValidatorRules.js":
/*!*************************************!*\
  !*** ./src/utils/ValidatorRules.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var validator_rules = {
  login: {
    rules: [{
      type: 'regex',
      test: /^[A-Za-z0-9_]+$/,
      message: 'Nazwa użytkownika może zawierać tylko liczby i litery!'
    }, {
      type: 'function',
      test: function test(value) {
        return value.length >= 5;
      },
      message: "Nazwa użytkownika musi się składać z co najmniej 5 znaków!"
    }],
    errors: [],
    valid: false,
    state: ''
  },
  email: {
    rules: [{
      type: 'regex',
      test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Podany adres email nie jest prawidłowy!"
    }, {
      type: 'function',
      test: function test(value) {
        return value.length >= 3;
      },
      message: "Nazwa użytkownika musi się składać z co najmniej 3 znaków!"
    }],
    errors: [],
    valid: false,
    state: ''
  },
  password: {
    rules: [{
      type: 'function',
      test: function test(value) {
        return value.length >= 8;
      },
      message: "Hasło musi się składać z co najmniej 8 znaków!"
    }],
    errors: [],
    valid: false,
    state: ''
  },
  password_confirm: {
    rules: [{
      type: 'comparator',
      test: function test(value, other_value) {
        return value === other_value;
      },
      message: "Hasła muszą być takie same!"
    }],
    errors: [],
    valid: false,
    state: ''
  }
};
/* harmony default export */ __webpack_exports__["default"] = (validator_rules);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/przemek/Data/Programowanie/PWr/ZTW/AdvertBoard-Front/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map