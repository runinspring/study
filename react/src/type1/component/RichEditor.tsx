import * as React from 'react';
import {PropTypes} from 'react';
import UrlPanel from './UrlPanel';
export default class RichEditor extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            html: this.props.content
        }
        this.target = this;
    }

    private target:any;
    private emitChange() {
        //console.log(this)
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        //this.content = newHtml;
        //console.log(newHtml)
        this.props.onChange({target: {value: newHtml}})
    }

    private execCommand(command, arg):void {
        /**当前的对象，如果不是，不改变*/
        //var select = document.getElementById('textbox');
        //console.log(select,this)
        //console.log(window.getSelection())
        //console.log('execCommand', command, false, arg)
        document.execCommand(command, false, arg);
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        content: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onChangeUrlPanel: PropTypes.func.isRequired
    }

    private arrBlock = [
        {parm: 'P', value: 'Paragraph'},
        {parm: 'BLOCKQUOTE', value: 'Block Quote'},
        {parm: 'H1', value: 'Header 1'},
        {parm: 'H2', value: 'Header 2'},
        {parm: 'H3', value: 'Header 3'},
        {parm: 'H4', value: 'Header 4'},
        {parm: 'H5', value: 'Header 5'},
        {parm: 'H6', value: 'Header 6'}
    ];
    /**fontSize下拉列表*/
    private arrFontSize = [
        {parm: 1, value: 'fontSize 1'},
        {parm: 2, value: 'fontSize 2'},
        {parm: 3, value: 'fontSize 3'},
        {parm: 4, value: 'fontSize 4'},
        {parm: 5, value: 'fontSize 5'},
        {parm: 6, value: 'fontSize 6'},
        {parm: 7, value: 'fontSize 7'}
    ];
    private arrJustify = [
        {parm: 'justifyLeft', value: 'Align Left'},
        {parm: 'justifyRight', value: 'Align Right'},
        {parm: 'justifyCenter', value: 'Align Center'},
        {parm: 'justifyFull', value: 'Align Justify'},
    ];
    private arrColors = [
        {value: '#000000'},
        {value: '#ff0000'},
        {value: '#ff00ff'},
        {value: '#ffff00'},
        {value: '#0000ff'},
        {value: '#ffffff'}
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
    private endPos:number;
    private edit:any;
    /**设置链接 range是最开始的选择范围*/
    private setLink(data):void {
        console.log('setLint:',data);
        this.execCommand('CreateLink', data);
    }

    render() {
        //console.log('render',this.state);
        var self = this;
        var getFontSizeList = this.arrFontSize.map((item, idx)=> {
            return <li key={"fontsize"+idx}>
                <a href="javascript:;" onClick={self.execCommand.bind(self, 'fontSize', item.parm)}>{item.value}</a>
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
            var style={background:item.value,color:item.value}
            return <li key={"fontsize"+idx}>
                <a href="javascript:;" style={style} onClick={self.execCommand.bind(self, 'ForeColor', item.value)}>colors</a>
            </li>
        })
        return (
            <div id='RichEditorArea'className="body">
                <div className="edit-bar">
                    <div className="btn-group">
                        {getButtons}
                        <button className="button"
                                onClick={()=>{
                                //self.setState({urlPanel:!self.state.urlPanel})
                                this.props.onChangeUrlPanel((e)=>{self.setLink(e)})
                                }}>
                            <i className="fa fa-url"></i>
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
                </div>
                <div id="textbox" className="edit-area"
                     ref="editor"
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
