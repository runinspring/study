"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var RichEditor_1 = require('./editor/RichEditor');
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo(props) {
        _super.call(this, props);
    }
    Demo.prototype.getImages = function (callBack) {
        callBack(['http://img.popoho.com/UploadPic/2011-11/20111123112429518.jpg']);
    };
    Demo.prototype.getUrl = function (callBack) {
        callBack('http://baidu.com');
    };
    Demo.prototype.render = function () {
        var self = this;
        return (React.createElement("div", null, React.createElement(RichEditor_1["default"], {content: "测试文字测试文字", height: 560, width: 350, border: false, getImages: this.getImages.bind(this), getUrl: this.getUrl.bind(this), onChange: function (e) { console.log(e.target.value); }})));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
