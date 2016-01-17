import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditorDemo from './EditorDemo'
//import * as config from './config'

//var config = require('../config/config');
//config.init();
class Main extends React.Component<any,any> {
    constructor(props){
        super(props);
        console.log('main.init');
        //console.log(config.language)
        //console.log(110, global['$locale_strings'])
        //console.log(111,ti(0))
    }
    render(){
        return(
            <div>
                <EditorDemo/>
            </div>
        )
    }
}
var dom = ReactDOM;
dom.render(<Main/>, document.getElementById('app'));