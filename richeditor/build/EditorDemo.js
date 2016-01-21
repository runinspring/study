var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var RichEditor_1 = require('./component/RichEditor');
var UrlPanel_1 = require('./component/UrlPanel');
var EditorDemo = (function (_super) {
    __extends(EditorDemo, _super);
    function EditorDemo(props) {
        _super.call(this, props);
        this.state = {
            urlPanel: false,
            content: '测试文字'
        };
    }
    EditorDemo.prototype.changeUrlPanel = function (callBack) {
        this.callBackUrl = callBack;
        this.setState({ urlPanel: !this.state.urlPanel });
    };
    EditorDemo.prototype.closeUrlPanel = function (value) {
        this.setState({ urlPanel: false });
        if (value) {
            console.log('closeUrlPanel:', value);
            this.callBackUrl(value);
        }
    };
    EditorDemo.prototype.render = function () {
        var self = this;
        var getUrlPanel = function () {
            if (self.state.urlPanel) {
                console.log(2312);
                return React.createElement(UrlPanel_1["default"], {"onClosePanel": self.closeUrlPanel.bind(self)});
            }
            else {
                return React.createElement("div", null);
            }
        };
        return (React.createElement("div", {"className": "edit"}, React.createElement(RichEditor_1["default"], {"content": "测试文字", "onChangeUrlPanel": this.changeUrlPanel.bind(this), "onChange": function (e) { console.log(e.target.value); }}), getUrlPanel()));
    };
    return EditorDemo;
})(React.Component);
exports.__esModule = true;
exports["default"] = EditorDemo;
//# sourceMappingURL=EditorDemo.js.map