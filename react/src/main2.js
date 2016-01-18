import React from 'react';
import ReactDOM from 'react-dom';

class main2 extends React.Component{
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
            12312
            </div>
        )
    }
}
ReactDOM.render(<main2/>, document.getElementById('app'));
