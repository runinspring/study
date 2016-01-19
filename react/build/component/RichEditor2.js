var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var RichEditor = (function (_super) {
    __extends(RichEditor, _super);
    function RichEditor(props) {
        _super.call(this, props);
        this.arrBlock = [
            { parm: 'P', value: 'Paragraph' },
            { parm: 'BLOCKQUOTE', value: 'Block Quote' },
            { parm: 'H1', value: 'Header 1' },
            { parm: 'H2', value: 'Header 2' },
            { parm: 'H3', value: 'Header 3' },
            { parm: 'H4', value: 'Header 4' },
            { parm: 'H5', value: 'Header 5' },
            { parm: 'H6', value: 'Header 6' }
        ];
        this.arrFontSize = [
            { parm: 1, value: 'fontSize 1' },
            { parm: 2, value: 'fontSize 2' },
            { parm: 3, value: 'fontSize 3' },
            { parm: 4, value: 'fontSize 4' },
            { parm: 5, value: 'fontSize 5' },
            { parm: 6, value: 'fontSize 6' },
            { parm: 7, value: 'fontSize 7' }
        ];
        this.arrJustify = [
            { parm: 'justifyLeft', value: 'Align Left' },
            { parm: 'justifyRight', value: 'Align Right' },
            { parm: 'justifyCenter', value: 'Align Center' },
            { parm: 'justifyFull', value: 'Align Justify' },
        ];
        this.arrButtons = [
            { parm: 'bold', className: 'fa fa-bold' },
            { parm: 'italic', className: 'fa fa-italic' },
            { parm: 'underline', className: 'fa fa-underline' },
            { parm: 'strikeThrough', className: 'fa fa-strikethrough' },
            { parm: 'insertOrderedList', className: 'fa fa-list-ol' },
            { parm: 'insertUnorderedList', className: 'fa fa-list-ul' }
        ];
        this.state = {
            html: this.props.content
        };
    }
    RichEditor.prototype.emitChange = function () {
        console.log('emitChange');
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({ target: { value: newHtml } });
    };
    RichEditor.prototype.execCommand = function (command, arg) {
        console.log('execCommand', command, false, arg, document);
        document.execCommand(command, false, arg);
    };
    RichEditor.prototype.render = function () {
        var _this = this;
        var self = this;
        var getFontSizeList = this.arrFontSize.map(function (item, idx) {
            return React.createElement("li", {"key": "fontsize" + idx}, React.createElement("a", {"href": "javascript:;", "onClick": self.execCommand.bind(self, 'fontSize', item.parm)}, item.value));
        });
        var getBlockList = this.arrBlock.map(function (item, idx) {
            return React.createElement("li", {"key": 'formatBlock' + idx}, React.createElement("a", {"href": "javascript:;", "onClick": _this.execCommand.bind(_this, 'formatBlock', item.parm)}, item.value));
        });
        var getJustifyList = this.arrJustify.map(function (item, idx) {
            return React.createElement("li", {"key": 'justify' + idx}, React.createElement("a", {"href": "javascript:;", "onClick": _this.execCommand.bind(_this, item.parm)}, item.value));
        });
        var getButtons = this.arrButtons.map(function (item, idx) {
            return React.createElement("button", {"key": 'button' + idx, "onClick": _this.execCommand.bind(_this, item.parm)}, React.createElement("i", {"className": item.className}));
        });
        return (React.createElement("div", {"className": "edit"}, React.createElement("div", {"className": "edit-bar"}, React.createElement("div", {"className": "btn-group"}, getButtons), React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-text-height"}), " ", React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, " ", getFontSizeList, " ")), React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-align-left"}), " ", React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, getJustifyList)), React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-paragraph"}), " ", React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, " ", getBlockList, " ")), React.createElement("button", {"onClick": this.execCommand.bind(this, 'removeFormat')}, React.createElement("i", {"className": "fa fa-eraser"}))), React.createElement("div", {"className": "edit-area", "ref": "editor", "contentEditable": true, "dangerouslySetInnerHTML": { __html: this.state.html }, "onInput": this.emitChange.bind(this)})));
    };
    RichEditor.propTypes = {
        content: react_1.PropTypes.string.isRequired,
        onChange: react_1.PropTypes.func.isRequired
    };
    return RichEditor;
})(React.Component);
exports.__esModule = true;
exports["default"] = RichEditor;
//# sourceMappingURL=RichEditor2.js.map