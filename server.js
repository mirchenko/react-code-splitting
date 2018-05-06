/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react-loadable.json":
/*!*****************************!*\
  !*** ./react-loadable.json ***!
  \*****************************/
/*! exports provided: ../scss/main.scss, ../action/types, ./src/index.js, ./Country, ./countries, ./reducers, ./Routes, ./router, ./store, ../../action/countries, ./Loading, ../../common, ./CountriesItem, ../components/Countries, ../components/Country, axios, ./adapters/xhr, ./lib/axios, ./cancel/Cancel, ./cancel/CancelToken, ./cancel/isCancel, ./core/Axios, ./InterceptorManager, ../core/createError, ./dispatchRequest, ./enhanceError, ./../core/settle, ./transformData, ./defaults, ./helpers/bind, ./../helpers/btoa, ./../helpers/buildURL, ./../helpers/combineURLs, ./../helpers/cookies, ./../helpers/isAbsoluteURL, ./../helpers/isURLSameOrigin, ./helpers/normalizeHeaderName, ./../helpers/parseHeaders, ./helpers/spread, ./utils, babel-runtime/regenerator, fbjs/lib/ExecutionEnvironment, ./camelize, fbjs/lib/camelizeStyleName, fbjs/lib/containsNode, fbjs/lib/emptyFunction, fbjs/lib/emptyObject, fbjs/lib/getActiveElement, ./hyphenate, fbjs/lib/hyphenateStyleName, fbjs/lib/invariant, ./isNode, ./isTextNode, fbjs/lib/shallowEqual, fbjs/lib/warning, ./DOMUtils, ./LocationUtils, ./PathUtils, history/createBrowserHistory, history/createHashHistory, history/createMemoryHistory, ./createTransitionManager, ./createBrowserHistory, ./createHashHistory, ./createMemoryHistory, history, hoist-non-react-statics, invariant, is-buffer, ./_Symbol.js, ./_baseGetTag.js, ./_freeGlobal.js, ./_getPrototype.js, ./_getRawTag.js, ./_objectToString.js, ./_overArg.js, ./_root.js, ./isObjectLike.js, lodash-es/isPlainObject, object-assign, ./../../process/browser.js, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, ./cjs/react-dom.development.js, react-dom, react-loadable, ./components/Provider, ./components/connectAdvanced, ./connect/connect, ./mapDispatchToProps, ./mapStateToProps, ./mergeProps, ./selectorFactory, ./verifySubselectors, ./wrapMapToProps, react-redux, ../utils/PropTypes, ../utils/Subscription, ../utils/shallowEqual, ../utils/verifyPlainObject, ../utils/warning, react-router-config, ./matchRoutes, ./renderRoutes, ./BrowserRouter, ./HashRouter, ./Link, ./MemoryRouter, ./NavLink, ./Prompt, ./Redirect, ./Route, ./Router, ./StaticRouter, ./Switch, react-router-dom, ./matchPath, ./withRouter, react-router/Route, react-router/Router, react-router/Switch, react-router/es/MemoryRouter, react-router/es/Prompt, react-router/es/Redirect, react-router/es/Route, react-router/es/Router, react-router/es/StaticRouter, react-router/es/Switch, react-router/es/matchPath, react-router/es/withRouter, react-router/matchPath, isarray, path-to-regexp, ./cjs/react.development.js, react, redux-thunk, ./applyMiddleware, ./bindActionCreators, ./combineReducers, ./compose, ./createStore, redux, ./utils/warning, regenerator-runtime, ./runtime, resolve-pathname, symbol-observable, ./ponyfill.js, value-equal, warning, ./../../webpack/buildin/global.js, ./../../webpack/buildin/harmony-module.js, default */
/***/ (function(module) {

eval("module.exports = {\"../scss/main.scss\":[{\"id\":\"./scss/main.scss\",\"name\":\"./scss/main.scss\",\"file\":\"app.js\"},{\"id\":\"./scss/main.scss\",\"name\":\"./scss/main.scss\",\"file\":\"styles.css\"}],\"../action/types\":[{\"id\":\"./src/action/types.js\",\"name\":\"./src/action/types.js\",\"file\":\"app.js\"},{\"id\":\"./src/action/types.js\",\"name\":\"./src/action/types.js\",\"file\":\"styles.css\"}],\"./src/index.js\":[{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"app.js\"},{\"id\":\"./src/index.js\",\"name\":\"./src/index.js\",\"file\":\"styles.css\"}],\"./Country\":[{\"id\":\"./src/reducers/Country.js\",\"name\":\"./src/reducers/Country.js\",\"file\":\"app.js\"},{\"id\":\"./src/reducers/Country.js\",\"name\":\"./src/reducers/Country.js\",\"file\":\"styles.css\"}],\"./countries\":[{\"id\":\"./src/reducers/countries.js\",\"name\":\"./src/reducers/countries.js\",\"file\":\"app.js\"},{\"id\":\"./src/reducers/countries.js\",\"name\":\"./src/reducers/countries.js\",\"file\":\"styles.css\"}],\"./reducers\":[{\"id\":\"./src/reducers/index.js\",\"name\":\"./src/reducers/index.js\",\"file\":\"app.js\"},{\"id\":\"./src/reducers/index.js\",\"name\":\"./src/reducers/index.js\",\"file\":\"styles.css\"}],\"./Routes\":[{\"id\":\"./src/router/Routes.js\",\"name\":\"./src/router/Routes.js\",\"file\":\"app.js\"},{\"id\":\"./src/router/Routes.js\",\"name\":\"./src/router/Routes.js\",\"file\":\"styles.css\"}],\"./router\":[{\"id\":\"./src/router/index.js\",\"name\":\"./src/router/index.js\",\"file\":\"app.js\"},{\"id\":\"./src/router/index.js\",\"name\":\"./src/router/index.js\",\"file\":\"styles.css\"}],\"./store\":[{\"id\":\"./src/store.js\",\"name\":\"./src/store.js\",\"file\":\"app.js\"},{\"id\":\"./src/store.js\",\"name\":\"./src/store.js\",\"file\":\"styles.css\"}],\"../../action/countries\":[{\"id\":\"./src/action/countries.js\",\"name\":\"./src/action/countries.js\",\"file\":\"0.js\"},{\"id\":\"./src/action/countries.js\",\"name\":\"./src/action/countries.js\",\"file\":\"1.js\"}],\"./Loading\":[{\"id\":\"./src/common/Loading.js\",\"name\":\"./src/common/Loading.js\",\"file\":\"0.js\"},{\"id\":\"./src/common/Loading.js\",\"name\":\"./src/common/Loading.js\",\"file\":\"1.js\"}],\"../../common\":[{\"id\":\"./src/common/index.js\",\"name\":\"./src/common/index.js\",\"file\":\"0.js\"},{\"id\":\"./src/common/index.js\",\"name\":\"./src/common/index.js\",\"file\":\"1.js\"}],\"./CountriesItem\":[{\"id\":\"./src/components/Countries/CountriesItem.js\",\"name\":\"./src/components/Countries/CountriesItem.js\",\"file\":\"0.js\"}],\"../components/Countries\":[{\"id\":\"./src/components/Countries/index.js\",\"name\":\"./src/components/Countries/index.js\",\"file\":\"0.js\"}],\"../components/Country\":[{\"id\":\"./src/components/Country/index.js\",\"name\":\"./src/components/Country/index.js\",\"file\":\"1.js\"}],\"axios\":[{\"id\":\"./node_modules/axios/index.js\",\"name\":\"./node_modules/axios/index.js\",\"file\":\"vendor.js\"}],\"./adapters/xhr\":[{\"id\":\"./node_modules/axios/lib/adapters/xhr.js\",\"name\":\"./node_modules/axios/lib/adapters/xhr.js\",\"file\":\"vendor.js\"}],\"./lib/axios\":[{\"id\":\"./node_modules/axios/lib/axios.js\",\"name\":\"./node_modules/axios/lib/axios.js\",\"file\":\"vendor.js\"}],\"./cancel/Cancel\":[{\"id\":\"./node_modules/axios/lib/cancel/Cancel.js\",\"name\":\"./node_modules/axios/lib/cancel/Cancel.js\",\"file\":\"vendor.js\"}],\"./cancel/CancelToken\":[{\"id\":\"./node_modules/axios/lib/cancel/CancelToken.js\",\"name\":\"./node_modules/axios/lib/cancel/CancelToken.js\",\"file\":\"vendor.js\"}],\"./cancel/isCancel\":[{\"id\":\"./node_modules/axios/lib/cancel/isCancel.js\",\"name\":\"./node_modules/axios/lib/cancel/isCancel.js\",\"file\":\"vendor.js\"}],\"./core/Axios\":[{\"id\":\"./node_modules/axios/lib/core/Axios.js\",\"name\":\"./node_modules/axios/lib/core/Axios.js\",\"file\":\"vendor.js\"}],\"./InterceptorManager\":[{\"id\":\"./node_modules/axios/lib/core/InterceptorManager.js\",\"name\":\"./node_modules/axios/lib/core/InterceptorManager.js\",\"file\":\"vendor.js\"}],\"../core/createError\":[{\"id\":\"./node_modules/axios/lib/core/createError.js\",\"name\":\"./node_modules/axios/lib/core/createError.js\",\"file\":\"vendor.js\"}],\"./dispatchRequest\":[{\"id\":\"./node_modules/axios/lib/core/dispatchRequest.js\",\"name\":\"./node_modules/axios/lib/core/dispatchRequest.js\",\"file\":\"vendor.js\"}],\"./enhanceError\":[{\"id\":\"./node_modules/axios/lib/core/enhanceError.js\",\"name\":\"./node_modules/axios/lib/core/enhanceError.js\",\"file\":\"vendor.js\"}],\"./../core/settle\":[{\"id\":\"./node_modules/axios/lib/core/settle.js\",\"name\":\"./node_modules/axios/lib/core/settle.js\",\"file\":\"vendor.js\"}],\"./transformData\":[{\"id\":\"./node_modules/axios/lib/core/transformData.js\",\"name\":\"./node_modules/axios/lib/core/transformData.js\",\"file\":\"vendor.js\"}],\"./defaults\":[{\"id\":\"./node_modules/axios/lib/defaults.js\",\"name\":\"./node_modules/axios/lib/defaults.js\",\"file\":\"vendor.js\"}],\"./helpers/bind\":[{\"id\":\"./node_modules/axios/lib/helpers/bind.js\",\"name\":\"./node_modules/axios/lib/helpers/bind.js\",\"file\":\"vendor.js\"}],\"./../helpers/btoa\":[{\"id\":\"./node_modules/axios/lib/helpers/btoa.js\",\"name\":\"./node_modules/axios/lib/helpers/btoa.js\",\"file\":\"vendor.js\"}],\"./../helpers/buildURL\":[{\"id\":\"./node_modules/axios/lib/helpers/buildURL.js\",\"name\":\"./node_modules/axios/lib/helpers/buildURL.js\",\"file\":\"vendor.js\"}],\"./../helpers/combineURLs\":[{\"id\":\"./node_modules/axios/lib/helpers/combineURLs.js\",\"name\":\"./node_modules/axios/lib/helpers/combineURLs.js\",\"file\":\"vendor.js\"}],\"./../helpers/cookies\":[{\"id\":\"./node_modules/axios/lib/helpers/cookies.js\",\"name\":\"./node_modules/axios/lib/helpers/cookies.js\",\"file\":\"vendor.js\"}],\"./../helpers/isAbsoluteURL\":[{\"id\":\"./node_modules/axios/lib/helpers/isAbsoluteURL.js\",\"name\":\"./node_modules/axios/lib/helpers/isAbsoluteURL.js\",\"file\":\"vendor.js\"}],\"./../helpers/isURLSameOrigin\":[{\"id\":\"./node_modules/axios/lib/helpers/isURLSameOrigin.js\",\"name\":\"./node_modules/axios/lib/helpers/isURLSameOrigin.js\",\"file\":\"vendor.js\"}],\"./helpers/normalizeHeaderName\":[{\"id\":\"./node_modules/axios/lib/helpers/normalizeHeaderName.js\",\"name\":\"./node_modules/axios/lib/helpers/normalizeHeaderName.js\",\"file\":\"vendor.js\"}],\"./../helpers/parseHeaders\":[{\"id\":\"./node_modules/axios/lib/helpers/parseHeaders.js\",\"name\":\"./node_modules/axios/lib/helpers/parseHeaders.js\",\"file\":\"vendor.js\"}],\"./helpers/spread\":[{\"id\":\"./node_modules/axios/lib/helpers/spread.js\",\"name\":\"./node_modules/axios/lib/helpers/spread.js\",\"file\":\"vendor.js\"}],\"./utils\":[{\"id\":\"./node_modules/axios/lib/utils.js\",\"name\":\"./node_modules/axios/lib/utils.js\",\"file\":\"vendor.js\"}],\"babel-runtime/regenerator\":[{\"id\":\"./node_modules/babel-runtime/regenerator/index.js\",\"name\":\"./node_modules/babel-runtime/regenerator/index.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/ExecutionEnvironment\":[{\"id\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"name\":\"./node_modules/fbjs/lib/ExecutionEnvironment.js\",\"file\":\"vendor.js\"}],\"./camelize\":[{\"id\":\"./node_modules/fbjs/lib/camelize.js\",\"name\":\"./node_modules/fbjs/lib/camelize.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/camelizeStyleName\":[{\"id\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"name\":\"./node_modules/fbjs/lib/camelizeStyleName.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/containsNode\":[{\"id\":\"./node_modules/fbjs/lib/containsNode.js\",\"name\":\"./node_modules/fbjs/lib/containsNode.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/emptyFunction\":[{\"id\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"name\":\"./node_modules/fbjs/lib/emptyFunction.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/emptyObject\":[{\"id\":\"./node_modules/fbjs/lib/emptyObject.js\",\"name\":\"./node_modules/fbjs/lib/emptyObject.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/getActiveElement\":[{\"id\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"name\":\"./node_modules/fbjs/lib/getActiveElement.js\",\"file\":\"vendor.js\"}],\"./hyphenate\":[{\"id\":\"./node_modules/fbjs/lib/hyphenate.js\",\"name\":\"./node_modules/fbjs/lib/hyphenate.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/hyphenateStyleName\":[{\"id\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"name\":\"./node_modules/fbjs/lib/hyphenateStyleName.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/invariant\":[{\"id\":\"./node_modules/fbjs/lib/invariant.js\",\"name\":\"./node_modules/fbjs/lib/invariant.js\",\"file\":\"vendor.js\"}],\"./isNode\":[{\"id\":\"./node_modules/fbjs/lib/isNode.js\",\"name\":\"./node_modules/fbjs/lib/isNode.js\",\"file\":\"vendor.js\"}],\"./isTextNode\":[{\"id\":\"./node_modules/fbjs/lib/isTextNode.js\",\"name\":\"./node_modules/fbjs/lib/isTextNode.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/shallowEqual\":[{\"id\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"name\":\"./node_modules/fbjs/lib/shallowEqual.js\",\"file\":\"vendor.js\"}],\"fbjs/lib/warning\":[{\"id\":\"./node_modules/fbjs/lib/warning.js\",\"name\":\"./node_modules/fbjs/lib/warning.js\",\"file\":\"vendor.js\"}],\"./DOMUtils\":[{\"id\":\"./node_modules/history/DOMUtils.js\",\"name\":\"./node_modules/history/DOMUtils.js\",\"file\":\"vendor.js\"},{\"id\":\"./node_modules/history/es/DOMUtils.js\",\"name\":\"./node_modules/history/es/DOMUtils.js\",\"file\":\"vendor.js\"}],\"./LocationUtils\":[{\"id\":\"./node_modules/history/LocationUtils.js\",\"name\":\"./node_modules/history/LocationUtils.js\",\"file\":\"vendor.js\"},{\"id\":\"./node_modules/history/es/LocationUtils.js\",\"name\":\"./node_modules/history/es/LocationUtils.js\",\"file\":\"vendor.js\"}],\"./PathUtils\":[{\"id\":\"./node_modules/history/PathUtils.js\",\"name\":\"./node_modules/history/PathUtils.js\",\"file\":\"vendor.js\"},{\"id\":\"./node_modules/history/es/PathUtils.js\",\"name\":\"./node_modules/history/es/PathUtils.js\",\"file\":\"vendor.js\"}],\"history/createBrowserHistory\":[{\"id\":\"./node_modules/history/createBrowserHistory.js\",\"name\":\"./node_modules/history/createBrowserHistory.js\",\"file\":\"vendor.js\"}],\"history/createHashHistory\":[{\"id\":\"./node_modules/history/createHashHistory.js\",\"name\":\"./node_modules/history/createHashHistory.js\",\"file\":\"vendor.js\"}],\"history/createMemoryHistory\":[{\"id\":\"./node_modules/history/createMemoryHistory.js\",\"name\":\"./node_modules/history/createMemoryHistory.js\",\"file\":\"vendor.js\"}],\"./createTransitionManager\":[{\"id\":\"./node_modules/history/createTransitionManager.js\",\"name\":\"./node_modules/history/createTransitionManager.js\",\"file\":\"vendor.js\"},{\"id\":\"./node_modules/history/es/createTransitionManager.js\",\"name\":\"./node_modules/history/es/createTransitionManager.js\",\"file\":\"vendor.js\"}],\"./createBrowserHistory\":[{\"id\":\"./node_modules/history/es/createBrowserHistory.js\",\"name\":\"./node_modules/history/es/createBrowserHistory.js\",\"file\":\"vendor.js\"}],\"./createHashHistory\":[{\"id\":\"./node_modules/history/es/createHashHistory.js\",\"name\":\"./node_modules/history/es/createHashHistory.js\",\"file\":\"vendor.js\"}],\"./createMemoryHistory\":[{\"id\":\"./node_modules/history/es/createMemoryHistory.js\",\"name\":\"./node_modules/history/es/createMemoryHistory.js\",\"file\":\"vendor.js\"}],\"history\":[{\"id\":\"./node_modules/history/es/index.js\",\"name\":\"./node_modules/history/es/index.js\",\"file\":\"vendor.js\"}],\"hoist-non-react-statics\":[{\"id\":\"./node_modules/hoist-non-react-statics/index.js\",\"name\":\"./node_modules/hoist-non-react-statics/index.js\",\"file\":\"vendor.js\"}],\"invariant\":[{\"id\":\"./node_modules/invariant/browser.js\",\"name\":\"./node_modules/invariant/browser.js\",\"file\":\"vendor.js\"}],\"is-buffer\":[{\"id\":\"./node_modules/is-buffer/index.js\",\"name\":\"./node_modules/is-buffer/index.js\",\"file\":\"vendor.js\"}],\"./_Symbol.js\":[{\"id\":\"./node_modules/lodash-es/_Symbol.js\",\"name\":\"./node_modules/lodash-es/_Symbol.js\",\"file\":\"vendor.js\"}],\"./_baseGetTag.js\":[{\"id\":\"./node_modules/lodash-es/_baseGetTag.js\",\"name\":\"./node_modules/lodash-es/_baseGetTag.js\",\"file\":\"vendor.js\"}],\"./_freeGlobal.js\":[{\"id\":\"./node_modules/lodash-es/_freeGlobal.js\",\"name\":\"./node_modules/lodash-es/_freeGlobal.js\",\"file\":\"vendor.js\"}],\"./_getPrototype.js\":[{\"id\":\"./node_modules/lodash-es/_getPrototype.js\",\"name\":\"./node_modules/lodash-es/_getPrototype.js\",\"file\":\"vendor.js\"}],\"./_getRawTag.js\":[{\"id\":\"./node_modules/lodash-es/_getRawTag.js\",\"name\":\"./node_modules/lodash-es/_getRawTag.js\",\"file\":\"vendor.js\"}],\"./_objectToString.js\":[{\"id\":\"./node_modules/lodash-es/_objectToString.js\",\"name\":\"./node_modules/lodash-es/_objectToString.js\",\"file\":\"vendor.js\"}],\"./_overArg.js\":[{\"id\":\"./node_modules/lodash-es/_overArg.js\",\"name\":\"./node_modules/lodash-es/_overArg.js\",\"file\":\"vendor.js\"}],\"./_root.js\":[{\"id\":\"./node_modules/lodash-es/_root.js\",\"name\":\"./node_modules/lodash-es/_root.js\",\"file\":\"vendor.js\"}],\"./isObjectLike.js\":[{\"id\":\"./node_modules/lodash-es/isObjectLike.js\",\"name\":\"./node_modules/lodash-es/isObjectLike.js\",\"file\":\"vendor.js\"}],\"lodash-es/isPlainObject\":[{\"id\":\"./node_modules/lodash-es/isPlainObject.js\",\"name\":\"./node_modules/lodash-es/isPlainObject.js\",\"file\":\"vendor.js\"}],\"object-assign\":[{\"id\":\"./node_modules/object-assign/index.js\",\"name\":\"./node_modules/object-assign/index.js\",\"file\":\"vendor.js\"}],\"./../../process/browser.js\":[{\"id\":\"./node_modules/process/browser.js\",\"name\":\"./node_modules/process/browser.js\",\"file\":\"vendor.js\"}],\"prop-types/checkPropTypes\":[{\"id\":\"./node_modules/prop-types/checkPropTypes.js\",\"name\":\"./node_modules/prop-types/checkPropTypes.js\",\"file\":\"vendor.js\"}],\"./factoryWithTypeCheckers\":[{\"id\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"name\":\"./node_modules/prop-types/factoryWithTypeCheckers.js\",\"file\":\"vendor.js\"}],\"prop-types\":[{\"id\":\"./node_modules/prop-types/index.js\",\"name\":\"./node_modules/prop-types/index.js\",\"file\":\"vendor.js\"}],\"./lib/ReactPropTypesSecret\":[{\"id\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"name\":\"./node_modules/prop-types/lib/ReactPropTypesSecret.js\",\"file\":\"vendor.js\"}],\"./cjs/react-dom.development.js\":[{\"id\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"name\":\"./node_modules/react-dom/cjs/react-dom.development.js\",\"file\":\"vendor.js\"}],\"react-dom\":[{\"id\":\"./node_modules/react-dom/index.js\",\"name\":\"./node_modules/react-dom/index.js\",\"file\":\"vendor.js\"}],\"react-loadable\":[{\"id\":\"./node_modules/react-loadable/lib/index.js\",\"name\":\"./node_modules/react-loadable/lib/index.js\",\"file\":\"vendor.js\"}],\"./components/Provider\":[{\"id\":\"./node_modules/react-redux/es/components/Provider.js\",\"name\":\"./node_modules/react-redux/es/components/Provider.js\",\"file\":\"vendor.js\"}],\"./components/connectAdvanced\":[{\"id\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"name\":\"./node_modules/react-redux/es/components/connectAdvanced.js\",\"file\":\"vendor.js\"}],\"./connect/connect\":[{\"id\":\"./node_modules/react-redux/es/connect/connect.js\",\"name\":\"./node_modules/react-redux/es/connect/connect.js\",\"file\":\"vendor.js\"}],\"./mapDispatchToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapDispatchToProps.js\",\"file\":\"vendor.js\"}],\"./mapStateToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mapStateToProps.js\",\"file\":\"vendor.js\"}],\"./mergeProps\":[{\"id\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"name\":\"./node_modules/react-redux/es/connect/mergeProps.js\",\"file\":\"vendor.js\"}],\"./selectorFactory\":[{\"id\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"name\":\"./node_modules/react-redux/es/connect/selectorFactory.js\",\"file\":\"vendor.js\"}],\"./verifySubselectors\":[{\"id\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"name\":\"./node_modules/react-redux/es/connect/verifySubselectors.js\",\"file\":\"vendor.js\"}],\"./wrapMapToProps\":[{\"id\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"name\":\"./node_modules/react-redux/es/connect/wrapMapToProps.js\",\"file\":\"vendor.js\"}],\"react-redux\":[{\"id\":\"./node_modules/react-redux/es/index.js\",\"name\":\"./node_modules/react-redux/es/index.js\",\"file\":\"vendor.js\"}],\"../utils/PropTypes\":[{\"id\":\"./node_modules/react-redux/es/utils/PropTypes.js\",\"name\":\"./node_modules/react-redux/es/utils/PropTypes.js\",\"file\":\"vendor.js\"}],\"../utils/Subscription\":[{\"id\":\"./node_modules/react-redux/es/utils/Subscription.js\",\"name\":\"./node_modules/react-redux/es/utils/Subscription.js\",\"file\":\"vendor.js\"}],\"../utils/shallowEqual\":[{\"id\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"name\":\"./node_modules/react-redux/es/utils/shallowEqual.js\",\"file\":\"vendor.js\"}],\"../utils/verifyPlainObject\":[{\"id\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"name\":\"./node_modules/react-redux/es/utils/verifyPlainObject.js\",\"file\":\"vendor.js\"}],\"../utils/warning\":[{\"id\":\"./node_modules/react-redux/es/utils/warning.js\",\"name\":\"./node_modules/react-redux/es/utils/warning.js\",\"file\":\"vendor.js\"}],\"react-router-config\":[{\"id\":\"./node_modules/react-router-config/es/index.js\",\"name\":\"./node_modules/react-router-config/es/index.js\",\"file\":\"vendor.js\"}],\"./matchRoutes\":[{\"id\":\"./node_modules/react-router-config/es/matchRoutes.js\",\"name\":\"./node_modules/react-router-config/es/matchRoutes.js\",\"file\":\"vendor.js\"}],\"./renderRoutes\":[{\"id\":\"./node_modules/react-router-config/es/renderRoutes.js\",\"name\":\"./node_modules/react-router-config/es/renderRoutes.js\",\"file\":\"vendor.js\"}],\"./BrowserRouter\":[{\"id\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"name\":\"./node_modules/react-router-dom/es/BrowserRouter.js\",\"file\":\"vendor.js\"}],\"./HashRouter\":[{\"id\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"name\":\"./node_modules/react-router-dom/es/HashRouter.js\",\"file\":\"vendor.js\"}],\"./Link\":[{\"id\":\"./node_modules/react-router-dom/es/Link.js\",\"name\":\"./node_modules/react-router-dom/es/Link.js\",\"file\":\"vendor.js\"}],\"./MemoryRouter\":[{\"id\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router-dom/es/MemoryRouter.js\",\"file\":\"vendor.js\"}],\"./NavLink\":[{\"id\":\"./node_modules/react-router-dom/es/NavLink.js\",\"name\":\"./node_modules/react-router-dom/es/NavLink.js\",\"file\":\"vendor.js\"}],\"./Prompt\":[{\"id\":\"./node_modules/react-router-dom/es/Prompt.js\",\"name\":\"./node_modules/react-router-dom/es/Prompt.js\",\"file\":\"vendor.js\"}],\"./Redirect\":[{\"id\":\"./node_modules/react-router-dom/es/Redirect.js\",\"name\":\"./node_modules/react-router-dom/es/Redirect.js\",\"file\":\"vendor.js\"}],\"./Route\":[{\"id\":\"./node_modules/react-router-dom/es/Route.js\",\"name\":\"./node_modules/react-router-dom/es/Route.js\",\"file\":\"vendor.js\"}],\"./Router\":[{\"id\":\"./node_modules/react-router-dom/es/Router.js\",\"name\":\"./node_modules/react-router-dom/es/Router.js\",\"file\":\"vendor.js\"}],\"./StaticRouter\":[{\"id\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"name\":\"./node_modules/react-router-dom/es/StaticRouter.js\",\"file\":\"vendor.js\"}],\"./Switch\":[{\"id\":\"./node_modules/react-router-dom/es/Switch.js\",\"name\":\"./node_modules/react-router-dom/es/Switch.js\",\"file\":\"vendor.js\"}],\"react-router-dom\":[{\"id\":\"./node_modules/react-router-dom/es/index.js\",\"name\":\"./node_modules/react-router-dom/es/index.js\",\"file\":\"vendor.js\"}],\"./matchPath\":[{\"id\":\"./node_modules/react-router-dom/es/matchPath.js\",\"name\":\"./node_modules/react-router-dom/es/matchPath.js\",\"file\":\"vendor.js\"}],\"./withRouter\":[{\"id\":\"./node_modules/react-router-dom/es/withRouter.js\",\"name\":\"./node_modules/react-router-dom/es/withRouter.js\",\"file\":\"vendor.js\"}],\"react-router/Route\":[{\"id\":\"./node_modules/react-router/Route.js\",\"name\":\"./node_modules/react-router/Route.js\",\"file\":\"vendor.js\"}],\"react-router/Router\":[{\"id\":\"./node_modules/react-router/Router.js\",\"name\":\"./node_modules/react-router/Router.js\",\"file\":\"vendor.js\"}],\"react-router/Switch\":[{\"id\":\"./node_modules/react-router/Switch.js\",\"name\":\"./node_modules/react-router/Switch.js\",\"file\":\"vendor.js\"}],\"react-router/es/MemoryRouter\":[{\"id\":\"./node_modules/react-router/es/MemoryRouter.js\",\"name\":\"./node_modules/react-router/es/MemoryRouter.js\",\"file\":\"vendor.js\"}],\"react-router/es/Prompt\":[{\"id\":\"./node_modules/react-router/es/Prompt.js\",\"name\":\"./node_modules/react-router/es/Prompt.js\",\"file\":\"vendor.js\"}],\"react-router/es/Redirect\":[{\"id\":\"./node_modules/react-router/es/Redirect.js\",\"name\":\"./node_modules/react-router/es/Redirect.js\",\"file\":\"vendor.js\"}],\"react-router/es/Route\":[{\"id\":\"./node_modules/react-router/es/Route.js\",\"name\":\"./node_modules/react-router/es/Route.js\",\"file\":\"vendor.js\"}],\"react-router/es/Router\":[{\"id\":\"./node_modules/react-router/es/Router.js\",\"name\":\"./node_modules/react-router/es/Router.js\",\"file\":\"vendor.js\"}],\"react-router/es/StaticRouter\":[{\"id\":\"./node_modules/react-router/es/StaticRouter.js\",\"name\":\"./node_modules/react-router/es/StaticRouter.js\",\"file\":\"vendor.js\"}],\"react-router/es/Switch\":[{\"id\":\"./node_modules/react-router/es/Switch.js\",\"name\":\"./node_modules/react-router/es/Switch.js\",\"file\":\"vendor.js\"}],\"react-router/es/matchPath\":[{\"id\":\"./node_modules/react-router/es/matchPath.js\",\"name\":\"./node_modules/react-router/es/matchPath.js\",\"file\":\"vendor.js\"}],\"react-router/es/withRouter\":[{\"id\":\"./node_modules/react-router/es/withRouter.js\",\"name\":\"./node_modules/react-router/es/withRouter.js\",\"file\":\"vendor.js\"}],\"react-router/matchPath\":[{\"id\":\"./node_modules/react-router/matchPath.js\",\"name\":\"./node_modules/react-router/matchPath.js\",\"file\":\"vendor.js\"}],\"isarray\":[{\"id\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"name\":\"./node_modules/react-router/node_modules/isarray/index.js\",\"file\":\"vendor.js\"}],\"path-to-regexp\":[{\"id\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"name\":\"./node_modules/react-router/node_modules/path-to-regexp/index.js\",\"file\":\"vendor.js\"}],\"./cjs/react.development.js\":[{\"id\":\"./node_modules/react/cjs/react.development.js\",\"name\":\"./node_modules/react/cjs/react.development.js\",\"file\":\"vendor.js\"}],\"react\":[{\"id\":\"./node_modules/react/index.js\",\"name\":\"./node_modules/react/index.js\",\"file\":\"vendor.js\"}],\"redux-thunk\":[{\"id\":\"./node_modules/redux-thunk/lib/index.js\",\"name\":\"./node_modules/redux-thunk/lib/index.js\",\"file\":\"vendor.js\"}],\"./applyMiddleware\":[{\"id\":\"./node_modules/redux/es/applyMiddleware.js\",\"name\":\"./node_modules/redux/es/applyMiddleware.js\",\"file\":\"vendor.js\"}],\"./bindActionCreators\":[{\"id\":\"./node_modules/redux/es/bindActionCreators.js\",\"name\":\"./node_modules/redux/es/bindActionCreators.js\",\"file\":\"vendor.js\"}],\"./combineReducers\":[{\"id\":\"./node_modules/redux/es/combineReducers.js\",\"name\":\"./node_modules/redux/es/combineReducers.js\",\"file\":\"vendor.js\"}],\"./compose\":[{\"id\":\"./node_modules/redux/es/compose.js\",\"name\":\"./node_modules/redux/es/compose.js\",\"file\":\"vendor.js\"}],\"./createStore\":[{\"id\":\"./node_modules/redux/es/createStore.js\",\"name\":\"./node_modules/redux/es/createStore.js\",\"file\":\"vendor.js\"}],\"redux\":[{\"id\":\"./node_modules/redux/es/index.js\",\"name\":\"./node_modules/redux/es/index.js\",\"file\":\"vendor.js\"}],\"./utils/warning\":[{\"id\":\"./node_modules/redux/es/utils/warning.js\",\"name\":\"./node_modules/redux/es/utils/warning.js\",\"file\":\"vendor.js\"}],\"regenerator-runtime\":[{\"id\":\"./node_modules/regenerator-runtime/runtime-module.js\",\"name\":\"./node_modules/regenerator-runtime/runtime-module.js\",\"file\":\"vendor.js\"}],\"./runtime\":[{\"id\":\"./node_modules/regenerator-runtime/runtime.js\",\"name\":\"./node_modules/regenerator-runtime/runtime.js\",\"file\":\"vendor.js\"}],\"resolve-pathname\":[{\"id\":\"./node_modules/resolve-pathname/index.js\",\"name\":\"./node_modules/resolve-pathname/index.js\",\"file\":\"vendor.js\"}],\"symbol-observable\":[{\"id\":\"./node_modules/symbol-observable/es/index.js\",\"name\":\"./node_modules/symbol-observable/es/index.js\",\"file\":\"vendor.js\"}],\"./ponyfill.js\":[{\"id\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"name\":\"./node_modules/symbol-observable/es/ponyfill.js\",\"file\":\"vendor.js\"}],\"value-equal\":[{\"id\":\"./node_modules/value-equal/index.js\",\"name\":\"./node_modules/value-equal/index.js\",\"file\":\"vendor.js\"}],\"warning\":[{\"id\":\"./node_modules/warning/browser.js\",\"name\":\"./node_modules/warning/browser.js\",\"file\":\"vendor.js\"}],\"./../../webpack/buildin/global.js\":[{\"id\":\"./node_modules/webpack/buildin/global.js\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"vendor.js\"}],\"./../../webpack/buildin/harmony-module.js\":[{\"id\":\"./node_modules/webpack/buildin/harmony-module.js\",\"name\":\"./node_modules/webpack/buildin/harmony-module.js\",\"file\":\"vendor.js\"}]};\n\n//# sourceURL=webpack:///./react-loadable.json?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ \"babel-runtime/regenerator\");\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _render = __webpack_require__(/*! ./render */ \"./server/render.js\");\n\nvar _render2 = _interopRequireDefault(_render);\n\nvar _store = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar PORT = process.env.PORT || 8079;\nvar app = (0, _express2.default)();\n\napp.use('/dist', _express2.default.static('dist'));\n\napp.use(function (req, res, next) {\n  if (/\\.js|\\.css/.test(req.path)) {\n    res.redirect('/dist' + req.path);\n  } else {\n    next();\n  }\n});\n\napp.use(/\\.js$/, _express2.default.static('dist'));\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {\n    var actionsTemp, loadedActions, actions, context, content;\n    return _regenerator2.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            actionsTemp = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {\n              var route = _ref2.route;\n              return !route.component.preload ? route.component : route.component.preload().then(function (res) {\n                return res.default;\n              });\n            });\n            _context2.next = 3;\n            return Promise.all(actionsTemp);\n\n          case 3:\n            loadedActions = _context2.sent;\n            actions = loadedActions.map(function (component) {\n              return component.fetching ? component.fetching(_extends({}, _store2.default, { path: req.path })) : null;\n            }).map(function () {\n              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(actions) {\n                return _regenerator2.default.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Promise.all((actions || []).map(function (p) {\n                          return p && new Promise(function (resolve) {\n                            return p.then(resolve).catch(resolve);\n                          });\n                        }));\n\n                      case 2:\n                        return _context.abrupt('return', _context.sent);\n\n                      case 3:\n                      case 'end':\n                        return _context.stop();\n                    }\n                  }\n                }, _callee, undefined);\n              }));\n\n              return function (_x3) {\n                return _ref3.apply(this, arguments);\n              };\n            }());\n            _context2.next = 7;\n            return Promise.all(actions);\n\n          case 7:\n            context = {};\n            content = (0, _render2.default)(req.path, _store2.default, context);\n\n\n            res.send(content);\n\n          case 10:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\n_reactLoadable2.default.preloadAll().then(function () {\n  app.listen(PORT, function () {\n    return console.log('Frontend service listening on port: ' + PORT);\n  });\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/render.js":
/*!**************************!*\
  !*** ./server/render.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _webpack = __webpack_require__(/*! react-loadable/webpack */ \"react-loadable/webpack\");\n\nvar _Routes = __webpack_require__(/*! ../src/router/Routes */ \"./src/router/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactLoadable3 = __webpack_require__(/*! ../react-loadable.json */ \"./react-loadable.json\");\n\nvar _reactLoadable4 = _interopRequireDefault(_reactLoadable3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (pathname, store, context) {\n  var modules = [];\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactLoadable2.default.Capture,\n    { report: function report(moduleName) {\n        return modules.push(moduleName);\n      } },\n    _react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: pathname, context: context },\n        _react2.default.createElement(\n          'div',\n          null,\n          (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n        )\n      )\n    )\n  ));\n\n  var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);\n\n  return '\\n  <!DOCTYPE html>\\n      <html lang=\"en\">\\n      <head>\\n        <meta charset=\"UTF-8\">\\n        <link rel=\"stylesheet\" href=\"/styles.css\">\\n        <title>Title</title>\\n      </head>\\n      <body>\\n      \\n      <div id=\"app\">' + content + '</div>\\n      <script>\\n        window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\\n      </script>\\n\\n     \\n         \\n      <script src=\"/vendor.js\"></script>\\n            ' + bundles.map(function (bundle) {\n    return '<script src=\"/' + bundle.file + '\"></script>';\n  }).join('\\\\n') + '\\n            <script src=\"/app.js\"></script>\\n         \\n      </body>\\n      </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./server/render.js?");

/***/ }),

/***/ "./src/action/types.js":
/*!*****************************!*\
  !*** ./src/action/types.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ROOT = exports.ROOT = 'https://restcountries.eu/rest/v2';\n\nvar REQUEST_COUNTRIES = exports.REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';\nvar RECEIVE_COUNTRIES = exports.RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';\n\nvar REQUEST_COUNTRY = exports.REQUEST_COUNTRY = 'REQUEST_COUNTRY';\nvar RECEIVE_COUNTRY = exports.RECEIVE_COUNTRY = 'RECEIVE_COUNTRY';\n\n//# sourceURL=webpack:///./src/action/types.js?");

/***/ }),

/***/ "./src/reducers/Country.js":
/*!*********************************!*\
  !*** ./src/reducers/Country.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  name: '',\n  nativeName: '',\n  flag: '',\n  capital: '',\n  region: '',\n  population: '',\n  languages: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRY:\n      {\n        return _extends({}, state, { isFetching: false }, action.payload);\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/Country.js?");

/***/ }),

/***/ "./src/reducers/countries.js":
/*!***********************************!*\
  !*** ./src/reducers/countries.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ../action/types */ \"./src/action/types.js\");\n\nvar INITIAL_STATE = {\n  data: [],\n  isFetching: false,\n  lastUpdate: Date.now()\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.REQUEST_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: true });\n      }\n    case _types.RECEIVE_COUNTRIES:\n      {\n        return _extends({}, state, { isFetching: false, data: action.payload });\n      }\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/reducers/countries.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _countries = __webpack_require__(/*! ./countries */ \"./src/reducers/countries.js\");\n\nvar _countries2 = _interopRequireDefault(_countries);\n\nvar _Country = __webpack_require__(/*! ./Country */ \"./src/reducers/Country.js\");\n\nvar _Country2 = _interopRequireDefault(_Country);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  countries: _countries2.default,\n  country: _Country2.default\n});\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/router/Routes.js":
/*!******************************!*\
  !*** ./src/router/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar loading = function loading() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Loading...'\n  );\n};\n\nvar Countries = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 0).then(function() { var module = __webpack_require__(/*! ../components/Countries */ \"./src/components/Countries/index.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n  },\n  modules: ['../components/Countries'],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ../components/Countries */ \"./src/components/Countries/index.js\")];\n  },\n  loading: loading\n});\n\nvar Country = (0, _reactLoadable2.default)({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 1).then(function() { var module = __webpack_require__(/*! ../components/Country */ \"./src/components/Country/index.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n  },\n  modules: ['../components/Country'],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ../components/Country */ \"./src/components/Country/index.js\")];\n  },\n  loading: loading\n});\n\nexports.default = [{\n  component: Countries,\n  path: '/',\n  exact: true\n}, {\n  component: Country,\n  path: '/:name'\n}];\n\n//# sourceURL=webpack:///./src/router/Routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/regenerator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable/webpack\");\n\n//# sourceURL=webpack:///external_%22react-loadable/webpack%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });