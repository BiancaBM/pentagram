"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Login = React.createClass({

	render: function() {
		var style = {
			color: 'blue',
			fontSize: 15,
			backgroundColor: '#F6F3F3',
			width: 300,
			paddingTop: 10,
			paddingBottom: 20,
			paddingLeft: 20,
			paddingRight: 20, 
			borderRadius: 10
			
			//backgroundImage: 'url(./img/abc.jpeg)'
		};
		
		return (
			<div className="LoginForm" style={style} align="center">
				<h1>Login</h1>
				<form>
					Username:<br />
					<input type="text" name = "userName"/> <br />
					Password:<br />
					<input type="password" name = "password"/> <br />
					<input type="Submit" value="Login"/>
				</form>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Login;