(() => {
var exports = {};
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 9395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _alias_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./layout/Layout.tsx + 15 modules
var Layout = __webpack_require__(4033);
// EXTERNAL MODULE: ./helpers/helpers.tsx + 4 modules
var helpers = __webpack_require__(7808);
// EXTERNAL MODULE: ./page-components/TopPageComponent/TopPage.component.module.css
var TopPage_component_module = __webpack_require__(4022);
var TopPage_component_module_default = /*#__PURE__*/__webpack_require__.n(TopPage_component_module);
// EXTERNAL MODULE: ./q-components/H/H.tsx
var H = __webpack_require__(2610);
// EXTERNAL MODULE: ./q-components/Tag/Tag.tsx
var Tag = __webpack_require__(1395);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./q-components/Hhdata/Hhdata.module.css
var Hhdata_module = __webpack_require__(231);
var Hhdata_module_default = /*#__PURE__*/__webpack_require__.n(Hhdata_module);
// EXTERNAL MODULE: ./q-components/Card/Card.tsx
var Card = __webpack_require__(2117);
;// CONCATENATED MODULE: ./q-components/Hhdata/star.svg
var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgStar(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    width: 20,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _circle || (_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 10,
    fill: "#BBB"
  })), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15.969 8.534a.643.643 0 00-.549-.457l-3.464-.328-1.369-3.345A.638.638 0 0010 4a.636.636 0 00-.586.404L8.044 7.75l-3.464.328a.645.645 0 00-.549.457.685.685 0 00.186.708l2.619 2.396-.772 3.548a.68.68 0 00.248.687.617.617 0 00.701.033L10 14.042l2.986 1.864c.22.136.495.124.702-.033a.68.68 0 00.248-.687l-.772-3.548 2.619-2.396a.685.685 0 00.186-.708z",
    fill: "#fff"
  })));
}

/* harmony default export */ const star = (SvgStar);
;// CONCATENATED MODULE: ./q-components/Hhdata/Hhdata.tsx








const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Hhdata_module_default()).hh,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      className: (Hhdata_module_default()).count,
      color: "white",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Hhdata_module_default()).title,
        children: "\u0412\u0441\u0435\u0433\u043E \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0439"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Hhdata_module_default()).countValue,
        children: (0,helpers/* format */.WU)(count)
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      className: (Hhdata_module_default()).salary,
      color: "white",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Hhdata_module_default()).title,
          children: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).salaryValue,
          children: [(0,helpers/* format */.WU)(juniorSalary), " P"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).rate,
          children: [/*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          }), /*#__PURE__*/jsx_runtime_.jsx(star, {}), /*#__PURE__*/jsx_runtime_.jsx(star, {})]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Hhdata_module_default()).title,
          children: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).salaryValue,
          children: [(0,helpers/* format */.WU)(middleSalary), " P"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).rate,
          children: [/*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          }), /*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          }), /*#__PURE__*/jsx_runtime_.jsx(star, {})]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Hhdata_module_default()).title,
          children: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).salaryValue,
          children: [(0,helpers/* format */.WU)(seniorSalary), " P"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Hhdata_module_default()).rate,
          children: [/*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          }), /*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          }), /*#__PURE__*/jsx_runtime_.jsx(star, {
            className: (Hhdata_module_default()).filled
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const Hhdata = (HhData);
// EXTERNAL MODULE: ./interface/top-page.interface.ts
var top_page_interface = __webpack_require__(355);
// EXTERNAL MODULE: ./q-components/Advantages/Advantages.module.css
var Advantages_module = __webpack_require__(6007);
var Advantages_module_default = /*#__PURE__*/__webpack_require__.n(Advantages_module);
;// CONCATENATED MODULE: ./q-components/Advantages/Advantages.svg
var Advantages_circle, _g, _defs;

function Advantages_extends() { Advantages_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Advantages_extends.apply(this, arguments); }



function SvgAdvantages(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Advantages_extends({
    width: 50,
    height: 50,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), Advantages_circle || (Advantages_circle = /*#__PURE__*/external_react_.createElement("circle", {
    cx: 25,
    cy: 25,
    r: 25,
    fill: "#C8F8E4"
  })), _g || (_g = /*#__PURE__*/external_react_.createElement("g", {
    clipPath: "url(#Advantages_svg__clip0)"
  }, /*#__PURE__*/external_react_.createElement("path", {
    d: "M36.297 20.368l-12.661 12.66a2.402 2.402 0 01-3.397 0l-6.536-6.536a2.402 2.402 0 013.397-3.397l4.838 4.838L32.9 16.971a2.402 2.402 0 013.397 3.397z",
    fill: "#1DC37E"
  }))), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("clipPath", {
    id: "Advantages_svg__clip0"
  }, /*#__PURE__*/external_react_.createElement("path", {
    fill: "#fff",
    transform: "translate(13 13)",
    d: "M0 0h24v24H0z"
  })))));
}

/* harmony default export */ const Advantages = (SvgAdvantages);
;// CONCATENATED MODULE: ./q-components/Advantages/Advantages.tsx








const Advantages_Advantages = ({
  advantages
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(H/* default */.Z, {
      h: "h2",
      children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
    }), advantages.map(el => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Advantages_module_default()).wrapper,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Advantages, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Advantages_module_default()).title,
        children: el && el.title
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Advantages_module_default()).description,
        children: el.description
      })]
    }, el._id))]
  });
};

/* harmony default export */ const q_components_Advantages_Advantages = (Advantages_Advantages);
// EXTERNAL MODULE: ./q-components/Skills/Skills.module.css
var Skills_module = __webpack_require__(3446);
var Skills_module_default = /*#__PURE__*/__webpack_require__.n(Skills_module);
;// CONCATENATED MODULE: ./q-components/Skills/Skills.tsx







const Skills = ({
  tags,
  tagsTitle
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Skills_module_default()).wrapper_tags,
    children: [/*#__PURE__*/jsx_runtime_.jsx(H/* default */.Z, {
      h: "h2",
      children: tagsTitle
    }), tags.map((el, idx) => {
      return /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
        className: (Skills_module_default()).tags,
        size: "s",
        color: "primary",
        children: el
      }, idx);
    })]
  });
};

/* harmony default export */ const Skills_Skills = (Skills);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./q-components/Sort/Sort.module.css
var Sort_module = __webpack_require__(5609);
var Sort_module_default = /*#__PURE__*/__webpack_require__.n(Sort_module);
;// CONCATENATED MODULE: ./q-components/Sort/Sort.props.ts
let sortEnum;

(function (sortEnum) {
  sortEnum[sortEnum["Rate"] = 0] = "Rate";
  sortEnum[sortEnum["Price"] = 1] = "Price";
})(sortEnum || (sortEnum = {}));
;// CONCATENATED MODULE: ./q-components/Sort/Sort.svg
var _rect, _rect2, _rect3;

function Sort_extends() { Sort_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Sort_extends.apply(this, arguments); }



function SvgSort(props) {
  return /*#__PURE__*/external_react_.createElement("svg", Sort_extends({
    width: 20,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _rect || (_rect = /*#__PURE__*/external_react_.createElement("rect", {
    width: 20,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect2 || (_rect2 = /*#__PURE__*/external_react_.createElement("rect", {
    y: 5,
    width: 14,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })), _rect3 || (_rect3 = /*#__PURE__*/external_react_.createElement("rect", {
    y: 10,
    width: 8,
    height: 3,
    rx: 1.5,
    fill: "#7653FC"
  })));
}

/* harmony default export */ const Sort = (SvgSort);
;// CONCATENATED MODULE: ./q-components/Sort/Sort.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Sort_Sort = (_ref) => {
  let {
    sort,
    setSort,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["sort", "setSort", "className"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
    className: external_classnames_default()((Sort_module_default()).sort_rate, className)
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "sort",
      className: (Sort_module_default()).sortName,
      children: "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      id: "rate",
      tabIndex: 0,
      "aria-selected": sort == sortEnum.Rate,
      "aria-labelledby": "sort rate",
      className: external_classnames_default()({
        [(Sort_module_default()).active]: sort == sortEnum.Rate
      }),
      onClick: () => setSort(sortEnum.Rate),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Sort, {
        className: (Sort_module_default()).sort_icon
      }), "\u041F\u043E \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      id: "price",
      tabIndex: 0,
      "aria-labelledby": "sort price",
      "aria-selected": sort == sortEnum.Price,
      className: external_classnames_default()({
        [(Sort_module_default()).active]: sort == sortEnum.Price
      }),
      onClick: () => setSort(sortEnum.Price),
      children: [/*#__PURE__*/jsx_runtime_.jsx(Sort, {
        className: (Sort_module_default()).sort_icon
      }), "\u041F\u043E \u0446\u0435\u043D\u0435"]
    })]
  }));
};

/* harmony default export */ const q_components_Sort_Sort = (Sort_Sort);
;// CONCATENATED MODULE: ./q-components/Sort/sort.reducer.ts

const sortReducer = (state, action) => {
  switch (action.type) {
    case sortEnum.Rate:
      {
        return {
          sort: sortEnum.Rate,
          product: state.product.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
        };
      }

    case sortEnum.Price:
      {
        return {
          sort: sortEnum.Price,
          product: state.product.sort((a, b) => a.price > b.price ? -1 : 1)
        };
      }

    case 'reset':
      {
        return {
          sort: sortEnum.Rate,
          product: action.product
        };
      }

    default:
      {
        throw new Error('Не верные данные для входа');
      }
  }
};
// EXTERNAL MODULE: ./q-components/Products/Products.module.css
var Products_module = __webpack_require__(8189);
var Products_module_default = /*#__PURE__*/__webpack_require__.n(Products_module);
// EXTERNAL MODULE: ./q-components/Rating/Rating.tsx + 1 modules
var Rating = __webpack_require__(9366);
// EXTERNAL MODULE: ./q-components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(3391);
// EXTERNAL MODULE: ./q-components/Divider/Divider.module.css
var Divider_module = __webpack_require__(3766);
var Divider_module_default = /*#__PURE__*/__webpack_require__.n(Divider_module);
;// CONCATENATED MODULE: ./q-components/Divider/Divider.tsx


function Divider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Divider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Divider_ownKeys(Object(source), true).forEach(function (key) { Divider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Divider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Divider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Divider_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Divider_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Divider_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Divider = (_ref) => {
  let {
    className
  } = _ref,
      props = Divider_objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/jsx_runtime_.jsx("hr", Divider_objectSpread({
    className: external_classnames_default()((Divider_module_default()).hr, className)
  }, props));
};

/* harmony default export */ const Divider_Divider = (Divider);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./q-components/Reviews/Reviews.module.css
var Reviews_module = __webpack_require__(4371);
var Reviews_module_default = /*#__PURE__*/__webpack_require__.n(Reviews_module);
;// CONCATENATED MODULE: ./q-components/Reviews/User.svg
var User_path, _path2, _path3;

function User_extends() { User_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return User_extends.apply(this, arguments); }



function SvgUser(props) {
  return /*#__PURE__*/external_react_.createElement("svg", User_extends({
    width: 30,
    height: 30,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), User_path || (User_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 0C6.729 0 0 6.729 0 15s6.729 15 15 15 15-6.729 15-15S23.271 0 15 0zm0 27.625C8.038 27.625 2.375 21.961 2.375 15S8.038 2.375 15 2.375c6.961 0 12.625 5.664 12.625 12.625 0 6.962-5.664 12.625-12.625 12.625z",
    fill: "#7653FC"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 17.662c-4.219 0-8.166 2.115-11.113 5.956l1.883 1.445c2.489-3.241 5.767-5.027 9.23-5.027s6.741 1.786 9.23 5.027l1.883-1.445C23.165 19.777 19.22 17.662 15 17.662z",
    fill: "#7653FC"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M15 5.383c-3.405 0-6.174 2.787-6.174 6.213 0 3.427 2.77 6.214 6.174 6.214 3.404 0 6.174-2.787 6.174-6.214 0-3.426-2.77-6.213-6.174-6.213zm0 10.052c-2.095 0-3.8-1.722-3.8-3.839s1.705-3.839 3.8-3.839c2.095 0 3.8 1.723 3.8 3.84 0 2.116-1.705 3.838-3.8 3.838z",
    fill: "#7653FC"
  })));
}

/* harmony default export */ const User = (SvgUser);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(3879);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/locale/ru/index.js + 14 modules
var ru = __webpack_require__(5986);
;// CONCATENATED MODULE: ./q-components/Reviews/Reviews.tsx



function Reviews_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Reviews_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Reviews_ownKeys(Object(source), true).forEach(function (key) { Reviews_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Reviews_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Reviews_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Reviews_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Reviews_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Reviews_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Reviews = (_ref) => {
  let {
    review,
    className
  } = _ref,
      props = Reviews_objectWithoutProperties(_ref, ["review", "className"]);

  const {
    _id,
    name,
    rating,
    description,
    title,
    createdAt
  } = review;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", Reviews_objectSpread(Reviews_objectSpread({
    className: external_classnames_default()((Reviews_module_default()).watchReview, className)
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(User, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Reviews_module_default()).name,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [name, ":"]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (Reviews_module_default()).title,
        children: title
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Reviews_module_default()).createdAt,
      children: (0,external_date_fns_.format)(new Date(createdAt), 'dd MMMM yyyy', {
        locale: ru/* default */.Z
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {
      className: (Reviews_module_default()).rating,
      rating: rating !== null && rating !== void 0 ? rating : rating
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Reviews_module_default()).description,
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider_Divider, {
      className: (Reviews_module_default()).hr
    })]
  }), _id);
};

/* harmony default export */ const Reviews_Reviews = (Reviews);
// EXTERNAL MODULE: ./q-components/ReviewForm/ReviewForm.module.css
var ReviewForm_module = __webpack_require__(2985);
var ReviewForm_module_default = /*#__PURE__*/__webpack_require__.n(ReviewForm_module);
// EXTERNAL MODULE: ./q-components/Input/Input.tsx
var Input = __webpack_require__(7383);
// EXTERNAL MODULE: ./q-components/Textarea/Textarea.tsx
var Textarea = __webpack_require__(4896);
;// CONCATENATED MODULE: ./q-components/ReviewForm/close.svg
var close_path;

function close_extends() { close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_extends.apply(this, arguments); }



function SvgClose(props) {
  return /*#__PURE__*/external_react_.createElement("svg", close_extends({
    width: 12,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), close_path || (close_path = /*#__PURE__*/external_react_.createElement("path", {
    stroke: "#1CC37E",
    strokeWidth: 3,
    d: "M2.061 1.939l8.485 8.486M1.939 10.425l8.486-8.486"
  })));
}

/* harmony default export */ const ReviewForm_close = (SvgClose);
;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
// EXTERNAL MODULE: ./helpers/Api.ts
var Api = __webpack_require__(1914);
;// CONCATENATED MODULE: ./q-components/ReviewForm/ReviewForm.tsx



function ReviewForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ReviewForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ReviewForm_ownKeys(Object(source), true).forEach(function (key) { ReviewForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ReviewForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ReviewForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ReviewForm_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ReviewForm_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ReviewForm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const ReviewForm = (_ref) => {
  let {
    id,
    isTable,
    className
  } = _ref,
      props = ReviewForm_objectWithoutProperties(_ref, ["id", "isTable", "className"]);

  const {
    register,
    control,
    handleSubmit,
    formState: {
      errors
    },
    reset,
    clearErrors
  } = (0,external_react_hook_form_namespaceObject.useForm)();
  const {
    0: isSend,
    1: setSend
  } = (0,external_react_.useState)(false);
  const {
    0: isError,
    1: setError
  } = (0,external_react_.useState)(false);

  const onSubmit = async data => {
    try {
      const resp = await fetch(Api/* Api.review.create */.V.review.create, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ReviewForm_objectSpread(ReviewForm_objectSpread({}, data), {}, {
          productId: id
        }))
      });
      const response = await resp.json();

      if (response.message) {
        setSend(true);
        reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", ReviewForm_objectSpread(ReviewForm_objectSpread({
      className: external_classnames_default()((ReviewForm_module_default()).addReview, className)
    }, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register('name', {
        required: {
          value: true,
          message: 'Заполните ваше имя.'
        }
      })), {}, {
        className: (ReviewForm_module_default()).avtName,
        placeholder: "\u0418\u043C\u044F",
        error: errors.name,
        tabIndex: isTable,
        "aria-invalid": errors.name ? true : false
      })), /*#__PURE__*/jsx_runtime_.jsx(Input/* default */.Z, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register('title', {
        required: {
          value: true,
          message: 'Заполните заголовок отзыва.'
        }
      })), {}, {
        className: (ReviewForm_module_default()).avtTitle,
        placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.title,
        tabIndex: isTable,
        "aria-invalid": errors.title ? true : false
      })), /*#__PURE__*/jsx_runtime_.jsx(Textarea/* default */.Z, ReviewForm_objectSpread(ReviewForm_objectSpread({}, register('description', {
        required: {
          value: true,
          message: 'Заполните текст отзыва.'
        }
      })), {}, {
        className: (ReviewForm_module_default()).avtText,
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        error: errors.description,
        tabIndex: isTable,
        "aria-label": "\u0422\u0435\u043A\u0441\u0442 \u043E\u0442\u0437\u044B\u0432\u0430",
        "aria-invalid": errors.description ? true : false
      })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ReviewForm_module_default()).mark,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u041E\u0446\u0435\u043D\u043A\u0430:"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_namespaceObject.Controller, {
          control: control,
          rules: {
            required: {
              value: true,
              message: 'Выберите рейтинг отзыва.'
            }
          },
          name: "rating",
          render: ({
            field,
            formState: {
              errors
            }
          }) => /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {
            isEditable: true,
            tabIndex: isTable,
            error: errors.rating,
            ref: field.ref,
            rating: field.value,
            setRating: field.onChange
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
        tabIndex: isTable,
        className: (ReviewForm_module_default()).submit,
        appearance: 'primary',
        onClick: () => clearErrors(),
        children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ReviewForm_module_default()).moderation,
        children: "* \u041F\u0435\u0440\u0435\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043E\u0442\u0437\u044B\u0432 \u043F\u0440\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443"
      }), isSend && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        role: "alert",
        className: (ReviewForm_module_default()).success,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ReviewForm_module_default()).successTitle,
          children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0432\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ReviewForm_module_default()).successDescription,
          children: "\u041E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (ReviewForm_module_default()).close,
          onClick: () => setSend(false),
          children: /*#__PURE__*/jsx_runtime_.jsx(ReviewForm_close, {})
        })]
      }), isError && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        role: "alert",
        className: (ReviewForm_module_default()).success,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ReviewForm_module_default()).successTitle,
          children: "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ReviewForm_module_default()).successDescription,
          children: "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 \u0437\u0430\u043D\u043E\u0432\u043E."
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (ReviewForm_module_default()).close,
          onClick: () => setSend(false),
          children: /*#__PURE__*/jsx_runtime_.jsx(ReviewForm_close, {})
        })]
      })]
    }))
  });
};

/* harmony default export */ const ReviewForm_ReviewForm = (ReviewForm);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./q-components/Products/Products.tsx



function Products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Products_ownKeys(Object(source), true).forEach(function (key) { Products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Products_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Products_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Products_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const Products = (0,external_framer_motion_.motion)( /*#__PURE__*/(0,external_react_.forwardRef)((_ref, ref) => {
  var _product$reviewAvg;

  let {
    product,
    className
  } = _ref,
      props = Products_objectWithoutProperties(_ref, ["product", "className"]);

  const {
    0: isOpenReviewer,
    1: setIsOpenReviewer
  } = (0,external_react_.useState)(false);
  const refReview = (0,external_react_.useRef)(null);

  const scrollToReview = () => {
    var _refReview$current;

    setIsOpenReviewer(true);
    (_refReview$current = refReview.current) === null || _refReview$current === void 0 ? void 0 : _refReview$current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const keyScrollDown = key => {
    if (key.code == 'Enter' || key.code == 'Space') {
      var _refReview$current2;

      key.preventDefault();
      (_refReview$current2 = refReview.current) === null || _refReview$current2 === void 0 ? void 0 : _refReview$current2.focus();
      scrollToReview();
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto',
      overflow: 'show'
    },
    hidden: {
      opacity: 0,
      height: 0,
      overflow: 'hidden'
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", Products_objectSpread(Products_objectSpread({
    className: className,
    ref: ref
  }, props), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      className: (Products_module_default()).product,
      color: "white",
      tabIndex: 0,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).logo,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          width: 70,
          height: 70,
          src: "https://courses-top.ru" + product.image,
          alt: product.description
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).title,
        children: product.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Products_module_default()).price,
        children: [(0,helpers/* format */.WU)(product.price), " P", product.oldPrice && /*#__PURE__*/(0,jsx_runtime_.jsxs)(Tag/* default */.Z, {
          className: (Products_module_default()).oldPrice,
          color: "green",
          children: [(0,helpers/* format */.WU)(product.price - product.oldPrice), " P"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Products_module_default()).credit,
        children: [(0,helpers/* format */.WU)(product.credit), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (Products_module_default()).month,
          children: "\u0440/\u043C\u0435\u0441"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).rating,
        children: /*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {
          rating: (_product$reviewAvg = product.reviewAvg) !== null && _product$reviewAvg !== void 0 ? _product$reviewAvg : product.initialRating
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).tags,
        children: product.categories.map(t => /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
          size: "s",
          color: "ghost",
          children: t
        }, t))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).priceTitle,
        children: "\u0446\u0435\u043D\u0430"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).creditTitle,
        children: "\u043A\u0440\u0435\u0434\u0438\u0442"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).reviewCount,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: "#review",
          onKeyDown: key => keyScrollDown(key),
          onClick: scrollToReview,
          children: [product.reviewCount, (0,helpers/* declOfNumber */.rQ)(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Divider_Divider, {
        className: (Products_module_default()).hr
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).description,
        children: product.description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Products_module_default()).feature,
        children: product.characteristics.map(el => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Products_module_default()).characteristics,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Products_module_default()).characteristicsName,
              children: el.name
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Products_module_default()).characteristicsDoth
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (Products_module_default()).characteristicsValue,
              children: el.value
            })]
          }, el.name);
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Products_module_default()).advBlock,
        children: [product.advantages && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Products_module_default()).advantages,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Products_module_default()).advantagesTitle,
            children: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: product.advantages
          })]
        }), product.disadvantages && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Products_module_default()).disadvantages,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Products_module_default()).advantagesTitle,
            children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438 "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: product.disadvantages
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Divider_Divider, {
        className: (Products_module_default()).hr2
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Products_module_default()).actions,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          appearance: "primary",
          children: "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          appearance: "ghost",
          arrow: isOpenReviewer ? "down" : "right",
          "aria-expanded": isOpenReviewer,
          onClick: () => setIsOpenReviewer(!isOpenReviewer),
          children: "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
      variants: variants,
      animate: isOpenReviewer ? 'visible' : 'hidden',
      initial: 'hidden',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
        color: "blue",
        ref: refReview,
        tabIndex: isOpenReviewer ? 0 : -1,
        className: (Products_module_default()).reviews,
        children: [product && product.reviews.map(r => /*#__PURE__*/jsx_runtime_.jsx(Reviews_Reviews, {
          review: r
        }, r._id)), /*#__PURE__*/jsx_runtime_.jsx(ReviewForm_ReviewForm, {
          id: product._id,
          isTable: isOpenReviewer ? 0 : -1
        })]
      })
    })]
  }));
}));
/* harmony default export */ const Products_Products = (Products);
;// CONCATENATED MODULE: ./page-components/TopPageComponent/TopPage.component.tsx




function TopPage_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TopPage_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TopPage_component_ownKeys(Object(source), true).forEach(function (key) { TopPage_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TopPage_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TopPage_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const TopPageComponent = ({
  page,
  product,
  firstCategory
}) => {
  const {
    0: {
      product: sortProduct,
      sort
    },
    1: dispatchSort
  } = (0,external_react_.useReducer)(sortReducer, {
    product,
    sort: sortEnum.Rate
  });

  const setSort = sort => dispatchSort({
    type: sort
  });

  (0,external_react_.useEffect)(() => dispatchSort({
    type: 'reset',
    product
  }), [product]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TopPage_component_module_default()).title,
      children: [/*#__PURE__*/jsx_runtime_.jsx(H/* default */.Z, {
        h: "h1",
        children: page && page.title
      }), sortProduct && /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
        color: "grey",
        "aria-label": `в количестве ${sortProduct.length}`,
        size: "m",
        children: sortProduct.length
      }), /*#__PURE__*/jsx_runtime_.jsx(q_components_Sort_Sort, {
        sort: sort,
        setSort: setSort
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      role: "list",
      children: sortProduct && sortProduct.map(p => /*#__PURE__*/jsx_runtime_.jsx(Products_Products, {
        role: "listitem",
        layout: true,
        product: p
      }, p._id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TopPage_component_module_default()).hh_title,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(H/* default */.Z, {
        h: "h2",
        children: ["\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 - ", page && page.category]
      }), page && page.hh && /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
        color: "red",
        size: "m",
        children: "hh.ru"
      })]
    }), firstCategory == top_page_interface/* TopLevelCategory.Courses */.R.Courses && /*#__PURE__*/jsx_runtime_.jsx(Hhdata, TopPage_component_objectSpread({}, page.hh)), page && page.advantages.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(q_components_Advantages_Advantages, {
      advantages: page.advantages
    }), page && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (TopPage_component_module_default()).seoText,
      dangerouslySetInnerHTML: {
        __html: page.seoText
      }
    }), page && /*#__PURE__*/jsx_runtime_.jsx(Skills_Skills, {
      tags: page.tags,
      tagsTitle: page.tagsTitle
    })]
  });
};

/* harmony default export */ const TopPage_component = (TopPageComponent);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[type]/[alias].tsx




function _alias_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _alias_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _alias_ownKeys(Object(source), true).forEach(function (key) { _alias_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _alias_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _alias_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _alias_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _alias_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _alias_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function TopPage(_ref) {
  let {
    page,
    product
  } = _ref,
      props = _alias_objectWithoutProperties(_ref, ["page", "product"]);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [page && product && /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: page.metaTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: page.metaDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: page.metaTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: page.metaDescription
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "article"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TopPage_component, _alias_objectSpread({
      product: product,
      page: page
    }, props))]
  });
}

/* harmony default export */ const _alias_ = ((0,Layout/* default */.Z)(TopPage));
const getStaticPaths = async () => {
  let paths = [];

  for (const page of helpers/* firstLevelMenu */.c_) {
    const resMenu = await fetch(Api/* Api.topPage.find */.V.topPage.find, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstCategory: page.id
      })
    });
    const menu = await resMenu.json();
    paths = paths.concat(menu.flatMap(m => m.pages.map(p => `/${page.route}/${p.alias}`)));
  }

  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = helpers/* firstLevelMenu.find */.c_.find(m => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  try {
    const resMenu = await fetch(Api/* Api.topPage.find */.V.topPage.find, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstCategory: firstCategoryItem.id
      })
    });
    const menu = await resMenu.json();

    if (menu.length == 0) {
      return {
        notFound: true
      };
    }

    const resPage = await fetch(Api/* Api.topPage.byAlias */.V.topPage.byAlias + params.alias);
    const page = await resPage.json();
    const resProduct = await fetch(Api/* Api.product.find */.V.product.find, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: page.category,
        limit: 10
      })
    });
    const product = await resProduct.json();
    return {
      props: {
        menu,
        page,
        product,
        firstCategory: firstCategoryItem.id
      }
    };
  } catch {
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ 4022:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "TopPage_component_title__Vkgq6",
	"hh_title": "TopPage_component_hh_title__2O-ZX",
	"hh_data": "TopPage_component_hh_data__2jAMc",
	"seoText": "TopPage_component_seoText__1yD35"
};


/***/ }),

/***/ 6007:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Advantages_wrapper__1RfGb",
	"description": "Advantages_description__3hBe6",
	"title": "Advantages_title__pih-v"
};


/***/ }),

/***/ 3766:
/***/ ((module) => {

// Exports
module.exports = {
	"hr": "Divider_hr__1qSCc"
};


/***/ }),

/***/ 231:
/***/ ((module) => {

// Exports
module.exports = {
	"hh": "Hhdata_hh__IzHrM",
	"count": "Hhdata_count__3YN-S",
	"salary": "Hhdata_salary__qpmac",
	"title": "Hhdata_title__3vnZe",
	"countValue": "Hhdata_countValue__25dKz",
	"salaryValue": "Hhdata_salaryValue__26DGf",
	"rate": "Hhdata_rate__3ZQ4A",
	"filled": "Hhdata_filled__2qHu_"
};


/***/ }),

/***/ 8189:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Products_product__1gHQO",
	"logo": "Products_logo__4dsTz",
	"title": "Products_title__3k286",
	"tags": "Products_tags__oDsqz",
	"price": "Products_price__tJmw5",
	"priceTitle": "Products_priceTitle__VD6hW",
	"credit": "Products_credit__1co41",
	"creditTitle": "Products_creditTitle__3WOEK",
	"rating": "Products_rating__K7LQW",
	"reviewCount": "Products_reviewCount__2VUAA",
	"description": "Products_description__QPpcY",
	"hr": "Products_hr__2sQOT",
	"hr2": "Products_hr2__AQzbY",
	"actions": "Products_actions__2bhNw",
	"feature": "Products_feature__3BI2Z",
	"advBlock": "Products_advBlock__3fV06",
	"oldPrice": "Products_oldPrice__3sJdF",
	"month": "Products_month__13lyD",
	"advantagesTitle": "Products_advantagesTitle__1Ybn3",
	"disadvantages": "Products_disadvantages__2jKHG",
	"advantages": "Products_advantages__Wpxye",
	"characteristics": "Products_characteristics__3XFSX",
	"characteristicsDoth": "Products_characteristicsDoth__11bU1",
	"characteristicsName": "Products_characteristicsName__3MIc4",
	"reviews": "Products_reviews__2ZMYW",
	"closed": "Products_closed__3KSTK",
	"opened": "Products_opened__2KZif"
};


/***/ }),

/***/ 2985:
/***/ ((module) => {

// Exports
module.exports = {
	"addReview": "ReviewForm_addReview__16boK",
	"mark": "ReviewForm_mark__1qrON",
	"submit": "ReviewForm_submit__1qJNj",
	"moderation": "ReviewForm_moderation__1Zqok",
	"avtName": "ReviewForm_avtName__35CfM",
	"avtTitle": "ReviewForm_avtTitle__2dtjr",
	"avtText": "ReviewForm_avtText__1E_cH",
	"success": "ReviewForm_success__1yVrR",
	"successTitle": "ReviewForm_successTitle__bmBaG",
	"close": "ReviewForm_close__1txOp"
};


/***/ }),

/***/ 4371:
/***/ ((module) => {

// Exports
module.exports = {
	"watchReview": "Reviews_watchReview__Yx2De",
	"logo": "Reviews_logo__3-ZdE",
	"name": "Reviews_name__1ioKs",
	"title": "Reviews_title__2BS9G",
	"description": "Reviews_description__yTaMy",
	"createdAt": "Reviews_createdAt__2EBO9",
	"rating": "Reviews_rating__1rrAi",
	"hr": "Reviews_hr__2ZC1T"
};


/***/ }),

/***/ 3446:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 5609:
/***/ ((module) => {

// Exports
module.exports = {
	"sort_rate": "Sort_sort_rate__szF3i",
	"sort_icon": "Sort_sort_icon__2LE2z",
	"active": "Sort_active__1C9iV",
	"sortName": "Sort_sortName__4XBt5"
};


/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3879:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,228,818,887,827,803], () => (__webpack_exec__(9395)));
module.exports = __webpack_exports__;

})();