import * as React from 'react';
import {Component, PropTypes} from 'react';
import * as ReactDOM from 'react-dom';
import reducer from './reducers/Reducers';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { selectReddit, fetchPosts } from './Actions'
export default class Index extends Component <any,any>{
    constructor(){
        super();
        let store = createStore(reducer);
        console.log(store.getState())
    }
    render(){
        //console.log(Actions.SELECT_REDDIT)
        return(
            <div>1212</div>
        )
    }
}
var dom = ReactDOM;
dom.render(<Index/>, document.getElementById('app'));