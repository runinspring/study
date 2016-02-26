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
        this.state = {
            test: true
        };
    }
    Demo.prototype.componentDidMount = function () {
        var rd = document.getElementById('rd');
        rd.style.position = 'absolute';
        rd.style.left = 0 + 'px';
        rd.style.top = 10 + 'px';
    };
    Demo.prototype.getImages = function (callBack) {
        var obj = new Object();
        obj['src'] = "http://larkweb.egret.com/assets/temp/6.png";
        obj['relation'] = new Object();
        obj['relation']['refInfo'] = '{"wx":{"media_id":"media_test1","url":"http://imgedu.gmw.cn/attachement/jpg/site2/20160226/d8cb8a4d09f7183a09482f.jpg"}}';
        callBack(obj);
    };
    Demo.prototype.getUrl = function (callBack) {
        callBack('http://baidu.com');
    };
    Demo.prototype.changeTest = function () {
        this.setState({ 'test': !this.state.test });
    };
    Demo.prototype.outPut = function (e) {
        console.log('html:', e.target.value);
    };
    Demo.prototype.pureText = function (e) {
        console.log('pure:', e.target.value);
    };
    Demo.prototype.render = function () {
        var self = this;
        return (React.createElement("div", {id: 'rd'}, React.createElement(RichEditor_1["default"], {content: "测试文字测试文字", height: 560, width: 350, border: false, getImages: this.getImages.bind(this), getUrl: this.getUrl.bind(this), onChange: this.outPut.bind(this), onPureText: this.pureText.bind(this)})));
    };
    return Demo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Demo;
