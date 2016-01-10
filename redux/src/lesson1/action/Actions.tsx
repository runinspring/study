/*
 * action 类型
 */
export const ADD_TODO = 'add_todo';
export const COMPLETE_TODO = 'complete_todo';
export const SET_VISIBILITY_FILTER = 'set_visibility_filter'
/*
 * 其它的常量
 */
export const VisibilityFilters = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}
/*
 * action 创建函数
 */
export function addTodo(text){
    return {type:ADD_TODO,text}
}
export function completeTodo(index){
    return {type:COMPLETE_TODO,index}
}
export function setVisibilityFilter(filter){
    return {type:SET_VISIBILITY_FILTER,filter}
}