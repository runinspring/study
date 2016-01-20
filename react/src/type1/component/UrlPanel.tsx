import * as React from 'react';
import {PropTypes} from 'react';
export default class UrlPanel extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel')
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onClosePanel:PropTypes.func.isRequired,
        onSubmit:PropTypes.func.isRequired
    }
    private onOut(e):void{
        console.log('out',e.target)
        e.target.blur();
    }
    /**默认的连接*/
    private defaultUrl:string;
    render() {
        var self =this;
        //var top = {margin:'4px'};
        return (<div className="urlPanel">
            <div className="area">
                <div>
                    <a>请输入链接地址:</a>
                    <button className="cancleButton button" onClick={()=>{
                    self.props.onClosePanel(null)
                    }}>
                        <i className="fa fa-cancle"></i>
                    </button>
                </div>
                <input onBlur={this.onOut} id="urlArea"className="input"/>
                <div>
                    <button className="subButton" onClick={()=>{
                    //var url = document.getElementById('urlArea').innerHTML;
                    var url = document.getElementById('urlArea')['value'];
                    //console.log(12121,this);
                    //console.log(document.onselect);
                    //var word = document.getElementById('wordArea').innerHTML;
                    //this.props.onClosePanel({url:url,word:word});
                    this.props.onSubmit(url);
                    }}>提交</button>
                </div>
            </div>
        </div>)
    }
}
//this.props.onSubmit()