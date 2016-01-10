import * as React from 'react';
import {Component, PropTypes} from 'react';
import Todo from './Todo';
export default class TodoList extends Component<any,any>{
    constructor(props){
        super(props)
        //console.log('initTodoList',props)
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes={
        onTodoClick: PropTypes.func.isRequired,
        todos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })).isRequired
    }
    render(){
        return(
            <div>
                <ul>
                    <ul>
                        {this.props.todos.map((todo,index)=>{//console.log("map:",todo,index);
                            return <Todo {...todo} key={index} onClick={()=>{this.props.onTodoClick(index)}}/>
                            })}
                    </ul>
                </ul>
            </div>
        )
    }
}
