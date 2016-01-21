import * as React from 'react';
import {PropTypes} from 'react';
export default class ImageItem extends React.Component<any,any> {
    constructor(props) {
        super(props)

        //console.log('urlPanel',this.props.idx)
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        idx: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        deleteImage:PropTypes.func.isRequired,
        submitImage:PropTypes.func.isRequired
    }

    render() {
        var self = this;
        //console.log(styleItem)
        return (
            <div className="ImageItem">
                <div className="imagebody">
                    <image className="image" src={this.props.url}/>
                </div>
                <button className="imgButton" onClick={()=>{self.props.submitImage(self.props.url)}}><a>插入</a></button>
                <button className="imgButton" onClick={()=>{self.props.deleteImage(self.props.idx)}}><a>删除</a></button>
        </div>)
    }
}