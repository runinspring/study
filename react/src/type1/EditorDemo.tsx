import * as React from 'react';
import RichEditor from './component/RichEditor'
import UrlPanel from './component/UrlPanel';
export default class EditorDemo extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {
            urlPanel:false,
            urlPanelCallBack:Function,
            content:'测试文字'
        }
    }
    /**点击链接按钮，切换url输入面板的状态*/
    private changeUrlPanel(callBack):void{
        this.setState({urlPanel:!this.state.urlPanel,urlPanelCallBack:callBack});
    }
    /**url 面板上的关闭按钮*/
    private closeUrlPanel():void{
        this.setState({urlPanel:false});

        //if(value){
        //    console.log('closeUrlPanel:',value)
        //    //this.callBackUrl(value);
        //}
    }
    render(){
        var self = this;
        var getUrlPanel = function(){
            if(self.state.urlPanel){
                //console.log(2312);
                return <UrlPanel onClosePanel={self.closeUrlPanel.bind(self)} onSubmit={self.state.urlPanelCallBack}/>
            }else{
                return <div/>
            }
        }
        return(
            <div className="edit">
                <RichEditor content="测试文字" onChangeUrlPanel={this.changeUrlPanel.bind(this)} onChange={(e)=>{console.log(e.target.value)}}/>
                {getUrlPanel()}
            </div>
        )
    }
}
