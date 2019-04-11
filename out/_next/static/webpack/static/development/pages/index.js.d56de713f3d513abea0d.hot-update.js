webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ListItem/ListItem.js":
/*!*****************************************!*\
  !*** ./components/ListItem/ListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ListItem_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItem.css */ "./components/ListItem/ListItem.css");
/* harmony import */ var _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ListItem_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Animation_Animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Animation/Animation */ "./components/Animation/Animation.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var react_pose_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pose-text */ "./node_modules/react-pose-text/dist/react-pose-text.es.js");






var _jsxFileName = "/Users/stef/code/portfolio/components/ListItem/ListItem.js";





 // const props = tween({
//   duration: 5000,
//   flip: 2,
//   ease: easing.cubicBezier(0.785, 0.135, 0.15, 0.86)
// });

var Slide = react_pose__WEBPACK_IMPORTED_MODULE_9__["default"].div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 600,
    transition: {
      x: {
        type: "spring"
      },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      x: {
        type: "spring"
      },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});
var Title = react_pose__WEBPACK_IMPORTED_MODULE_9__["default"].div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 600,
    transition: {
      x: {
        type: "spring"
      },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      x: {
        type: "spring"
      },
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

var ListItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ListItem, _React$Component);

  function ListItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListItem).call(this, props));
    _this.state = {
      date: new Date(),
      slide: 1,
      expand: false,
      item: undefined
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onitemClick(this.props.data);
    }
  }, {
    key: "getHostName",
    value: function getHostName(url) {
      if (url === undefined) return null;
      var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

      if (match != null && match.length > 2 && typeof match[2] === "string" && match[2].length > 0) {
        return match[2];
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      // This syntax ensures `this` is bound within handleClick
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_9__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Slide, {
        key: this.props.index,
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.slide,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.props.data.Date)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title, {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.props.data.Project)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.types,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.props.data.Tech), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.props.data.Description), this.props.data.Collaborators && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Collaborators:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), " ", this.props.data.Collaborators), this.props.data.Url && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Visit:"), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: this.props.data.Url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, this.getHostName(this.props.data.Url))))));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ })

})
//# sourceMappingURL=index.js.d56de713f3d513abea0d.hot-update.js.map