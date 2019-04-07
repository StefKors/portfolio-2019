((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Animation/Animation.js":
/*!*******************************************!*\
  !*** ./components/Animation/Animation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Animation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Animation.css */ "./components/Animation/Animation.css");
/* harmony import */ var _Animation_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Animation_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");








var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/Animation/Animation.js";




var Animation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Animation, _React$Component);

  function Animation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Animation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Animation).call(this, props));
    _this.state = {
      isOpen: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("event", this.props.imageFolder);
    }
  }, {
    key: "imageExists",
    value: function imageExists(url, callback) {
      var img = new Image();

      img.onload = function () {
        callback(true);
      };

      img.onerror = function () {
        callback(false);
      };

      img.src = url;
    }
  }, {
    key: "random",
    value: function random(min, max) {
      var r = Math.floor(Math.random() * max) + min;
      return r;
    }
  }, {
    key: "loaded",
    value: function loaded(i) {
      this.setState({
        show: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.imageFolder) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: _Animation_css__WEBPACK_IMPORTED_MODULE_9___default.a.afbeelding_wrapper,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(this.props.imageFolder.Images)).map(function (e, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Img, {
            src: "/static/".concat(_this2.props.imageFolder.Number, "/img_").concat(i + 1, ".png"),
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          });
        }));
      } else {
        return null;
      }
    }
  }]);

  return Animation;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var Img =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Img, _React$Component2);

  function Img() {
    var _getPrototypeOf2;

    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Img);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Img)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "state", {
      loaded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3), "onLoad", function () {
      _this3.setState({
        loaded: true
      });

      console.log("Loaded!");
    });

    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Img, [{
    key: "random",
    value: function random(min, max) {
      var r = Math.floor(Math.random() * max) + min;
      return r;
    }
  }, {
    key: "render",
    value: function render() {
      var loaded = this.state.loaded;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: loaded ? _Animation_css__WEBPACK_IMPORTED_MODULE_9___default.a.loaded : "",
        src: this.props.src,
        onLoad: this.onLoad,
        key: this.key,
        style: {
          right: this.random(0, 40) + "vw",
          top: this.random(0, 80) + "vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      });
    }
  }]);

  return Img;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "./components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/Header/Header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Introduction/Introduction.js":
/*!*************************************************!*\
  !*** ./components/Introduction/Introduction.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Introduction_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Introduction.css */ "./components/Introduction/Introduction.css");
/* harmony import */ var _Introduction_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Introduction_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _data_db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/db.json */ "./data/db.json");
var _data_db_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/db.json */ "./data/db.json", 1);
var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/Introduction/Introduction.js";



var Title = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  load: {
    x: -200,
    opacity: 0,
    delay: 600,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  loaded: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
}); // <Title initialPose="load" pose="loaded">
// </Title>



var Introduction = function Introduction(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Introduction_css__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Introduction_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Stef Kors is a Developer with a background in Design and User Research. He likes to work on the intersection of design and code, building great websites with great people."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Together with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://dkdkpl.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Victoria"), " and", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://titusknegtel.nl",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Titus"), " ", "he runs ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.oneacre.online",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "oneacre.online"), ". A online publisher for experimental long-form writing."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "He has worked at", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.ontwerpwerk.nl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Ontwerpwerk"), ". Before his current job he worked and interned at", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.publishinglab.nl/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "PublishingLab"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.bynder.com/en/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Bynder"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://www.mangrove.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Mangrove"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "http://www.vandencollection.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Studio Van Den"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "In he completed a bachelor in Communication and Multimedia Design at The Hague University of Applied Sciences with minors in Service Design and Co-Design. He likes to work design, prototype and build things \u2014 online and offline \u2014 that work well and efficiently.")));
};

Introduction.defaultProps = {
  count: "098897",
  string: "testing"
};
/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./components/List/List.js":
/*!*********************************!*\
  !*** ./components/List/List.js ***!
  \*********************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _List_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./List.css */ "./components/List/List.css");
/* harmony import */ var _List_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_List_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_db_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/db.json */ "./data/db.json");
var _data_db_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/db.json */ "./data/db.json", 1);
/* harmony import */ var _ListItem_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ListItem/ListItem */ "./components/ListItem/ListItem.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");







var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/List/List.js";






var SlideCounter = react_pose__WEBPACK_IMPORTED_MODULE_12__["default"].div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 900,
    transition: {
      duration: 700,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 700,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});
var ListWrapper = react_pose__WEBPACK_IMPORTED_MODULE_12__["default"].div({
  loaded: {
    x: '0%',
    staggerChildren: 50
  },
  load: {
    x: '0%'
  }
});
var ListItemWrapper = react_pose__WEBPACK_IMPORTED_MODULE_12__["default"].div({
  loaded: {
    opacity: 1
  },
  load: {
    opacity: 0
  }
});

var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(List, _React$Component);

  function List(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (value) {
      _this.props.onitemClick(value);
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _List_css__WEBPACK_IMPORTED_MODULE_8___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ListWrapper, {
        className: _List_css__WEBPACK_IMPORTED_MODULE_8___default.a.projectList,
        initialPose: "load",
        pose: "loaded",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, _data_db_json__WEBPACK_IMPORTED_MODULE_9__.map(function (post, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ListItemWrapper, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: post,
          index: index,
          key: index,
          isOpen: "open",
          className: _List_css__WEBPACK_IMPORTED_MODULE_8___default.a.item,
          onitemClick: _this2.handleClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }));
      })));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

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






var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/ListItem/ListItem.js";





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
      }, this.props.data.Date), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: this.props.data.Url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, this.getHostName(this.props.data.Url))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title, {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.props.data.Project)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.types,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, this.props.data.Tech), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: _ListItem_css__WEBPACK_IMPORTED_MODULE_7___default.a.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, this.props.data.Description))));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./components/Vertical/Vertical.js":
/*!*****************************************!*\
  !*** ./components/Vertical/Vertical.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Vertical_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vertical.css */ "./components/Vertical/Vertical.css");
/* harmony import */ var _Vertical_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Vertical_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
var _jsxFileName = "/Users/stef/Code/portfolio-next.js/components/Vertical/Vertical.js";



var Title = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
  load: {
    x: -200,
    opacity: 0,
    delay: 600,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  },
  loaded: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 500,
      ease: [0.785, 0.135, 0.15, 0.86]
    }
  }
});

var Introduction = function Introduction(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Vertical_css__WEBPACK_IMPORTED_MODULE_1___default.a.vertical,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Vertical_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: " https://twitter.com/stef_kors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:stef.kors+website@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/stefkors/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "linkedin")));
};

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./data/db.json":
/*!**********************!*\
  !*** ./data/db.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, default */
/***/ (function(module) {

module.exports = [{"Number":22,"Url":"https://www.brabantinnovationday.com","Project":"Brabant Innovation Day","Description":"For the provice of Brabant we designed and developed an event site for the Brabant Innovation Day. An international event to promote Brabant technology and companies around the world.","Collaborators":"Jeffrey Grin","Tech":"Drupal 8, Javascript, Sass","Type":"Website","Images":4,"Date":2019},{"Number":21,"Url":"https://www.florisvermist.nl","Project":"florisvermist.nl","Description":"Personal site for Theater technician Floris Vermist. Featuring projects, tags, highlights and imagegalleries.","Collaborators":"","Type":"Website","Tech":"Kirby CMS, Sass","Images":8,"Date":2018},{"Number":20,"Url":"https://www.oneacre.online/?id=lisa-stef-J1541248969078","Project":"Meaning Seeking Animals","Description":"As a result, the publication borrows from cartography, as it sets the reader adrift on a topographic map of sentences and paragraphs “as it is high time for cartography to take its place among the arts and for the atlas to be recognised as literature, for it is more than worthy of its original name, theatrum ordis terrarum, the theatre of the world”.","Collaborators":"Lisa van Casand, Victoria Douka-Doukopoulou and Titus Knegtel","Tech":"EJS, Node.js, MongoDB Mollie Payments","Type":"Website","Images":16,"Date":2018},{"Number":19,"Url":"https://www.oneacre.online/?id=sophieeline-stef-I1541252124421","Project":"Radio, Techno, Fossil","Description":"The publication tunes into our highly textured and complex radio environment by subjecting itself to the unpredictability, seasonality, solar circles of the ionosphere and the current location of the reader. The publication embeds itself by using real time ionospheric measurements to determine how much publication and how much environment arrives.","Collaborators":"Sophie Dyer, Eline Benjaminsen, Victoria Douka-Doukopoulou and Titus Knegtel","Tech":"EJS, Node.js, MongoDB Mollie Payments, Weather API, Mobile Gyroscope API","Type":"Website","Images":11,"Date":2018},{"Number":18,"Url":"https://www.publishorperish.pro","Project":"Publish or Perish!","Description":"Do you feel a sense of dread when you open Adobe Indesign or Microsoft Word? If so, Publish or Perish! is the Desktop Publishing tool that’s right for you. With its pressure cooking countdown, a series of sudden disruptions, and achievements to get, Publish or Perish! makes Desktop Publishing challenging like it was back in the days. Publish or Perish! will catapult you to a place where software meets the unexpected. \n \n Publish or Perish is the name for the research and creation project that Silvio Lorusso and Stef Kors, on behalf of the PublishingLab of Amsterdam, have developed for Foto Colectania. This commission has materialized in a free online digital content publishing web/app with the capacity to publish both images and texts.\n\n The work was presented in Barcelona during a Printing Party at Foto Colectania as part of the DONE3 festival.","Collaborators":"Silvio Lorusso","Tech":" Node.js, MongoDB, Fabric.js","Type":"Game","Images":9,"Date":2018},{"Number":17,"Url":"https://www.oneacre.online/?id=karina-stef-D1541252022930","Project":"Artificial Intelligence never has a headache","Description":"The publication imagines a possible future format for tech related theory which — with the constant updates of technology— tend to see the edge of obsolescence straight out of the publisher’s door. Borrowing from version technologies and software lingo, the publication explores what an edition would mean or look like when it occurs as often as update rollups.","Collaborators":"Karina Zavidova, Victoria Douka-Doukopoulou and Titus Knegtel","Tech":"EJS, Node.js, MongoDB Mollie Payments","Type":"Website","Images":16,"Date":2018},{"Number":16,"Project":"Biometric Interface","Description":"For Yun Ingrid Eel's performance On Illegibility I built an Biometric Interface which shows RACE, SEX and AGE of the person via facial recognition. With this work Yun Ingrid Eel performed at Sonic Acts Academy 2018 in Amsterdam.","Collaborators":"","Type":"Interface","Tech":"Canvas, Affectiva API","Images":3,"Date":2018},{"Number":15,"Url":"http://www.artscienceforum.nl","Project":"artscienceforum.nl","Description":"ArtScience Forum (ASF) is a platform for open discussion and critical reflection on ArtScience practice(s) today. This website features five different types of articles which are all available directly from the homepage. Using the Kirby CMS makes it easy to add, remove and modify articles.","Collaborators":"","Type":"Website","Tech":"Kirby CMS","Images":9,"Date":2018},{"Number":14,"Url":"https://www.joostkors.com","Project":"joostkors.com","Description":"A personal site for Joost Kors. Based around his projects in the field of architecture. The site contains of a homepage, project page and archive.","Collaborators":"","Tech":"HTML, CSS, Javascript","Type":"Website","Images":7,"Date":2018},{"Number":13,"Url":"https://www.oneacre.online/?id=ingrid-stef-O1541251596681","Project":"Poetics and Politics of Erasure","Description":"Poetics and Politics of Erasure is a multidisciplinary essay on the aesthetics and politics of erasure. The framework for erasure is drawn from a critique of accelerationism, the video game Katamari Damacy, and internet aesthetics. It begins by investigating power relations in dominant archival practices, before tracing how memory storage technology (from the written word to the internet) reinforces hierarchical models of knowledge, and finally posing the generative potential of erasure in alternative models of knowing, doing, and being. It does so by locating strategies of erasure in audio, visual, and digital cultures in the forms of: erasure/forgetting, translation/mutation, and recontextualizing/remythologizing. oneacre.online had a small feature in the Sonic Acts Academy book.","Collaborators":"Ingrid Eel, Victoria Douka-Doukopoulou and Titus Knegtel","Tech":"EJS, Node.js, MongoDB Mollie Payments","Type":"Website","Images":17,"Date":2017},{"Number":12,"Project":"Textual and morphological observation of comments sections","Description":"This zine is a series that exist out of the four parts: Texts, Taxonomy, Specimens & Community Guidelines. Showing the information — fragmentarily and outside of their original contexts, throughout the four parts — enables us to highlight the individual.","Collaborators":"Mateo Broillet, Thijmen van Brunschot, Nina Fistal and Victoria Douka-Doukopoulou","Type":"Book","Tech":"Indesign, Research","Images":0,"Date":2017},{"Number":11,"Project":"WPG Media","Description":"In a collaboration between the Hogeschool van Amsterdam's PublishingLab and WPG media our team is doing a project about storytelling, transmedia and the development of new ways of reading. We are working on how to maximize the reading experience and the attention accompanying a new book to appear.","Collaborators":"Thijmen van Brunschot","Type":"Website","Tech":"Sketching, User-Research, Prototyping","Images":0,"Date":2017},{"Number":10,"Url":"https://stefkors.github.io/FlexiCorn/index.html","Project":"flexicorn.com","Description":"Business development for Flexicorn Corp. Art project by Luke Boorman, exhibited at the graduation festival at The Royal Academy of Art, The Hague. (selfhosted backup)","Collaborators":"Victoria Douka-Doukopoulou, Luke Boorman","Type":"Website","Tech":"HTML, CSS, Javascript","Images":21,"Date":2017},{"Number":9,"Project":"Where the money is made, transaction counter","Description":"For Eline Benjaminsen's work \"Where the money is made\" I made a single page website that illustrates the speed of hi-frequency trading transactions. Exhibited at the graduation festival at The Royal Academy of Art, The Hague and the Nederlands Fotografie Museum","Collaborators":"","Type":"Website","Tech":"HTML, CSS, Javascript","Images":2,"Date":2017},{"Number":8,"Project":"Bynder Onboarding User Experience","Description":"User research and User Experience Design for the onboarding process of Bynder Orbit. While developing this feature I interviewed a large number of clients..","Collaborators":"Bynder design team","Type":"User Experience Design","Tech":"Sketching, User-Research, Prototyping","Images":0,"Date":2017},{"Number":7,"Url":"http://www.dkdkpl.com/og_site/index.html","Project":"dkdkpl.com/algae","Description":"This site was built to showcase the story and emotions that occured during the research of Victoria Douka-Doukopoulou into Algae.","Collaborators":"Victoria Douka-Doukopoulou","Type":"Website","Tech":"HTML, CSS, Javascript","Images":17,"Date":2017},{"Number":6,"Url":"https://www.oneacre.online/announcement","Project":"part preface / part acknowledgements","Description":"oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilize the omnidirectional website space to seed works.","Collaborators":"Victoria Douka-Doukopoulou and Titus Knegtel","Type":"Website","Tech":"EJS, Node.js, MongoDB Mollie Payments","Images":3,"Date":2017},{"Number":5,"Project":"SwiftPark","Description":"For ProRail we design the trainstation of the future. Co-Designing with the train commuters we developed SwiftPark, the easiest way to get from and to the trainstation.","Collaborators":"Guido Theelen, Joep van den Broeke, Yvonne Butselaar and Richard Tekel","Type":"Service Design","Tech":"Sketching, User-Research, Prototyping","Images":0,"Date":2016},{"Number":4,"Project":"Reminiscence room","Description":"Project developed in with the support of Jeroen Arendsen from Sherpa. Reminiscing of familiar experiences can be used as active therapy for clients who are in the early stages of dementia. Especially with clients who have mental disabilities, where dementia could start as early as 40 years old. Our team designed a workflow to capture, edit and organise the experiences in a way where the patients of Sherpa are involved in most of the steps.","Collaborators":"Eoin O Mahony, Floor Rooijakkers, Janis Seldenthuis and Kendra Penniston","Type":"Service Design","Tech":"Sketching, User-Research, Prototyping","Images":0,"Date":2016},{"Number":3,"Project":"Notes/Research App","Description":"In the spring of 2016 I was asked to design an application that could help students and designers keep track of their research and progress. Through design research I was able to determine that most students, artists and designers are using software that isn’t optimised for their way of working. For them I designed a digital notebook to collect and expand their research","Collaborators":"Victoria Douka-Doukopoulou","Type":"App Design","Tech":"Service Design, Sketching, User-Research","Images":5,"Date":2016},{"Number":2,"Url":"https://www.hartstichting.nl","Project":"hartstichting.nl","Description":"As a design intern at Mangrove I worked closely with designer, Ivar van den Broek on Hartstichting.nl. Mangrove and the Dutch Hart Foundation have been working together for a number of years. During this project I was responsible for designing the website, interpreting user-research feedback and iterating the design.","Collaborators":"Ivar van den Broek","Type":"Website","Tech":"Sketch, Invision","Images":4,"Date":2016},{"Number":1,"Url":"https://github.com/StefKors/SyntaxCheck","Project":"SyntaxCheck Safari-plugin","Description":"Safari Extension for Syntax Checking on MDN, currently a MVP. This extension makes it easy to search Mozilla Developer Network. Just click the icon and search.","Collaborators":"","Type":"Safari Extension","Tech":"Javascript","Images":0,"Date":2016}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@popmotion/easing/dist/easing.es.js ***!
  \**********************************************************/
/*! exports provided: reversed, mirrored, createReversedEasing, createMirroredEasing, createExpoIn, createBackIn, createAnticipateEasing, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return mirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReversedEasing", function() { return createReversedEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirroredEasing", function() { return createMirroredEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return createAnticipateEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reversed(easeIn);
var easeInOut = /*#__PURE__*/mirrored(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reversed(circIn);
var circInOut = /*#__PURE__*/mirrored(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reversed(backIn);
var backInOut = /*#__PURE__*/mirrored(backIn);
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    calcSampleValues();
    var resolver = function (aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}




/***/ }),

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@popmotion/popcorn/dist/popcorn.es.js ***!
  \************************************************************/
/*! exports provided: createAnticipateEasing, createBackIn, createExpoIn, cubicBezier, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, reversed, mirrored, angle, applyOffset, clamp, conditional, degreesToRadians, distance, interpolate, isPoint, isPoint3D, mix, mixArray, mixColor, mixComplex, pipe, pointFromVector, progress, radiansToDegrees, smooth, smoothFrame, snap, springForce, springForceExpo, springForceLinear, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForce", function() { return springForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceExpo", function() { return springForceExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceLinear", function() { return springForceLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap$1; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createAnticipateEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["cubicBezier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["reversed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["mirrored"]; });







var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };

var radiansToDegrees = (function (radians) { return (radians * 180) / Math.PI; });

var angle = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
});

var applyOffset = (function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
});

var curryRange = (function (func) { return function (min, max, v) { return (v !== undefined ? func(min, max, v) : function (cv) { return func(min, max, cv); }); }; });

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);

var conditional = (function (check, apply) { return function (v) {
    return check(v) ? apply(v) : v;
}; });

var degreesToRadians = (function (degrees) { return (degrees * Math.PI) / 180; });

var isPoint = (function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
});

var isPoint3D = (function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
});

var distance1D = function (a, b) { return Math.abs(a - b); };
var distance = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
});

var progress = (function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});

var mix = (function (from, to, progress) {
    return -progress * from + progress * to + from;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var mixColor = (function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be Hex and/or RGBA, or both must be HSLA');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
});

var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = (function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
});

var mixArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) {
        var toThis = to[i];
        if (isNum(fromThis)) {
            return function (v) { return mix(fromThis, toThis, v); };
        }
        else if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(fromThis)) {
            return mixColor(fromThis, toThis);
        }
        else {
            return mixComplex(fromThis, toThis);
        }
    });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixComplex = function (from, to) {
    var valueTemplate = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(from);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(valueTemplate(from) === style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
    return pipe(mixArray(style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(from), style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(to)), valueTemplate);
};

var mixNumber = curryRange(mix);
var getMixer = function (v) {
    return typeof v === 'number'
        ? mixNumber
        : style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(v)
            ? mixColor
            : mixComplex;
};
var createMixers = function (output, ease) {
    return Array(output.length - 1)
        .fill(getMixer(output[0]))
        .map(function (factory, i) {
        var mixer = factory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            return pipe(easingFunction, mixer);
        }
        else {
            return mixer;
        }
    });
};
var fastInterpolate = function (_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer(progress(from, to, v)); };
};
var slowInterpolate = function (input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
};
var interpolate = (function (input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, clamp = _c === void 0 ? true : _c, ease = _b.ease;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === input.length - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = input.slice();
        output = output.slice();
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease);
    var interpolate = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return clamp
        ? pipe(clamp$1(input[0], input[inputLength - 1]), interpolate)
        : interpolate;
});

var pointFromVector = (function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
});

var toDecimal = (function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
});

var smoothFrame = (function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(prevValue +
        (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
});

var smooth = (function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta
            ? smoothFrame(previousValue, v, timeDelta, strength)
            : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
});

var snap = (function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
});

var identity = function (v) { return v; };
var springForce = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = identity; }
    return curryRange(function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0
            ? origin + springModifiedDisplacement
            : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);

var velocityPerFrame = (function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
});

var velocityPerSecond = (function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
});

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
var wrap$1 = curryRange(wrap);

var clampProgress = clamp$1(0, 1);
var steps = (function (steps, direction) {
    if (direction === void 0) { direction = 'end'; }
    return function (progress) {
        progress =
            direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
});




/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_create-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.from.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var timestamp = Date.now();
        var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

var createStep = (function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === 'function', 'Argument must be a function');
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive)
                toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer)
                    numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
});

var StepId;
(function (StepId) {
    StepId["Read"] = "read";
    StepId["Update"] = "update";
    StepId["Render"] = "render";
    StepId["PostRender"] = "postRender";
    StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = (1 / 60) * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    StepId.Read,
    StepId.Update,
    StepId.Render,
    StepId.PostRender
];
var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
var _a = stepsOrder.reduce(function (acc, key) {
    var step = createStep(setWillRunNextFrame);
    acc.sync[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) { keepAlive = false; }
        if (immediate === void 0) { immediate = false; }
        if (!willRunNextFrame)
            startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    acc.cancelSync[key] = function (process) { return step.cancel(process); };
    acc.steps[key] = step;
    return acc;
}, {
    steps: {},
    sync: {},
    cancelSync: {}
}), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
var processStep = function (stepId) { return steps[stepId].process(frame); };
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed)
        defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
var getFrameData = function () { return frame; };

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: warning, invariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
var HEY_LISTEN = 'Hey, listen! ';
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(HEY_LISTEN + message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(HEY_LISTEN.toUpperCase() + message);
        }
    };
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next-server/dist/lib/mitt.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/mitt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = (0, _create.default)(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next-server/dist/lib/mitt.js"));

var shallow_equals_1 = __importDefault(__webpack_require__(/*! ./shallow-equals */ "./node_modules/next-server/dist/lib/router/shallow-equals.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next-server/dist/lib/utils.js");

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as) {
    var _this = this;

    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        err = _ref.err;

    (0, _classCallCheck2.default)(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', url_1.format({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (!_this._beforePopState(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;

    this._beforePopState = function () {
      return true;
    };

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', url_1.format({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _assign.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function () {
      var _reload = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(route) {
        var pathname, query, url, as, routeInfo, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

                as = window.location.pathname + window.location.search + window.location.hash;
                Router.events.emit('routeChangeStart', url);
                _context.next = 10;
                return this.getRouteInfo(route, pathname, query, as);

              case 10:
                routeInfo = _context.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.notify(routeInfo);

                if (!error) {
                  _context.next = 18;
                  break;
                }

                Router.events.emit('routeChangeError', error, url);
                throw error;

              case 18:
                Router.events.emit('routeChangeComplete', url);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reload(_x) {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(method, _url, _as, options) {
        var url, as, _url_1$parse, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (0, _typeof2.default)(_url) === 'object' ? url_1.format(_url) : _url;
                as = (0, _typeof2.default)(_as) === 'object' ? url_1.format(_as) : _as; // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = Router._rewriteUrlForNextExport(as);
                }

                this.abortComponentLoad(as); // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context2.next = 10;
                  break;
                }

                Router.events.emit('hashChangeStart', as);
                this.changeState(method, url, as);
                this.scrollToHash(as);
                Router.events.emit('hashChangeComplete', as);
                return _context2.abrupt("return", true);

              case 10:
                _url_1$parse = url_1.parse(url, true), pathname = _url_1$parse.pathname, query = _url_1$parse.query; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url

                if (!this.urlIsNew(as)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeInfo = null;
                Router.events.emit('routeChangeStart', as); // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context2.next = 20;
                  break;
                }

                routeInfo = this.components[route];
                _context2.next = 23;
                break;

              case 20:
                _context2.next = 22;
                return this.getRouteInfo(route, pathname, query, as);

              case 22:
                routeInfo = _context2.sent;

              case 23:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 26;
                  break;
                }

                return _context2.abrupt("return", false);

              case 26:
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);
                this.set(route, pathname, query, as, (0, _assign.default)({}, routeInfo, {
                  hash: hash
                }));

                if (!error) {
                  _context2.next = 33;
                  break;
                }

                Router.events.emit('routeChangeError', error, as);
                throw error;

              case 33:
                Router.events.emit('routeChangeComplete', as);
                return _context2.abrupt("return", true);

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function change(_x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, _require, isValidElementType, ctx, _Component, _ctx;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                routeInfo = null;
                _context3.prev = 1;
                routeInfo = this.components[route];

                if (routeInfo) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context3.t0 = _context3.sent;
                routeInfo = {
                  Component: _context3.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 13;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 13:
                ctx = {
                  pathname: pathname,
                  query: query,
                  asPath: as
                };
                _context3.next = 16;
                return this.getInitialProps(Component, ctx);

              case 16:
                routeInfo.props = _context3.sent;
                this.components[route] = routeInfo;
                _context3.next = 44;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t1 = _context3["catch"](1);

                if (!(_context3.t1.code === 'PAGE_LOAD_ERROR')) {
                  _context3.next = 26;
                  break;
                }

                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.

                _context3.t1.cancelled = true;
                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 26:
                if (!_context3.t1.cancelled) {
                  _context3.next = 28;
                  break;
                }

                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 28:
                _context3.next = 30;
                return this.fetchComponent('/_error');

              case 30:
                _Component = _context3.sent;
                routeInfo = {
                  Component: _Component,
                  err: _context3.t1
                };
                _ctx = {
                  err: _context3.t1,
                  pathname: pathname,
                  query: query
                };
                _context3.prev = 33;
                _context3.next = 36;
                return this.getInitialProps(_Component, _ctx);

              case 36:
                routeInfo.props = _context3.sent;
                _context3.next = 43;
                break;

              case 39:
                _context3.prev = 39;
                _context3.t2 = _context3["catch"](33);
                console.error('Error in error page `getInitialProps`: ', _context3.t2);
                routeInfo.props = {};

              case 43:
                routeInfo.error = _context3.t1;

              case 44:
                return _context3.abrupt("return", routeInfo);

              case 45:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 20], [33, 39]]);
      }));

      function getRouteInfo(_x6, _x7, _x8, _x9) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._beforePopState = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2.default)(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      var _url_1$parse2 = url_1.parse(asPath, true),
          pathname = _url_1$parse2.pathname,
          query = _url_1$parse2.query;

      var _url_1$parse3 = url_1.parse(this.asPath, true),
          curPathname = _url_1$parse3.pathname;

      return curPathname !== pathname || !shallow_equals_1.default(query, this.query);
    }
  }, {
    key: "isShallowRoutingPossible",
    value: function isShallowRoutingPossible(route) {
      return (// If there's cached routeInfo for the route.
        Boolean(this.components[route]) && // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(url) {
        var _url_1$parse4, pathname, route;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (false) {}

                return _context4.abrupt("return");

              case 2:
                _url_1$parse4 = url_1.parse(url), pathname = _url_1$parse4.pathname;
                route = toRoute(pathname);
                return _context4.abrupt("return", this.pageLoader.prefetch(route));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x10) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.fetchRoute(route);

              case 4:
                Component = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context5.abrupt("return", Component);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x11, _x12) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context6.next = 6;
                return utils_1.loadGetInitialProps(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context6.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context6.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context6.abrupt("return", props);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInitialProps(_x13, _x14) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "fetchRoute",
    value: function () {
      var _fetchRoute = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(route) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.pageLoader.loadPage(route));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function fetchRoute(_x15) {
        return _fetchRoute.apply(this, arguments);
      }

      return fetchRoute;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        Router.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _assign.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this2 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this2.subscriptions.delete(fn);
      };
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      var _url$split = url.split('#'),
          _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
          hash = _url$split2[1];

      url = url.replace(/#.*/, '');

      var _url$split3 = url.split('?'),
          _url$split4 = (0, _slicedToArray2.default)(_url$split3, 2),
          path = _url$split4[0],
          qs = _url$split4[1];

      path = path.replace(/\/$/, '');
      var newPath = path; // Append a trailing slash if this path does not have an extension

      if (!/\.[^/]+\/?$/.test(path)) {
        newPath = "".concat(path, "/");
      }

      if (qs) {
        newPath = "".concat(newPath, "?").concat(qs);
      }

      if (hash) {
        newPath = "".concat(newPath, "#").concat(hash);
      }

      return newPath;
    }
  }]);
  return Router;
}();

Router.events = mitt_1.default();
exports.default = Router;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/shallow-equals.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/shallow-equals.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

exports.default = shallowEquals;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next-server/dist/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  return Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var message, props, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            if (Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {});

          case 6:
            _context.next = 8;
            return Component.getInitialProps(ctx);

          case 8:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", props);

          case 11:
            if (props) {
              _context.next = 14;
              break;
            }

            _message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 14:
            return _context.abrupt("return", props);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

exports.loadGetInitialProps = loadGetInitialProps;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fstef%2FCode%2Fportfolio-next.js%2Fpages%2Findex.js!./":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fstef%2FCode%2Fportfolio-next.js%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "./node_modules/next-server/dist/lib/router/router.js"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion-pose/dist/popmotion-pose.es.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var pose_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pose-core */ "./node_modules/pose-core/dist/pose-core.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));

var measureWithoutTransform = function (element) {
    var transform$$1 = element.style.transform;
    element.style.transform = '';
    var bbox = element.getBoundingClientRect();
    element.style.transform = transform$$1;
    return bbox;
};
var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};

var interpolate = popmotion__WEBPACK_IMPORTED_MODULE_0__["transform"].interpolate;
var singleAxisPointer = function (axis) {
    return function (from) {
        var _a;
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["pointer"])((_a = {}, _a[axis] = typeof from === 'string' ? parseFloat(from) : from, _a)).pipe(function (v) {
            return v[axis];
        });
    };
};
var pointerX = /*#__PURE__*/singleAxisPointer('x');
var pointerY = /*#__PURE__*/singleAxisPointer('y');
var createPointer = function (axisPointerCreator, min, max, measurement) {
    return function (transitionProps) {
        var from = transitionProps.from,
            type = transitionProps.type,
            dimensions = transitionProps.dimensions,
            dragBounds = transitionProps.dragBounds;
        var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
        var transformQueue = [];
        if (dragBounds) {
            var resolvedDragBounds_1 = resolveProp(dragBounds, transitionProps);
            if (resolvedDragBounds_1[min] !== undefined) {
                transformQueue.push(function (v) {
                    return Math.max(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[min], type));
                });
            }
            if (resolvedDragBounds_1[max] !== undefined) {
                transformQueue.push(function (v) {
                    return Math.min(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[max], type));
                });
            }
        }
        if (type === style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"]) {
            transformQueue.push(interpolate([0, dimensions.get(measurement)], [0, 100], { clamp: false }), function (v) {
                return v + '%';
            });
        }
        return transformQueue.length ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
    };
};
var just = function (from) {
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["action"])(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        update(from);
        complete();
    });
};
var underDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"])({
        from: from,
        to: to,
        velocity: velocity,
        stiffness: 500,
        damping: 25,
        restDelta: 0.5,
        restSpeed: 10
    });
};
var overDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"])({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
};
var linearTween = function (_a) {
    var from = _a.from,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"])({ from: from, to: to, ease: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["linear"] });
};
var intelligentTransition = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    default: popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"]
};
var dragAction = /*#__PURE__*/__assign({}, intelligentTransition, { x: /*#__PURE__*/createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width), y: /*#__PURE__*/createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height) });
var justAxis = function (_a) {
    var from = _a.from;
    return just(from);
};
var intelligentDragEnd = /*#__PURE__*/__assign({}, intelligentTransition, { x: justAxis, y: justAxis });
var defaultTransitions = /*#__PURE__*/new Map([['default', intelligentTransition], ['drag', dragAction], ['dragEnd', intelligentDragEnd]]);

var animationLookup = {
    tween: popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"],
    spring: popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"],
    decay: popmotion__WEBPACK_IMPORTED_MODULE_0__["decay"],
    keyframes: popmotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"],
    physics: popmotion__WEBPACK_IMPORTED_MODULE_0__["physics"]
};
var linear$1 = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].linear,
    easeIn = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].easeIn,
    easeOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].easeOut,
    easeInOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].easeInOut,
    circIn = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].circIn,
    circOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].circOut,
    circInOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].circInOut,
    backIn = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].backIn,
    backOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].backOut,
    backInOut = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].backInOut,
    anticipate = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].anticipate;
var easingLookup = {
    linear: linear$1,
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut,
    circIn: circIn,
    circOut: circOut,
    circInOut: circInOut,
    backIn: backIn,
    backOut: backOut,
    backInOut: backInOut,
    anticipate: anticipate
};

var auto = {
    test: function (v) {
        return v === 'auto';
    },
    parse: function (v) {
        return v;
    }
};
var valueTypeTests = [style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["vh"], auto];
var testValueType = function (v) {
    return function (type) {
        return type.test(v);
    };
};
var getValueType = function (v) {
    return valueTypeTests.find(testValueType(v));
};

var createPassiveValue = function (init, parent, transform$$1) {
    var raw = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(transform$$1(init));
    parent.raw.subscribe(function (v) {
        return raw.update(transform$$1(v));
    });
    return { raw: raw };
};
var createValue = function (init) {
    var type = getValueType(init);
    var raw = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(init);
    return { raw: raw, type: type };
};
var addActionDelay = function (delay$$1, transition) {
    if (delay$$1 === void 0) {
        delay$$1 = 0;
    }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["chain"])(Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["delay"])(delay$$1), transition);
};
var isCubicBezierArgs = function (args) {
    return typeof args[0] === 'number';
};
var getAction = function (v, _a, _b) {
    var from = _b.from,
        to = _b.to,
        velocity = _b.velocity;
    var _c = _a.type,
        type = _c === void 0 ? 'tween' : _c,
        definedEase = _a.ease,
        def = __rest(_a, ["type", "ease"]);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(animationLookup[type] !== undefined, "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
    var ease;
    if (type === 'tween') {
        if (typeof definedEase !== 'function') {
            if (typeof definedEase === 'string') {
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(easingLookup[definedEase] !== undefined, "Invalid easing type '" + definedEase + "'. popmotion.io/pose/api/config");
                ease = easingLookup[definedEase];
            } else if (Array.isArray(definedEase) && isCubicBezierArgs(definedEase)) {
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(definedEase.length === 4, "Cubic bezier arrays must contain four numerical values.");
                var x1 = definedEase[0],
                    y1 = definedEase[1],
                    x2 = definedEase[2],
                    y2 = definedEase[3];
                ease = popmotion__WEBPACK_IMPORTED_MODULE_0__["easing"].cubicBezier(x1, y1, x2, y2);
            }
        }
    }
    ease = ease || definedEase;
    var baseProps = type !== 'keyframes' ? {
        from: from,
        to: to,
        velocity: velocity,
        ease: ease
    } : { ease: ease };
    return animationLookup[type](__assign({}, baseProps, def));
};
var isAction = function (action$$1) {
    return typeof action$$1.start !== 'undefined';
};
var pose = function (_a) {
    var transformPose = _a.transformPose,
        addListenerToValue = _a.addListenerToValue,
        extendAPI = _a.extendAPI,
        readValueFromSource = _a.readValueFromSource,
        posePriority = _a.posePriority,
        setValueNative = _a.setValueNative;
    return Object(pose_core__WEBPACK_IMPORTED_MODULE_3__["default"])({
        bindOnChange: function (values, onChange) {
            return function (key) {
                if (!values.has(key)) return;
                var raw = values.get(key).raw;
                raw.subscribe(onChange[key]);
            };
        },
        readValue: function (_a) {
            var raw = _a.raw;
            return raw.get();
        },
        setValue: function (_a, to) {
            var raw = _a.raw;
            return raw.update(to);
        },
        createValue: function (init, key, _a, _b) {
            var elementStyler = _a.elementStyler;
            var _c = _b === void 0 ? {} : _b,
                passiveParent = _c.passiveParent,
                passiveProps = _c.passiveProps;
            var val = passiveParent ? createPassiveValue(init, passiveParent, passiveProps) : createValue(init);
            if (addListenerToValue) {
                val.raw.subscribe(addListenerToValue(key, elementStyler));
            }
            return val;
        },
        convertValue: function (raw, key, _a) {
            var elementStyler = _a.elementStyler;
            if (addListenerToValue) {
                raw.subscribe(addListenerToValue(key, elementStyler));
            }
            return {
                raw: raw,
                type: getValueType(raw.get())
            };
        },
        getTransitionProps: function (_a, to) {
            var raw = _a.raw,
                type = _a.type;
            return {
                from: raw.get(),
                velocity: raw.getVelocity(),
                to: to,
                type: type
            };
        },
        resolveTarget: function (_, to) {
            return to;
        },
        selectValueToRead: function (_a) {
            var raw = _a.raw;
            return raw;
        },
        startAction: function (_a, action$$1, complete) {
            var raw = _a.raw;
            var reaction = {
                update: function (v) {
                    return raw.update(v);
                },
                complete: complete
            };
            return action$$1.start(reaction);
        },
        stopAction: function (action$$1) {
            return action$$1.stop();
        },
        getInstantTransition: function (_, _a) {
            var to = _a.to;
            return just(to);
        },
        convertTransitionDefinition: function (val, def, props) {
            if (isAction(def)) return def;
            var delay$$1 = def.delay,
                min = def.min,
                max = def.max,
                round = def.round,
                remainingDef = __rest(def, ["delay", "min", "max", "round"]);
            var action$$1 = getAction(val, remainingDef, props);
            var outputPipe = [];
            if (delay$$1) action$$1 = addActionDelay(delay$$1, action$$1);
            if (min !== undefined) outputPipe.push(function (v) {
                return Math.max(v, min);
            });
            if (max !== undefined) outputPipe.push(function (v) {
                return Math.min(v, max);
            });
            if (round) outputPipe.push(Math.round);
            return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
        },
        setValueNative: setValueNative,
        addActionDelay: addActionDelay,
        defaultTransitions: defaultTransitions,
        transformPose: transformPose,
        readValueFromSource: readValueFromSource,
        posePriority: posePriority,
        extendAPI: extendAPI
    });
};

var createDimensions = function (element) {
    var hasMeasured = false;
    var current = {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    return {
        get: function (measurement) {
            return measurement ? current[measurement] : current;
        },
        measure: function () {
            current = element.getBoundingClientRect();
            hasMeasured = true;
            return current;
        },
        measurementAsPixels: function (measurement, value$$1, type) {
            return type === style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"] ? (typeof value$$1 === 'string' ? parseFloat(value$$1) : value$$1) / 100 * current[measurement] : value$$1;
        },
        has: function () {
            return hasMeasured;
        }
    };
};

var makeUIEventApplicator = function (_a) {
    var startEvents = _a.startEvents,
        endEvents = _a.endEvents,
        startPose = _a.startPose,
        endPose = _a.endPose,
        startCallback = _a.startCallback,
        endCallback = _a.endCallback,
        useDocumentToEnd = _a.useDocumentToEnd,
        preventScroll = _a.preventScroll;
    return function (element, activeActions, poser, config) {
        var startListener = startPose + 'Start';
        var endListener = startPose + 'End';
        var moveListener = startPose + 'Move';
        if (preventScroll) {
            var touchMoveListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(element, 'touchmove', {
                passive: false
            }).start(function (e) {
                e.preventDefault();
            });
            activeActions.set(moveListener, touchMoveListener);
        }
        var eventStartListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(element, startEvents).start(function (startEvent) {
            poser.set(startPose);
            if (startCallback && config[startCallback]) config[startCallback](startEvent);
            var eventEndListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(useDocumentToEnd ? document.documentElement : element, endEvents + (useDocumentToEnd ? ' mouseenter' : '')).start(function (endEvent) {
                if (useDocumentToEnd && endEvent.type === 'mouseenter' && endEvent.buttons === 1) {
                    return;
                }
                activeActions.get(endListener).stop();
                poser.unset(startPose);
                poser.set(endPose);
                if (endCallback && config[endCallback]) config[endCallback](endEvent);
            });
            activeActions.set(endListener, eventEndListener);
        });
        activeActions.set(startListener, eventStartListener);
    };
};
var events = {
    draggable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mousedown touchstart',
        endEvents: 'mouseup touchend',
        startPose: 'drag',
        endPose: 'dragEnd',
        startCallback: 'onDragStart',
        endCallback: 'onDragEnd',
        useDocumentToEnd: true,
        preventScroll: true
    }),
    hoverable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mouseenter',
        endEvents: 'mouseleave',
        startPose: 'hover',
        endPose: 'hoverEnd'
    }),
    focusable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'focus',
        endEvents: 'blur',
        startPose: 'focus',
        endPose: 'blur'
    }),
    pressable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mousedown touchstart',
        endEvents: 'mouseup touchend',
        startPose: 'press',
        endPose: 'pressEnd',
        startCallback: 'onPressStart',
        endCallback: 'onPressEnd',
        useDocumentToEnd: true
    })
};
var eventKeys = /*#__PURE__*/Object.keys(events);
var appendEventListeners = function (element, activeActions, poser, _a) {
    var props = _a.props;
    return eventKeys.forEach(function (key) {
        if (props[key]) events[key](element, activeActions, poser, props);
    });
};

var ORIGIN_START = 0;
var ORIGIN_CENTER = '50%';
var ORIGIN_END = '100%';
var findCenter = function (_a) {
    var top = _a.top,
        right = _a.right,
        bottom = _a.bottom,
        left = _a.left;
    return {
        x: (left + right) / 2,
        y: (top + bottom) / 2
    };
};
var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
var positionalPropsDict = /*#__PURE__*/new Set(positionalProps);
var checkPositionalProp = function (key) {
    return positionalPropsDict.has(key);
};
var hasPositionalProps = function (pose) {
    return Object.keys(pose).some(checkPositionalProp);
};
var isFlipPose = function (flip, key, state) {
    return state.props.element instanceof HTMLElement && (flip === true || key === 'flip');
};
var setValue = function (_a, key, to) {
    var values = _a.values,
        props = _a.props;
    if (values.has(key)) {
        var raw = values.get(key).raw;
        raw.update(to);
        raw.update(to);
    } else {
        values.set(key, {
            raw: Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(to, function (v) {
                return props.elementStyler.set(key, v);
            })
        });
    }
};
var explicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        elementStyler = _a.elementStyler;
    dimensions.measure();
    var width = nextPose.width,
        height = nextPose.height,
        top = nextPose.top,
        left = nextPose.left,
        bottom = nextPose.bottom,
        right = nextPose.right,
        position = nextPose.position,
        remainingPose = __rest(nextPose, ["width", "height", "top", "left", "bottom", "right", "position"]);
    var propsToSet = positionalProps.concat('position').reduce(function (acc, key) {
        if (nextPose[key] !== undefined) {
            acc[key] = resolveProp(nextPose[key], state.props);
        }
        return acc;
    }, {});
    elementStyler.set(propsToSet).render();
    return implicitlyFlipPose(state, remainingPose);
};
var implicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        element = _a.element,
        elementStyler = _a.elementStyler;
    if (!dimensions.has()) return {};
    var prev = dimensions.get();
    var next = measureWithoutTransform(element);
    var originX = prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
    var originY = prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
    elementStyler.set({ originX: originX, originY: originY });
    if (prev.width !== next.width) {
        setValue(state, 'scaleX', prev.width / next.width);
        nextPose.scaleX = 1;
    }
    if (prev.height !== next.height) {
        setValue(state, 'scaleY', prev.height / next.height);
        nextPose.scaleY = 1;
    }
    var prevCenter = findCenter(prev);
    var nextCenter = findCenter(next);
    if (originX === ORIGIN_CENTER) {
        setValue(state, 'x', prevCenter.x - nextCenter.x);
        nextPose.x = 0;
    }
    if (originY === ORIGIN_CENTER) {
        setValue(state, 'y', prevCenter.y - nextCenter.y);
        nextPose.y = 0;
    }
    elementStyler.render();
    return nextPose;
};
var flipPose = function (props, nextPose) {
    return hasPositionalProps(nextPose) ? explicitlyFlipPose(props, nextPose) : implicitlyFlipPose(props, nextPose);
};

var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(', ')[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) {
    return function (element, bbox, _a) {
        var transform$$1 = _a.transform;
        if (transform$$1 === 'none') return 0;
        var matrix3d = transform$$1.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
        return getPosFromMatrix(transform$$1.match(/^matrix\((.+)\)$/)[1], pos2);
    };
};
var positionalValues = {
    width: function (element, _a) {
        var width = _a.width;
        return width;
    },
    height: function (element, _a) {
        var height = _a.height;
        return height;
    },
    top: function (element, bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (element, bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (element, _a, _b) {
        var height = _a.height;
        var top = _b.top;
        return parseFloat(top) + height;
    },
    right: function (element, _a, _b) {
        var width = _a.width;
        var left = _b.left;
        return parseFloat(left) + width;
    },
    x: /*#__PURE__*/getTranslateFromMatrix(4, 13),
    y: /*#__PURE__*/getTranslateFromMatrix(5, 14)
};
var isPositionalKey = function (v) {
    return positionalValues[v] !== undefined;
};
var isPositional = function (pose) {
    return Object.keys(pose).some(isPositionalKey);
};
var convertPositionalUnits = function (state, nextPose) {
    var values = state.values,
        props = state.props;
    var element = props.element,
        elementStyler = props.elementStyler;
    var positionalPoseKeys = Object.keys(nextPose).filter(isPositionalKey);
    var changedPositionalKeys = [];
    var elementComputedStyle = getComputedStyle(element);
    var applyAtEndHasBeenCopied = false;
    positionalPoseKeys.forEach(function (key) {
        var value$$1 = values.get(key);
        var fromValueType = getValueType(value$$1.raw.get());
        var to = resolveProp(nextPose[key], props);
        var toValueType = getValueType(to);
        if (fromValueType !== toValueType) {
            changedPositionalKeys.push(key);
            if (!applyAtEndHasBeenCopied) {
                applyAtEndHasBeenCopied = true;
                nextPose.applyAtEnd = nextPose.applyAtEnd ? __assign({}, nextPose.applyAtEnd) : {};
            }
            nextPose.applyAtEnd[key] = nextPose.applyAtEnd[key] || nextPose[key];
            setValue(state, key, to);
        }
    });
    if (!changedPositionalKeys.length) return nextPose;
    var originBbox = element.getBoundingClientRect();
    var top = elementComputedStyle.top,
        left = elementComputedStyle.left,
        bottom = elementComputedStyle.bottom,
        right = elementComputedStyle.right,
        transform$$1 = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform$$1 };
    elementStyler.render();
    var targetBbox = element.getBoundingClientRect();
    changedPositionalKeys.forEach(function (key) {
        setValue(state, key, positionalValues[key](element, originBbox, originComputedStyle));
        nextPose[key] = positionalValues[key](element, targetBbox, elementComputedStyle);
    });
    elementStyler.render();
    return nextPose;
};

var getCurrent = function (prop) {
    return function (_a) {
        var elementStyler = _a.elementStyler;
        return elementStyler.get(prop);
    };
};
var dragPoses = function (draggable) {
    var drag = {
        preTransition: function (_a) {
            var dimensions = _a.dimensions;
            return dimensions.measure();
        }
    };
    var dragEnd = {};
    if (draggable === true || draggable === 'x') {
        drag.x = dragEnd.x = getCurrent('x');
    }
    if (draggable === true || draggable === 'y') {
        drag.y = dragEnd.y = getCurrent('y');
    }
    return { drag: drag, dragEnd: dragEnd };
};
var createPoseConfig = function (element, _a) {
    var onDragStart = _a.onDragStart,
        onDragEnd = _a.onDragEnd,
        onPressStart = _a.onPressStart,
        onPressEnd = _a.onPressEnd,
        draggable = _a.draggable,
        hoverable = _a.hoverable,
        focusable = _a.focusable,
        pressable = _a.pressable,
        dragBounds = _a.dragBounds,
        config = __rest(_a, ["onDragStart", "onDragEnd", "onPressStart", "onPressEnd", "draggable", "hoverable", "focusable", "pressable", "dragBounds"]);
    var poseConfig = __assign({ flip: {} }, config, { props: __assign({}, config.props, { onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd,
            dragBounds: dragBounds,
            draggable: draggable,
            hoverable: hoverable,
            focusable: focusable,
            pressable: pressable,
            element: element, elementStyler: Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
    if (draggable) {
        var _b = dragPoses(draggable),
            drag = _b.drag,
            dragEnd = _b.dragEnd;
        poseConfig.drag = __assign({}, poseConfig.drag, drag);
        poseConfig.dragEnd = __assign({}, poseConfig.dragEnd, dragEnd);
    }
    return poseConfig;
};
var domPose = /*#__PURE__*/pose({
    posePriority: ['drag', 'press', 'focus', 'hover'],
    transformPose: function (_a, name, state) {
        var flip = _a.flip,
            pose$$1 = __rest(_a, ["flip"]);
        if (isFlipPose(flip, name, state)) {
            return flipPose(state, pose$$1);
        } else if (isPositional(pose$$1)) {
            return convertPositionalUnits(state, pose$$1);
        }
        return pose$$1;
    },
    forceRender: function (_a) {
        var elementStyler = _a.elementStyler;
        elementStyler.render();
    },
    addListenerToValue: function (key, elementStyler) {
        return function (v) {
            return elementStyler.set(key, v);
        };
    },
    readValueFromSource: function (key, _a) {
        var elementStyler = _a.elementStyler,
            dragBounds = _a.dragBounds;
        var value$$1 = elementStyler.get(key);
        if (dragBounds && (key === 'x' || key === 'y')) {
            var bound = key === 'x' ? dragBounds.left || dragBounds.right : dragBounds.top || dragBounds.bottom;
            if (bound) {
                var boundType = getValueType(bound);
                value$$1 = boundType.transform(value$$1);
            }
        }
        return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
    },
    setValueNative: function (key, to, _a) {
        var elementStyler = _a.elementStyler;
        return elementStyler.set(key, to);
    },
    extendAPI: function (api, _a, config) {
        var props = _a.props,
            activeActions = _a.activeActions;
        var measure = props.dimensions.measure;
        var poserApi = __assign({}, api, { addChild: function (element, childConfig) {
                return api._addChild(createPoseConfig(element, childConfig), domPose);
            }, measure: measure, flip: function (op) {
                if (op) {
                    measure();
                    op();
                }
                return api.set('flip');
            } });
        props.elementStyler.render();
        appendEventListeners(props.element, activeActions, poserApi, config);
        return poserApi;
    }
});
var domPose$1 = function (element, config) {
    return domPose(createPoseConfig(element, config));
};

/* harmony default export */ __webpack_exports__["default"] = (domPose$1);


/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: valueTypes, easing, styler, action, multicast, value, decay, inertia, keyframes, everyFrame, physics, spring, timeline, tween, listen, pointer, mouse, multitouch, chain, composite, crossfade, delay, merge, parallel, schedule, stagger, calc, transform, css, svg, Action, ValueReaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueTypes", function() { return style_value_types__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylefire */ "./node_modules/stylefire/dist/stylefire.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return stylefire__WEBPACK_IMPORTED_MODULE_6__["default"]; });














var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function (init) {
    return new Action({ init: init });
};

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var stepProgress = function (steps, progress$$1) {
    var segment = 1 / (steps - 1);
    var subsegment = 1 / (2 * (steps - 1));
    var percentProgressOfTarget = Math.min(progress$$1, 1);
    var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
    var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
    return segmentProgressOfTarget * segment;
};

var calc = /*#__PURE__*/Object.freeze({
    angle: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"],
    degreesToRadians: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"],
    distance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"],
    isPoint3D: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint3D"],
    isPoint: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint"],
    dilate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    getValueFromProgress: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    pointFromAngleAndDistance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pointFromVector"],
    getProgressFromValue: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"],
    radiansToDegrees: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["radiansToDegrees"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smoothFrame"],
    speedPerFrame: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"],
    speedPerSecond: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"],
    stepProgress: stepProgress
});

var isValueList = function (v) {
    return Array.isArray(v);
};
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(),
            delta = _a.delta,
            timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.subscribers[this.subscribers.length - 1].update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, this.timeDelta) : Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                var _a;
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.some(function (key) {
            return isVectorProp(props[key], key);
        });
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_3__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vh"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var reduceArrayValue = function (i) {
    return function (props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        var childActionProps = vectorKeys.reduce(reduceArrayValue(i), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        return getActionCreator(v)(action, childActionProps);
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function (key) {
    return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        var childActionProps = vectorKeys.reduce(reduceObjectValue(key), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
        return map;
    }, {});
    return composite(actionMap);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createColorAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"])(from, to), style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].transform);
};
var createComplexAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var valueTemplate = style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].createTransformer(from);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(valueTemplate(from) === style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixArray"])(style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].parse(from), style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].parse(to)), valueTemplate);
};
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    var actionCreator = createAction;
    if (typeof prop === 'number') {
        actionCreator = createAction;
    } else if (Array.isArray(prop)) {
        actionCreator = createArrayAction;
    } else if (isUnitProp(prop)) {
        actionCreator = createUnitAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].test(prop)) {
        actionCreator = createColorAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].test(prop)) {
        actionCreator = createComplexAction;
    } else if (typeof prop === 'object') {
        actionCreator = createObjectAction;
    }
    return actionCreator;
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            } else {
                update(position);
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var inertia = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 700 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget;
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var current = value(from);
        var activeAnimation;
        var isSpring = false;
        var isLessThanMin = function (v) {
            return min !== undefined && v <= min;
        };
        var isMoreThanMax = function (v) {
            return max !== undefined && v >= max;
        };
        var isOutOfBounds = function (v) {
            return isLessThanMin(v) || isMoreThanMax(v);
        };
        var isTravellingAwayFromBounds = function (v, currentVelocity) {
            return isLessThanMin(v) && currentVelocity < 0 || isMoreThanMax(v) && currentVelocity > 0;
        };
        var startAnimation = function (animation, onComplete) {
            activeAnimation && activeAnimation.stop();
            activeAnimation = animation.start({
                update: function (v) {
                    return current.update(v);
                },
                complete: function () {
                    complete();
                    onComplete && onComplete();
                }
            });
        };
        var startSpring = function (props) {
            isSpring = true;
            startAnimation(vectorSpring(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { to: isLessThanMin(props.from) ? min : max, stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta })));
        };
        current.subscribe(function (v) {
            update(v);
            var currentVelocity = current.getVelocity();
            if (activeAnimation && !isSpring && isTravellingAwayFromBounds(v, currentVelocity)) {
                startSpring({ from: v, velocity: currentVelocity });
            }
        });
        if (isOutOfBounds(from) && velocity === 0 || isTravellingAwayFromBounds(from, velocity)) {
            startSpring({ from: from, velocity: velocity });
        } else {
            var animation = vectorDecay({
                from: from,
                velocity: velocity,
                timeConstant: timeConstant,
                power: power,
                restDelta: isOutOfBounds(from) ? 20 : restDelta,
                modifyTarget: modifyTarget
            });
            startAnimation(animation, function () {
                var v = current.get();
                if (isOutOfBounds(v)) {
                    startSpring({ from: v, velocity: current.getVelocity() });
                }
            });
        }
        return {
            stop: function () {
                return activeAnimation && activeAnimation.stop();
            }
        };
    });
};
var index = /*#__PURE__*/createVectorAction(inertia, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    min: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    max: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    }
});

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["linear"] : _d;
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress$$1) {
                return update(progress$$1);
            }
        };
    }).pipe(ease, function (v) {
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var clampProgress = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["easeOut"] : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from,
            from = _g === void 0 ? 0 : _g,
            _h = props.to,
            to = _h === void 0 ? 1 : _h,
            _j = props.elapsed,
            elapsed = _j === void 0 ? 0 : _j,
            _k = props.playDirection,
            playDirection = _k === void 0 ? 1 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseTween = function () {
            return playDirection *= -1;
        };
        var isTweenComplete = function () {
            var _a;
            var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            } else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [to, from], from = _a[0], to = _a[1];
                playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
                flipCount++;
                isStepTaken = true;
            } else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            return !isStepTaken;
        };
        var updateTween = function () {
            currentProgress = clampProgress(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function () {
            isActive = true;
            process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
                var delta = _a.delta;
                elapsed += delta * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                    framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function () {
            isActive = false;
            if (process) framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, duration, elapsed);
            },
            getProgress: function () {
                return currentProgress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                if (!isActive) startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(0, duration, newProgress);
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateTween, false, true);
                return this;
            },
            reverse: function () {
                reverseTween();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var defaultEasings = function (values, easing$$1) {
    return values.map(function () {
        return easing$$1 || _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["easeOut"];
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["linear"] : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing$$1, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing$$1
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(springStrength, elapsed);
            }
            current += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["linear"]);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["linear"]);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["linear"]);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || _popmotion_easing__WEBPACK_IMPORTED_MODULE_5__["easeInOut"]);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
            initialRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
                var newRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$1 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(x || 0);
        var applyYOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var appendUnit = function (unit) {
    return function (v) {
        return "" + v + unit;
    };
};
var steps = function (st, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return function (v) {
        var current = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(min, max, v);
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(min, max, stepProgress(st, current));
    };
};
var transformMap = function (childTransformers) {
    return function (v) {
        var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    };
};

var transformers = /*#__PURE__*/Object.freeze({
    applyOffset: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"],
    clamp: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"],
    conditional: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["conditional"],
    interpolate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
    blendArray: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixArray"],
    blendColor: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"],
    pipe: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smooth"],
    snap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["snap"],
    generateStaticSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForce"],
    nonlinearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceExpo"],
    linearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceLinear"],
    wrap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["wrap"],
    appendUnit: appendUnit,
    steps: steps,
    transformMap: transformMap
});

var css = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(false, 'css() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_6__["default"])(element, props);
};
var svg = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(false, 'svg() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_6__["default"])(element, props);
};




/***/ }),

/***/ "./node_modules/pose-core/dist/pose-core.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/pose-core/dist/pose-core.es.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



var getPoseValues = function (_a) {
    var transition = _a.transition,
        flip = _a.flip,
        delay = _a.delay,
        delayChildren = _a.delayChildren,
        staggerChildren = _a.staggerChildren,
        staggerDirection = _a.staggerDirection,
        afterChildren = _a.afterChildren,
        beforeChildren = _a.beforeChildren,
        preTransition = _a.preTransition,
        applyAtStart = _a.applyAtStart,
        applyAtEnd = _a.applyAtEnd,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "flip", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition", "applyAtStart", "applyAtEnd"]);
    return props;
};
var selectPoses = function (_a) {
    var label = _a.label,
        props = _a.props,
        values = _a.values,
        parentValues = _a.parentValues,
        ancestorValues = _a.ancestorValues,
        onChange = _a.onChange,
        passive = _a.passive,
        initialPose = _a.initialPose,
        poses = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
    return poses;
};
var selectAllValues = function (values, selectValue) {
    var allValues = {};
    values.forEach(function (value, key) {
        return allValues[key] = selectValue(value);
    });
    return allValues;
};

var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};
var poseDefault = function (pose, prop, defaultValue, resolveProps) {
    return pose && pose[prop] !== undefined ? resolveProp(pose[prop], resolveProps) : defaultValue;
};
var startChildAnimations = function (children, next, pose, props) {
    var animations = [];
    var delay = poseDefault(pose, 'delayChildren', 0, props);
    var stagger = poseDefault(pose, 'staggerChildren', 0, props);
    var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
    var maxStaggerDuration = (children.size - 1) * stagger;
    var generateStaggerDuration = staggerDirection === 1 ? function (i) {
        return i * stagger;
    } : function (i) {
        return maxStaggerDuration - i * stagger;
    };
    Array.from(children).forEach(function (child, i) {
        animations.push(child.set(next, {
            delay: delay + generateStaggerDuration(i)
        }));
    });
    return animations;
};
var resolveTransition = function (transition, key, value, props, convertTransitionDefinition, getInstantTransition) {
    var resolvedTransition;
    if (typeof transition === 'function') {
        var resolvedTransitionMap = transition(props);
        resolvedTransition = resolveTransition(resolvedTransitionMap, key, value, props, convertTransitionDefinition, getInstantTransition);
    } else if (transition[key] || transition.default) {
        var keyTransition = transition[key] || transition.default;
        if (typeof keyTransition === 'function') {
            resolvedTransition = keyTransition(props);
        } else {
            resolvedTransition = keyTransition;
        }
    } else {
        resolvedTransition = transition;
    }
    return resolvedTransition === false ? getInstantTransition(value, props) : convertTransitionDefinition(value, resolvedTransition, props);
};
var findInsertionIndex = function (poseList, priorityList, priorityIndex) {
    var insertionIndex = 0;
    for (var i = priorityIndex - 1; i >= 0; i--) {
        var nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);
        if (nextHighestPriorityIndex !== -1) {
            insertionIndex = nextHighestPriorityIndex + 1;
            break;
        }
    }
    return insertionIndex;
};
var applyValues = function (toApply, values, props, setValue, setValueNative) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof toApply === 'object', 'applyAtStart and applyAtEnd must be of type object');
    return Object.keys(toApply).forEach(function (key) {
        var valueToSet = resolveProp(toApply[key], props);
        values.has(key) ? setValue(values.get(key), valueToSet) : setValueNative(key, valueToSet, props);
    });
};
var createPoseSetter = function (setterProps) {
    var state = setterProps.state,
        poses = setterProps.poses,
        startAction = setterProps.startAction,
        stopAction = setterProps.stopAction,
        getInstantTransition = setterProps.getInstantTransition,
        addActionDelay = setterProps.addActionDelay,
        getTransitionProps = setterProps.getTransitionProps,
        resolveTarget = setterProps.resolveTarget,
        transformPose = setterProps.transformPose,
        posePriority = setterProps.posePriority,
        convertTransitionDefinition = setterProps.convertTransitionDefinition,
        setValue = setterProps.setValue,
        setValueNative = setterProps.setValueNative,
        forceRender = setterProps.forceRender;
    return function (next, nextProps, propagate) {
        if (nextProps === void 0) {
            nextProps = {};
        }
        if (propagate === void 0) {
            propagate = true;
        }
        var children = state.children,
            values = state.values,
            props = state.props,
            activeActions = state.activeActions,
            activePoses = state.activePoses;
        var _a = nextProps.delay,
            delay = _a === void 0 ? 0 : _a;
        var hasChildren = children.size;
        var baseTransitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, nextProps);
        var nextPose = poses[next];
        var getChildAnimations = function () {
            return hasChildren && propagate ? startChildAnimations(children, next, nextPose, baseTransitionProps) : [];
        };
        var getParentAnimations = function () {
            if (!nextPose) return [];
            var applyAtStart = nextPose.applyAtStart;
            if (applyAtStart) {
                applyValues(applyAtStart, values, baseTransitionProps, setValue, setValueNative);
                if (forceRender) forceRender(baseTransitionProps);
            }
            if (transformPose) nextPose = transformPose(nextPose, next, state);
            var preTransition = nextPose.preTransition,
                getTransition = nextPose.transition,
                applyAtEnd = nextPose.applyAtEnd;
            if (preTransition) preTransition(baseTransitionProps);
            var animations = Object.keys(getPoseValues(nextPose)).map(function (key) {
                var valuePoses = activePoses.has(key) ? activePoses.get(key) : (activePoses.set(key, []), activePoses.get(key));
                var existingIndex = valuePoses.indexOf(next);
                if (existingIndex !== -1) valuePoses.splice(existingIndex, 1);
                var priority = posePriority ? posePriority.indexOf(next) : 0;
                var insertionIndex = priority <= 0 ? 0 : findInsertionIndex(valuePoses, posePriority, priority);
                valuePoses.splice(insertionIndex, 0, next);
                return insertionIndex === 0 ? new Promise(function (complete) {
                    var value = values.get(key);
                    var transitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransitionProps, { key: key,
                        value: value });
                    var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                    if (activeActions.has(key)) stopAction(activeActions.get(key));
                    var resolveTransitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                    var transition = resolveTransition(getTransition, key, value, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                    var poseDelay = delay || resolveProp(nextPose.delay, transitionProps);
                    if (poseDelay) {
                        transition = addActionDelay(poseDelay, transition);
                    }
                    activeActions.set(key, startAction(value, transition, complete));
                }) : Promise.resolve();
            });
            return applyAtEnd ? [Promise.all(animations).then(function () {
                applyValues(applyAtEnd, values, baseTransitionProps, setValue, setValueNative);
            })] : animations;
        };
        if (nextPose && hasChildren) {
            if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
                return Promise.all(getParentAnimations()).then(function () {
                    return Promise.all(getChildAnimations());
                });
            } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
                return Promise.all(getChildAnimations()).then(function () {
                    return Promise.all(getParentAnimations());
                });
            }
        }
        return Promise.all(getParentAnimations().concat(getChildAnimations()));
    };
};

var DEFAULT_INITIAL_POSE = 'init';
var isScale = function (key) {
    return key.includes('scale');
};
var defaultReadValueFromSource = function (key) {
    return isScale(key) ? 1 : 0;
};
var readValueFromPose = function (pose, key, props) {
    var valueToResolve = pose.applyAtEnd && pose.applyAtEnd[key] !== undefined ? pose.applyAtEnd[key] : pose[key] !== undefined ? pose[key] : pose.applyAtStart && pose.applyAtStart[key] !== undefined ? pose.applyAtStart[key] : 0;
    return resolveProp(valueToResolve, props);
};
var getPosesToSearch = function (pose) {
    var posesToSearch = Array.isArray(pose) ? pose : [pose];
    posesToSearch.push(DEFAULT_INITIAL_POSE);
    return posesToSearch;
};
var getInitialValue = function (poses, key, initialPose, props, readValueFromSource, activePoses) {
    if (readValueFromSource === void 0) {
        readValueFromSource = defaultReadValueFromSource;
    }
    var posesToSearch = getPosesToSearch(initialPose);
    var pose = posesToSearch.filter(Boolean).find(function (name) {
        var thisPose = poses[name];
        return thisPose && (thisPose[key] !== undefined || thisPose.applyAtStart && thisPose.applyAtStart[key] !== undefined || thisPose.applyAtEnd && thisPose.applyAtEnd[key] !== undefined);
    });
    activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);
    return pose ? readValueFromPose(poses[pose], key, props) : readValueFromSource(key, props);
};
var createValues = function (values, _a) {
    var userSetValues = _a.userSetValues,
        createValue = _a.createValue,
        convertValue = _a.convertValue,
        readValueFromSource = _a.readValueFromSource,
        initialPose = _a.initialPose,
        poses = _a.poses,
        activePoses = _a.activePoses,
        props = _a.props;
    return function (key) {
        if (values.has(key)) return;
        var value;
        if (userSetValues && userSetValues[key] !== undefined) {
            value = convertValue(userSetValues[key], key, props);
        } else {
            var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource, activePoses);
            value = createValue(initValue, key, props);
        }
        values.set(key, value);
    };
};
var scrapeValuesFromPose = function (values, props) {
    return function (key) {
        var pose = props.poses[key];
        Object.keys(getPoseValues(pose)).forEach(createValues(values, props));
    };
};
var getAncestorValue = function (key, fromParent, ancestors) {
    if (fromParent === true) {
        return ancestors[0] && ancestors[0].values.get(key);
    } else {
        var foundAncestor = ancestors.find(function (_a) {
            var label = _a.label;
            return label === fromParent;
        });
        return foundAncestor && foundAncestor.values.get(key);
    }
};
var bindPassiveValues = function (values, _a) {
    var passive = _a.passive,
        ancestorValues = _a.ancestorValues,
        createValue = _a.createValue,
        readValue = _a.readValue,
        props = _a.props;
    return function (key) {
        var _a = passive[key],
            valueKey = _a[0],
            passiveProps = _a[1],
            fromParent = _a[2];
        var valueToBind = fromParent && ancestorValues.length ? getAncestorValue(valueKey, fromParent, ancestorValues) : values.has(valueKey) ? values.get(valueKey) : false;
        if (!valueToBind) return;
        var newValue = createValue(readValue(valueToBind), key, props, {
            passiveParentKey: valueKey,
            passiveParent: valueToBind,
            passiveProps: passiveProps
        });
        values.set(key, newValue);
    };
};
var setNativeValues = function (_a) {
    var setValueNative = _a.setValueNative,
        initialPose = _a.initialPose,
        props = _a.props,
        poses = _a.poses;
    var valuesHaveSet = new Set();
    var setValues = function (pose, propKey) {
        if (pose[propKey]) {
            for (var key in pose[propKey]) {
                if (!valuesHaveSet.has(key)) {
                    valuesHaveSet.add(key);
                    setValueNative(key, resolveProp(pose[propKey][key], props), props);
                }
            }
        }
    };
    getPosesToSearch(initialPose).forEach(function (poseKey) {
        var pose = poses[poseKey];
        if (pose) {
            setValues(pose, 'applyAtEnd');
            setValues(pose, 'applyAtStart');
        }
    });
};
var createValueMap = function (props) {
    var poses = props.poses,
        passive = props.passive;
    var values = new Map();
    Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
    setNativeValues(props);
    if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));
    return values;
};

var applyDefaultTransition = function (pose, key, defaultTransitions) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pose, { transition: defaultTransitions.has(key) ? defaultTransitions.get(key) : defaultTransitions.get('default') });
};
var generateTransitions = function (poses, defaultTransitions) {
    Object.keys(poses).forEach(function (key) {
        var pose = poses[key];
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
        poses[key] = pose.transition !== undefined ? pose : applyDefaultTransition(pose, key, defaultTransitions);
    });
    return poses;
};

var sortByReversePriority = function (priorityOrder) {
    return function (a, b) {
        var aP = priorityOrder.indexOf(a);
        var bP = priorityOrder.indexOf(b);
        if (aP === -1 && bP !== -1) return -1;
        if (aP !== -1 && bP === -1) return 1;
        return aP - bP;
    };
};

var poseFactory = function (_a) {
    var getDefaultProps = _a.getDefaultProps,
        defaultTransitions = _a.defaultTransitions,
        bindOnChange = _a.bindOnChange,
        startAction = _a.startAction,
        stopAction = _a.stopAction,
        readValue = _a.readValue,
        readValueFromSource = _a.readValueFromSource,
        resolveTarget = _a.resolveTarget,
        setValue = _a.setValue,
        setValueNative = _a.setValueNative,
        createValue = _a.createValue,
        convertValue = _a.convertValue,
        getInstantTransition = _a.getInstantTransition,
        getTransitionProps = _a.getTransitionProps,
        addActionDelay = _a.addActionDelay,
        selectValueToRead = _a.selectValueToRead,
        convertTransitionDefinition = _a.convertTransitionDefinition,
        transformPose = _a.transformPose,
        posePriority = _a.posePriority,
        forceRender = _a.forceRender,
        extendAPI = _a.extendAPI;
    return function (config) {
        var parentValues = config.parentValues,
            _a = config.ancestorValues,
            ancestorValues = _a === void 0 ? [] : _a;
        if (parentValues) ancestorValues.unshift({ values: parentValues });
        var activeActions = new Map();
        var activePoses = new Map();
        var children = new Set();
        var poses = generateTransitions(selectPoses(config), defaultTransitions);
        var _b = config.props,
            props = _b === void 0 ? {} : _b;
        if (getDefaultProps) props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getDefaultProps(config), props);
        var passive = config.passive,
            userSetValues = config.values,
            _c = config.initialPose,
            initialPose = _c === void 0 ? DEFAULT_INITIAL_POSE : _c;
        var values = createValueMap({
            poses: poses,
            passive: passive,
            ancestorValues: ancestorValues,
            readValue: readValue,
            setValueNative: setValueNative,
            createValue: createValue,
            convertValue: convertValue,
            readValueFromSource: readValueFromSource,
            userSetValues: userSetValues,
            initialPose: initialPose,
            activePoses: activePoses,
            props: props
        });
        var state = {
            activeActions: activeActions,
            activePoses: activePoses,
            children: children,
            props: props,
            values: values
        };
        var onChange = config.onChange;
        if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));
        var set = createPoseSetter({
            state: state,
            poses: poses,
            getInstantTransition: getInstantTransition,
            getTransitionProps: getTransitionProps,
            convertTransitionDefinition: convertTransitionDefinition,
            setValue: setValue,
            setValueNative: setValueNative,
            startAction: startAction,
            stopAction: stopAction,
            resolveTarget: resolveTarget,
            addActionDelay: addActionDelay,
            transformPose: transformPose,
            posePriority: posePriority,
            forceRender: forceRender
        });
        var has = function (poseName) {
            return !!poses[poseName];
        };
        var api = {
            set: set,
            unset: function (poseName, poseProps) {
                var posesToSet = [];
                activePoses.forEach(function (valuePoses) {
                    var poseIndex = valuePoses.indexOf(poseName);
                    if (poseIndex === -1) return;
                    var currentPose = valuePoses[0];
                    valuePoses.splice(poseIndex, 1);
                    var nextPose = valuePoses[0];
                    if (nextPose === currentPose) return;
                    if (posesToSet.indexOf(nextPose) === -1) {
                        posesToSet.push(nextPose);
                    }
                });
                var animationsToResolve = posesToSet.sort(sortByReversePriority(posePriority)).map(function (poseToSet) {
                    return set(poseToSet, poseProps, false);
                });
                children.forEach(function (child) {
                    return animationsToResolve.push(child.unset(poseName));
                });
                return Promise.all(animationsToResolve);
            },
            get: function (valueName) {
                return valueName ? selectValueToRead(values.get(valueName)) : selectAllValues(values, selectValueToRead);
            },
            has: has,
            setProps: function (newProps) {
                return state.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.props, newProps);
            },
            _addChild: function (childConfig, factory) {
                var child = factory(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                children.add(child);
                return child;
            },
            removeChild: function (child) {
                return children.delete(child);
            },
            clearChildren: function () {
                children.forEach(function (child) {
                    return child.destroy();
                });
                children.clear();
            },
            destroy: function () {
                activeActions.forEach(stopAction);
                children.forEach(function (child) {
                    return child.destroy();
                });
            }
        };
        return extendAPI(api, state, config);
    };
};

/* harmony default export */ __webpack_exports__["default"] = (poseFactory);


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-pose-text/dist/react-pose-text.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-pose-text/dist/react-pose-text.es.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var splitStyles = { display: 'inline-block' };
var parseText = function (text) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(typeof text === 'string', 'Child of SplitText must be a string');
    return {
        text: text,
        numChars: text.length,
        splitText: text.split(' ').map(function (word) { return word.split(''); })
    };
};
var getPoseProps = function (props) {
    var wordPoses = props.wordPoses, charPoses = props.charPoses, children = props.children, poseProps = __rest(props, ["wordPoses", "charPoses", "children"]);
    return poseProps;
};
var SplitText = (function (_super) {
    __extends(SplitText, _super);
    function SplitText(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        var wordPoses = props.wordPoses, charPoses = props.charPoses, children = props.children;
        parseText(children);
        if (wordPoses)
            _this.Word = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].div(wordPoses);
        if (charPoses)
            _this.Char = react_pose__WEBPACK_IMPORTED_MODULE_1__["default"].div(charPoses);
        return _this;
    }
    SplitText.getDerivedStateFromProps = function (_a, state) {
        var children = _a.children;
        return !state || children !== state.text ? parseText(children) : null;
    };
    SplitText.prototype.renderChars = function (word, wordIndex, numWords, baseCharCount) {
        var _this = this;
        var numChars = this.state.numChars;
        var numCharsInWord = word.length;
        var text = this.state.text;
        return word.map(function (char, i) {
            return _this.Char ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_this.Char, __assign({ key: text + i, style: splitStyles, wordIndex: wordIndex, numWords: numWords, charIndex: baseCharCount + i, charInWordIndex: i, numChars: numChars, numCharsInWord: numCharsInWord }, getPoseProps(_this.props)), char)) : (char);
        });
    };
    SplitText.prototype.renderWords = function () {
        var _this = this;
        var _a = this.state, text = _a.text, splitText = _a.splitText;
        var numWords = splitText.length;
        var charCount = 0;
        return splitText.map(function (word, i) {
            var chars = _this.renderChars(word, i, numWords, charCount).concat([
                i !== numWords - 1 ? '\u00A0' : null
            ]);
            charCount += word.length;
            return _this.Word ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_this.Word, __assign({ key: text + i, style: splitStyles, wordIndex: i, numWords: numWords }, getPoseProps(_this.props)), chars)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: splitStyles, key: text + i }, chars));
        });
    };
    SplitText.prototype.render = function () {
        return this.renderWords();
    };
    return SplitText;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (SplitText);


/***/ }),

/***/ "./node_modules/react-pose/dist/react-pose.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-pose/dist/react-pose.es.js ***!
  \*******************************************************/
/*! exports provided: default, Transition, PoseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoseGroup", function() { return PoseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion-pose */ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");






var hasChanged = function (prev, next) {
    if (prev === next)
        return false;
    var prevIsArray = Array.isArray(prev);
    var nextIsArray = Array.isArray(next);
    if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
        return true;
    }
    else if (prevIsArray && nextIsArray) {
        var numPrev = prev.length;
        var numNext = next.length;
        if (numPrev !== numNext)
            return true;
        for (var i = 0; i < numPrev; i++) {
            if (prev[i] !== next[i])
                return true;
        }
    }
    return false;
};

var pickAssign = function (shouldPick, sources) {
    return sources.reduce(function (picked, source) {
        for (var key in source) {
            if (shouldPick(key)) {
                picked[key] = source[key];
            }
        }
        return picked;
    }, {});
};

var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({}), PoseParentConsumer = _a.Consumer, PoseParentProvider = _a.Provider;
var calcPopFromFlowStyle = function (el) {
    var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
    return {
        position: 'absolute',
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight
    };
};
var hasPose = function (pose, key) {
    return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
};
var objectToMap = function (obj) {
    return Object.keys(obj).reduce(function (map, key) {
        map.set(key, { raw: obj[key] });
        return map;
    }, new Map());
};
var testAlwaysTrue = function () { return true; };
var filterProps = function (_a) {
    var elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
    return props;
};
var PoseElement = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseElement, _super);
    function PoseElement(props) {
        var _this = _super.call(this, props) || this;
        _this.children = new Set();
        _this.childrenHandlers = {
            registerChild: function (props) {
                _this.children.add(props);
                if (_this.poser)
                    _this.flushChildren();
            },
            onUnmount: function (child) { return _this.poser.removeChild(child); },
            getParentPoseConfig: function () { return _this.poseConfig; },
            getInitialPoseFromParent: function () { return _this.getInitialPose(); }
        };
        _this.setRef = function (ref) {
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(ref === null || (ref instanceof Element && _this.ref === undefined), 'ref must be provided to the same DOM component for the entire lifecycle of a posed component.');
            _this.ref = ref;
            var innerRef = _this.props.innerRef;
            if (!innerRef)
                return;
            if (typeof innerRef === 'function') {
                innerRef(ref);
            }
            else {
                innerRef.current = ref;
            }
        };
        _this.shouldForwardProp =
            typeof _this.props.elementType === 'string' ? _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__["default"] : testAlwaysTrue;
        var poseConfig = _this.props.poseConfig;
        _this.poseConfig =
            typeof poseConfig === 'function'
                ? poseConfig(filterProps(props))
                : poseConfig;
        return _this;
    }
    PoseElement.prototype.getInitialPose = function () {
        var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
        if (initialPose) {
            return initialPose;
        }
        else {
            var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
            var initialPoses = (Array.isArray(parentPose)
                ? parentPose
                : [parentPose])
                .concat(pose, _pose)
                .filter(Boolean);
            return initialPoses.length > 0 ? initialPoses : undefined;
        }
    };
    PoseElement.prototype.getFirstPose = function () {
        var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
        if (!initialPose)
            return;
        var firstPose = (Array.isArray(pose) ? pose : [pose])
            .concat(_pose)
            .filter(Boolean);
        return firstPose.length === 1 ? firstPose[0] : firstPose;
    };
    PoseElement.prototype.getSetProps = function () {
        var props = filterProps(this.props);
        if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
            if (!this.popStyle) {
                props.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style, calcPopFromFlowStyle(this.ref));
                this.popStyle = props.style;
            }
            else {
                props.style = this.popStyle;
            }
        }
        else {
            this.popStyle = null;
        }
        return props;
    };
    PoseElement.prototype.componentDidMount = function () {
        var _this = this;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(this.ref instanceof Element, "No valid DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the ref to the host DOM node via the React.forwardRef function.");
        var _a = this.props, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
        var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.poseConfig, { initialPose: this.getInitialPose(), values: values || this.poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd, onChange: onValueChange });
        if (!registerChild) {
            this.initPoser(Object(popmotion_pose__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ref, config));
        }
        else {
            registerChild({
                element: this.ref,
                poseConfig: config,
                onRegistered: function (poser) { return _this.initPoser(poser); }
            });
        }
    };
    PoseElement.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, pose = _a.pose, _pose = _a._pose;
        if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
            this.poser.measure();
        return null;
    };
    PoseElement.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
        this.poser.setProps(this.getSetProps());
        if (poseKey !== prevProps.poseKey ||
            hasChanged(prevProps.pose, pose) ||
            pose === 'flip') {
            this.setPose(pose);
        }
        if (_pose !== prevProps._pose || _pose === 'flip')
            this.setPose(_pose);
    };
    PoseElement.prototype.componentWillUnmount = function () {
        if (!this.poser)
            return;
        var onUnmount = this.props.onUnmount;
        if (onUnmount)
            onUnmount(this.poser);
        this.poser.destroy();
    };
    PoseElement.prototype.initPoser = function (poser) {
        this.poser = poser;
        this.flushChildren();
        var firstPose = this.getFirstPose();
        if (firstPose)
            this.setPose(firstPose);
    };
    PoseElement.prototype.setPose = function (pose) {
        var _this = this;
        var onPoseComplete = this.props.onPoseComplete;
        var poseList = Array.isArray(pose) ? pose : [pose];
        Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(pose); });
    };
    PoseElement.prototype.flushChildren = function () {
        var _this = this;
        this.children.forEach(function (_a) {
            var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
            return onRegistered(_this.poser.addChild(element, poseConfig));
        });
        this.children.clear();
    };
    PoseElement.prototype.render = function () {
        var elementType = this.props.elementType;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentProvider, { value: this.childrenHandlers }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementType, pickAssign(this.shouldForwardProp, [
            this.getSetProps(),
            { ref: this.setRef }
        ]))));
    };
    return PoseElement;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

var supportedElements = [
    'a',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dialog',
    'div',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'i',
    'iframe',
    'img',
    'input',
    'label',
    'legend',
    'li',
    'nav',
    'object',
    'ol',
    'option',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'section',
    'select',
    'span',
    'strong',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'ul',
    'video',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];

var componentCache = new Map();
var createComponentFactory = function (key) {
    var componentFactory = function (poseConfig) {
        if (poseConfig === void 0) { poseConfig = {}; }
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (_a, ref) {
            var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["withParent"]);
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(props.innerRef === undefined, 'innerRef is deprecated. Please use ref instead.');
            return !withParent || props.parentValues ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, innerRef: ref, elementType: key }, props))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentConsumer, null, function (parentCtx) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, elementType: key, innerRef: ref }, props, parentCtx))); }));
        });
    };
    componentCache.set(key, componentFactory);
    return componentFactory;
};
var getComponentFactory = function (key) {
    return componentCache.has(key)
        ? componentCache.get(key)
        : createComponentFactory(key);
};
var posed = (function (component) {
    return getComponentFactory(component);
});
supportedElements.reduce(function (acc, key) {
    acc[key] = createComponentFactory(key);
    return acc;
}, posed);

var getKey = function (child) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(child && child.key !== null, 'Every child of Transition must be given a unique key');
    var childKey = typeof child.key === 'number' ? child.key.toString() : child.key;
    return childKey.replace('.$', '');
};
var prependProps = function (element, props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(element.type, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: element.key, ref: element.ref }, props, element.props));
};
var handleTransition = function (_a, _b) {
    var displayedChildren = _b.displayedChildren, finishedLeaving = _b.finishedLeaving, hasInitialized = _b.hasInitialized, indexedChildren = _b.indexedChildren, scheduleChildRemoval = _b.scheduleChildRemoval;
    var incomingChildren = _a.children, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, animateOnMount = _a.animateOnMount, enterAfterExit = _a.enterAfterExit, flipMove = _a.flipMove, onRest = _a.onRest, propsForChildren = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "preEnterPose", "enterPose", "exitPose", "animateOnMount", "enterAfterExit", "flipMove", "onRest"]);
    var targetChildren = makeChildList(incomingChildren);
    var nextState = {
        displayedChildren: []
    };
    if (true) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(!propsForChildren.onPoseComplete, "<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop.");
    }
    var prevKeys = displayedChildren.map(getKey);
    var nextKeys = targetChildren.map(getKey);
    var hasPropsForChildren = Object.keys(propsForChildren).length !== 0;
    var entering = new Set(nextKeys.filter(function (key) { return finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1; }));
    entering.forEach(function (key) { return delete finishedLeaving[key]; });
    var leaving = [];
    var newlyLeaving = {};
    prevKeys.forEach(function (key) {
        if (entering.has(key)) {
            return;
        }
        var isLeaving = finishedLeaving.hasOwnProperty(key);
        if (!isLeaving && nextKeys.indexOf(key) !== -1) {
            return;
        }
        leaving.push(key);
        if (!isLeaving) {
            finishedLeaving[key] = false;
            newlyLeaving[key] = true;
        }
    });
    var moving = new Set(prevKeys.filter(function (key, i) {
        return !entering.has(key) || leaving.indexOf(key) === -1;
    }));
    targetChildren.forEach(function (child) {
        var newChildProps = {};
        if (entering.has(child.key)) {
            if (hasInitialized || animateOnMount) {
                newChildProps.initialPose = preEnterPose;
            }
            newChildProps._pose = enterPose;
        }
        else if (moving.has(child.key) && flipMove) {
            newChildProps._pose = [enterPose, 'flip'];
        }
        else {
            newChildProps._pose = enterPose;
        }
        var newChild = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, newChildProps);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.push(hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    leaving.forEach(function (key) {
        var child = indexedChildren[key];
        var newChild = newlyLeaving[key]
            ? Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
                _pose: exitPose,
                onPoseComplete: function (pose) {
                    scheduleChildRemoval(key);
                    var onPoseComplete = child.props.onPoseComplete;
                    if (onPoseComplete)
                        onPoseComplete(pose);
                },
                popFromFlow: flipMove
            })
            : child;
        var insertionIndex = prevKeys.indexOf(key);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.splice(insertionIndex, 0, hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    return nextState;
};
var handleChildrenTransitions = (function (props, state) {
    var newState = handleTransition(props, state);
    newState.hasInitialized = true;
    return newState;
});
var makeChildList = function (children) {
    var list = [];
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) { return child && list.push(child); });
    return list;
};

var Transition = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            displayedChildren: [],
            finishedLeaving: {},
            hasInitialized: false,
            indexedChildren: {},
            scheduleChildRemoval: function (key) { return _this.removeChild(key); }
        };
        return _this;
    }
    Transition.prototype.removeChild = function (key) {
        var _a = this.state, displayedChildren = _a.displayedChildren, finishedLeaving = _a.finishedLeaving;
        var _b = this.props, enterAfterExit = _b.enterAfterExit, onRest = _b.onRest;
        if (!finishedLeaving.hasOwnProperty(key))
            return;
        finishedLeaving[key] = true;
        if (!Object.keys(finishedLeaving).every(function (leavingKey) { return finishedLeaving[leavingKey]; })) {
            return;
        }
        var targetChildren = displayedChildren.filter(function (child) { return !finishedLeaving.hasOwnProperty(child.key); });
        var newState = enterAfterExit
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ finishedLeaving: {} }, handleChildrenTransitions(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { enterAfterExit: false }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { displayedChildren: targetChildren }))) : {
            finishedLeaving: {},
            displayedChildren: targetChildren
        };
        this.setState(newState, onRest);
    };
    Transition.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state !== nextState;
    };
    Transition.prototype.render = function () {
        return this.state.displayedChildren;
    };
    Transition.defaultProps = {
        flipMove: false,
        enterAfterExit: false,
        preEnterPose: 'exit',
        enterPose: 'enter',
        exitPose: 'exit'
    };
    Transition.getDerivedStateFromProps = handleChildrenTransitions;
    return Transition;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var PoseGroup = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseGroup, _super);
    function PoseGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoseGroup.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Transition, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    PoseGroup.defaultProps = {
        flipMove: true
    };
    return PoseGroup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (posed);



/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: Spring, Keyframes, Transition, Trail, Controller, config, animated, interpolate, Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyframes", function() { return Keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return Trail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);







var bugfixes = undefined;
var applyAnimatedValues = undefined;
var colorNames = [];
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var cancelFrame = function cancelFrame(cb) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
};
var interpolation = undefined;
var now = function now() {
  return Date.now();
};
var defaultElement = undefined;
var createAnimatedStyle = undefined;
var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames = function injectColorNames(names) {
  return colorNames = names;
};
var injectBugfixes = function injectBugfixes(fn) {
  return bugfixes = fn;
};
var injectInterpolation = function injectInterpolation(cls) {
  return interpolation = cls;
};
var injectFrame = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
};
var injectNow = function injectNow(nowFn) {
  return now = nowFn;
};
var injectDefaultElement = function injectDefaultElement(el) {
  return defaultElement = el;
};
var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle = factory;
};

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

var Animated =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getValue = function getValue() {};

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.addChild = function addChild(child) {};

  _proto.removeChild = function removeChild(child) {};

  _proto.getChildren = function getChildren() {
    return [];
  };

  return Animated;
}();

var getValues = function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
};

var AnimatedWithChildren =
/*#__PURE__*/
function (_Animated) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.children = [];

    _this.getChildren = function () {
      return _this.children;
    };

    _this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
    };

    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return AnimatedWithChildren;
}(Animated);
var AnimatedArrayWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedArrayWithChildren, _AnimatedWithChildren);

  function AnimatedArrayWithChildren() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
    _this2.payload = [];

    _this2.getAnimatedValue = function () {
      return _this2.getValue();
    };

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2)));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this2)));
      });
    };

    return _this2;
  }

  return AnimatedArrayWithChildren;
}(AnimatedWithChildren);
var AnimatedObjectWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedObjectWithChildren, _AnimatedWithChildren2);

  function AnimatedObjectWithChildren() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
    _this3.payload = {};

    _this3.getAnimatedValue = function () {
      return _this3.getValue(true);
    };

    _this3.attach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3)));
      });
    };

    _this3.detach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3)));
      });
    };

    return _this3;
  }

  var _proto2 = AnimatedObjectWithChildren.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var key in this.payload) {
      var value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  return AnimatedObjectWithChildren;
}(AnimatedWithChildren);

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedStyle, _AnimatedObjectWithCh);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObjectWithChildren);

// http://www.w3.org/TR/css3-color/#svg-color
var colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var Interpolation =
/*#__PURE__*/
function () {
  function Interpolation() {}

  // Default config = config, args
  // Short config   = range, output, extrapolate
  Interpolation.create = function create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output: output,
      extrapolate: extra || 'extend'
    });
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];

    var easing = config.easing || function (t) {
      return t;
    };

    var extrapolateLeft = 'extend';
    var map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    var extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  }); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return Interpolation.create(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedInterpolation, _AnimatedArrayWithChi);

  function AnimatedInterpolation(parents, _config, _arg) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.getValue = function () {
      var _this2;

      return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _this.updateConfig = function (config, arg) {
      return _this.calc = Interpolation.create(config, arg);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    _this.calc = Interpolation.create(_config, _arg);
    return _this;
  }

  return AnimatedInterpolation;
}(AnimatedArrayWithChildren);
var interpolate$1 = function interpolate(parents, config, arg) {
  return parents && new AnimatedInterpolation(parents, config, arg);
};

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
    return findAnimatedStyles(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(_value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.getValue = function () {
      return _this.value;
    };

    _this.updateStyles = function () {
      return findAnimatedStyles(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), _this.animatedStyles);
    };

    _this.updateValue = function (value) {
      return _this.flush(_this.value = value);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.value = _value;
    _this.animatedStyles = new Set();
    _this.done = false;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    _this.lastVelocity = undefined;
    _this.lastTime = undefined;
    _this.controller = undefined;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.prepare = function prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  };

  return AnimatedValue;
}(AnimatedWithChildren);

var AnimatedArray =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedArray, _AnimatedArrayWithChi);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach(function (v, i) {
          return _this.payload[i].setValue(v, flush);
        });
      } else _this.payload.forEach(function (v, i) {
        return _this.payload[i].setValue(value, flush);
      });
    };

    _this.getValue = function () {
      return _this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)), config, arg);
    };

    _this.payload = array.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  return AnimatedArray;
}(AnimatedArrayWithChildren);

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  var i;

  for (i in a) {
    if (!(i in b)) return false;
  }

  for (i in b) {
    if (a[i] !== b[i]) return false;
  }

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      autoStart = props.autoStart,
      ref = props.ref,
      forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  var forward = getForwardProps(props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return forward[k] !== void 0 ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  var _extends3;

  var name = _ref[0],
      value = _ref[1];
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value), _extends3));
}
function convertValues(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

var check = function check(value) {
  return value === 'auto';
};

var overwrite = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto(props, callback) {
  var from = props.from,
      to = props.to,
      children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  var element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  var elementStyles = element.props.style; // Return v.dom with injected ref

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(element.type, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: function ref(_ref2) {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_ref2);
        var width, height;
        var cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        var convert = overwrite(width, height);
        callback(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

var active = false;
var controllers = new Set();

var frameLoop = function frameLoop() {
  var time = now();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isDone = true;
    var noChange = true;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;

        var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;

        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * _velocity;
            var acceleration = (force + damping) / config.mass;
            _velocity = _velocity + acceleration * 1 / 1000;
            position = position + _velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(_velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = _velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange: noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

var addController = function addController(controller) {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

var removeController = function removeController(controller) {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

var Controller =
/*#__PURE__*/
function () {
  function Controller(props, config) {
    var _this = this;

    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = function () {
      return _this.props.native ? _this.interpolations : _this.animatedProps;
    };

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, config));
  }

  var _proto = Controller.prototype;

  _proto.update = function update(props) {
    var _this2 = this;

    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props, props);

    var _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reset merged props when necessary

    var extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
      var name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      var entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        var _extends2;

        _this2.hasChanged = true;
        var parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        var animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(function (value) {
          return value.prepare(_this2);
        });
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, acc, (_extends2 = {}, _extends2[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          changes: value,
          fromValues: toArray(parent.getValue()),
          toValues: toArray(target ? toValue.getPayload() : toValue),
          immediate: callProp(immediate, name),
          delay: withDefault(toConfig.delay, delay || 0),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start.apply(this, start);
    var onEnd = start[0],
        onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  };

  _proto.start = function start(onEnd, onUpdate) {
    var _this3 = this;

    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(function (res) {
      return _this3.resolve = res;
    });
  };

  _proto.stop = function stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(function (a) {
      return a.changes = undefined;
    });
    this.debouncedOnEnd({
      finished: finished
    });
  };

  _proto.destroy = function destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  };

  _proto.debouncedOnEnd = function debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    var onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  };

  return Controller;
}();

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedProps, _AnimatedObjectWithCh);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    if (props.style) props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.payload = props;
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObjectWithChildren);

function createAnimatedComponent(Component) {
  var AnimatedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this) || this;

      _this.callback = function () {
        if (_this.node) {
          var didUpdate = applyAnimatedValues.fn(_this.node, _this.propsAnimated.getAnimatedValue(), Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this)));
          if (didUpdate === false) _this.forceUpdate();
        }
      };

      _this.attachProps(props);

      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    };

    _proto.setNativeProps = function setNativeProps(props) {
      var didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.
    ;

    _proto.attachProps = function attachProps(_ref) {
      var forwardRef = _ref.forwardRef,
          nextProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["forwardRef"]);

      var oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
      var style = props.style,
          nextProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["style"]);

      var _this$props = this.props,
          currentStyle = _this$props.style,
          currentProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$propsAnimated$g = this.propsAnimated.getValue(),
          scrollTop = _this$propsAnimated$g.scrollTop,
          scrollLeft = _this$propsAnimated$g.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, animatedProps, {
        ref: function ref(node) {
          return _this2.node = handleRef(node, _this2.props.forwardRef);
        }
      }));
    };

    return AnimatedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AnimatedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
      forwardRef: ref
    }));
  });
}

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

var Spring =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Spring, _React$Component);

  function Spring() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    _this.controller = new Controller(null, null);
    _this.didUpdate = false;
    _this.didInject = false;
    _this.finished = true;

    _this.start = function () {
      _this.finished = false;
      var wasMounted = _this.mounted;

      _this.controller.start(function (props) {
        return _this.finish(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
          wasMounted: wasMounted
        }));
      }, _this.update);
    };

    _this.stop = function () {
      return _this.controller.stop(true);
    };

    _this.update = function () {
      return _this.mounted && _this.setState({
        internal: true
      });
    };

    _this.finish = function (_ref) {
      var finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      _this.finished = true;

      if (_this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (_this.props.onRest && (wasMounted || !noChange)) _this.props.onRest(_this.controller.merged); // Restore end-state

        if (_this.mounted && _this.didInject) {
          _this.afterInject = convertValues(_this.props);

          _this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (_this.mounted && (_this.didInject || _this.props.after)) _this.setState({
          internal: true
        });
        _this.didInject = false;
      }
    };

    return _this;
  }

  var _proto = Spring.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  };

  Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    var from = props.from,
        to = props.to,
        reset = props.reset,
        force = props.force;
    var propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged: propsChanged,
      lastProps: props,
      internal: false
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      var frame = this.props.inject(this.props, function (injectProps) {
        // The inject frame has rendered, now let's update animations...
        _this2.injectProps = injectProps;

        _this2.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    var values = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  };

  return Spring;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

var Trail =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Trail, _React$PureComponent);

  function Trail() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.first = true;
    _this.instances = new Set();

    _this.hook = function (instance, index, length, reverse) {
      // Add instance to set
      _this.instances.add(instance); // Return undefined on the first index and from then on the previous instance


      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(_this.instances)[reverse ? index + 1 : index - 1];
    };

    return _this;
  }

  var _proto = Trail.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        items = _this$props.items,
        _children = _this$props.children,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        initial = _this$props.initial,
        reverse = _this$props.reverse,
        keys = _this$props.keys,
        delay = _this$props.delay,
        onRest = _this$props.onRest,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    var array = toArray(items);
    return toArray(array).map(function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Spring, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        onRest: i === 0 ? onRest : null,
        key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
        from: _this2.first && initial !== void 0 ? initial || {} : from
      }, props, {
        delay: i === 0 && delay || undefined,
        attach: function attach(instance) {
          return _this2.hook(instance, i, array.length, reverse);
        },
        children: function children(props) {
          var child = _children(item, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  };

  return Trail;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent);

Trail.defaultProps = {
  keys: function keys(item) {
    return item;
  }
};

var DEFAULT = '__default';

var KeyframesImpl =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(KeyframesImpl, _React$PureComponent);

  function KeyframesImpl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.guid = 0;
    _this.state = {
      props: {},
      resolve: function resolve() {
        return null;
      },
      last: true,
      index: 0
    };

    _this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(function (resolve) {
        _this.mounted && _this.setState(function (state) {
          return {
            props: props,
            resolve: resolve,
            last: last,
            index: index
          };
        }, function () {
          return _this.running = false;
        });
      });
    };

    return _this;
  }

  var _proto = KeyframesImpl.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(previous) {
    var _this2 = this;

    var _this$props = this.props,
        states = _this$props.states,
        f = _this$props.filter,
        state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        (function () {
          var localId = ++_this2.guid;
          var slots = states[state];

          if (slots) {
            if (Array.isArray(slots)) {
              var q = Promise.resolve();

              var _loop = function _loop(i) {
                var index = i;
                var slot = slots[index];
                var last = index === slots.length - 1;
                q = q.then(function () {
                  return localId === _this2.guid && _this2.next(f(slot), last, index);
                });
              };

              for (var i = 0; i < slots.length; i++) {
                _loop(i);
              }
            } else if (typeof slots === 'function') {
              var index = 0;
              slots( // next
              function (props, last) {
                if (last === void 0) {
                  last = false;
                }

                return localId === _this2.guid && _this2.next(f(props), last, index++);
              }, // cancel
              function () {
                return requestFrame(function () {
                  return _this2.instance && _this2.instance.stop();
                });
              }, // ownprops
              _this2.props);
            } else {
              _this2.next(f(states[state]));
            }
          }
        })();
      }
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        props = _this$state.props,
        resolve = _this$state.resolve,
        last = _this$state.last,
        index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    var _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      ref: function ref(_ref) {
        return _this3.instance = handleRef(_ref, forwardRef);
      },
      config: config
    }, rest, props, {
      onRest: function onRest(args) {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  };

  return KeyframesImpl;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent);

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
var Keyframes = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(KeyframesImpl, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    forwardRef: ref
  }));
});

Keyframes.create = function (primitive) {
  return function (states, filter) {
    var _states;

    if (filter === void 0) {
      filter = function filter(states) {
        return states;
      };
    }

    if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
    return function (props) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(KeyframesImpl, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        primitive: primitive,
        states: states,
        filter: filter
      }, props));
    };
  };
};

Keyframes.Spring = function (states) {
  return Keyframes.create(Spring)(states, interpolateTo);
};

Keyframes.Trail = function (states) {
  return Keyframes.create(Trail)(states, interpolateTo);
};

var guid = 0;

var get = function get(props) {
  var items = props.items,
      keys = props.keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    items: items,
    keys: keys.map(function (key) {
      return String(key);
    })
  }, rest);
};

var Transition =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Transition, _React$PureComponent);

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  function Transition(prevProps) {
    var _this;

    _this = _React$PureComponent.call(this, prevProps) || this;

    _this.destroyItem = function (item, key, state) {
      return function (values) {
        var _this$props = _this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

        if (_this.mounted) {
          onDestroyed && onDestroyed(item);

          _this.setState(function (_ref) {
            var deleted = _ref.deleted;
            return {
              deleted: deleted.filter(function (t) {
                return t.key !== key;
              })
            };
          });

          onRest && onRest(item, state, values);
        }
      };
    };

    _this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps: prevProps
    };
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["first", "prevProps"]);

    var _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    var _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    var current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.current);

    var deleted = [].concat(state.deleted); // Compare next keys with current keys

    var currentKeys = Object.keys(current);
    var currentSet = new Set(currentKeys);
    var nextSet = new Set(keys);
    var added = keys.filter(function (item) {
      return !currentSet.has(item);
    });
    var removed = state.transitions.filter(function (item) {
      return !item.destroyed && !nextSet.has(item.originalKey);
    }).map(function (i) {
      return i.originalKey;
    });
    var updated = keys.filter(function (item) {
      return currentSet.has(item);
    });
    var delay = 0;
    added.forEach(function (key) {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(function (d) {
        return d.originalKey === key;
      })) deleted = deleted.filter(function (t) {
        return t.originalKey !== key;
      });
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'enter';
      current[key] = {
        state: state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item: item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(function (key) {
      var keyIndex = _keys.indexOf(key);

      var item = _items[keyIndex];
      var state = 'leave';
      deleted.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, current[key], {
        state: state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(function (key) {
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'update';
      current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, current[key], {
        item: item,
        state: state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    var out = keys.map(function (key) {
      return current[key];
    });
    deleted.forEach(function (_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          transition = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["left", "right"]);

      var pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(function (t) {
        return t.originalKey === left;
      })) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(function (t) {
        return t.originalKey === right;
      }); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === left;
      }); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === right;
      }); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [].concat(out.slice(0, pos), [transition], out.slice(pos));
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current: current,
      deleted: deleted,
      prevProps: props
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        initial = _this$props2.initial,
        _this$props2$from = _this$props2.from,
        _this$props2$enter = _this$props2.enter,
        _this$props2$leave = _this$props2.leave,
        _this$props2$update = _this$props2.update,
        onDestroyed = _this$props2.onDestroyed,
        keys = _this$props2.keys,
        items = _this$props2.items,
        onFrame = _this$props2.onFrame,
        onRest = _this$props2.onRest,
        onStart = _this$props2.onStart,
        trail = _this$props2.trail,
        config = _this$props2.config,
        _children = _this$props2.children,
        unique = _this$props2.unique,
        reset = _this$props2.reset,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map(function (_ref4, i) {
      var _ref5;

      var state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Keyframes, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: (_ref5 = {}, _ref5[state] = to, _ref5),
        key: key,
        onRest: destroyed ? _this2.destroyItem(item, key, state) : onRest && function (values) {
          return onRest(item, state, values);
        },
        onStart: onStart && function () {
          return onStart(item, state);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, state, values);
        },
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: function children(props) {
          var child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.PureComponent);

Transition.defaultProps = {
  keys: function keys(item) {
    return item;
  },
  unique: false,
  reset: false
};

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var extendedAnimated = domElements.reduce(function (acc, element) {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: number, scale, alpha, degrees, percent, px, vw, vh, rgba, rgbUnit, hex, hsla, color, complex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var isFirstChars = function (term) { return function (v) {
    return typeof v === 'string' && v.indexOf(term) === 0;
}; };
var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var splitCommaDelimited = function (value) {
    return typeof value === 'string' ? value.split(/,\s*/) : [value];
};
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = __assign({}, number, { transform: clamp(0, 1) });
var scale = __assign({}, number, { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');

var clampRgbUnit = clamp(0, 255);
var onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
var splitColorValues = function (terms) {
    var numTerms = terms.length;
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
        for (var i = 0; i < numTerms; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
};
var rgbUnit = __assign({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
var testRgbaString = isFirstChars('rgb');
var rgba = {
    test: function (v) { return (typeof v === 'string' ? testRgbaString(v) : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha$$1 = _a.alpha;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha$$1)
        });
    }
};
var testHslaString = isFirstChars('hsl');
var hsla = {
    test: function (v) { return (typeof v === 'string' ? testHslaString(v) : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha$$1 = _a.alpha;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha$$1)
        });
    }
};
var hex = __assign({}, rgba, { test: isFirstChars('#'), parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && onlyColorRegex.test(v)) ||
            rgba.test(v) ||
            hsla.test(v) ||
            hex.test(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    }
};




/***/ }),

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/stylefire/dist/stylefire.es.js ***!
  \*****************************************************/
/*! exports provided: default, createStylerFactory, buildStyleProperty, isTransformProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyleProperty", function() { return buildStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.uncachedValues,
        uncachedValues = _b === void 0 ? new Set() : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function (key, value) {
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                if (changedValues.indexOf(key) === -1) {
                    changedValues.push(key);
                }
                if (!hasChanged) {
                    hasChanged = true;
                    framesync__WEBPACK_IMPORTED_MODULE_0__["default"].render(render);
                }
            }
        };
        function render(forceRender) {
            if (forceRender === void 0) {
                forceRender = false;
            }
            if (forceRender === true || hasChanged) {
                onRender(state, props, changedValues);
                hasChanged = false;
                changedValues.length = 0;
            }
            return this;
        }
        return {
            get: function (key) {
                return key ? useCache && !uncachedValues.has(key) && state[key] !== undefined ? state[key] : onRead(key, props) : state;
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    if (value !== undefined) {
                        setValue(values, value);
                    } else {
                        return function (v) {
                            return setValue(values, v);
                        };
                    }
                } else {
                    for (var key in values) {
                        if (values.hasOwnProperty(key)) {
                            setValue(key, values[key]);
                        }
                    }
                }
                return this;
            },
            render: render
        };
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var setDomAttrs = function (element, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            element.setAttribute(key, attrs[key]);
        }
    }
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== 'undefined';
var testElement;
var setDashPrefix = function (key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function (key) {
    return setDashPrefix(key, key);
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) isBrowser ? testPrefix(key) : setServerProperty(key);
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
var isTransformProp = function (key) {
    return transformPropDictionary[key] === true;
};
var sortTransformProps = function (a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
};
var isTransformOriginProp = function (key) {
    return key === 'originX' || key === 'originY';
};

var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["percent"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["percent"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"]
};
var getValueType = function (key) {
    return valueTypes[key];
};

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollKeys = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);

var blacklist = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP, 'transform']);
var aliasMap = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
var isCustomTemplate = function (v) {
    return typeof v === 'function';
};
var buildStyleProperty = function (state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (styles === void 0) {
        styles = {};
    }
    if (transform === void 0) {
        transform = {};
    }
    if (transformOrigin === void 0) {
        transformOrigin = {};
    }
    if (transformKeys === void 0) {
        transformKeys = [];
    }
    if (isDashCase === void 0) {
        isDashCase = false;
    }
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for (var key in state) {
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = typeof value === 'number' && valueType ? valueType.transform(value) : value;
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
            styles[prefixer(key, isDashCase)] = valueAsType;
        }
    }
    if (!transformIsDefault) {
        var transformString = '';
        if (isCustomTemplate(state.transform)) {
            transformString = state.transform(transform);
        } else {
            var transformHasZ = false;
            transformKeys.sort(sortTransformProps);
            var numTransformKeys = transformKeys.length;
            for (var i = 0; i < numTransformKeys; i++) {
                var key = transformKeys[i];
                transformString += (aliasMap[key] || key) + "(" + transform[key] + ") ";
                transformHasZ = key === 'z' ? true : transformHasZ;
            }
            if (!transformHasZ && enableHardwareAcceleration) {
                transformString += 'translateZ(0)';
            } else {
                transformString = transformString.trim();
            }
        }
        styles.transform = transformString;
    } else if (hasTransform) {
        styles.transform = 'none';
    }
    if (hasTransformOrigin) {
        styles.transformOrigin = (transformOrigin.originX || 0) + " " + (transformOrigin.originY || 0) + " " + (transformOrigin.originZ || 0);
    }
    return styles;
};
var createStyleBuilder = function (enableHardwareAcceleration) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function (state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, true);
        return styles;
    };
};

var cssStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element,
            preparseOutput = _a.preparseOutput;
        var valueType = getValueType(key);
        if (isTransformProp(key)) {
            return valueType ? valueType.default || 0 : 0;
        } else if (scrollKeys.has(key)) {
            return element[key];
        } else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
            return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function (state, _a, changedValues) {
        var element = _a.element,
            buildStyles = _a.buildStyles;
        Object.assign(element.style, buildStyles(state));
        if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
        if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
    },
    uncachedValues: scrollKeys
});
var css = function (element, _a) {
    if (_a === void 0) {
        _a = {};
    }
    var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        props = __rest(_a, ["enableHardwareAcceleration"]);
    return cssStyler(__assign({ element: element, buildStyles: createStyleBuilder(enableHardwareAcceleration), preparseOutput: true }, props));
};

var camelCaseAttributes = /*#__PURE__*/new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues']);

var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function (percent$$1, length) {
    return percent$$1 / 100 * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale$$1 * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale$$1;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.x + ", " + state.y + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (isTransformProp(key)) {
                hasTransform = true;
            } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, pathLength);
            } else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
            } else {
                var attrKey = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
                props[attrKey] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = key === 'scale' ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};

var int = /*#__PURE__*/__assign({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__["number"], { transform: Math.round });
var valueTypes$1 = {
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    numOctaves: int
};
var getValueType$1 = function (key) {
    return valueTypes$1[key];
};

var getDimensions = function (element) {
    return typeof element.getBBox === 'function' ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function (element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }
};

var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType$1(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function (state, _a) {
        var dimensions = _a.dimensions,
            element = _a.element,
            isPath = _a.isPath,
            pathLength = _a.pathLength;
        setDomAttrs(element, build(state, dimensions, isPath, pathLength));
    }
});
var svg = function (element) {
    var dimensions = getSVGElementDimensions(element);
    var props = {
        element: element,
        dimensions: dimensions,
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var createDOMStyler = function (node, props) {
    var styler;
    if (node instanceof HTMLElement) {
        styler = css(node, props);
    } else if (node instanceof SVGElement) {
        styler = svg(node);
    } else if (node === window) {
        styler = viewport(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_0f4ba55de2d76bf0f90b ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_0f4ba55de2d76bf0f90b */ "dll-reference dll_0f4ba55de2d76bf0f90b"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Animation_Animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Animation/Animation */ "./components/Animation/Animation.js");
/* harmony import */ var _components_Introduction_Introduction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Introduction/Introduction */ "./components/Introduction/Introduction.js");
/* harmony import */ var _components_Vertical_Vertical__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Vertical/Vertical */ "./components/Vertical/Vertical.js");
/* harmony import */ var _components_List_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/List/List */ "./components/List/List.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/stef/Code/portfolio-next.js/pages/index.js";








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (value) {
      console.log('img', value);

      _this.setState({
        folder: null
      });

      _this.setState({
        folder: value
      });
    });

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_13___default.a.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _index_css__WEBPACK_IMPORTED_MODULE_13___default.a.page_wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Vertical_Vertical__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_List_List__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onitemClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Introduction_Introduction__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Animation_Animation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        imageFolder: this.state.folder,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fstef%2FCode%2Fportfolio-next.js%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fstef%2FCode%2Fportfolio-next.js%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fstef%2FCode%2Fportfolio-next.js%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_0f4ba55de2d76bf0f90b":
/*!*******************************************!*\
  !*** external "dll_0f4ba55de2d76bf0f90b" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_0f4ba55de2d76bf0f90b;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map