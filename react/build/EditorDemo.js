var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var RichEditor_1 = require('./component/RichEditor');
var EditorDemo = (function (_super) {
    __extends(EditorDemo, _super);
    function EditorDemo(props) {
        _super.call(this, props);
    }
    EditorDemo.prototype.render = function () {
        var editorStyle = {
            overflow: 'auto',
            width: 300,
            height: 100,
            maxHeight: 100
        };
        console.log('editorStyle:', editorStyle);
        return (React.createElement("div", null, React.createElement(RichEditor_1["default"], {"sytle": editorStyle, "content": "测试文字", "onChange": function (e) { console.log(e.target.value); }})));
    };
    return EditorDemo;
})(React.Component);
exports.__esModule = true;
exports["default"] = EditorDemo;
//# sourceMappingURL=EditorDemo.js.map