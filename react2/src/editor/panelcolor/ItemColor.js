"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var ItemColor = (function (_super) {
    __extends(ItemColor, _super);
    function ItemColor(props) {
        _super.call(this, props);
    }
    ItemColor.prototype.render = function () {
        var self = this;
        var style = {
            color: this.props.color,
            background: this.props.color
        };
        return (React.createElement("button", {style: style, className: "button item-color", onClick: function () {
            self.props.submitColor(self.props.color);
        }}));
    };
    ItemColor.propTypes = {
        color: react_1.PropTypes.string.isRequired,
        submitColor: react_1.PropTypes.func.isRequired
    };
    return ItemColor;
}(React.Component));
exports.__esModule = true;
exports["default"] = ItemColor;
//# sourceMappingURL=ItemColor.js.map