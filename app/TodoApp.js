import React, { Component } from 'react';
import {TodoList} from '../app/TodoList';

export class TodoApp extends Component{
	constructor(props,context){
		super(props,context);

		if (localStorage.todo) {
			var  storage = JSON.parse(localStorage.todo);
		}else{
			var  storage = [];
		}

		this.state = {
			text: '',
			items: storage
		};
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	componentDidMount() {

	}
	componentWillUnMount() {

	}
	handleDelete(e){
		e.preventDefault();
		console.log("delete");
	}
	handleSubmit(e){
		e.preventDefault();
	    var nextItems = this.state.items.concat([
	    {text: this.state.text, id: Date.now()}
	    ]);
	    localStorage["todo"] = JSON.stringify(nextItems);
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
			<div className="container text-center ">
				<h1>Jeff's TodoApp</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input className="form-control" onChange={this.onChange} value={this.state.text} />
					</div>
				</form>
				<TodoList handleDelete={this.handleDelete} items={this.state.items} />
			</div>
		);
	}
}

TodoApp.defaultProps = {

}