/**
 * Created by runinspring@gmail.com on 2016/1/5.
 */
//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import Rerte from './components/index'
//import Router from './core/Router';
class Main2 extends React.Component {
	constructor(){
		super();
	}
	render(){
		return (
				<div>
					22223
					<Rerte></Rerte>
				</div>
		);
	}
}
ReactDOM.render(<Main2/>, document.getElementById('app'));