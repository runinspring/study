import * as React from 'react';
import {PropTypes} from 'react';
export default class ItemColor extends React.Component<any,any> {
    constructor(props) {
        super(props)
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        color:PropTypes.string.isRequired,
        submitColor:PropTypes.func.isRequired
    }


    render() {
        var self = this;
        var style={
            color:this.props.color,
            background:this.props.color
        }
        //console.log(123,this.props.color)
        return (<button style={style} className="ed-button ed-item-color" onClick={()=>{
        //console.log(self.props.color)
        self.props.submitColor(self.props.color)
        }}>
        </button>)
    }
}