import React, { Component } from 'react';
import {TodoItem} from '../app/TodoItem';

export class TodoList extends Component{
	constructor(props,context){
		super(props,context);
	}
	componentDidMount() {

	}
	componentWillUnMount() {
	}
	
	render() {
		var displayItems = this.props.items.map(function(items) {
            return (<TodoItem handleDelete={this.props.handleDelete} key={items.id}>{items.text}</TodoItem>);
        });
		return (
			<div className="text-left">
				<ul>
					{displayItems}
				</ul>
			</div>
		);
		 // var createItem = function(items) {
		 //      return <TodoItem handleDelete={this.props.handleDelete} key={items.id}>{items.text}</TodoItem>;
		 //    };
		 //    return <ul>{this.props.items.map(createItem)}</ul>;
	}
}