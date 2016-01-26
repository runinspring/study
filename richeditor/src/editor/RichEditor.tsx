import * as React from 'react';
import {PropTypes} from 'react';
import PanelColor from './panelcolor/PanelColor';
import PanelButton from './PanelButton';
import PanelUrl from './panelUrl/PanelUrl';
import './css/editor.css'
export default class RichEditor extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            html: this.props.content,
            panelColor: false,
            panelUrl: false
        }
        if(this.props.height){
            this.state.height = +this.props.height
        }else{
            this.state.height = 560;
        }
        if(this.props.width){
            this.state.width = this.props.width;
        }else{
            this.state.width = 350;
        }
        //console.log(112,this.props.border)
        if(this.props.border){
            this.state.border = 1;
        }else{
            this.state.border = 0;
        }


        //window.onkeydown = function(e){
        //    console.log(1231232);
        //}
        //document.onkeydown = function(e){
        //    console.log('editor',this,e.keyCode)
        //}.bind(this);
        //document.onkeydown = this.onKeyDownHandler.bind(this);
        //console.log(121,this.state.border)
        //this.target = this;
    }
    /**
     * 在组件被加载时调用
     */
    componentDidMount() {
        document.getElementById('textbox').focus();
        //this.insert(' ')
        document.onkeydown = function(e){
            //console.log('onKeyDownHandler')
            if(e.ctrlKey && e.keyCode==90){
                e.preventDefault();//阻止ctrl+z
                //console.log('zzz')
            }
        }
    }

    /**
     * 在组件被卸载时调用
     */
    componentWillUnmount() {
        document.onkeydown = null;

    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onChange: PropTypes.func.isRequired,
        getImages:PropTypes.func.isRequired,
        getUrl:PropTypes.func.isRequired
    }
    /**改变样式*/
    private execCommand(command, arg):void {
        document.execCommand(command, false, arg);
    }

    private emitChange() {
        //console.log(this)
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({target: {value: newHtml}})
    }
    private range:any;

    /**保存选择区域*/
    private saveRange():void {
        document.getElementById('textbox').focus();
        var selection = window.getSelection ? window.getSelection() : document['selection'];
        this.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        //console.log('range',this.range);
    }

    /**插入内容*/
    private insert(str):void {
        //console.log('insert:',str);
        document.getElementById('textbox').focus();
        if (!this.range) {
            this.saveRange();
        }
        if (!window.getSelection) {
            var range = this.range;
            range.pasteHTML(str);
            range.collapse(false);
            range.select();
        } else {
            var selection = window.getSelection ? window.getSelection() : document['selection'];
            var range = this.range;
            range.collapse(false);
            var hasR = range.createContextualFragment(str);
            var hasR_lastChild = hasR.lastChild;
            while (hasR_lastChild && hasR_lastChild.nodeName.toLowerCase() == "br" && hasR_lastChild.previousSibling && hasR_lastChild.previousSibling.nodeName.toLowerCase() == "br") {
                var e = hasR_lastChild;
                hasR_lastChild = hasR_lastChild.previousSibling;
                hasR.removeChild(e)
            }
            range.insertNode(hasR);
            if (hasR_lastChild) {
                range.setEndAfter(hasR_lastChild);
                range.setStartAfter(hasR_lastChild)
            }
            selection.removeAllRanges();
            selection.addRange(range)
        }
        this.emitChange();
    }
    /**从外层获取图片*/
    private getImages(data){
        //console.log(data);
        var str='';
        for(var i=0,len=data.length;i<len;i++){
            str+=('<br><img width="95%" src="'+data[i]+'"><br clear=left>');
            //str+=('<img width="100%" src="'+data[i]+'">');
        }
        this.insert(str);
    }
    /**鼠标移到上面显示提示文字*/
    private showInfo():void{
        console.log('showInfo')
    }
    private arrFontSize = [
        {parm: 1, value: '1'},{parm: 2, value: '2'},{parm: 3, value: '3'},{parm: 4, value: '4'},{parm: 5, value: '5'},{parm: 6, value: '6'},{parm: 7, value: '7'}
    ];


    render() {
        //console.log('render')
        //560  496 顶部栏默认高 66
        var self = this;
        var styleAll={
            'height':this.state.height+'px',
            'width':this.state.width+'px',
            'border': this.state.border+'px solid #999999'

        }
        //console.log(styleAll)
        //设置底部可编辑区域的高度
        var maxHeight = this.state.height-66;
        if(this.state.panelColor) maxHeight-=31;
        if(this.state.panelUrl) maxHeight-=61;
        var styleEditBody = {
            'height':maxHeight+ 'px'
        }


        //console.log('render',this.state.panelColor)
        var getFontSizeList = this.arrFontSize.map((item, idx)=> {
            //var style = {'fontSize': "30px"}
            var style = {'fontSize': idx*3+14}
            //style={style}
            //<a href="javascript:;">{"字号: "+item.value}</a>
            return <li key={"fontsize"+idx} onClick={self.execCommand.bind(self, 'fontSize', item.parm)}>
                <a href="javascript:;" style={style}>{item.value}   </a>
            </li>
        })
        return (
            <div className="richeditor" style={styleAll}>
                <div className="edit-bar">
                    <div className="ed-area">
                        <PanelButton show={this.state.panelColor} upClass="ed-icon ed-color"
                                     downClass="ed-icon ed-color-hover" clickTrigger={
                        ()=>{self.setState({panelColor:!self.state.panelColor})}
                        }/>
                        <div className="drop-down">
                            <button className="ed-button">
                                <i className="ed-icon ed-list-border"/>
                            </button>
                            <ul> {getFontSizeList} </ul>
                        </div>
                        <button className="ed-button" onClick={this.execCommand.bind(this,"bold")} onMouseOver={this.showInfo.bind(this)}>
                            <i className="ed-icon ed-bold"></i>
                        </button>
                        <button className="ed-button" onClick={this.execCommand.bind(this,"italic")}>
                            <i className="ed-icon ed-italic"></i>
                        </button>
                        <button className="ed-button" onClick={this.execCommand.bind(this,"underline")}>
                            <i className="ed-icon ed-underline"></i>
                        </button>
                    </div>
                    <div className="area">
                        <button className="ed-button" onClick={this.execCommand.bind(this,"justifyLeft")}>
                            <i className="ed-icon ed-left"></i>
                        </button>
                        <button className="ed-button" onClick={this.execCommand.bind(this,"justifyCenter")}>
                            <i className="ed-icon ed-center"></i>
                        </button>

                        <button className="ed-button" onClick={this.execCommand.bind(this,"justifyRight")}>
                            <i className="ed-icon ed-right"></i>
                        </button>

                        <button className="ed-button" onClick={()=>{
                            self.saveRange();
                            self.insert("<hr color=#e9e9e9 size=1><br>")
                        }}>
                            <i className="ed-icon ed-hr"></i>
                        </button>
                        <PanelButton show={this.state.panelUrl} upClass="ed-icon ed-link"
                                     downClass="ed-icon ed-link-hover" clickTrigger={
                        ()=>{self.setState({panelUrl:!self.state.panelUrl})}
                        }/>
                        <button className="ed-button" onClick={this.props.getImages.bind(this,this.getImages.bind(this))}>
                            <i className="ed-icon ed-image"></i>
                        </button>
                    </div>
                    <PanelColor show={this.state.panelColor}
                                submitColor={(value)=>{self.execCommand("ForeColor",value)}}/>
                    <PanelUrl show={this.state.panelUrl}
                              getUrl={this.props.getUrl.bind(this)}
                              onSubmitUrl={(value)=>{self.insert(value)}}/>
                </div>
                <div id="textbox" className="edit-body"
                     style={styleEditBody}
                     ref="editor"
                     spellCheck={false}
                     onMouseUp={this.saveRange.bind(this)}
                     contentEditable={true}
                     dangerouslySetInnerHTML={{__html: this.state.html}}
                     onInput={this.emitChange.bind(this)}/>
            </div>
        )
    }

}
//<button className="ed-button" onClick={this.execCommand.bind(this,"insertOrderedList")}>
//    <i className="ed-icon ed-list"></i>
//</button>
