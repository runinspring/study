import * as React from 'react';
import {PropTypes} from 'react';
export default class PanelUrl extends React.Component<any,any> {
    constructor(props) {
        super(props)
        this.state = {
            getUrl: '',
            alertTxt: '',//错误的提示文字 请输入链接文字  不符合网址规则
            classTxt: this.classDefault,
            classUrl: this.classDefault
        }
        //console.log(12132, this.state.fontColorTxt, this.state.fontColorUrl)
    }
    private componentDidMount() {

    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        show: PropTypes.bool.isRequired,
        onSubmitUrl: PropTypes.func.isRequired,
        getUrl: PropTypes.func.isRequired
    }
    private defaultText:string = '请输入链接区域的文字';
    private defaultUrl:string = '请输入URL链接地址';
    private classDefault:string = 'ed-input ed-input-default';//默认的文字颜色，灰色
    private classFocus:string = 'ed-input ed-input-focus';//输入时的文字颜色，黑色

    private onBlur(e, defaultValue):void {
        //console.log('onBlur')
        //console.log(e,defaultValue)
        var t = e.currentTarget;
        if (t.value == "") {
            //if (t.id == 'textArea') {
            //    this.setState({classTxt: this.classDefault})
            //} else if (t.id == 'urlArea') {
            //    this.setState({classUrl: this.classDefault})
            //}
            t.value = defaultValue;
        }
        this.setClass();
    }

    private onFocus(e, defaultValue):void {
        //console.log(e,defaultValue)
        this.setState({alertTxt: ''});
        var t = e.currentTarget;
        if (t.value == defaultValue) {
            //if (t.id == 'textArea') {
            //    this.setState({classTxt: this.classFocus})
            //} else if (t.id == 'urlArea') {
            //    this.setState({classUrl: this.classFocus})
            //}
            t.value = "";
        }
        this.setClass();
    }
    /**设置两个输入框的类*/
    private setClass():void{
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        if(txt==this.defaultText){
            this.setState({classTxt:this.classDefault})
        }else{
            this.setState({classTxt:this.classFocus})
        }
        if(url==this.defaultUrl){
            this.setState({classUrl:this.classDefault})
        }else{
            this.setState({classUrl:this.classFocus})
        }
    }
    private nodeValidator_isUrl = /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?(localhost|(?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,="'\(\)_\*:]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i;
    private isURL(str_url) {
        var str = str_url + "";
        str = str.toLowerCase();
        return this.nodeValidator_isUrl.test(str);
    }

    private onSubmitUrl():void {
        //console.log('onSubmitUrl')
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        if (txt == this.defaultText || txt == "") {
            this.setState({alertTxt: '请输入链接文字'});
            return;
        }
        if (url == this.defaultUrl || url == "") {
            this.setState({alertTxt: '请输入链接地址'});
            return;
        }

        if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {//给url地址加上http://开头
            url = 'http://' + url;
        }
        if(!this.isURL(url)){
            this.setState({alertTxt: '不符合网址规则'});
            return ;
        }
        var result = '<a href="' + url + '">' + txt + '</a>'
        if (url == this.defaultUrl) url = "";

        //console.log(this.props.onSubmitUrl)
        this.props.onSubmitUrl(result)
        //console.log(result)
    }

    private getUrl(value):void {
        //console.log("getUrl:",value)
        document.getElementById('urlArea')['value'] = value;
    }
    private isShow:boolean =false;

    render() {
        //console.log('render')
        var self = this;
        if (!this.props.show) {
            this.isShow = false;
            return (<div/>)
        }
        var classTxt = this.state.classTxt;
        var classUrl = this.state.classUrl;
        var alertValue = this.state.alertTxt;
        if(!this.isShow){//显示后恢复默认的颜色
            this.isShow = true;
            classTxt = this.classDefault;
            classUrl = this.classDefault;
            alertValue = '';
        }
        //var top = {margin:'4px'};
        return (<div className="panel-url">
            <div>
                <input id="textArea" defaultValue={this.defaultText}
                       className={classTxt}
                       onBlur={(e)=>{self.onBlur(e,self.defaultText)}}
                       onFocus={(e)=>{self.onFocus(e,self.defaultText)}}
                />
                <button className="ed-subButton"  onClick={this.onSubmitUrl.bind(this)}>插入</button>
            </div>
            <div>
                <input id="urlArea" defaultValue={this.defaultUrl}
                       className={classUrl}
                       onBlur={(e)=>{self.onBlur(e,self.defaultUrl)}}
                       onFocus={(e)=>{self.onFocus(e,self.defaultUrl)}}
                />
                <div className="unselectable ed-alert">{alertValue}</div>
            </div>
        </div>)
    }
}
//<button className="ed-subButton" style={styleButton} onClick={()=>{self.props.getUrl(self.getUrl.bind(self))}}>+</button>