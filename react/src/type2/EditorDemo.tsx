import * as React from 'react';
import RichEditor from './component/RichEditor'
export default class EditorDemo extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {
            content:'测试文字'
        }
    }
    render(){
        var self = this;
        return(
            <div className="edit">
                <RichEditor content="测试文字测试文字" onChange={(e)=>{console.log(e.target.value)}}/>
            </div>
        )
    }
}
