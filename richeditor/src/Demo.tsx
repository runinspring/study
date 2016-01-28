import * as React from 'react';
import RichEditor from './editor/RichEditor'
export default class Demo extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {
            test:true
        }
        //document.onkeydown = function(e){
        //   console.log(121,e.keyCode)
        //}
    }
    componentDidMount() {
        var rd =  document.getElementById('rd');
        //console.log(12312,rd)
        rd.style.position = 'absolute'
        rd.style.left = 0 + 'px';
        rd.style.top = 10 + 'px';

    }

    //'http://img.popoho.com/UploadPic/2011-10/20111024132221149.jpg'
    //'http://img.popoho.com/UploadPic/2011-12/201112149542404.jpg',
    //'http://img.popoho.com/UploadPic/2011-12/201112149545717.jpg',
    //'http://img.popoho.com/UploadPic/2011-10/20111024132220990.jpg',
    //'http://img.wdjimg.com/mms/screenshot/1/14/10c85b45abcfc2948f330e62515a9141_533_320.jpeg',
    //'http://img.popoho.com/UploadPic/2011-7/20117141153227.jpg'
    /**通过回调方法把图片url发给编辑器*/
    private getImages(callBack:Function):void{
        callBack(['http://img.popoho.com/UploadPic/2011-11/20111123112429518.jpg']);
    }
    private getUrl(callBack:Function):void{
        callBack('http://baidu.com');
    }
    private changeTest():void{
        this.setState({'test':!this.state.test})
    }
    private outPut(e):void{
        console.log('html:',e.target.value)
    }
    private pureText(e):void{
        console.log('pure:',e.target.value)
    }
    render(){
        var self = this;
        //if(this.state.test){
        //    return(
        //        <div>
        //            <button onClick={this.changeTest.bind(this)}>test</button>
        //        </div>
        //    )
        //}
        return(
            <div id='rd'>
                <RichEditor content="测试文字测试文字" height={560} width={350} border={false}
                            offset={false}
                            getImages={this.getImages.bind(this)}
                            getUrl={this.getUrl.bind(this)}
                            onChange={this.outPut.bind(this)}
                            onPureText={this.pureText.bind(this)}
                />
            </div>
        )
    }
}
