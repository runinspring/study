var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var UrlPanel = (function (_super) {
    __extends(UrlPanel, _super);
    function UrlPanel(props) {
        _super.call(this, props);
    }
    UrlPanel.prototype.render = function () {
        var _this = this;
        var self = this;
        var top = { margin: '4px' };
        return (React.createElement("div", {"className": "urlPanel"}, React.createElement("div", {"className": "area"}, React.createElement("div", null, React.createElement("a", null, "请输入链接地址:"), React.createElement("button", {"className": "cancleButton button", "onClick": function () {
            self.props.onClosePanel(null);
        }}, React.createElement("i", {"className": "fa fa-cancle"}))), React.createElement("div", {"id": "urlInputArea", "className": "input", "contentEditable": true}), React.createElement("div", {"style": top}, React.createElement("a", null, "请输入链接文字:")), React.createElement("div", {"id": "urlInputArea", "className": "input", "contentEditable": true}), React.createElement("div", null, React.createElement("button", {"className": "subButton", "onClick": function () {
            var link = document.getElementById('urlInputArea').innerHTML;
            _this.props.onClosePanel(link);
        }}, "提交")))));
    };
    UrlPanel.propTypes = {
        onClosePanel: react_1.PropTypes.func.isRequired
    };
    return UrlPanel;
})(React.Component);
exports.__esModule = true;
exports["default"] = UrlPanel;
//# sourceMappingURL=UrlPanel.js.map