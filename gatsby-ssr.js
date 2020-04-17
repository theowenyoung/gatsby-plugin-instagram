"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;
  setHeadComponents([/*#__PURE__*/_react.default.createElement("link", {
    key: "gatsby-plugin-instagram-preconnect-0",
    rel: "preconnect",
    href: "https://instagram.com"
  })]);
};

exports.onRenderBody = onRenderBody;