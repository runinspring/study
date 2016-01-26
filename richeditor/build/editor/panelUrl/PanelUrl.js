"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var PanelUrl = (function (_super) {
    __extends(PanelUrl, _super);
    function PanelUrl(props) {
        _super.call(this, props);
        this.defaultText = '请输入链接区域的文字';
        this.defaultUrl = '请输入URL链接地址';
        this.state = {
            getUrl: ''
        };
    }
    PanelUrl.prototype.onBlur = function (e, defaultValue) {
        var t = e.currentTarget;
        if (t.value == "") {
            t.value = defaultValue;
        }
    };
    PanelUrl.prototype.onFocus = function (e, defaultValue) {
        var t = e.currentTarget;
        if (t.value == defaultValue) {
            t.value = "";
        }
    };
    PanelUrl.prototype.onSubmitUrl = function () {
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        var result = '<a href="' + url + '">' + txt + '</a>';
        if (url == this.defaultUrl)
            url = "";
        this.props.onSubmitUrl(result);
        console.log(result);
    };
    PanelUrl.prototype.getUrl = function (value) {
        document.getElementById('urlArea')['value'] = value;
    };
    PanelUrl.prototype.render = function () {
        var self = this;
        if (!this.props.show) {
            return (React.createElement("div", null));
        }
        var styleButton = { margin: '0 0 0 6px' };
        return (React.createElement("div", {className: "panel-url"}, React.createElement("div", null, React.createElement("input", {id: "textArea", defaultValue: this.defaultText, className: "ed-input", onBlur: function (e) { self.onBlur(e, self.defaultText); }, onFocus: function (e) { self.onFocus(e, self.defaultText); }}), React.createElement("button", {className: "ed-subButton", style: styleButton, onClick: this.onSubmitUrl.bind(this)}, "插入")), React.createElement("div", null, React.createElement("input", {id: "urlArea", defaultValue: this.defaultUrl, className: "ed-input", onBlur: function (e) { self.onBlur(e, self.defaultUrl); }, onFocus: function (e) { self.onFocus(e, self.defaultUrl); }}))));
    };
    PanelUrl.propTypes = {
        show: react_1.PropTypes.bool.isRequired,
        onSubmitUrl: react_1.PropTypes.func.isRequired,
        getUrl: react_1.PropTypes.func.isRequired
    };
    return PanelUrl;
}(React.Component));
exports.__esModule = true;
exports["default"] = PanelUrl;
