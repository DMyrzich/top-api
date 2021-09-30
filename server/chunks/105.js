exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 8105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorPage_component_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9751);
/* harmony import */ var _ErrorPage_component_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_component_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _q_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3391);
/* harmony import */ var _q_components_H_H__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2610);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);








const ErrorPageComponent = ({
  title,
  description
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_ErrorPage_component_module_css__WEBPACK_IMPORTED_MODULE_5___default().errorWrapper),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_H_H__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      h: "h3",
      children: title
    }), description, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_ErrorPage_component_module_css__WEBPACK_IMPORTED_MODULE_5___default().errorText),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        onClick: () => router.push("http://localhost:3000/"),
        appearance: "primary",
        children: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        onClick: () => router.back(),
        appearance: "primary",
        children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorPageComponent);

/***/ }),

/***/ 2610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _H_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3687);
/* harmony import */ var _H_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_H_module_css__WEBPACK_IMPORTED_MODULE_2__);





const H = ({
  h,
  children
}) => {
  switch (h) {
    case 'h1':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: (_H_module_css__WEBPACK_IMPORTED_MODULE_2___default().h1),
        children: children
      });

    case 'h2':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: (_H_module_css__WEBPACK_IMPORTED_MODULE_2___default().h2),
        children: children
      });

    case 'h3':
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: (_H_module_css__WEBPACK_IMPORTED_MODULE_2___default().h3),
        children: children
      });

    default:
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (H);

/***/ }),

/***/ 9751:
/***/ ((module) => {

// Exports
module.exports = {
	"errorWrapper": "ErrorPage_component_errorWrapper__2xR7C",
	"errorText": "ErrorPage_component_errorText__2fOAa"
};


/***/ }),

/***/ 3687:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "H_h1__3SGSt",
	"h2": "H_h2__3JB8x",
	"h3": "H_h3__ltn_v"
};


/***/ })

};
;