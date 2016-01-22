"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var PanelButton = (function (_super) {
    __extends(PanelButton, _super);
    function PanelButton(props) {
        _super.call(this, props);
    }
    PanelButton.prototype.render = function () {
        var className;
        if (!this.props.show) {
            className = this.props.upClass;
        }
        else {
            className = this.props.downClass;
        }
        return (React.createElement("button", {className: "ed-button", onClick: this.props.clickTrigger}, React.createElement("i", {className: className})));
    };
    PanelButton.propTypes = {
        upClass: react_1.PropTypes.string.isRequired,
        downClass: react_1.PropTypes.string.isRequired,
        show: react_1.PropTypes.bool.isRequired,
        clickTrigger: react_1.PropTypes.func.isRequired
    };
    return PanelButton;
}(React.Component));
exports.__esModule = true;
exports["default"] = PanelButton;
