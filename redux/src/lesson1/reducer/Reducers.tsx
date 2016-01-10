import { combineReducers,Reducer } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action/Actions';
var assign = require('object-assign');
const { SHOW_ALL } = VisibilityFilters;

function todos(state,action){
    //console.log('todos:','state:',state,'action:',action);
    if (typeof state === 'undefined') {
        state = [];
    }
    console.log('action.type:',action.type);
    switch (action.type){
        case ADD_TODO:
            return [...state,{text:action.text,completed:false}];
        case COMPLETE_TODO:
            console.log('complete:',action.index);
            console.log('action.type:',action.type);
            return [
                ...state.slice(0,action.index),
                assign({},state[action.index],{completed:true}),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}
function visibilityFilter(state,action) {
    // console.log('visibilityFilter:','state:',state,'action:',action);
    if (typeof state === 'undefined') {
        return SHOW_ALL;
    }
    console.log('visibilityFilter:',action.type,action.filter,state);
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
const todoApp = combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;