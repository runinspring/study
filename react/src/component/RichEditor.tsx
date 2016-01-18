import * as React from 'react';
import {PropTypes} from 'react';
export default class RichEditor extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            html: this.props.content
        }
    }

    private emitChange() {
        //console.log(this)
        var editor = this.refs['editor'];
        var newHtml = editor['innerHTML'];
        //console.log(newHtml)
        this.props.onChange({target: {value: newHtml}})
    }

    private execCommand(command, arg):void {
        document.execCommand(command, false, arg);
    }

    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes = {
        content: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <div>
                    <div className="btn-group drop-down">
                        <button>
                            <i className="fa fa-paragraph"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'P')}>
                                    Paragraph
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;"
                                   onClick={this.execCommand.bind(this, 'formatBlock', 'BLOCKQUOTE')}>
                                    Block Quote
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H1')}>
                                    Header 1
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H2')}>
                                    Header 2
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H3')}>
                                    Header 3
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H4')}>
                                    Header 4
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H5')}>
                                    Header 5
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'formatBlock', 'H6')}>
                                    Header 6
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="btn-group drop-down">
                            <button>
                                <i className="fa fa-text-height"></i>
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <ul>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 1)}>fontSize 1</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 2)}>fontSize 2</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 3)}>fontSize 3</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 4)}>fontSize 4</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 5)}>fontSize 5</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 6)}>fontSize 6</a>
                                </li>
                                <li>
                                    <a href="javascript:;" onClick={this.execCommand.bind(this, 'fontSize', 7)}>fontSize 7</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="btn-group">
                        <button onClick={this.execCommand.bind(this, 'bold')}>
                            <i className="fa fa-bold"></i>
                        </button>
                        <button onClick={this.execCommand.bind(this, 'italic')}>
                            <i className="fa fa-italic"></i>
                        </button>
                        <button onClick={this.execCommand.bind(this, 'underline')}>
                            <i className="fa fa-underline"></i>
                        </button>
                        <button onClick={this.execCommand.bind(this, 'strikeThrough')}>
                            <i className="fa fa-strikethrough"></i>
                        </button>
                        <button onClick={this.execCommand.bind(this, 'insertOrderedList')}>
                            <i className="fa fa-list-ol"></i>
                        </button>
                        <button onClick={this.execCommand.bind(this, 'insertUnorderedList')}>
                            <i className="fa fa-list-ul"></i>
                        </button>
                    </div>

                    <div className="btn-group drop-down">
                        <button>
                            <i className="fa fa-align-left"></i>
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <ul>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'justifyLeft')}>Align Left
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'justifyRight')}>
                                    Align Right
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'justifyCenter')}>
                                    Align Center
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onClick={this.execCommand.bind(this, 'justifyFull')}>
                                    Align Justify
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={this.execCommand.bind(this, 'removeFormat')}>
                        <i className="fa fa-eraser"></i>
                    </button>
                </div>

                < div
                    ref="editor"
                    contentEditable={true}
                    dangerouslySetInnerHTML={{__html: this.state.html}}
                    onInput={this.emitChange.bind(this)}/>
            </div >
        )
    }
}
