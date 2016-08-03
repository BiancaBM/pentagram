"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	getInitialState: function(){
			return {
				userName: ''
			};
	}
	, logOut: function(){
		sessionStorage.removeItem('authToken');
		sessionStorage.removeItem('user_id');
		sessionStorage.removeItem('username');
		sessionStorage.removeItem('photoPageReloaded');
	}
	, render: function() {
		var self = this;
		return (
        <nav className="navbar navbar-default">
			<div className="container-fluid">
				<ul className="nav navbar-nav">
					{sessionStorage.getItem('authToken') == null ? <li><Link to="app">Login</Link></li> : ''}
					{sessionStorage.getItem('authToken') == null ? <li><Link to="register">Register</Link></li> : ''}

					<li><Link to="photo">Photo</Link></li>
					{sessionStorage.getItem('authToken') != null ? <li><Link to="app" onClick={self.logOut}>Log Out</Link></li> : ''}
				</ul>
				<span className="navbar-right">
					<img className="logo" src={'/img/logo.jpg'}/>PENTAGRAM</span>
			</div>
        </nav>
		);
	}
});

module.exports = Header;
