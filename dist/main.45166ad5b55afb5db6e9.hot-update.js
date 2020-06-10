webpackHotUpdate("main",{

/***/ "./node_modules/react-jitsi/dist/react-jitsi.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-jitsi/dist/react-jitsi.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nvar Loader = function Loader() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading meeting...\");\n};\n\nvar Props = {\n  domain: 'meet.jit.si',\n  roomName: /*#__PURE__*/(Math.random() + 0.48151642).toString(36).substring(2)\n};\nvar ContainerStyle = {\n  width: '800px',\n  height: '400px'\n};\n\nvar FrameStyle = function FrameStyle(loading) {\n  return {\n    display: loading ? 'none' : 'block',\n    width: '100%',\n    height: '100%'\n  };\n};\n\nvar Jitsi = function Jitsi(props) {\n  var _Default$Props$props = _extends({}, Props, {}, props),\n      containerStyle = _Default$Props$props.containerStyle,\n      frameStyle = _Default$Props$props.frameStyle,\n      loadingComponent = _Default$Props$props.loadingComponent,\n      onAPILoad = _Default$Props$props.onAPILoad,\n      onIframeLoad = _Default$Props$props.onIframeLoad,\n      domain = _Default$Props$props.domain,\n      roomName = _Default$Props$props.roomName,\n      password = _Default$Props$props.password,\n      displayName = _Default$Props$props.displayName,\n      config = _Default$Props$props.config,\n      interfaceConfig = _Default$Props$props.interfaceConfig,\n      noSSL = _Default$Props$props.noSSL,\n      jwt = _Default$Props$props.jwt,\n      devices = _Default$Props$props.devices,\n      userInfo = _Default$Props$props.userInfo;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  var Loader$1 = loadingComponent || Loader;\n\n  var startConference = function startConference() {\n    try {\n      var options = {\n        roomName: roomName,\n        parentNode: ref.current,\n        configOverwrite: config,\n        interfaceConfigOverwrite: interfaceConfig,\n        noSSL: noSSL,\n        jwt: jwt,\n        onLoad: onIframeLoad,\n        devices: devices,\n        userInfo: userInfo\n      };\n      var api = new window.JitsiMeetExternalAPI(domain, options);\n      if (!api) throw new Error('Failed to create JitsiMeetExternalAPI istance');\n      if (onAPILoad) onAPILoad(api);\n      api.addEventListener('videoConferenceJoined', function () {\n        setLoading(false);\n        api.executeCommand('displayName', displayName);\n        if (domain === Props.domain && password) api.executeCommand('password', password);\n      });\n      /**\r\n       * If we are on a self hosted Jitsi domain, we need to become moderators before setting a password\r\n       * Issue: https://community.jitsi.org/t/lock-failed-on-jitsimeetexternalapi/32060\r\n       */\n\n      api.addEventListener('participantRoleChanged', function (e) {\n        if (domain !== Props.domain && password && e.role === 'moderator') api.executeCommand('password', password);\n      });\n    } catch (error) {\n      console.error('Failed to start the conference', error);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (window.JitsiMeetExternalAPI) startConference();else console.error('Jitsi Meet API library not loaded. Did you include it in the html body?');\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: 'react-jitsi-container',\n    style: _extends({}, ContainerStyle, {}, containerStyle)\n  }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loader$1, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: 'react-jitsi-frame',\n    style: _extends({}, FrameStyle(loading), {}, frameStyle),\n    ref: ref\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jitsi);\n\n//# sourceURL=webpack:///./node_modules/react-jitsi/dist/react-jitsi.esm.js?");

/***/ }),

/***/ "./src/components/LiveFeedPanel/LiveFeedPanel.styles.tsx":
/*!***************************************************************!*\
  !*** ./src/components/LiveFeedPanel/LiveFeedPanel.styles.tsx ***!
  \***************************************************************/
/*! exports provided: LiveFeedPanelWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveFeedPanelWrapper\", function() { return LiveFeedPanelWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar LiveFeedPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"LiveFeedPanelstyles__LiveFeedPanelWrapper\",\n  componentId: \"sc-1mmqk5v-0\"\n})([\"display:flex;left:0px;position:absolute;top:0px;transform:rotate(0deg);width:76%;height:80%;z-index:50;opacity:1;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain;object-fit:contain;background-color:rgba(255,255,255,0.7);background-blend-mode:hard-light;\"]); // Define our button, but with the use of props.theme this time\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"LiveFeedPanelstyles__Button\",\n  componentId: \"sc-1mmqk5v-1\"\n})([\"font-size:1em;margin:1em;padding:0.25em 1em;border-radius:3px;color:\", \";border:2px solid \", \";\"], function (props) {\n  return props.theme.main;\n}, function (props) {\n  return props.theme.main;\n}); // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider\n\nButton.defaultProps = {\n  theme: {\n    main: \"palevioletred\"\n  }\n}; // Define what props.theme will look like\n\nvar theme = {\n  main: \"mediumseagreen\"\n};\n\n//# sourceURL=webpack:///./src/components/LiveFeedPanel/LiveFeedPanel.styles.tsx?");

/***/ }),

/***/ "./src/components/LiveFeedPanel/LiveFeedPanel.tsx":
/*!********************************************************!*\
  !*** ./src/components/LiveFeedPanel/LiveFeedPanel.tsx ***!
  \********************************************************/
/*! exports provided: LiveFeedPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LiveFeedPanel\", function() { return LiveFeedPanel; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jitsi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jitsi */ \"./node_modules/react-jitsi/dist/react-jitsi.esm.js\");\n/* harmony import */ var _LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveFeedPanel.styles */ \"./src/components/LiveFeedPanel/LiveFeedPanel.styles.tsx\");\n\n\n\n\nvar theme = {\n  main: \"mediumseagreen\"\n};\nvar LiveFeedPanel = function LiveFeedPanel(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('eSport: Las Vegas Tournament 2020'),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      displayName = _useState2[0],\n      setDisplayName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('vegas-esport-2020'),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      roomName = _useState4[0],\n      setRoomName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      password = _useState6[0],\n      setPassword = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      loader = _useState8[0],\n      setLoader = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),\n      onCall = _useState10[0],\n      setOnCall = _useState10[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LiveFeedPanel_styles__WEBPACK_IMPORTED_MODULE_3__[\"LiveFeedPanelWrapper\"], null, onCall ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jitsi__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    roomName: roomName,\n    displayName: displayName //password={password}\n    //loadingComponent={loader}\n    ,\n    containerStyle: {\n      width: '100%',\n      height: '100%',\n      //display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h2\", null, \"Crate your own Event\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Event name\",\n    value: roomName,\n    onChange: function onChange(e) {\n      return setRoomName(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Your name\",\n    value: displayName,\n    onChange: function onChange(e) {\n      return setDisplayName(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setOnCall(true);\n    },\n    type: \"submit\"\n  }, \" Let's start! \")));\n};\n\n//# sourceURL=webpack:///./src/components/LiveFeedPanel/LiveFeedPanel.tsx?");

/***/ })

})