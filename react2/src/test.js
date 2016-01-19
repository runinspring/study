import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import * as config from './config'

//var config = require('../config/config');
//config.init();
export default class test extends React.Component<any,any> {
	constructor(props){
		super(props);
		//console.log(config.language)
		//console.log(110, global['$locale_strings'])
		//console.log(111,ti(0))
	}
	render(){
		return(
			<div>
				test
			</div>
		)
	}
}
var dom = ReactDOM;
dom.render(<test/>, document.getElementById('app'));