import * as React from 'react';
import RichEditor from './component/RichEditor'
export default class EditorDemo extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {
            content:'测试文字',
        }
    }
    private testUrls:string[]=[
        'http://img.popoho.com/UploadPic/2011-11/20111123112429518.jpg'
    ]
    //'http://img.popoho.com/UploadPic/2011-10/20111024132221149.jpg'
    //'http://img.popoho.com/UploadPic/2011-12/201112149542404.jpg',
    //'http://img.popoho.com/UploadPic/2011-12/201112149545717.jpg',
    //'http://img.popoho.com/UploadPic/2011-10/20111024132220990.jpg',
    //'http://img.wdjimg.com/mms/screenshot/1/14/10c85b45abcfc2948f330e62515a9141_533_320.jpeg',
    //'http://img.popoho.com/UploadPic/2011-7/20117141153227.jpg'
    /**通过回调方法把图片url发给编辑器*/
    private getImages(callBack:Function):void{
        callBack(this.testUrls);
    }
    render(){
        var self = this;
        return(
            <div className="edit">
                <RichEditor content="测试文字测试文字" getImages={this.getImages.bind(this)} onChange={(e)=>{console.log(e.target.value)}}/>
            </div>
        )
    }
}
