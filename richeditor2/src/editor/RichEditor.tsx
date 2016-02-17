import * as React from 'react';
import {PropTypes} from 'react';
import PanelColor from './panelcolor/PanelColor';
import TypeButton from './buttons/TypeButton';
import {ToBoolean} from './lib/Lib';
import SingleButton from './buttons/SingleButton';
import PanelUrl from './panelUrl/PanelUrl';
import './css/editor.css'
export default class RichEditor extends React.Component<any,any> {
    setState(state:any, callback?:()=>any):void {
        super.setState(state, callback);
    }
    constructor(props) {
        super(props);
        //offset 是lark平台会有拖拽功能，需要一个偏移量,设置为true
        this.state = {
            html: this.props.content,
            typeFontColor: false,
            typeUrl: false,
            typeBold:false,
            typeItalic:false,
            typeUnderline:false,
            typeJustifyLeft:false,
            typeJustifyCenter:false,
            typeJustifyRight:false,
        }


        if (this.props.height) {
            this.state.height = +this.props.height
        } else {
            this.state.height = 560;
        }
        if (this.props.width) {
            this.state.width = this.props.width;
        } else {
            this.state.width = 350;
        }
        //console.log(112,this.props.border)
        if (this.props.border) {//是否有边框
            this.state.border = 1;
        } else {
            this.state.border = 0;
        }
        if(this.props.offset!=false){//是否有偏移量
            this.state.offset = true;
        }else{
            this.state.offset = false;
        }
    }

    /**
     * 在组件被加载时调用
     */
    componentDidMount() {

        setTimeout(()=>{
            if(document.getElementById('textbox')){
                //console.log('init3')
                //document.getElementById('textbox')['flur']();
                document.getElementById('textbox').focus();
                this.saveRange();
                //this.insert("")
            }
        },500)
        //ed.focus();
        //document.getElementById('textbox').focus();
        //var selection = window.getSelection ? window.getSelection() : document['selection'];
        //selection.collapseToEnd();
        //this.insert(' ')
        //设置焦点进入末尾
        //var range,selection;
        //if(document.createRange){
        //    range = document.createRange();
        //    range.selectNodeContents(ed);
        //    range.collapse(false);
        //    selection = window.getSelection();
        //    selection.removeAllRanges();
        //    selection.addRange(range);
        //}else if(document['selection']){//IE 8 and lower
        //    range = document.body['createTextRange']();
        //    range.moveToElementText(ed);
        //    range.collapse(false);
        //    range.select();
        //}
        document.onkeydown = function (e) {
            //console.log('onKeyDownHandler')
            if (e.ctrlKey && e.keyCode == 90) {
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
        getImages: PropTypes.func.isRequired,
        onPureText:PropTypes.func.isRequired,
        getUrl: PropTypes.func.isRequired
    }

    /**改变样式*/
    private execCommand(command, arg?:any):void {
        document.execCommand(command, false, arg);
    }

    private emitChange() {
        //console.log(this)
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        this.props.onChange({target: {value: newHtml}});

        //var txt = newHtml.replace(/({|})/g,'');   //过滤{}
        //txt.replace(/</g,'&lt;');    //置换符号<
        //txt.replace(/>/g,'&gt;');    //置换符号>
        var txt= newHtml.replace(/<[^>]+>/g,"");//可以匹配<script></style></body>等，并置空。而不是替换<和>两个符号
        txt = txt.replace(/&lt;/g,"<");//把 &lt; 替换成<
        txt = txt.replace(/&gt;/g,">");//把 &gt; 替换成>
        txt = txt.replace(/&nbsp;/g," ");//把 &nbsp; 替换成空格
        txt = txt.replace(/&amp;/g,"&");//把 &amp; 替换成&
        this.props.onPureText({target: {value: txt}});
        this.getButtonTypes();
    }

    private range:any;
    private isInsertUrl:boolean = false;//是否插入了url

    /**保存选择区域*/
    private saveRange():void {
        //console.log('saveRange')
        document.getElementById('textbox').focus();
        var selection = window.getSelection ? window.getSelection() : document['selection'];
        this.range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        this.getButtonTypes();
        //console.log('range',this.range.startOffset,this.range.endOffset);
    }
    /**设置字号大小*/
    private setFontsize(size,change):void{
        document.execCommand('fontSize', false, size);
        var fontElements = document.getElementsByTagName("font");
        for (var i = 0, len = fontElements.length; i < len; ++i){
            if(fontElements[i].size == size.toString()){
                //console.log('remove')
                fontElements[i].removeAttribute("size");
                fontElements[i].style.fontSize = change;
            }
        }
        this.emitChange();
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
    private getImages(data) {
        //console.log(data);
        var str = '';
        for (var i = 0, len = data.length; i < len; i++) {
            str += ('<br><img width="100%" src="' + data[i] + '"><br clear=left>');
            //str+=('<img width="100%" src="'+data[i]+'">');
        }
        this.insert(str);
    }
    /**插入url*/
    private insertUrl(value:string){
        this.isInsertUrl = true;
        //this.setState({typeUrl:false});
        this.insert(value);
    }

    private idxInterval:any;

    /**鼠标移到上面显示提示文字*/
    private showInfo(e, value):void {
        //console.log('showInfo',value)
        clearInterval(this.idxInterval)

        var ed = document.getElementById('richeditor');
        var lf = ed.getBoundingClientRect().left;
        var tp = ed.getBoundingClientRect().top;
        if(!this.state.offset){//不需要偏移量
            lf=0; tp=25;
        }
        //console.log(333,lf,tp,this.state.offset)

        var tip = document.getElementById('tip');
        tip.className = 'ed-info-show';
        tip.style.left = e.clientX - lf + 15 + 'px';
        tip.style.top = e.clientY - tp + 8 + 'px';
        tip.innerHTML = value;
    }

    /**隐藏提示信息*/
    private hideInfo(e):void {
        //console.log('hideInfo')
        this.idxInterval = setInterval(()=> {
            var tip = document.getElementById('tip');
            if(tip){
                tip.className = 'ed-info-hide';
            }
        }, 100);
        //console.log(this.idxInterval)
    }

    private arrFontSize = [
        {parm: 2, value: '12',change:'12px'}, {parm: 3, value: '14',change:'14px'}, {parm: 4, value: '16',change:'16px'},
        {parm: 5, value: '18',change:'18px'}, {parm: 6, value: '20',change:'20px'}, {parm: 7, value: '22',change:'22px'}
    ];
    private dataButtons = {
        commonFuns: {showInfo: this.showInfo.bind(this), hideInfo: this.hideInfo.bind(this)},
        color: {upClass: 'ed-icon ed-color', downClass: 'ed-icon ed-color-hover', info: '文字颜色'},
        fontSize: {upClass: 'ed-icon ed-list-border', downClass: 'ed-icon ed-list-border', info: '文字大小'},
        bold: {upClass: 'ed-icon ed-bold', downClass: 'ed-icon ed-bold-hover', info: '粗体'},
        italic: {upClass: 'ed-icon ed-italic', downClass: 'ed-icon ed-italic-hover', info: '斜体'},
        underline: {upClass: 'ed-icon ed-underline', downClass: 'ed-icon ed-underline-hover', info: '下划线'},
        justifyLeft: {upClass: 'ed-icon ed-left', downClass: 'ed-icon ed-left-hover', info: '左对齐'},
        justifyCenter: {upClass: 'ed-icon ed-center', downClass: 'ed-icon ed-center-hover', info: '居中对齐'},
        justifyRight: {upClass: 'ed-icon ed-right', downClass: 'ed-icon ed-right-hover', info: '右对齐'},
        hr: {upClass: 'ed-icon ed-hr', downClass: 'ed-icon ed-hr', info: '分隔线'},
        link: {upClass: 'ed-icon ed-link', downClass: 'ed-icon ed-link-hover', info: '创建链接'},
        image: {upClass: 'ed-icon ed-image', downClass: 'ed-icon ed-image', info: '插入图片'}
    }
    private testPosition():void{
        //console.log('testPosition')
    }
    private onMouseUp():void{
        this.saveRange();
        setTimeout(this.saveRange.bind(this),50)
    }

    private getButtonTypes():void{
        //console.log('testPick');
        //var colour = document.queryCommandValue("ForeColor");
        var changeObject = {};

        if(ToBoolean(document.queryCommandValue("bold")) != this.state.typeBold){
            changeObject['typeBold'] = !this.state.typeBold;
        }
        if(ToBoolean(document.queryCommandValue("italic")) != this.state.typeItalic){
            changeObject['typeItalic'] = !this.state.typeItalic;
        }
        if(ToBoolean(document.queryCommandValue("underline")) != this.state.typeUnderline && !this.isInsertUrl){
            //刚刚插入的url也有下划线，需要排除
            changeObject['typeUnderline'] = !this.state.typeUnderline;
        }
        if(ToBoolean(document.queryCommandValue("justifyLeft")) != this.state.typeJustifyLeft){
            changeObject['typeJustifyLeft'] = !this.state.typeJustifyLeft;
        }
        if(ToBoolean(document.queryCommandValue("justifyCenter")) != this.state.typeJustifyCenter){
            changeObject['typeJustifyCenter'] = !this.state.typeJustifyCenter;
        }
        if(ToBoolean(document.queryCommandValue("justifyRight")) != this.state.typeJustifyRight){
            changeObject['typeJustifyRight'] = !this.state.typeJustifyRight;
        }
        this.isInsertUrl = false;
        //var justifyLeft = document.queryCommandValue('justifyLeft');
        //var justifyCenter = document.queryCommandValue('justifyCenter');
        //var justifyRight = document.queryCommandValue('justifyRight');
        //console.log('changeObject:',changeObject)
        if(Object.getOwnPropertyNames(changeObject).length>0){
            this.setState(changeObject)
        }
        //console.log("colour:",colour,';bold:',bold,";italic:",italic,';underline:',underline);
        //console.log('justifyLeft:',justifyLeft,"justifyCenter:",justifyCenter,';justifyRight:',justifyRight)
    }
    render() {
        //console.log('render')
        //560  496 顶部栏默认高 66
        var self = this;
        var styleAll = {
            'height': this.state.height + 'px',
            'width': this.state.width + 'px',
            'border': this.state.border + 'px solid #999999'

        }
        //console.log(styleAll)
        //设置底部可编辑区域的高度
        var maxHeight = this.state.height - 66;
        if (this.state.typeFontColor) maxHeight -= 31;
        if (this.state.typeUrl) maxHeight -= 61;
        var styleEditBody = {
            'height': maxHeight + 'px'
        }

        //console.log('render',this.state.panelColor)
        var getFontSizeList = this.arrFontSize.map((item, idx)=> {
            //var style = {'fontSize': "30px"}
            var style = {'fontSize': idx * 3 + 14}
            //style={style}
            //<a href="javascript:;">{"字号: "+item.value}</a>

            return <li key={"fontsize"+idx} onClick={()=>{self.setFontsize(item.parm,item.change)}}>
                <a href="javascript:;">{item.value}   </a>
            </li>
            //return <li key={"fontsize"+idx} onClick={self.execCommand.bind(self, 'fontSize', item.parm)}>
            //    <a href="javascript:;" style={style}>{item.value}   </a>
            //</li>
        })
        return (
            <div id="richeditor" className="richeditor" style={styleAll}>
                <div className="edit-bar">
                    <div className="ed-area">
                        <TypeButton show={this.state.typeFontColor} datas={this.dataButtons.color}
                                     clickTrigger={()=>{self.setState({typeFontColor:!self.state.typeFontColor})}}
                                     commonFuns={this.dataButtons.commonFuns}
                        />
                        <div className="drop-down">
                            <SingleButton datas={this.dataButtons.fontSize} clickTrigger={()=>{}}
                                          commonFuns={this.dataButtons.commonFuns}/>
                            <ul> {getFontSizeList} </ul>
                        </div>
                        <TypeButton show={this.state.typeBold} datas={this.dataButtons.bold}
                                    clickTrigger={()=>{
                                        self.setState({typeBold:!self.state.typeBold})
                                        self.execCommand('bold');
                                    }}
                                    commonFuns={this.dataButtons.commonFuns}/>
                        <TypeButton show={this.state.typeItalic} datas={this.dataButtons.italic}
                                    clickTrigger={()=>{
                                        self.setState({typeItalic:!self.state.typeItalic})
                                        self.execCommand('italic');
                                    }}
                                    commonFuns={this.dataButtons.commonFuns}/>
                        <TypeButton show={this.state.typeUnderline} datas={this.dataButtons.underline}
                                    clickTrigger={()=>{
                                        self.setState({typeUnderline:!self.state.typeUnderline})
                                        self.execCommand('underline');
                                    }}
                                    commonFuns={this.dataButtons.commonFuns}/>
                    </div>
                    <div className="area">
                        <TypeButton show={this.state.typeJustifyLeft} datas={this.dataButtons.justifyLeft}
                                    clickTrigger={this.execCommand.bind(this,"justifyLeft")}
                                    commonFuns={this.dataButtons.commonFuns}/>
                        <TypeButton show={this.state.typeJustifyCenter} datas={this.dataButtons.justifyCenter}
                                    clickTrigger={this.execCommand.bind(this,"justifyCenter")}
                                    commonFuns={this.dataButtons.commonFuns}/>
                        <TypeButton show={this.state.typeJustifyRight} datas={this.dataButtons.justifyRight}
                                    clickTrigger={this.execCommand.bind(this,"justifyRight")}
                                    commonFuns={this.dataButtons.commonFuns}/>
                        <SingleButton datas={this.dataButtons.hr}
                                      clickTrigger={()=>{
                                            self.insert("<br><hr style='height: 3px;background: #e9e9e9;border: none; '><br>")}}
                                      commonFuns={this.dataButtons.commonFuns}/>
                        <TypeButton show={this.state.typeUrl} datas={this.dataButtons.link}
                                     clickTrigger={()=>{self.setState({typeUrl:!self.state.typeUrl})}}
                                     commonFuns={this.dataButtons.commonFuns}
                        />
                        <SingleButton datas={this.dataButtons.image}
                                      clickTrigger={this.props.getImages.bind(this,this.getImages.bind(this))}
                                      commonFuns={this.dataButtons.commonFuns}/>
                    </div>
                    <PanelColor show={this.state.typeFontColor}
                                submitColor={(value)=>{self.execCommand("ForeColor",value)}}/>
                    <PanelUrl show={this.state.typeUrl}
                              getUrl={this.props.getUrl.bind(this)}
                              onSubmitUrl={(value)=>{self.insertUrl(value)}}
                    />
                    <div id="tip" className="ed-info-hide"/>
                </div>
                <div id="textbox" className="edit-body"
                     style={styleEditBody}
                     ref="editor"
                     spellCheck={false}
                     onMouseUp={this.onMouseUp.bind(this)}
                     onKeyUp={this.saveRange.bind(this)}
                     contentEditable={true}
                     dangerouslySetInnerHTML={{__html: this.state.html}}
                     onInput={this.emitChange.bind(this)}/>
            </div>
        )
    }

}
//<button className="ed-button" onClick={this.execCommand.bind(this,"insertOrderedList")}>
//</button>
