exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 9366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Rating_Rating)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./q-components/Rating/Rating.module.css
var Rating_module = __webpack_require__(2182);
var Rating_module_default = /*#__PURE__*/__webpack_require__.n(Rating_module);
;// CONCATENATED MODULE: ./q-components/Rating/star.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 20,
    height: 20,
    fill: "#E2E2E2",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M19.948 7.557a1.072 1.072 0 00-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0010 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 001.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18z"
  })));
}

/* harmony default export */ const star = (SvgStar);
;// CONCATENATED MODULE: ./q-components/Rating/Rating.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Rating = /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  let {
    isEditable = false,
    error,
    rating,
    setRating,
    tabIndex
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isEditable", "error", "rating", "setRating", "tabIndex"]);

  const {
    0: ratingArray,
    1: SetRatingArray
  } = (0,external_react_.useState)(new Array(5).fill( /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})));
  const refRatting = (0,external_react_.useRef)([]);

  const selectTab = (rating, i) => {
    if (!isEditable) {
      return -1;
    }

    if (!rating && i == 0) {
      return tabIndex !== null && tabIndex !== void 0 ? tabIndex : 0;
    }

    if (rating == i + 1) return tabIndex !== null && tabIndex !== void 0 ? tabIndex : 0;
    return -1;
  };

  (0,external_react_.useEffect)(() => constructRating(rating), [rating, tabIndex]);

  const constructRating = currentRating => {
    const updateArray = ratingArray.map((r, i) => {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: external_classnames_default()((Rating_module_default()).star, {
          [(Rating_module_default()).filled]: i < currentRating,
          [(Rating_module_default()).editable]: isEditable
        }),
        onMouseEnter: () => changeRating(i + 1),
        onClick: () => setNewRating(i + 1),
        onMouseLeave: () => changeRating(rating),
        tabIndex: selectTab(rating, i),
        ref: ref => {
          var _refRatting$current;

          return (_refRatting$current = refRatting.current) === null || _refRatting$current === void 0 ? void 0 : _refRatting$current.push(ref);
        },
        onKeyDown: handleKey,
        "aria-valuenow": rating,
        "aria-valuemin": 1,
        "aria-valuemax": 5,
        "aria-label": isEditable ? 'Укажите рейтинг отзыва' : `Рейтинг ${rating}`,
        role: isEditable ? 'slider' : '',
        children: /*#__PURE__*/jsx_runtime_.jsx(star, {})
      });
    });
    SetRatingArray(updateArray);
  };

  const changeRating = i => {
    if (!isEditable) return;
    constructRating(i);
  };

  const setNewRating = i => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleKey = e => {
    if (!isEditable || !setRating) {
      return;
    }

    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      var _refRatting$current$r;

      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }

      (_refRatting$current$r = refRatting.current[rating]) === null || _refRatting$current$r === void 0 ? void 0 : _refRatting$current$r.focus();
    }

    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      var _refRatting$current2;

      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      (_refRatting$current2 = refRatting.current[rating - 2]) === null || _refRatting$current2 === void 0 ? void 0 : _refRatting$current2.focus();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    ref: ref,
    className: external_classnames_default()((Rating_module_default()).rateWrapper, {
      [(Rating_module_default()).error]: error
    })
  }, props), {}, {
    children: [ratingArray.map((r, i) => /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: r
    }, i)), error && /*#__PURE__*/jsx_runtime_.jsx("span", {
      role: "alert",
      className: (Rating_module_default()).errorMessage,
      children: error.message
    })]
  }));
});
/* harmony default export */ const Rating_Rating = (Rating);

/***/ }),

/***/ 4896:
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
/* harmony import */ var _Textarea_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6517);
/* harmony import */ var _Textarea_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Textarea_module_css__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Textarea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((_ref, ref) => {
  let {
    className,
    error
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "error"]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Textarea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textareaWrapper), className),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", _objectSpread({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Textarea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textarea), {
        [(_Textarea_module_css__WEBPACK_IMPORTED_MODULE_3___default().error)]: error
      })
    }, props)), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      role: "alert",
      className: (_Textarea_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorMessage),
      children: error.message
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);

/***/ }),

/***/ 2182:
/***/ ((module) => {

// Exports
module.exports = {
	"filled": "Rating_filled__198fn",
	"star": "Rating_star__2qBU5",
	"editable": "Rating_editable__2U25L",
	"rateWrapper": "Rating_rateWrapper__3gXZ2",
	"errorMessage": "Rating_errorMessage__JCYaT",
	"error": "Rating_error__1AtG1"
};


/***/ }),

/***/ 6517:
/***/ ((module) => {

// Exports
module.exports = {
	"textarea": "Textarea_textarea__29_wJ",
	"error": "Textarea_error__1Q4Di",
	"errorMessage": "Textarea_errorMessage__iIwGR"
};


/***/ })

};
;