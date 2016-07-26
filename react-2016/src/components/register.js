"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Register = React.createClass({

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
			//backgroundImage: 'url(./img/abc.jpeg)',
			//width: '30%'
		};
		
		return (
			<div className="RegisterForm" style={style} >
				<h1>Register</h1>
				<form>
					Name:<br />
					<input type="text" name = "name"/> <br />
					Surname:<br />
					<input type="text" name = "surName"/> <br />
					Username:<br />
					<input type="text" name = "userName"/> <br />
					Password:<br />
					<input type="password" name = "password"/> <br />
					Email:<br />
					<input type="email" name = "email"/> <br />
					<br />
					<input type="Submit" value="Register" />
				</form>
			</div>
		);
	}
});

module.exports = Register;