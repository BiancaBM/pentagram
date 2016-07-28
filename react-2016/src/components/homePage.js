"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Learn about React & React Native</h1>
				<p>React, React Router</p>
			</div>
		);
	}
});

module.exports = Home;