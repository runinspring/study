import * as React from 'react';
import {PropTypes} from 'react';
export default class UrlPanel extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel')
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onClosePanel:PropTypes.func.isRequired
    }

    render() {
        var self =this;
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
                <div id="urlInputArea"className="input" contentEditable={true}>
                </div>
                <div>
                    <button className="subButton" onClick={()=>{
                    var link = document.getElementById('urlInputArea').innerHTML;
                    this.props.onClosePanel(link);
                    }}>提交</button>
                </div>
            </div>
        </div>)
    }
}
//this.props.onSubmit()