webpackJsonp([1],{0:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(89),s=o(163),a=function(e){function t(t){e.call(this,t),console.log("main.init")}return n(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(s["default"],null))},t}(i.Component),d=r;d.render(i.createElement(a,null),document.getElementById("app"))},87:function(e,t,o){t=e.exports=o(88)(),t.push([e.id,".richeditor{width:350px;height:560px;border:1px solid #999;font-size:12px}.richeditor .edit-bar{width:100%;min-height:40px;border-bottom:1px solid #e9e9e9}.richeditor .edit-body{max-height:494px;outline:none;margin:4px 6px 2px 2px;word-break:break-all;overflow:auto;overflow-x:hidden}.richeditor .edit-bar .ed-info-hide{width:0;height:0;visibility:hidden}.richeditor .edit-bar .ed-info-show{border-radius:4px;visibility:visible;padding:2px 4px;background-color:#6cc7f6;color:#fff;position:fixed;z-index:11;font-size:12px}.richeditor .edit-bar .ed-area{margin:0 0 0 4px}.richeditor .edit-bar .ed-area .drop-down{display:inline-flex}.richeditor .edit-bar .ed-area .drop-down ul{background-color:#fff;border:1px solid #e0eaf4;margin:27px 0 0 -50px;position:absolute;list-style:none;padding:0;visibility:hidden;z-index:10}.richeditor .edit-bar .ed-area .drop-down:hover ul{visibility:visible}.richeditor .edit-bar .ed-area .drop-down li{height:20px;line-height:20px;width:48px;border-bottom:1px solid #e5edf2}.richeditor .edit-bar .ed-area .drop-down li:hover{background:#f2f2f2}.richeditor .edit-bar .ed-area .drop-down li a{width:100%;text-align:center;display:inline-block;text-decoration:none;color:#7a94a6}.richeditor .edit-bar .ed-button{margin:2px 0 2px 2px;cursor:pointer;outline:none;display:inline-flex;background:#fff;border:none;padding:0;text-align:left;height:25px;line-height:25px}.richeditor .ed-subButton{min-width:40px;cursor:pointer;margin:0 2px;outline:none;border:none;color:#fff;background:#70c8f3}.richeditor .ed-subButton:active{background:#00b1ff}.richeditor .ed-panel-color{height:30px;margin:0 4px;padding:0 8px 0 3px;border-top:1px solid #ddd}.richeditor .ed-panel-color .ed-item-color{width:20px;height:20px;margin:5px 4px 0 0;border:2px solid #fff}.richeditor .ed-panel-color .ed-item-color:hover{border:2px solid #6bc7f6}.richeditor .panel-url{height:60px;margin:0 4px;padding:0 6px 0 3px;border-top:1px solid #ddd}.richeditor .panel-url .ed-input{width:280px;font-size:12px;border:1px solid #ddd;height:20px;line-height:20px;margin:5px 0 0;padding:0 2px;padding-right:-200px;white-space:nowrap;display:inline-flex}.richeditor .ed-icon a{color:#515151;font-style:normal;margin-left:4px}.richeditor .ed-icon{background-image:url("+o(!function(){var e=new Error('Cannot find module "./rich_edit_2016_background.png"');throw e.code="MODULE_NOT_FOUND",e}())+");width:25px;height:25px}.richeditor .ed-color{background-position:-25px 0}.richeditor .ed-color-hover,.richeditor .ed-color:hover{background-position:-50px 0}.richeditor .ed-italic{background-position:-75px 0}.richeditor .ed-italic:hover{background-position:-100px 0}.richeditor .ed-hr{background-position:-125px 0}.richeditor .ed-hr:hover{background-position:-150px 0}.richeditor .ed-bold{background-position:-25px -25px}.richeditor .ed-bold:hover{background-position:0 -25px}.richeditor .ed-underline{background-position:-50px -25px}.richeditor .ed-underline:hover{background-position:-75px -25px}.richeditor .ed-left{background-position:-100px -25px}.richeditor .ed-left:hover{background-position:-125px -25px}.richeditor .ed-link{background-position:-150px -25px}.richeditor .ed-link-hover,.richeditor .ed-link:hover{background-position:-175px -25px}.richeditor .ed-center{background-position:0 -50px}.richeditor .ed-center:hover{background-position:-25px -50px}.richeditor .ed-right{background-position:-50px -50px}.richeditor .ed-right:hover{background-position:-75px -50px}.richeditor .ed-list{background-position:-100px -50px}.richeditor .ed-list:hover{background-position:-125px -50px}.richeditor .ed-image{background-position:-150px -50px}.richeditor .ed-image:hover{background-position:-175px -50px}.richeditor .ed-size{background-position:0 -75px}.richeditor .ed-list-border{width:50px;background-position:-150px -75px}.richeditor .ed-list-border:hover{width:50px;background-position:-200px -75px}",""])},88:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},89:function(e,t,o){"";e.exports=o(59)},161:function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=h[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(c(n.parts[r],t))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(c(n.parts[r],t));h[n.id]={id:n.id,refs:1,parts:s}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],r=i[0],s=i[1],a=i[2],d=i[3],c={css:s,media:a,sourceMap:d};o[r]?o[r].parts.push(c):t.push(o[r]={id:r,parts:[c]})}return t}function r(e,t){var o=g(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function d(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var o,n,i;if(t.singleton){var r=x++;o=b||(b=a(t)),n=l.bind(null,o,r,!1),i=l.bind(null,o,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=d(t),n=p.bind(null,o),i=function(){s(o),o.href&&URL.revokeObjectURL(o.href)}):(o=a(t),n=u.bind(null,o),i=function(){s(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function l(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var o=t.css,n=t.media;t.sourceMap;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function p(e,t){var o=t.css,n=(t.media,t.sourceMap);n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var h={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,x=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var r=[],s=0;s<o.length;s++){var a=o[s],d=h[a.id];d.refs--,r.push(d)}if(e){var c=i(e);n(c,t)}for(var s=0;s<r.length;s++){var d=r[s];if(0===d.refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete h[d.id]}}}};var v=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},162:function(e,t,o){var n=o(87);"string"==typeof n&&(n=[[e.id,n,""]]);o(161)(n,{});n.locals&&(e.exports=n.locals)},163:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(164),s=function(e){function t(t){e.call(this,t),this.state={test:!0}}return n(t,e),t.prototype.componentDidMount=function(){var e=document.getElementById("rd");e.style.position="absolute",e.style.left="0px",e.style.top="10px"},t.prototype.getImages=function(e){e(["http://www.xiaoxiongbizhi.com/wallpapers/__85/2/f/2fg40v2zs.jpg"])},t.prototype.getUrl=function(e){e("http://baidu.com")},t.prototype.changeTest=function(){this.setState({test:!this.state.test})},t.prototype.outPut=function(e){console.log("html:",e.target.value)},t.prototype.pureText=function(e){console.log("pure:",e.target.value)},t.prototype.render=function(){return i.createElement("div",{id:"rd"},i.createElement(r["default"],{content:"测试文字测试文字",height:560,width:350,border:!1,getImages:this.getImages.bind(this),getUrl:this.getUrl.bind(this),onChange:this.outPut.bind(this),onPureText:this.pureText.bind(this)}))},t}(i.Component);t.__esModule=!0,t["default"]=s},164:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=o(169),a=o(165),d=o(166),c=o(167);o(162);var l=function(e){function t(t){e.call(this,t),this.arrFontSize=[{parm:2,value:"12",change:"12px"},{parm:3,value:"14",change:"14px"},{parm:4,value:"16",change:"16px"},{parm:5,value:"18",change:"18px"},{parm:6,value:"20",change:"20px"},{parm:7,value:"22",change:"22px"}],this.dataButtons={commonFuns:{showInfo:this.showInfo.bind(this),hideInfo:this.hideInfo.bind(this)},color:{upClass:"ed-icon ed-color",downClass:"ed-icon ed-color-hover",info:"文字颜色"},fontSize:{upClass:"ed-icon ed-list-border",downClass:"ed-icon ed-list-border",info:"文字大小"},bold:{upClass:"ed-icon ed-bold",downClass:"ed-icon ed-bold",info:"粗体"},italic:{upClass:"ed-icon ed-italic",downClass:"ed-icon ed-italic",info:"斜体"},underline:{upClass:"ed-icon ed-underline",downClass:"ed-icon ed-underline",info:"下划线"},justifyLeft:{upClass:"ed-icon ed-left",downClass:"ed-icon ed-left",info:"左对齐"},justifyCenter:{upClass:"ed-icon ed-center",downClass:"ed-icon ed-center",info:"居中对齐"},justifyRight:{upClass:"ed-icon ed-right",downClass:"ed-icon ed-right",info:"右对齐"},hr:{upClass:"ed-icon ed-hr",downClass:"ed-icon ed-hr",info:"分隔线"},link:{upClass:"ed-icon ed-link",downClass:"ed-icon ed-link-hover",info:"创建链接"},image:{upClass:"ed-icon ed-image",downClass:"ed-icon ed-image",info:"插入图片"}},this.state={html:this.props.content,offset:!0,panelColor:!1,panelUrl:!1},this.props.height?this.state.height=+this.props.height:this.state.height=560,this.props.width?this.state.width=this.props.width:this.state.width=350,this.props.border?this.state.border=1:this.state.border=0}return n(t,e),t.prototype.componentDidMount=function(){setTimeout(function(){document.getElementById("textbox")&&document.getElementById("textbox").focus()},500),document.onkeydown=function(e){e.ctrlKey&&90==e.keyCode&&e.preventDefault()}},t.prototype.componentWillUnmount=function(){document.onkeydown=null},t.prototype.execCommand=function(e,t){document.execCommand(e,!1,t)},t.prototype.emitChange=function(){var e=this.refs.editor,t=e.innerHTML;this.props.onChange({target:{value:t}});var o=t.replace(/<[^>]+>/g,"");o=o.replace(/&amp;/g,"&"),o=o.replace(/&lt;/g,"<"),o=o.replace(/&gt;/g,">"),o=o.replace(/&nbsp;/g," "),this.props.onPureText({target:{value:o}}),this.getButtonTypes()},t.prototype.saveRange=function(){document.getElementById("textbox").focus();var e=window.getSelection?window.getSelection():document.selection;this.range=e.createRange?e.createRange():e.getRangeAt(0),this.getButtonTypes()},t.prototype.setFontsize=function(e,t){document.execCommand("fontSize",!1,e);for(var o=document.getElementsByTagName("font"),n=0,i=o.length;i>n;++n)o[n].size==e.toString()&&(o[n].removeAttribute("size"),o[n].style.fontSize=t);this.emitChange()},t.prototype.insert=function(e){if(document.getElementById("textbox").focus(),this.range||this.saveRange(),window.getSelection){var t=window.getSelection?window.getSelection():document.selection,o=this.range;o.collapse(!1);for(var n=o.createContextualFragment(e),i=n.lastChild;i&&"br"==i.nodeName.toLowerCase()&&i.previousSibling&&"br"==i.previousSibling.nodeName.toLowerCase();){var r=i;i=i.previousSibling,n.removeChild(r)}o.insertNode(n),i&&(o.setEndAfter(i),o.setStartAfter(i)),t.removeAllRanges(),t.addRange(o)}else{var o=this.range;o.pasteHTML(e),o.collapse(!1),o.select()}this.emitChange()},t.prototype.getImages=function(e){for(var t="",o=0,n=e.length;n>o;o++)t+='<br><img width="100%" src="'+e[o]+'"><br clear=left>';this.insert(t)},t.prototype.showInfo=function(e,t){clearInterval(this.idxInterval);var o=document.getElementById("richeditor"),n=o.getBoundingClientRect().left,i=o.getBoundingClientRect().top;this.state.offset||(n=0,i=0);var r=document.getElementById("tip");r.className="ed-info-show",r.style.left=e.clientX-n+15+"px",r.style.top=e.clientY-i+8+"px",r.innerHTML=t},t.prototype.hideInfo=function(e){this.idxInterval=setInterval(function(){var e=document.getElementById("tip");e&&(e.className="ed-info-hide")},100)},t.prototype.testPosition=function(){},t.prototype.getButtonTypes=function(){document.queryCommandValue("bold"),document.queryCommandValue("italic"),document.queryCommandValue("underline"),document.queryCommandValue("justifyLeft"),document.queryCommandValue("justifyCenter"),document.queryCommandValue("justifyRight")},t.prototype.render=function(){var e=this,t={height:this.state.height+"px",width:this.state.width+"px",border:this.state.border+"px solid #999999"},o=this.state.height-66;this.state.panelColor&&(o-=31),this.state.panelUrl&&(o-=61);var n={height:o+"px"},r=this.arrFontSize.map(function(t,o){return i.createElement("li",{key:"fontsize"+o,onClick:function(){e.setFontsize(t.parm,t.change)}},i.createElement("a",{href:"javascript:;"},t.value,"   "))});return i.createElement("div",{id:"richeditor",className:"richeditor",style:t},i.createElement("div",{className:"edit-bar"},i.createElement("div",{className:"ed-area"},i.createElement(a["default"],{show:this.state.panelColor,datas:this.dataButtons.color,clickTrigger:function(){e.setState({panelColor:!e.state.panelColor})},commonFuns:this.dataButtons.commonFuns}),i.createElement("div",{className:"drop-down"},i.createElement(d["default"],{datas:this.dataButtons.fontSize,clickTrigger:function(){},commonFuns:this.dataButtons.commonFuns}),i.createElement("ul",null," ",r," ")),i.createElement(d["default"],{datas:this.dataButtons.bold,clickTrigger:this.execCommand.bind(this,"bold"),commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.italic,clickTrigger:this.execCommand.bind(this,"italic"),commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.underline,clickTrigger:this.execCommand.bind(this,"underline"),commonFuns:this.dataButtons.commonFuns})),i.createElement("div",{className:"area"},i.createElement(d["default"],{datas:this.dataButtons.justifyLeft,clickTrigger:this.execCommand.bind(this,"justifyLeft"),commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.justifyCenter,clickTrigger:this.execCommand.bind(this,"justifyCenter"),commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.justifyRight,clickTrigger:this.execCommand.bind(this,"justifyRight"),commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.hr,clickTrigger:function(){e.insert("<hr color=#e9e9e9 size=1><br>")},commonFuns:this.dataButtons.commonFuns}),i.createElement(a["default"],{show:this.state.panelUrl,datas:this.dataButtons.link,clickTrigger:function(){e.setState({panelUrl:!e.state.panelUrl})},commonFuns:this.dataButtons.commonFuns}),i.createElement(d["default"],{datas:this.dataButtons.image,clickTrigger:this.props.getImages.bind(this,this.getImages.bind(this)),commonFuns:this.dataButtons.commonFuns})),i.createElement(s["default"],{show:this.state.panelColor,submitColor:function(t){e.execCommand("ForeColor",t)}}),i.createElement(c["default"],{show:this.state.panelUrl,getUrl:this.props.getUrl.bind(this),onSubmitUrl:function(t){e.insert(t)}}),i.createElement("div",{id:"tip",className:"ed-info-hide"})),i.createElement("div",{id:"textbox",className:"edit-body",style:n,ref:"editor",spellCheck:!1,onMouseUp:this.saveRange.bind(this),onKeyUp:this.saveRange.bind(this),contentEditable:!0,dangerouslySetInnerHTML:{__html:this.state.html},onInput:this.emitChange.bind(this)}))},t.propTypes={onChange:r.PropTypes.func.isRequired,getImages:r.PropTypes.func.isRequired,onPureText:r.PropTypes.func.isRequired,getUrl:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=l},165:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.render=function(){var e,t=this;return e=this.props.show?this.props.datas.downClass:this.props.datas.upClass,i.createElement("button",{className:"ed-button",onClick:this.props.clickTrigger,onMouseMove:function(e){t.props.commonFuns.showInfo(e,t.props.datas.info)},onMouseOut:this.props.commonFuns.hideInfo},i.createElement("i",{className:e}))},t.propTypes={datas:r.PropTypes.object.isRequired,commonFuns:r.PropTypes.object.isRequired,show:r.PropTypes.bool.isRequired,clickTrigger:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=s},166:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.render=function(){var e=this;return i.createElement("button",{className:"ed-button",onClick:this.props.clickTrigger,onMouseMove:function(t){e.props.commonFuns.showInfo(t,e.props.datas.info)},onMouseOut:this.props.commonFuns.hideInfo},i.createElement("i",{className:this.props.datas.upClass}))},t.propTypes={datas:r.PropTypes.object.isRequired,commonFuns:r.PropTypes.object.isRequired,clickTrigger:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=s},167:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=function(e){function t(t){e.call(this,t),this.defaultText="请输入链接区域的文字",this.defaultUrl="请输入URL链接地址",this.state={getUrl:""}}return n(t,e),t.prototype.onBlur=function(e,t){var o=e.currentTarget;""==o.value&&(o.value=t)},t.prototype.onFocus=function(e,t){var o=e.currentTarget;o.value==t&&(o.value="")},t.prototype.onSubmitUrl=function(){var e=document.getElementById("textArea").value,t=document.getElementById("urlArea").value;-1==t.indexOf("http://")&&(t="http://"+t);var o='<a href="'+t+'">'+e+"</a>";t==this.defaultUrl&&(t=""),this.props.onSubmitUrl(o)},t.prototype.getUrl=function(e){document.getElementById("urlArea").value=e},t.prototype.render=function(){var e=this;if(!this.props.show)return i.createElement("div",null);var t={margin:"0 0 0 6px"};return i.createElement("div",{className:"panel-url"},i.createElement("div",null,i.createElement("input",{id:"textArea",defaultValue:this.defaultText,className:"ed-input",onBlur:function(t){e.onBlur(t,e.defaultText)},onFocus:function(t){e.onFocus(t,e.defaultText)}}),i.createElement("button",{className:"ed-subButton",style:t,onClick:this.onSubmitUrl.bind(this)},"插入")),i.createElement("div",null,i.createElement("input",{id:"urlArea",defaultValue:this.defaultUrl,className:"ed-input",onBlur:function(t){e.onBlur(t,e.defaultUrl)},onFocus:function(t){e.onFocus(t,e.defaultUrl)}})))},t.propTypes={show:r.PropTypes.bool.isRequired,onSubmitUrl:r.PropTypes.func.isRequired,getUrl:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=s},168:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=function(e){function t(t){e.call(this,t)}return n(t,e),t.prototype.render=function(){var e=this,t={color:this.props.color,background:this.props.color};return i.createElement("button",{style:t,className:"ed-button ed-item-color",onClick:function(){e.props.submitColor(e.props.color)}})},t.propTypes={color:r.PropTypes.string.isRequired,submitColor:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=s},169:function(e,t,o){"";var n=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},i=o(7),r=o(7),s=o(168),a=function(e){function t(t){e.call(this,t),this.colors=["#c00000","#ff0000","#ffc000","#ffff00","#92d050","#00b050","#00b0f0","#0070c0","#002060","#7030a0","#000000"]}return n(t,e),t.prototype.render=function(){var e=this;return this.props.show?i.createElement("div",{className:"ed-panel-color"},this.colors.map(function(t,o){return i.createElement(s["default"],{key:"itemcolor"+o,color:t,submitColor:e.props.submitColor})})):i.createElement("div",null)},t.propTypes={show:r.PropTypes.bool.isRequired,submitColor:r.PropTypes.func.isRequired},t}(i.Component);t.__esModule=!0,t["default"]=a}});