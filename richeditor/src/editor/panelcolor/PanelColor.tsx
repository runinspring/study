import * as React from 'react';
import {PropTypes} from 'react';
import ItemColor from './ItemColor';
export default class PanelColor extends React.Component<any,any> {
    constructor(props) {
        super(props)
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        show:PropTypes.bool.isRequired,
        submitColor:PropTypes.func.isRequired
    }
    private colors=['#ff0000','#0000ff','#fa800a','#00ff18','#ff00ff','#ffff00','#000000']

    render() {
        var self = this;
        if(!this.props.show){
            return (<div/>)
        }
        //var top = {margin:'4px'};
        return (<div className="panel-color">
            {this.colors.map((item,idx)=>{
                return <ItemColor key={'itemcolor'+idx} color={item} submitColor={self.props.submitColor}/>
                })}
        </div>)
    }
}