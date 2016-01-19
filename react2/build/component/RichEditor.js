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
        this.state = {
            html: this.props.content
        };
    }
    RichEditor.prototype.emitChange = function () {
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({ target: { value: newHtml } });
    };
    RichEditor.prototype.execCommand = function (command, arg) {
        document.execCommand(command, false, arg);
    };
    RichEditor.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", null, React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-paragraph"}), React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'P')}, "Paragraph")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'BLOCKQUOTE')}, "Block Quote")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H1')}, "Header 1")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H2')}, "Header 2")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H3')}, "Header 3")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H4')}, "Header 4")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H5')}, "Header 5")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'formatBlock', 'H6')}, "Header 6")))), React.createElement("div", null, React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-text-height"}), React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 1)}, "fontSize 1")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 2)}, "fontSize 2")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 3)}, "fontSize 3")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 4)}, "fontSize 4")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 5)}, "fontSize 5")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 6)}, "fontSize 6")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'fontSize', 7)}, "fontSize 7"))))), React.createElement("div", {"className": "btn-group"}, React.createElement("button", {"onClick": this.execCommand.bind(this, 'bold')}, React.createElement("i", {"className": "fa fa-bold"})), React.createElement("button", {"onClick": this.execCommand.bind(this, 'italic')}, React.createElement("i", {"className": "fa fa-italic"})), React.createElement("button", {"onClick": this.execCommand.bind(this, 'underline')}, React.createElement("i", {"className": "fa fa-underline"})), React.createElement("button", {"onClick": this.execCommand.bind(this, 'strikeThrough')}, React.createElement("i", {"className": "fa fa-strikethrough"})), React.createElement("button", {"onClick": this.execCommand.bind(this, 'insertOrderedList')}, React.createElement("i", {"className": "fa fa-list-ol"})), React.createElement("button", {"onClick": this.execCommand.bind(this, 'insertUnorderedList')}, React.createElement("i", {"className": "fa fa-list-ul"}))), React.createElement("div", {"className": "btn-group drop-down"}, React.createElement("button", null, React.createElement("i", {"className": "fa fa-align-left"}), React.createElement("i", {"className": "fa fa-caret-down"})), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'justifyLeft')}, "Align Left")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'justifyRight')}, "Align Right")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'justifyCenter')}, "Align Center")), React.createElement("li", null, React.createElement("a", {"href": "javascript:;", "onClick": this.execCommand.bind(this, 'justifyFull')}, "Align Justify")))), React.createElement("button", {"onClick": this.execCommand.bind(this, 'removeFormat')}, React.createElement("i", {"className": "fa fa-eraser"}))), React.createElement("div", {"ref": "editor", "contentEditable": true, "dangerouslySetInnerHTML": { __html: this.state.html }, "onInput": this.emitChange.bind(this)})));
    };
    RichEditor.propTypes = {
        content: react_1.PropTypes.string.isRequired,
        onChange: react_1.PropTypes.func.isRequired
    };
    return RichEditor;
})(React.Component);
exports.__esModule = true;
exports["default"] = RichEditor;
//# sourceMappingURL=RichEditor.js.map