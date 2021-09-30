"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _q_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3391);
/* harmony import */ var _q_components_H_H__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2610);
/* harmony import */ var _q_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8099);
/* harmony import */ var _q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1395);
/* harmony import */ var _q_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4033);
/* harmony import */ var _q_components_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4896);












function Home({
  menu
}) {
  const {
    0: rating,
    1: setRating
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_H_H__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      h: "h1",
      children: "\u0422ss\u0435\u043A\u0441\u0442"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      appearance: "primary",
      arrow: "right",
      children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      appearance: "ghost",
      arrow: "down",
      children: "\u041A\u043D\u043E\u043F\u043A\u0430"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      size: "l",
      children: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      children: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      size: "s",
      children: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      color: "red",
      size: "m",
      children: "red"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      color: "grey",
      size: "m",
      children: "grey"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      color: "green",
      size: "s",
      children: "green"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      color: "ghost",
      size: "s",
      children: "ghost"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Tag_Tag__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      color: "primary",
      size: "s",
      children: "primary"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      rating: 2
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_q_components_Rating_Rating__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      rating: rating,
      isEditable: true,
      setRating: setRating
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(Home));
const getStaticProps = async () => {
  const firstCategory = 0;
  const response = await fetch("https://courses-top.ru" + "/api/top-page/find", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstCategory
    })
  });
  return {
    props: {
      menu: await response.json(),
      firstCategory
    }
  };
};

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,818,887,827,99], () => (__webpack_exec__(2562)));
module.exports = __webpack_exports__;

})();