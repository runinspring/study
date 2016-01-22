import React from 'react';
import ReactDOM from 'react-dom';
import RichEditor from '../../libs/editor/RichEditor';
//import Router from './core/Router';
export default class Demo extends React.Component {
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