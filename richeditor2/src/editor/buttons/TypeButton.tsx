import * as React from 'react';
import {PropTypes} from 'react';
/**
 * 有长期按下状态的按钮，
 */
export default class TypeButton extends React.Component<any,any> {
    constructor(props) {
        super(props)
        //console.log('urlPanel',this.props.idx)
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        datas:PropTypes.object.isRequired,
        commonFuns:PropTypes.object.isRequired,
        show:PropTypes.bool.isRequired,
        clickTrigger: PropTypes.func.isRequired
    }

    render() {
        var self = this;
        var className:string;
        //console.log(121,this.props.showPanel)
        //if(!this.props.show){
        //    className = this.props.upClass;
        //}else{
        //    className = this.props.downClass;
        //}
        if(!this.props.show){
            className = this.props.datas.upClass;
        }else{
            className = this.props.datas.downClass;
        }
        //console.log(122,className)
        return (
            <button className="ed-button" onClick={this.props.clickTrigger}
                    onMouseMove={(e)=>{self.props.commonFuns.showInfo(e,self.props.datas.info)}}
                    onMouseOut ={this.props.commonFuns.hideInfo}>
                <i className={className}></i>
            </button>)
    }
}