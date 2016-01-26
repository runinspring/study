import * as React from 'react';
import {PropTypes} from 'react';
/**
 * 有弹出面板功能的按钮，有长期按下的状态
 */
export default class SingleButton extends React.Component<any,any> {
    constructor(props) {
        super(props)
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        datas:PropTypes.object.isRequired,
        commonFuns:PropTypes.object.isRequired,
        clickTrigger: PropTypes.func.isRequired
    }

    render() {
        var self = this;
        //console.log(122,className)
        return (
            <button className="ed-button" onClick={this.props.clickTrigger}
                    onMouseMove={(e)=>{self.props.commonFuns.showInfo(e,self.props.datas.info)}}
                    onMouseOut ={this.props.commonFuns.hideInfo}>
                <i className={this.props.datas.upClass}></i>
            </button>)
    }
}