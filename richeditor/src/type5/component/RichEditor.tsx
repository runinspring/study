import * as React from 'react';
import {PropTypes} from 'react';
import PanelColor from './panelcolor/PanelColor';
import PanelButton from './PanelButton';
import '../css/editor.css'
export default class RichEditor extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            html: this.props.content,
            panelColor:false,
            panelUrl:false
        }

        //this.target = this;
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onChange: PropTypes.func.isRequired,
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
    private saveRange():void{
        document.getElementById('textbox').focus();
        var selection= window.getSelection ? window.getSelection() : document['selection'];
        this.range= selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        //console.log('range',this.range);
    }
    /**插入内容*/
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
        var self = this;
        console.log('render',this.state.panelColor)
        return (
            <div className="edit">
                <div className="edit-bar">
                    <div className="area">
                        <PanelButton show={this.state.panelColor} upClass="icon fa-color" downClass="icon fa-color-hover" clickTrigger={
                        ()=>{self.setState({panelColor:!self.state.panelColor})}
                        }/>
                        <button className="button">
                            <i className="icon fa-size"></i>
                        </button>
                        <button className="button" onClick={this.execCommand.bind(this,"bold")}>
                            <i className="icon fa-bold"></i>
                        </button>
                        <button className="button" onClick={this.execCommand.bind(this,"italic")}>
                            <i className="icon fa-italic"></i>
                        </button>
                        <button className="button" onClick={this.execCommand.bind(this,"underline")}>
                            <i className="icon fa-underline"></i>
                        </button>
                    </div>
                    <div className="area">
                        <button className="button" onClick={this.execCommand.bind(this,"justifyLeft")}>
                            <i className="icon fa-left"></i>
                        </button>
                        <button className="button" onClick={this.execCommand.bind(this,"justifyCenter")}>
                            <i className="icon fa-center"></i>
                        </button>

                        <button className="button" onClick={this.execCommand.bind(this,"justifyRight")}>
                            <i className="icon fa-right"></i>
                        </button>
                        <button className="button" onClick={this.execCommand.bind(this,"insertOrderedList")}>
                            <i className="icon fa-list"></i>
                        </button>
                        <button className="button" onClick={()=>{
                            self.saveRange();
                            self.insert("<hr color=#e9e9e9>")
                        }}>
                            <i className="icon fa-hr"></i>
                        </button>
                        <button className="button">
                            <i className="icon fa-link"></i>
                        </button>
                        <button className="button">
                            <i className="icon fa-image"></i>
                        </button>
                    </div>
                    <PanelColor show={this.state.panelColor} submitColor={(value)=>{self.execCommand("ForeColor",value)}}/>
                </div>
                <div id="textbox" className="edit-body"
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
