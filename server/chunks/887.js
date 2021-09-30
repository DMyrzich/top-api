exports.id = 887;
exports.ids = [887];
exports.modules = {

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

/***/ 1395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7373);
/* harmony import */ var _Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Tags = (_ref) => {
  let {
    children,
    className,
    size = "m",
    color = 'ghost'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "size", "color"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().tag), className, {
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().m)]: size == 'm',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().s)]: size == 's',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().red)]: color == 'red',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().green)]: color == 'green',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().grey)]: color == 'grey',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().primary)]: color == 'primary',
      [(_Tag_module_css__WEBPACK_IMPORTED_MODULE_3___default().ghost)]: color == 'ghost'
    })
  }, props), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ }),

/***/ 3687:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "H_h1__3SGSt",
	"h2": "H_h2__3JB8x",
	"h3": "H_h3__ltn_v"
};


/***/ }),

/***/ 7373:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "Tag_tag__3NOV8",
	"s": "Tag_s__12IUp",
	"m": "Tag_m__1WBhK",
	"primary": "Tag_primary__1FFgG",
	"red": "Tag_red__QpR7Q",
	"green": "Tag_green__1CgKv",
	"grey": "Tag_grey__3j9av",
	"ghost": "Tag_ghost__VK3gc"
};


/***/ })

};
;