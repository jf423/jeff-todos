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
				<li key={this.props.key}>
					{this.props.children}
				</li>
			</div>
		);
	}
}