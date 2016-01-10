import * as React from 'react';
import {Component, PropTypes} from 'react';
export default class Footer extends Component<any,any>{
    /**使用该类的时候必须要写入的方法,可以通过 this.props 调用*/
    public static propTypes={
        onFilterChange: PropTypes.func.isRequired,
        filter:PropTypes.oneOf([
            'SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE'
        ]).isRequired
    }
    private renderFilter(filter,name){
        if(filter === this.props.filter){
            //console.log(111);
            return name;
        }
        return(
            <a href="#" onClick={(e)=>{
            e.preventDefault();
            this.props.onFilterChange(filter);
            }}>{name}</a>
        )
    }
    render(){
        return(
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL','All')}
                {' '}
                {this.renderFilter('SHOW_COMPLETED','Complete')}
                {' '}
                {this.renderFilter('SHOW_ACTIVE','Active')}
            </p>
        )
    }
}