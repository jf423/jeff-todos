import React, { Component } from 'react';
import {TodoList} from '../app/TodoList';

export class TodoApp extends Component{
	constructor(props,context){
		super(props,context);

		this.state = {
			text: '',
			items: []
		};
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {

	}
	componentWillUnMount() {

	}
	handleSubmit(e){
		e.preventDefault();
	    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
	    var nextText = '';
	    this.setState({items: nextItems, text: nextText});
	}
	onChange(e){
		this.setState({
			text: e.target.value
		});
	}
	render() {
		return (
			<div>
				<h1>Jeff's TodoApp</h1>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
				</form>
				<TodoList items={this.state.items} />
			</div>
		);
	}
}

TodoApp.defaultProps = {

}