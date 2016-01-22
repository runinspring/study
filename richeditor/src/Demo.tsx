import * as React from 'react';
import RichEditor from './editor/RichEditor'
export default class Demo extends React.Component<any,any> {
    constructor(props){
        super(props);
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
    render(){
        var self = this;
        return(
            <div>
                <RichEditor content="测试文字测试文字" height={560} width={350} border={false} getImages={this.getImages.bind(this)} getUrl={this.getUrl.bind(this)} onChange={(e)=>{console.log(e.target.value)}}/>
            </div>
        )
    }
}