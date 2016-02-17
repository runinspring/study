"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var PanelColor_1 = require('./panelcolor/PanelColor');
var PanelButton_1 = require('./buttons/PanelButton');
var SingleButton_1 = require('./buttons/SingleButton');
var PanelUrl_1 = require('./panelUrl/PanelUrl');
require('./css/editor.css');
var RichEditor = (function (_super) {
    __extends(RichEditor, _super);
    function RichEditor(props) {
        _super.call(this, props);
        this.arrFontSize = [
            { parm: 2, value: '12', change: '12px' }, { parm: 3, value: '14', change: '14px' }, { parm: 4, value: '16', change: '16px' },
            { parm: 5, value: '18', change: '18px' }, { parm: 6, value: '20', change: '20px' }, { parm: 7, value: '22', change: '22px' }
        ];
        this.dataButtons = {
            commonFuns: { showInfo: this.showInfo.bind(this), hideInfo: this.hideInfo.bind(this) },
            color: { upClass: 'ed-icon ed-color', downClass: 'ed-icon ed-color-hover', info: '文字颜色' },
            fontSize: { upClass: 'ed-icon ed-list-border', downClass: 'ed-icon ed-list-border', info: '文字大小' },
            bold: { upClass: 'ed-icon ed-bold', downClass: 'ed-icon ed-bold', info: '粗体' },
            italic: { upClass: 'ed-icon ed-italic', downClass: 'ed-icon ed-italic', info: '斜体' },
            underline: { upClass: 'ed-icon ed-underline', downClass: 'ed-icon ed-underline', info: '下划线' },
            justifyLeft: { upClass: 'ed-icon ed-left', downClass: 'ed-icon ed-left', info: '左对齐' },
            justifyCenter: { upClass: 'ed-icon ed-center', downClass: 'ed-icon ed-center', info: '居中对齐' },
            justifyRight: { upClass: 'ed-icon ed-right', downClass: 'ed-icon ed-right', info: '右对齐' },
            hr: { upClass: 'ed-icon ed-hr', downClass: 'ed-icon ed-hr', info: '分隔线' },
            link: { upClass: 'ed-icon ed-link', downClass: 'ed-icon ed-link-hover', info: '创建链接' },
            image: { upClass: 'ed-icon ed-image', downClass: 'ed-icon ed-image', info: '插入图片' }
        };
        this.state = {
            html: this.props.content,
            offset: true,
            panelColor: false,
            panelUrl: false
        };
        if (this.props.height) {
            this.state.height = +this.props.height;
        }
        else {
            this.state.height = 560;
        }
        if (this.props.width) {
            this.state.width = this.props.width;
        }
        else {
            this.state.width = 350;
        }
        if (this.props.border) {
            this.state.border = 1;
        }
        else {
            this.state.border = 0;
        }
    }
    RichEditor.prototype.componentDidMount = function () {
        setTimeout(function () {
            if (document.getElementById('textbox')) {
                document.getElementById('textbox').focus();
            }
        }, 500);
        document.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90) {
                e.preventDefault();
            }
        };
    };
    RichEditor.prototype.componentWillUnmount = function () {
        document.onkeydown = null;
    };
    RichEditor.prototype.execCommand = function (command, arg) {
        document.execCommand(command, false, arg);
    };
    RichEditor.prototype.emitChange = function () {
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({ target: { value: newHtml } });
        var txt = newHtml.replace(/<[^>]+>/g, "");
        txt = txt.replace(/&amp;/g, "&");
        txt = txt.replace(/&lt;/g, "<");
        txt = txt.replace(/&gt;/g, ">");
        txt = txt.replace(/&nbsp;/g, " ");
        this.props.onPureText({ target: { value: txt } });
        this.getButtonTypes();
    };
    RichEditor.prototype.saveRange = function () {
        document.getElementById('textbox').focus();
        var selection = window.getSelection ? window.getSelection() : document['selection'];
        this.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        this.getButtonTypes();
    };
    RichEditor.prototype.setFontsize = function (size, change) {
        document.execCommand('fontSize', false, size);
        var fontElements = document.getElementsByTagName("font");
        for (var i = 0, len = fontElements.length; i < len; ++i) {
            if (fontElements[i].size == size.toString()) {
                fontElements[i].removeAttribute("size");
                fontElements[i].style.fontSize = change;
            }
        }
        this.emitChange();
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
            str += ('<br><img width="100%" src="' + data[i] + '"><br clear=left>');
        }
        this.insert(str);
    };
    RichEditor.prototype.insertUrl = function (value) {
        this.insert(value);
    };
    RichEditor.prototype.showInfo = function (e, value) {
        clearInterval(this.idxInterval);
        var ed = document.getElementById('richeditor');
        var lf = ed.getBoundingClientRect().left;
        var tp = ed.getBoundingClientRect().top;
        if (!this.state.offset) {
            lf = 0;
            tp = 0;
        }
        var tip = document.getElementById('tip');
        tip.className = 'ed-info-show';
        tip.style.left = e.clientX - lf + 15 + 'px';
        tip.style.top = e.clientY - tp + 8 + 'px';
        tip.innerHTML = value;
    };
    RichEditor.prototype.hideInfo = function (e) {
        this.idxInterval = setInterval(function () {
            var tip = document.getElementById('tip');
            if (tip) {
                tip.className = 'ed-info-hide';
            }
        }, 100);
    };
    RichEditor.prototype.testPosition = function () {
    };
    RichEditor.prototype.getButtonTypes = function () {
        var bold = document.queryCommandValue("bold");
        var italic = document.queryCommandValue("italic");
        var underline = document.queryCommandValue('underline');
        var justifyLeft = document.queryCommandValue('justifyLeft');
        var justifyCenter = document.queryCommandValue('justifyCenter');
        var justifyRight = document.queryCommandValue('justifyRight');
    };
    RichEditor.prototype.render = function () {
        var self = this;
        var styleAll = {
            'height': this.state.height + 'px',
            'width': this.state.width + 'px',
            'border': this.state.border + 'px solid #999999'
        };
        var maxHeight = this.state.height - 66;
        if (this.state.panelColor)
            maxHeight -= 31;
        if (this.state.panelUrl)
            maxHeight -= 61;
        var styleEditBody = {
            'height': maxHeight + 'px'
        };
        var getFontSizeList = this.arrFontSize.map(function (item, idx) {
            var style = { 'fontSize': idx * 3 + 14 };
            return React.createElement("li", {key: "fontsize" + idx, onClick: function () { self.setFontsize(item.parm, item.change); }}, React.createElement("a", {href: "javascript:;"}, item.value, "   "));
        });
        return (React.createElement("div", {id: "richeditor", className: "richeditor", style: styleAll}, React.createElement("div", {className: "edit-bar"}, React.createElement("div", {className: "ed-area"}, React.createElement(PanelButton_1["default"], {show: this.state.panelColor, datas: this.dataButtons.color, clickTrigger: function () { self.setState({ panelColor: !self.state.panelColor }); }, commonFuns: this.dataButtons.commonFuns}), React.createElement("div", {className: "drop-down"}, React.createElement(SingleButton_1["default"], {datas: this.dataButtons.fontSize, clickTrigger: function () { }, commonFuns: this.dataButtons.commonFuns}), React.createElement("ul", null, " ", getFontSizeList, " ")), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.bold, clickTrigger: this.execCommand.bind(this, "bold"), commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.italic, clickTrigger: this.execCommand.bind(this, "italic"), commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.underline, clickTrigger: this.execCommand.bind(this, "underline"), commonFuns: this.dataButtons.commonFuns})), React.createElement("div", {className: "area"}, React.createElement(SingleButton_1["default"], {datas: this.dataButtons.justifyLeft, clickTrigger: this.execCommand.bind(this, "justifyLeft"), commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.justifyCenter, clickTrigger: this.execCommand.bind(this, "justifyCenter"), commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.justifyRight, clickTrigger: this.execCommand.bind(this, "justifyRight"), commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.hr, clickTrigger: function () {
            self.insert("<br><hr style='height: 3px;background: #e9e9e9;border: none; '><br>");
        }, commonFuns: this.dataButtons.commonFuns}), React.createElement(PanelButton_1["default"], {show: this.state.panelUrl, datas: this.dataButtons.link, clickTrigger: function () { self.setState({ panelUrl: !self.state.panelUrl }); }, commonFuns: this.dataButtons.commonFuns}), React.createElement(SingleButton_1["default"], {datas: this.dataButtons.image, clickTrigger: this.props.getImages.bind(this, this.getImages.bind(this)), commonFuns: this.dataButtons.commonFuns})), React.createElement(PanelColor_1["default"], {show: this.state.panelColor, submitColor: function (value) { self.execCommand("ForeColor", value); }}), React.createElement(PanelUrl_1["default"], {show: this.state.panelUrl, getUrl: this.props.getUrl.bind(this), onSubmitUrl: function (value) { self.insertUrl(value); }}), React.createElement("div", {id: "tip", className: "ed-info-hide"})), React.createElement("div", {id: "textbox", className: "edit-body", style: styleEditBody, ref: "editor", spellCheck: false, onMouseUp: this.saveRange.bind(this), onKeyUp: this.saveRange.bind(this), contentEditable: true, dangerouslySetInnerHTML: { __html: this.state.html }, onInput: this.emitChange.bind(this)})));
    };
    RichEditor.propTypes = {
        onChange: react_1.PropTypes.func.isRequired,
        getImages: react_1.PropTypes.func.isRequired,
        onPureText: react_1.PropTypes.func.isRequired,
        getUrl: react_1.PropTypes.func.isRequired
    };
    return RichEditor;
}(React.Component));
exports.__esModule = true;
exports["default"] = RichEditor;
