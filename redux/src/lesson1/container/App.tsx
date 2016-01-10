import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../action/Actions';
var assign = require('object-assign');
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {Component, PropTypes} from 'react';
class App extends Component <any,any>{
    constructor(){
        super();
    }
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes={
        visibleTodos: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })),
        visibilityFilter: PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    }

    render(){
        // 通过调用 connect() 注入:
        //console.log('render.this.props:',this.props)
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        console.log('render.visibleTodos:',visibleTodos)
        return(
            <div>
                <AddTodo onAddClick={(text)=>{
                console.log('add todo:',text);
                dispatch(addTodo(text));
                }}/>
                <TodoList todos={visibleTodos}
                onTodoClick={(index)=>{
                dispatch(completeTodo(index))
                }}/>
                <Footer filter={'SHOW_ALL'} onFilterChange={(nextFilter)=>{
                console.log('filter change',nextFilter);
                dispatch(setVisibilityFilter(nextFilter))
                }} />
            </div>
        )
    }
}
function selectTodos(todos, filter) {
    //console.log('selectTodos',todos.filter());
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            //return todos.filter(todo => todo.completed);
            return todos.map(todo => {return assign({},todo,{completed:true})});
        case VisibilityFilters.SHOW_ACTIVE:
            //return todos.filter(todo => !todo.completed);
            return todos.map(todo => {return assign({},todo,{completed:false})});
    }
}
// 基于全局 state ，哪些是我们想注入的 props ?
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}
//console.log(123123,'connect',select)
export default connect(select)(App);
