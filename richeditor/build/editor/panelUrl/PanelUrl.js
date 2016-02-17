"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_1 = require('react');
var PanelUrl = (function (_super) {
    __extends(PanelUrl, _super);
    function PanelUrl(props) {
        _super.call(this, props);
        this.defaultText = '请输入链接区域的文字';
        this.defaultUrl = '请输入URL链接地址';
        this.classDefault = 'ed-input ed-input-default';
        this.classFocus = 'ed-input ed-input-focus';
        this.nodeValidator_isUrl = /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?(localhost|(?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,="'\(\)_\*:]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i;
        this.isShow = false;
        this.state = {
            getUrl: '',
            alertTxt: '',
            classTxt: this.classDefault,
            classUrl: this.classDefault
        };
    }
    PanelUrl.prototype.componentDidMount = function () {
    };
    PanelUrl.prototype.onBlur = function (e, defaultValue) {
        var t = e.currentTarget;
        if (t.value == "") {
            t.value = defaultValue;
        }
        this.setClass();
    };
    PanelUrl.prototype.onFocus = function (e, defaultValue) {
        this.setState({ alertTxt: '' });
        var t = e.currentTarget;
        if (t.value == defaultValue) {
            t.value = "";
        }
        this.setClass();
    };
    PanelUrl.prototype.setClass = function () {
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        if (txt == this.defaultText) {
            this.setState({ classTxt: this.classDefault });
        }
        else {
            this.setState({ classTxt: this.classFocus });
        }
        if (url == this.defaultUrl) {
            this.setState({ classUrl: this.classDefault });
        }
        else {
            this.setState({ classUrl: this.classFocus });
        }
    };
    PanelUrl.prototype.isURL = function (str_url) {
        var str = str_url + "";
        str = str.toLowerCase();
        return this.nodeValidator_isUrl.test(str);
    };
    PanelUrl.prototype.onSubmitUrl = function () {
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        if (txt == this.defaultText || txt == "") {
            this.setState({ alertTxt: '请输入链接文字' });
            return;
        }
        if (url == this.defaultUrl || url == "") {
            this.setState({ alertTxt: '请输入链接地址' });
            return;
        }
        if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
            url = 'http://' + url;
        }
        if (!this.isURL(url)) {
            this.setState({ alertTxt: '不符合网址规则' });
            return;
        }
        var result = '<a href="' + url + '">' + txt + '</a>';
        if (url == this.defaultUrl)
            url = "";
        this.props.onSubmitUrl(result);
    };
    PanelUrl.prototype.getUrl = function (value) {
        document.getElementById('urlArea')['value'] = value;
    };
    PanelUrl.prototype.render = function () {
        var self = this;
        if (!this.props.show) {
            this.isShow = false;
            return (React.createElement("div", null));
        }
        var classTxt = this.state.classTxt;
        var classUrl = this.state.classUrl;
        var alertValue = this.state.alertTxt;
        if (!this.isShow) {
            this.isShow = true;
            classTxt = this.classDefault;
            classUrl = this.classDefault;
            alertValue = '';
        }
        return (React.createElement("div", {className: "panel-url"}, React.createElement("div", null, React.createElement("input", {id: "textArea", defaultValue: this.defaultText, className: classTxt, onBlur: function (e) { self.onBlur(e, self.defaultText); }, onFocus: function (e) { self.onFocus(e, self.defaultText); }}), React.createElement("button", {className: "ed-subButton", onClick: this.onSubmitUrl.bind(this)}, "插入")), React.createElement("div", null, React.createElement("input", {id: "urlArea", defaultValue: this.defaultUrl, className: classUrl, onBlur: function (e) { self.onBlur(e, self.defaultUrl); }, onFocus: function (e) { self.onFocus(e, self.defaultUrl); }}), React.createElement("div", {className: "unselectable ed-alert"}, alertValue))));
    };
    PanelUrl.propTypes = {
        show: react_1.PropTypes.bool.isRequired,
        onSubmitUrl: react_1.PropTypes.func.isRequired,
        getUrl: react_1.PropTypes.func.isRequired
    };
    return PanelUrl;
}(React.Component));
exports.__esModule = true;
exports["default"] = PanelUrl;
