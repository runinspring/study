import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './container/App';

import {Component, PropTypes} from 'react';
import { Provider } from 'react-redux'
//import todoApp from './reducer/Reducers'
import { createStore } from 'redux'
import todoApp from './reducer/Reducers'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './action/Actions';
let store = createStore(todoApp)

export default class Index extends Component <any,any>{
    constructor(){
        super();
        console.log('---------init---------');
        //console.log(111,store.getState())
        // 监听 state 更新时，打印日志
        //let unsubscribe = store.subscribe(()=>{console.log(12132123,store.getState())})
        //store.dispatch(addTodo('learn about actions'))
        //store.dispatch(addTodo('Learn about reducers'));
        //store.dispatch(addTodo('Learn about store'));
        //store.dispatch(completeTodo(0));
        //console.log(112,store.getState())

    }
    //private store = createStore(todoApp);
    render(){
        //console.log('render1');
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
var dom = ReactDOM;
dom.render(<Index/>, document.getElementById('app'));