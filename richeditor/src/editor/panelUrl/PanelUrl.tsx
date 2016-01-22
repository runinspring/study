import * as React from 'react';
import {PropTypes} from 'react';
export default class PanelUrl extends React.Component<any,any> {
    constructor(props) {
        super(props)
        this.state={
            getUrl:''
        }
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        show: PropTypes.bool.isRequired,
        onSubmitUrl: PropTypes.func.isRequired,
        getUrl:PropTypes.func.isRequired
    }
    private defaultText:string = '请输入链接区域的文字';
    private defaultUrl:string = '请输入URL链接地址';

    private onBlur(e, defaultValue):void {
        //console.log(e,defaultValue)
        var t = e.currentTarget;
        if (t.value == "") {
            t.value = defaultValue;
        }
    }

    private onFocus(e, defaultValue):void {
        //console.log(e,defaultValue)
        var t = e.currentTarget;
        if (t.value == defaultValue) {
            t.value = "";
        }
    }

    private onSubmitUrl():void {
        //console.log('onSubmitUrl')
        var txt = document.getElementById('textArea')['value'];
        var url = document.getElementById('urlArea')['value'];
        var result='<a href="'+url+'">'+txt+'</a>'
        if (url == this.defaultUrl) url = "";
        //var result=''
        //if(url==""){
        //    result=txt;
        //} else{
        //    result = '<a href="'+url+'">'+txt+'</a>'
        //}

        //console.log(this.props.onSubmitUrl)
        this.props.onSubmitUrl(result)
        console.log(result)
    }
    private getUrl(value):void{
        //console.log("getUrl:",value)
        document.getElementById('urlArea')['value'] = value;
    }

    render() {
        var self = this;
        if (!this.props.show) {
            return (<div/>)
        }
        //var top = {margin:'4px'};
        var styleButton = {margin: '0 0 0 6px'}
        return (<div className="panel-url">
            <div>
                <input id="textArea" defaultValue={this.defaultText} className="ed-input"
                       onBlur={(e)=>{self.onBlur(e,self.defaultText)}}
                       onFocus={(e)=>{self.onFocus(e,self.defaultText)}}
                />
                <button className="ed-subButton" style={styleButton} onClick={this.onSubmitUrl.bind(this)}>插入</button>
            </div>
            <div>
                <input id="urlArea" defaultValue={this.defaultUrl} className="ed-input"
                       onBlur={(e)=>{self.onBlur(e,self.defaultUrl)}}
                       onFocus={(e)=>{self.onFocus(e,self.defaultUrl)}}
                />
                <button className="ed-subButton" style={styleButton} onClick={()=>{self.props.getUrl(self.getUrl.bind(self))}}>+</button>
            </div>
        </div>)
    }
}