"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../meta/theme"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  display: inline-block;\n  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);\n  border-radius: 12px;\n  color: ", ";\n  padding: 14px 16px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: -0.01em;\n  transition: all 0.2s ease-out;\n  cursor: ", ";\n  pointer-events: ", ";\n  user-select: none;\n\n  &:hover {\n    transform: translateY(-1px);\n    filter: brightness(1.05);\n  }\n\n  &:active {\n    transform: translateY(0px);\n    filter: brightness(1);\n  }\n"])), function (p) {
  switch (p.type) {
    case "approve":
      return _theme.default.colors.green;

    case "reject":
      return _theme.default.colors.red;

    case "deny":
      return _theme.default.colors.grey;

    case "disabled":
      return "#E4E7EB";

    default:
      return "linear-gradient(330.4deg, #44BCF0 4.54%, #7298F8 59.2%, #A099FF 148.85%)";
  }
}, function (p) {
  switch (p.type) {
    case "deny":
      return "#63666A";

    case "disabled":
      return "#ACAEB0";

    default:
      return "white";
  }
}, function (p) {
  switch (p.type) {
    case "deny":
      return "pointer";

    case "disabled":
      return "not-allowed";

    default:
      return "pointer";
  }
}, function (p) {
  return p.type === 'disabled' ? 'none' : 'initial';
});

var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement(ButtonContainer, _extends({
    disabled: props.type === 'disabled'
  }, props), props.text);
};

var _default = Button;
exports.default = _default;