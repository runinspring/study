import * as React from 'react';
import {PropTypes} from 'react';
import UrlPanel from './UrlPanel';
import ImagePanel from './image/ImagePanel';
import PanelButton from './PanelButton';
//import '../css/editor.css'
export default class RichEditor extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            html: this.props.content,
            urlPanel:false
        }

        //this.target = this;
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        content: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        getImages:PropTypes.func.isRequired
    }
    private execCommand(command, arg):void {
        /**当前的对象，如果不是，不改变*/
        document.execCommand(command, false, arg);
    }
    //private target:any;
    private emitChange() {
        //console.log(this)
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({target: {value: newHtml}})
    }
    private arrBlock = [
        {parm: 'P', value: '段落'},
        {parm: 'BLOCKQUOTE', value: '块引用'},
        {parm: 'H1', value: '标题大小 1'},
        {parm: 'H2', value: '标题大小 2'},
        {parm: 'H3', value: '标题大小 3'},
        {parm: 'H4', value: '标题大小 4'},
        {parm: 'H5', value: '标题大小 5'},
        {parm: 'H6', value: '标题大小 6'}
    ];
    /**fontSize下拉列表*/
    private arrFontSize = [
        {parm: 1, value: '文字大小 1'},
        {parm: 2, value: '文字大小 2'},
        {parm: 3, value: '文字大小 3'},
        {parm: 4, value: '文字大小 4'},
        {parm: 5, value: '文字大小 5'},
        {parm: 6, value: '文字大小 6'},
        {parm: 7, value: '文字大小 7'}
    ];
    private arrJustify = [
        {parm: 'justifyLeft', value: '左对齐'},
        {parm: 'justifyRight', value: '右对齐'},
        {parm: 'justifyCenter', value: '居中对齐'},
        {parm: 'justifyFull', value: '自适应'},
    ];
    private arrColors = [
        {value: '#000000'},
        {value: '#ff0000'},
        {value: '#ff00ff'},
        {value: '#ffff00'},
        {value: '#ffffff'},
        {value: '#0000ff'}
    ]
    /**单一的按钮列表*/
    private arrButtons = [
        {parm: 'bold', className: 'fa fa-bold'},
        {parm: 'italic', className: 'fa fa-italic'},
        {parm: 'underline', className: 'fa fa-underline'},
        {parm: 'strikeThrough', className: 'fa fa-strikethrough'},
        {parm: 'insertOrderedList', className: 'fa fa-list-ol'},
        {parm: 'insertUnorderedList', className: 'fa fa-list-ul'}
    ];
    /**从外层获取图片*/
    private getImages(data){
        //console.log(data);
        var str='';
        for(var i=0,len=data.length;i<len;i++){
            str+=('<img width="100%" src="'+data[i]+'">');
        }
        //console.log(123,str)
        this.insert(str);
        //console.log('getImages:',data,this);
        //var urls = this.state.imageUrls.concat(data);
        //this.setState({imageUrls:urls})
    }
    private range:any;
    /**保存选择区域*/
    private saveRange():void{
        var selection= window.getSelection ? window.getSelection() : document['selection'];
        this.range= selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        //console.log('range',this.range);
    }
    private insert(str):void{
        document.getElementById('textbox').focus();
        if(!this.range){
            this.saveRange();
        }
        if (!window.getSelection){
            var range = this.range;
            range.pasteHTML(str);
            range.collapse(false);
            range.select();
        }else{
            var selection= window.getSelection ? window.getSelection() : document['selection'];
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

    render() {
        //console.log('render');
        var self = this;
        var getFontSizeList = this.arrFontSize.map((item, idx)=> {
            var style={fontsize:"16px"}
            return <li key={"fontsize"+idx} style={style}>
                <a  href="javascript:;" style={style} onClick={self.execCommand.bind(self, 'fontSize', item.parm)}>{item.value}</a>
            </li>
        })
        var getBlockList = this.arrBlock.map((item, idx)=> {
            return <li key={'formatBlock'+idx}>
                <a href="javascript:;" onClick={this.execCommand.bind(this,'formatBlock',item.parm)}>{item.value}</a>
            </li>
        })
        var getJustifyList = this.arrJustify.map((item, idx)=> {
            return <li key={'justify'+idx}>
                <a href="javascript:;" onClick={this.execCommand.bind(this,item.parm)}>{item.value}</a>
            </li>
        })
        //ForeColor
        var getButtons = this.arrButtons.map((item, idx)=> {
            return  <button className="button" key={'button'+idx} onClick={this.execCommand.bind(this, item.parm)}>
                <i className={item.className}></i>
            </button>
        })
        var getColors = this.arrColors.map((item,idx)=>{
            var style={background:item.value,color:item.value,margin:" 2px 2px 0px 2px",height:'20px'}
            //font-size
            return <li key={"fontsize"+idx} style={style} >
                <a href="javascript:;" style={style} onClick={self.execCommand.bind(self, 'ForeColor', item.value)}>colors</a>
            </li>
        })

        var getUrlPanel = function(){
            if(self.state.urlPanel){
                return <UrlPanel defauleUrl={self.state.lastUrl} onClosePanel={(url)=>{
                self.setState({urlPanel:false})
                }} onSubmit={self.insert.bind(self)}/>
            }
        }
        return (
            <div id='RichEditorArea'className="body">
                <div className="edit-bar">
                    <div className="btn-group">
                        {getButtons}
                        <PanelButton downType={this.state.urlPanel} setClass='fa fa-url' clickTrigger={()=>{
                                self.setState({urlPanel:!self.state.urlPanel})}}/>
                        <button className="button" onClick={this.props.getImages.bind(this,this.getImages.bind(this))}>
                            <i className="fa fa-picture"></i>
                        </button>

                    </div>
                    <div className="btn-group drop-down">
                        <button className="button">
                            <i className="fa fa-pallet"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul>{getColors}</ul>
                    </div>
                    <div className="btn-group drop-down">
                        <button className="button">
                            <i className="fa fa-text-height"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul> {getFontSizeList} </ul>
                    </div>
                    <div className="btn-group drop-down">
                        <button className="button">
                            <i className="fa fa-align-left"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul>
                            {getJustifyList}
                        </ul>
                    </div>
                    <div className="btn-group drop-down">
                        <button className="button">
                            <i className="fa fa-paragraph"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul> {getBlockList} </ul>
                    </div>
                    <button className="button"
                            onClick={()=>{
                            self.execCommand('removeFormat',"");
                            self.execCommand('Unlink',"");
                            }}>
                        <i className="fa fa-eraser"></i>
                    </button>
                    {getUrlPanel()}
                </div>
                <div id="textbox" className="edit-area"
                     ref="editor"
                     onMouseUp={this.saveRange.bind(this)}
                     contentEditable={true}
                     dangerouslySetInnerHTML={{__html: this.state.html}}
                     onInput={this.emitChange.bind(this)}/>

            </div>
        )
    }
}
//onMouseUp ={this.onMouseUp.bind(this)}
//<div id="textbox" className="edit-area"
//     ref="editor"
//     contentEditable={true}
//     onMouseUp ={this.onMouseUp.bind(this)}
//
//     dangerouslySetInnerHTML={{__html: this.state.html}}
//     onInput={this.emitChange.bind(this)}/>

//焦点离开
//onFocus ={this.onMouseUp.bind(this)}
//onBlur ={this.onMove.bind(this)}
//onBlur={this.mouseOut.bind(this)}
//onMouseDown ={this.onMouseUp.bind(this)}
//onBlur={this.mouseOut.bind(this)}
//<button className="button"
//        onClick={()=>{
//                                this.props.onChangeUrlPanel((e)=>{self.setLink(e)})
//                                }}>
