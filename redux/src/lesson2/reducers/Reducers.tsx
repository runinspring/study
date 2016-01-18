import {combineReducers} from 'redux';
var assign = require('object-assign');
import {
    SELECT_REDDIT,INVALIDATE_REDDIT,
    REQUEST_POSTS,RECEIVE_POSTS
} from '../Actions'
function selectedReddit(state,action){
    if(state === undefined){
        state = 'reactjs';
    }
//function selectedReddit(state='reactjs',action){
    switch (action.type){
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
}


function posts(state,action){
    if(state === undefined){
        state = {
            ifFecthing:false,
            didInvalidate:false,
            items:[]
        }
    }
//function posts(state={
//    ifFecthing:false,
//    didInvalidate:false,
//    items:[]
//},action){
    switch (action.type){
        case INVALIDATE_REDDIT:
            return assign({},state,{
                didInvalidate:true
            })
        case RECEIVE_POSTS:
            return assign({},state,{
                isFecching:true,
                didInvalidate:false
            })
        case RECEIVE_POSTS:
            return assign({},state,{
                isFecching:true,
                didInvalidate:false,
                items:action.posts,
                lastUpdated:action.receivedAt
            })
        default:
            return state;
    }
}
function postsByReddit(state,action){
    if(state === undefined){
        state={}
    }
    switch (action.type){
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return assign({},state,{
                [action.reddit]:posts(state[action.reddit],action)
            })
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit
})

export default rootReducer;