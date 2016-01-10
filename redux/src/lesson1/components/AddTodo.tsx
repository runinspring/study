import * as React from 'react';
import {Component, PropTypes} from 'react';
import {findDOMNode} from  'react-dom';

export default class AddTodo extends React.Component<any,any>{
    private handleClick(e){
        var node = findDOMNode(this.refs['input']);
        var text = node['value'].trim();//trim去除两侧空格
        this.props.onAddClick(text);
        //this.propTypes
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes={
        onAddClick: PropTypes.func.isRequired
    }
    render(){
        return(
            <div>
                <input type="text" ref="input"/>
                <button onClick={(e)=>{this.handleClick(e)}}>Add</button>
            </div>
        )
    }
}