import * as React from 'react';
import {PropTypes} from 'react';
/**
 * 有弹出面板功能的按钮，有长期按下的状态
 */
export default class PanelButton extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel',this.props.idx)
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        downType: PropTypes.bool.isRequired,
        setClass: PropTypes.string.isRequired,
        clickTrigger: PropTypes.func.isRequired
    }

    render() {
        var self = this;
        //console.log(styleItem)
        var style={}
        if(this.props.downType){
            style = {
                "background": "#FFFFFF",
                "border":"1px solid #999999"
            }
        }
        return (
            <button style={style} className="button" onClick={this.props.clickTrigger}>
                <i className={this.props.setClass}></i>
            </button>)
    }
}