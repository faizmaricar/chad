webpackHotUpdate("main",{

/***/ "./src/AppStateContext.tsx":
/*!*********************************!*\
  !*** ./src/AppStateContext.tsx ***!
  \*********************************/
/*! exports provided: AppStateProvider, useAppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppStateProvider\", function() { return AppStateProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAppState\", function() { return useAppState; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n // import { nanoid } from \"nanoid\"\n// import { findItemIndexById } from \"./utils/findItemIndexById\"\n// import { moveItem } from \"./utils/moveItem\"\n// import { DragItem } from \"./DragItem\"\n\nvar AppStateContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\n\nvar appStateReducer = function appStateReducer(state, action) {\n  switch (action.type) {\n    // case \"ADD_USER\": {\n    //   return {\n    //     ...state,\n    //     users: [\n    //       ...state.users,\n    //       { id: \"1\", user: action.payload, users: [] }\n    //     ]\n    //   }\n    // }\n    // case \"ADD_EVENT\": {\n    // //   const targetLaneIndex = findItemIndexById(\n    // //     state.lists,\n    // //     action.payload.listId\n    // //   )\n    // //   state.lists[targetLaneIndex].tasks.push({\n    // //     id: nanoid(),\n    // //     text: action.payload.text\n    // //   })\n    //   return {\n    //     ...state\n    //   }\n    // }\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nvar appData = {\n  simulateLogin: true,\n  users: [{\n    id: \"0\",\n    user: \"John Galt\"\n  }, {\n    id: \"1\",\n    user: \"Angela Thorn\"\n  }, {\n    id: \"2\",\n    user: \"Luke Warm\"\n  }]\n};\nvar AppStateProvider = function AppStateProvider(_ref) {\n  var children = _ref.children;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(appStateReducer, appData),\n      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppStateContext.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, children);\n};\nvar useAppState = function useAppState() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AppStateContext);\n};\n\n//# sourceURL=webpack:///./src/AppStateContext.tsx?");

/***/ })

})