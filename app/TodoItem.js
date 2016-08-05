import React, { Component } from 'react';


export class TodoItem extends Component{
	constructor(props,context){
		super(props,context);


	}
	componentDidMount() {

	}
	componentWillUnMount() {
	}

	render() {
		return (
			<div>
				<h4>
				<li key={this.props.id}>
					{this.props.children}
					<a href='#' onClick={this.handleDelete}> delete</a>
				</li>
				</h4>
			</div>
		);
	}
}
