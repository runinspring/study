import * as React from 'react';
import {Component, PropTypes} from 'react';
export default class Todo extends React.Component<any,any>{
    constructor(props){
        super(props);
        //console.log('initTodo',props);
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes={
        onClick: PropTypes.func.isRequired,
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    }
    render(){
        console.log('Todo',this.props)
        return(
            <li onClick={this.props.onClick}
                style={{
                textDecoration:this.props.completed?'line-through':'none',
                cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }
}