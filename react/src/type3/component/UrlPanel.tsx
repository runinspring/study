import * as React from 'react';
import {PropTypes} from 'react';
export default class UrlPanel extends React.Component<any,any> {
    constructor(props) {
        super(props)
    }
    private defaultValue:string = '请输入链接地址:'

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onClosePanel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    private onBlur(e):void {
        var t = e.currentTarget;
        if (t.value == "") {
            t.value = this.defaultValue;
        }
    }

    private onFocus(e):void {
        var t = e.currentTarget;
        if (t.value == this.defaultValue) {
            t.value = "";
        }
    }
    render() {
        var self = this;
        //var top = {margin:'4px'};
        return (<div className="urlPanel">
            <div className="area">
                <input defaultValue={this.defaultValue} onFocus={this.onFocus.bind(this)}
                       onBlur={this.onBlur.bind(this)} id="urlArea" className="input"/>
                <button className="subButton" onClick={()=>{
                    var url = document.getElementById('urlArea')['value'];
                    if(url==self.defaultValue){
                        url=''
                    }
                    this.props.onSubmit(url);
                    }}>提交
                </button>
                <button className="subButton" onClick={()=>{
                    document.getElementById('urlArea')['value']='';

                    }}>清空
                </button>
            </div>
        </div>)
    }
}
//this.props.onSubmit()