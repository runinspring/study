"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var PanelColor_1 = require('./panelcolor/PanelColor');
var PanelButton_1 = require('./PanelButton');
var PanelUrl_1 = require('./panelUrl/PanelUrl');
require('./css/editor.css');
var RichEditor = (function (_super) {
    __extends(RichEditor, _super);
    function RichEditor(props) {
        _super.call(this, props);
        this.arrFontSize = [
            { parm: 1, value: '1' }, { parm: 2, value: '2' }, { parm: 3, value: '3' }, { parm: 4, value: '4' }, { parm: 5, value: '5' }, { parm: 6, value: '6' }, { parm: 7, value: '7' }
        ];
        this.state = {
            html: this.props.content,
            panelColor: false,
            panelUrl: false
        };
    }
    RichEditor.prototype.execCommand = function (command, arg) {
        document.execCommand(command, false, arg);
    };
    RichEditor.prototype.emitChange = function () {
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({ target: { value: newHtml } });
    };
    RichEditor.prototype.saveRange = function () {
        document.getElementById('textbox').focus();
        var selection = window.getSelection ? window.getSelection() : document['selection'];
        this.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
    };
    RichEditor.prototype.insert = function (str) {
        document.getElementById('textbox').focus();
        if (!this.range) {
            this.saveRange();
        }
        if (!window.getSelection) {
            var range = this.range;
            range.pasteHTML(str);
            range.collapse(false);
            range.select();
        }
        else {
            var selection = window.getSelection ? window.getSelection() : document['selection'];
            var range = this.range;
            range.collapse(false);
            var hasR = range.createContextualFragment(str);
            var hasR_lastChild = hasR.lastChild;
            while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
                var e = hasR_lastChild;
                hasR_lastChild = hasR_lastChild.previousSibling;
                hasR.removeChild(e);
            }
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild);
            }
            selection.removeAllRanges();
            selection.addRange(range);
        }
        this.emitChange();
    };
    RichEditor.prototype.getImages = function (data) {
        var str = '';
        for (var i = 0, len = data.length; i < len; i++) {
            str += ('<br><img width="95%" src="' + data[i] + '"><br clear=left>');
        }
        this.insert(str);
    };
    RichEditor.prototype.render = function () {
        var self = this;
        var maxHeight = 494;
        if (this.state.panelColor)
            maxHeight -= 31;
        if (this.state.panelUrl)
            maxHeight -= 61;
        //console.log('maxHeight:', maxHeight);
        var styleEditBody = {
            'maxHeight': maxHeight + 'px'
        };
        var getFontSizeList = this.arrFontSize.map(function (item, idx) {
            var style = { 'fontSize': idx * 3 + 14 };
            return React.createElement("li", {key: "fontsize" + idx, onClick: self.execCommand.bind(self, 'fontSize', item.parm)}, React.createElement("a", {href: "javascript:;", style: style}, item.value, "   "));
        });
        return (React.createElement("div", {className: "edit"}, React.createElement("div", {className: "edit-bar"}, React.createElement("div", {className: "area"}, React.createElement(PanelButton_1["default"], {show: this.state.panelColor, upClass: "icon fa-color", downClass: "icon fa-color-hover", clickTrigger: function () { self.setState({ panelColor: !self.state.panelColor }); }}), React.createElement("div", {className: "drop-down"}, React.createElement("button", {className: "button"}, React.createElement("i", {className: "icon fa-list-border"})), React.createElement("ul", null, " ", getFontSizeList, " ")), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "bold")}, React.createElement("i", {className: "icon fa-bold"})), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "italic")}, React.createElement("i", {className: "icon fa-italic"})), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "underline")}, React.createElement("i", {className: "icon fa-underline"}))), React.createElement("div", {className: "area"}, React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "justifyLeft")}, React.createElement("i", {className: "icon fa-left"})), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "justifyCenter")}, React.createElement("i", {className: "icon fa-center"})), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "justifyRight")}, React.createElement("i", {className: "icon fa-right"})), React.createElement("button", {className: "button", onClick: this.execCommand.bind(this, "insertOrderedList")}, React.createElement("i", {className: "icon fa-list"})), React.createElement("button", {className: "button", onClick: function () {
            self.saveRange();
            self.insert("<hr color=#e9e9e9><br>");
        }}, React.createElement("i", {className: "icon fa-hr"})), React.createElement(PanelButton_1["default"], {show: this.state.panelUrl, upClass: "icon fa-link", downClass: "icon fa-link-hover", clickTrigger: function () { self.setState({ panelUrl: !self.state.panelUrl }); }}), React.createElement("button", {className: "button", onClick: this.props.getImages.bind(this, this.getImages.bind(this))}, React.createElement("i", {className: "icon fa-image"}))), React.createElement(PanelColor_1["default"], {show: this.state.panelColor, submitColor: function (value) { self.execCommand("ForeColor", value); }}), React.createElement(PanelUrl_1["default"], {show: this.state.panelUrl, getUrl: this.props.getUrl.bind(this), onSubmitUrl: function (value) { self.insert(value); }})), React.createElement("div", {id: "textbox", className: "edit-body", style: styleEditBody, ref: "editor", spellCheck: false, onMouseUp: this.saveRange.bind(this), contentEditable: true, dangerouslySetInnerHTML: { __html: this.state.html }, onInput: this.emitChange.bind(this)})));
    };
    RichEditor.propTypes = {
        onChange: react_1.PropTypes.func.isRequired,
        getImages: react_1.PropTypes.func.isRequired,
        getUrl: react_1.PropTypes.func.isRequired
    };
    return RichEditor;
}(React.Component));
exports.__esModule = true;
exports["default"] = RichEditor;
//# sourceMappingURL=RichEditor.js.map