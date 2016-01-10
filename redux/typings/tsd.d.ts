/// <reference path="history/history.d.ts" />
/// <reference path="react-router/history.d.ts" />
/// <reference path="es6-promise/es6-promise.d.ts" />
/// <reference path="whatwg-fetch/whatwg-fetch.d.ts" />
/// <reference path="redux-thunk/redux-thunk.d.ts" />
/// <reference path="redux/redux.d.ts" />
/// <reference path="redux-logger/redux-logger.d.ts" />

declare module 'isomorphic-fetch' {
    export default function fetch(url:string, init?:any):Promise<Response>;
}