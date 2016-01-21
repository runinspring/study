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
        upClass: PropTypes.string.isRequired,
        downClass: PropTypes.string.isRequired,
        show:PropTypes.bool.isRequired,
        clickTrigger: PropTypes.func.isRequired
    }

    render() {
        var className:string;
        //console.log(121,this.props.showPanel)
        if(!this.props.show){
            className = this.props.upClass;
        }else{
            className = this.props.downClass;
        }
        //console.log(122,className)
        return (
            <button className="button" onClick={this.props.clickTrigger}>
                <i className={className}></i>
            </button>)
    }
}