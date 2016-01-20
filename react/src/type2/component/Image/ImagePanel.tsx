import * as React from 'react';
import {PropTypes} from 'react';
import ImageItem from './ImageItem';
export default class ImagePanel extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel')
        this.state = {
            urls:[
                'http://img.popoho.com/UploadPic/2011-11/20111123112429518.jpg',
                'http://img.popoho.com/UploadPic/2011-10/20111024132221149.jpg',
                'http://img.popoho.com/UploadPic/2011-12/201112149542404.jpg',
                'http://img.popoho.com/UploadPic/2011-12/201112149545717.jpg',
                'http://img.popoho.com/UploadPic/2011-10/20111024132220990.jpg',
                'http://img.wdjimg.com/mms/screenshot/1/14/10c85b45abcfc2948f330e62515a9141_533_320.jpeg',
                'http://img.popoho.com/UploadPic/2011-7/20117141153227.jpg'
        }
    }


    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onClosePanel: PropTypes.func.isRequired,
        submitImage:PropTypes.func.isRequired

    }
    private deleteImg(idx):void{
        console.log('delete:',idx)
        var urls = this.state.urls;
        //console.log(111,urls.length)
        var url1 = urls.slice(0,idx);
        var url2 = urls.slice(idx+1);
        var newurl = url1.concat(url2)
        //console.log(222,url1.length,url2.length,newurl.length);

        //console.log(11,urls.length);
        //urls.slice(idx,1);
        //console.log(22,urls.length);
        this.setState({urls:newurl})
    }

    render() {
        var self = this;
        //var getItems = function(item)
        //console.log('item数量:',this.state.urls.length)
        var numItem = this.state.urls.length;
        var hei = (4+Math.floor(numItem/5+1)*63)+'px';
        var stylePanel={height:hei}

        //console.log('hei:',hei)
        var getItems = this.state.urls.map((item,idx)=>{
            return <ImageItem idx={idx} key={'item'+idx} url={item} submitImage={this.props.submitImage} deleteImage={(idx)=>{self.deleteImg(idx)}}/>
        })
        return (<div style={stylePanel} className="imgPanel">
            <div className="button-group">
                <div className="button-block">
                    <button className="subButton">上传图片</button>
                </div>
                <div className="button-block">
                    <button className="subButton" >网络图片</button>
                </div>
            </div>
            <div/>
            {getItems}
        </div>)
    }
}
//<div className="button-group">
//    <div className="button-group">
//        <button className="subButton">上传图片</button>
//    </div>
//    <div className="button-group ">
//        <button className="subButton">网络图片</button>
//    </div>
//</div>
//
//<button className="subButton">网络图片222</button>