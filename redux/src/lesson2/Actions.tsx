import fetch from 'isomorphic-fetch'
//选择要显示的 reddit 新闻网站
export const SELECT_REDDIT = 'SELECT_REDDIT';
export function selectReddit(reddit){
    return {
        type: SELECT_REDDIT,
        reddit,
    }
}
//选择要刷新的
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';
export function invalidateReddit(reddit){
    return {
        type: INVALIDATE_REDDIT,
        reddit
    }
}
//请求消息
export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(reddit){
    return{
        type:REQUEST_POSTS,
        reddit
    }
}
//收到请求
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(reddit,json){
    return{
        type:RECEIVE_POSTS,
        reddit,
        posts:json.data.map(child=>child.data),
        receivedAt:Date.now()
    }
}
// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(reddit){

    return{
        type:RECEIVE_POSTS,
        reddit,
        posts:{},
        receivedAt:Date.now()
    }

    return function (dispatch){
        dispatch(requestPosts(reddit));
        return fetch(`http://www.reddit.com/r/${reddit}.json`)
            .then(response=>response.json())
            .then(json=>
                // 可以多次 dispatch！
                // 这里，使用 API 请求结果来更新应用的 state。
                dispatch(receivePosts(reddit, json))
            )
    }
}