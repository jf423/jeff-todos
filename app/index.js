import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
	render() {
		return (
			<div>Hello Word</div>
		);
	}
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
