/**
 * Created by runinspring@gmail.com on 2016/1/5.
 */
//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import RichEditor from './editor/RichEditor';
//import Router from './core/Router';
class Main2 extends React.Component {
	constructor(){
		super();
	}
	getImages(callBack:Function){
		callBack(['http://img.popoho.com/UploadPic/2011-11/20111123112429518.jpg']);
	}
	getUrl(callBack:Function){
		callBack('http://baidu.com');
	}
	render(){
		return (
				<div>
					<RichEditor content="测试文字测试文字" getImages={this.getImages.bind(this)} getUrl={this.getUrl.bind(this)} onChange={(e)=>{console.log(e.target.value)}}/>
				</div>
		);
	}
}
ReactDOM.render(<Main2/>, document.getElementById('app'));