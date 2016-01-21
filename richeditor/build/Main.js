var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var EditorDemo_1 = require('./EditorDemo');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        _super.call(this, props);
        console.log('main.init');
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null, React.createElement(EditorDemo_1["default"], null)));
    };
    return Main;
})(React.Component);
var dom = ReactDOM;
dom.render(React.createElement(Main, null), document.getElementById('app'));
//# sourceMappingURL=Main.js.map