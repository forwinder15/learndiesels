webpackHotUpdate("commons",{

/***/ "./src/templates/home.js":
/*!*******************************!*\
  !*** ./src/templates/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index */ "./src/components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _jsxFileName = "/Users/johncoker/newprojects/blue-lime/src/templates/home.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





function Post(props) {
  var _this = this;

  var display_posts = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.orderBy(Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getPages"])(props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_3__["Layout"], Object.assign({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(props, 'pageContext.frontmatter.sections'), function (section, section_idx) {
    var GetSectionComponent = _components_index__WEBPACK_IMPORTED_MODULE_3__["default"][lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(section, 'component')];

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GetSectionComponent, Object.assign({
      key: section_idx
    }, props, {
      section: section,
      site: props.pageContext.site,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "post-feed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(display_posts, function (post, post_idx) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      key: post_idx,
      className: "post post-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-card-inside",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'frontmatter.thumb_img_path') && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "post-card-thumbnail",
      to: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["safePrefix"])(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'url')),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "thumbnail",
      src: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["safePrefix"])(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'frontmatter.thumb_img_path')),
      alt: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'frontmatter.title'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-card-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "post-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "post-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["safePrefix"])(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'url')),
      rel: "bookmark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 46
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'frontmatter.title')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "post-excerpt",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'frontmatter.excerpt')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "read-more",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "button inverse",
      to: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["safePrefix"])(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.get(post, 'url')),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, "Read more"))))));
  })));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Post, "Post", "/Users/johncoker/newprojects/blue-lime/src/templates/home.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.c6048afb102bde085242.hot-update.js.map