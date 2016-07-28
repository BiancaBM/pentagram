"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
			<div className="container-fluid">
				<ul className="nav navbar-nav">
					<li><Link to="app">Home</Link></li>
					<li><Link to="register">Register</Link></li>
					<li><Link to="photo">Photo</Link></li>
				</ul>
				<span className="navbar-right">
					<img className="logo" src={'/img/logo.jpg'}/>PENTAGRAM</span>
			</div>
        </nav>
		);
	}
});

module.exports = Header;
