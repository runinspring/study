import * as React from 'react';
import {PropTypes} from 'react';
import ImageItem from './ImageItem';
export default class ImagePanel extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel')
        this.state = {
            urls: this.props.imageUrls
        }
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        onClosePanel: PropTypes.func.isRequired,
        submitImage: PropTypes.func.isRequired,
        imageUrls: PropTypes.array.isRequired,
        getImages: PropTypes.func.isRequired,
        deleteImage: PropTypes.func.isRequired
    }

    /**
     * 在组件被加载时调用
     */
    public componentDidMount():void {
        console.log('componentDidMount')
    }

    private deleteImg(idx):void {
        console.log('delete:', idx)
        //var urls = this.state.urls;
        //var url1 = urls.slice(0,idx);
        //var url2 = urls.slice(idx+1);
        //var newurl = url1.concat(url2)
        //this.setState({urls:newurl});
    }

    render() {

        var self = this;
        var urls = this.props.imageUrls;
        //var getItems = function(item)
        console.log('item数量:', urls.length)
        var numItem = urls.length;
        var hei = (4 + Math.floor(numItem / 5 + 1) * 63) + 'px';
        var stylePanel = {height: hei}

        //console.log('hei:',hei)
        var getItems = urls.map((item, idx)=> {
            return <ImageItem idx={idx} key={'item'+idx} url={item} submitImage={this.props.submitImage}
                              deleteImage={(idx)=>{self.props.deleteImage(idx)}}/>
        })
        return (<div style={stylePanel} className="imgPanel">
            <div className="body-area">
                <div className="button-group">
                    <div className="button-block">
                        <button className="subButton" onClick={this.props.getImages}>上传图片</button>
                    </div>
                    <div className="button-block">
                        <button className="subButton">网络图片</button>
                    </div>
                </div>
                <div/>
                {getItems}
            </div>
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