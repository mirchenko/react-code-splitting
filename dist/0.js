(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/action/countries.js":
/*!*********************************!*\
  !*** ./src/action/countries.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCountry = exports.fetchCountries = undefined;\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"./node_modules/babel-runtime/regenerator/index.js\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/action/types.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchCountries = exports.fetchCountries = function fetchCountries() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRIES });\n              _context.next = 4;\n              return _axios2.default.get(_types.ROOT + \"/all\");\n\n            case 4:\n              res = _context.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: res.data });\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n\n              console.log(_context.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRIES, payload: [] });\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchCountry = exports.fetchCountry = function fetchCountry(name) {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {\n      var res;\n      return _regenerator2.default.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n\n              dispatch({ type: _types.REQUEST_COUNTRY });\n              _context2.next = 4;\n              return _axios2.default.get(_types.ROOT + \"/name/\" + name);\n\n            case 4:\n              res = _context2.sent;\n\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: res.data[0] });\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n\n              console.log(_context2.t0);\n              dispatch({ type: _types.RECEIVE_COUNTRY, payload: {} });\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/action/countries.js?");

/***/ }),

/***/ "./src/common/Loading.js":
/*!*******************************!*\
  !*** ./src/common/Loading.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Loading = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Loading = exports.Loading = function Loading() {\n  return _react2.default.createElement(\n    \"div\",\n    { className: \"container\" },\n    _react2.default.createElement(\n      \"div\",\n      { className: \"loading-container\" },\n      _react2.default.createElement(\"img\", { src: \"../../img/loading.svg\", alt: \"\" })\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/common/Loading.js?");

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Loading = __webpack_require__(/*! ./Loading */ \"./src/common/Loading.js\");\n\nObject.keys(_Loading).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Loading[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/common/index.js?");

/***/ }),

/***/ "./src/components/Countries/CountriesItem.js":
/*!***************************************************!*\
  !*** ./src/components/Countries/CountriesItem.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n  var name = _ref.name,\n      flag = _ref.flag,\n      capital = _ref.capital,\n      population = _ref.population;\n\n  return _react2.default.createElement(\n    _reactRouterDom.NavLink,\n    { to: '/' + name, className: 'countries-item' },\n    _react2.default.createElement('img', { src: flag, alt: '' }),\n    _react2.default.createElement(\n      'div',\n      { className: 'countries-item-data' },\n      _react2.default.createElement(\n        'h4',\n        null,\n        name\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        capital\n      ),\n      _react2.default.createElement(\n        'span',\n        null,\n        population,\n        ' pop.'\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/Countries/CountriesItem.js?");

/***/ }),

/***/ "./src/components/Countries/index.js":
/*!*******************************************!*\
  !*** ./src/components/Countries/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _countries = __webpack_require__(/*! ../../action/countries */ \"./src/action/countries.js\");\n\nvar _common = __webpack_require__(/*! ../../common */ \"./src/common/index.js\");\n\nvar _CountriesItem = __webpack_require__(/*! ./CountriesItem */ \"./src/components/Countries/CountriesItem.js\");\n\nvar _CountriesItem2 = _interopRequireDefault(_CountriesItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar m = function m(_ref) {\n  var countries = _ref.countries;\n  return { countries: countries };\n};\n\nvar Countries = (_dec = (0, _reactRedux.connect)(m, { fetchCountries: _countries.fetchCountries }), _dec(_class = function (_Component) {\n  _inherits(Countries, _Component);\n\n  function Countries() {\n    _classCallCheck(this, Countries);\n\n    return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).apply(this, arguments));\n  }\n\n  _createClass(Countries, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchCountries();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props$countries = this.props.countries,\n          isFetching = _props$countries.isFetching,\n          data = _props$countries.data;\n\n\n      if (isFetching) {\n        return _react2.default.createElement(_common.Loading, null);\n      }\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'countries-container' },\n          data.map(function (item, i) {\n            return _react2.default.createElement(_CountriesItem2.default, _extends({ key: i }, item));\n          })\n        )\n      );\n    }\n  }], [{\n    key: 'fetching',\n    value: function fetching(_ref2) {\n      var dispatch = _ref2.dispatch;\n\n      return [dispatch((0, _countries.fetchCountries)())];\n    }\n  }]);\n\n  return Countries;\n}(_react.Component)) || _class);\nexports.default = Countries;\n;\n\n//# sourceURL=webpack:///./src/components/Countries/index.js?");

/***/ })

}]);