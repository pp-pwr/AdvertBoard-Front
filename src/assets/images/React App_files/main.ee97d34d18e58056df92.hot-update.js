webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.ee97d34d18e58056df92.hot-update.js.map