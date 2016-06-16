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
		// var displayItems = this.props.items.map(function(items) {
  //           return (<li key={items.id}>{items.data}</li>);
  //           // return (<TodoItem key={items.id}>{items.data}</TodoItem>);
  //       }); 
		// return (
		// 	<div>
		// 		<ul>
		// 			{displayItems}
		// 		</ul>
		// 	</div>
		// );
		 var createItem = function(items) {
		      return <li key={items.id}>{items.text}</li>;
		    };
		    return <ul>{this.props.items.map(createItem)}</ul>;
	}
}