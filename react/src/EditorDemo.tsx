import * as React from 'react';
import RichEditor from './component/RichEditor'
export default class EditorDemo extends React.Component<any,any> {
    constructor(props){
        super(props);
    }
    render(){
        var editorStyle = {
            overflow: 'auto',
            width: 300,
            height: 100,
            maxHeight: 100
        }
        console.log('editorStyle:',editorStyle)
        return(
            <div>
                <RichEditor sytle={editorStyle} content="测试文字" onChange={(e)=>{console.log(e.target.value)}}/>
            </div>
        )
    }
}
