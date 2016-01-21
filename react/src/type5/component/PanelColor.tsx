import * as React from 'react';
import {PropTypes} from 'react';
export default class PanelColor extends React.Component<any,any> {
    constructor(props) {
        super(props)
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        show:PropTypes.bool.isRequired
    }
    render() {
        var self = this;
        if(!this.props.show){
            return (<div/>)
        }
        //var top = {margin:'4px'};
        return (<div className="panel-color">
        </div>)
    }
}