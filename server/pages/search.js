(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 2400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./layout/Layout.tsx + 15 modules
var Layout = __webpack_require__(4033);
// EXTERNAL MODULE: ./helpers/Api.ts
var Api = __webpack_require__(1914);
// EXTERNAL MODULE: ./page-components/Search/Search.component.module.css
var Search_component_module = __webpack_require__(624);
var Search_component_module_default = /*#__PURE__*/__webpack_require__.n(Search_component_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./q-components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(3391);
// EXTERNAL MODULE: ./q-components/H/H.tsx
var H = __webpack_require__(2610);
// EXTERNAL MODULE: ./q-components/Card/Card.tsx
var Card = __webpack_require__(2117);
// EXTERNAL MODULE: ./q-components/Tag/Tag.tsx
var Tag = __webpack_require__(1395);
;// CONCATENATED MODULE: ./page-components/Search/Search.svg
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgSearch(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 34,
    height: 34,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M33.483 30.969l-8.381-8.417c2.154-2.473 3.335-5.585 3.335-8.825C28.437 6.158 22.06 0 14.22 0S0 6.158 0 13.727c0 7.57 6.379 13.728 14.219 13.728 2.943 0 5.748-.857 8.146-2.484l8.445 8.48c.353.354.828.549 1.337.549a1.88 1.88 0 001.285-.5 1.75 1.75 0 00.051-2.531zM14.22 3.58c5.795 0 10.51 4.552 10.51 10.146 0 5.595-4.715 10.147-10.51 10.147s-10.51-4.552-10.51-10.146C3.71 8.133 8.424 3.58 14.22 3.58z",
    fill: "#fff"
  })));
}

/* harmony default export */ const Search = (SvgSearch);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./q-components/Paragraph/Paragraph.tsx
var Paragraph = __webpack_require__(8099);
// EXTERNAL MODULE: ./helpers/helpers.tsx + 4 modules
var helpers = __webpack_require__(7808);
;// CONCATENATED MODULE: ./page-components/Search/Search.component.tsx














const SearchComponent = ({
  product,
  query
}) => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Search_component_module_default()).searchTitle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Search_component_module_default()).ico,
        children: /*#__PURE__*/jsx_runtime_.jsx(Search, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(H/* default */.Z, {
        h: "h1",
        children: "\u041F\u043E\u0438\u0441\u043A"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Paragraph/* default */.Z, {
      children: ["\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 ", query, " \u043D\u0430\u0439\u0434\u0435\u043D\u043E ", product.length, " ", (0,helpers/* declOfNumber */.rQ)(product.length, ['страница', 'страницы', 'страниц'])]
    }), product.map(el => /*#__PURE__*/jsx_runtime_.jsx(Card/* default */.Z, {
      color: "white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Search_component_module_default()).itemsProduct,
        children: [el.title, /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
          color: "ghost",
          children: el.secondCategory
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          onClick: () => router.push(`http://localhost:3000/courses/${el.alias}`),
          className: (Search_component_module_default()).go,
          appearance: "primary",
          children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438"
        })]
      })
    }, el._id))]
  });
};

/* harmony default export */ const Search_component = (SearchComponent);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/search.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function search_Search(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Search_component, _objectSpread({}, props))]
  });
}

/* harmony default export */ const search = ((0,Layout/* default */.Z)(search_Search));
const getServerSideProps = async params => {
  var _params$query$q;

  if (!params.query.q) {
    return {
      notFound: true
    };
  }

  const query = (_params$query$q = params.query.q) === null || _params$query$q === void 0 ? void 0 : _params$query$q.toString();
  const resProduct = await fetch(Api/* Api.search.create */.V.search.create + query);
  const product = await resProduct.json();
  const firstCategory = 0;
  const resMenu = await fetch(Api/* Api.topPage.find */.V.topPage.find, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstCategory
    })
  });
  const menu = await resMenu.json();

  if (menu.length == 0) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      menu,
      product,
      firstCategory,
      query
    }
  };
};

/***/ }),

/***/ 624:
/***/ ((module) => {

// Exports
module.exports = {
	"searchTitle": "Search_component_searchTitle__G8cK2",
	"ico": "Search_component_ico__1lqoo",
	"itemsProduct": "Search_component_itemsProduct__1Pky_",
	"go": "Search_component_go__3Q-6p"
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,818,887,803,99], () => (__webpack_exec__(2400)));
module.exports = __webpack_exports__;

})();