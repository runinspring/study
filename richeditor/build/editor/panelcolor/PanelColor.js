"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var ItemColor_1 = require('./ItemColor');
var PanelColor = (function (_super) {
    __extends(PanelColor, _super);
    function PanelColor(props) {
        _super.call(this, props);
        this.colors = ['#c00000', '#ff0000', '#ffc000', '#ffff00', '#92d050', '#00b050', '#00b0f0', '#0070c0', '#002060', '#7030a0', '#000000'];
    }
    PanelColor.prototype.render = function () {
        var self = this;
        if (!this.props.show) {
            return (React.createElement("div", null));
        }
        return (React.createElement("div", {className: "ed-panel-color"}, this.colors.map(function (item, idx) {
            return React.createElement(ItemColor_1["default"], {key: 'itemcolor' + idx, color: item, submitColor: self.props.submitColor});
        })));
    };
    PanelColor.propTypes = {
        show: react_1.PropTypes.bool.isRequired,
        submitColor: react_1.PropTypes.func.isRequired
    };
    return PanelColor;
}(React.Component));
exports.__esModule = true;
exports["default"] = PanelColor;
