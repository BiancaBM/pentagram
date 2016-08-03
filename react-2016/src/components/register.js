"use strict";

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;


var Register = React.createClass({
	getInitialState: function(){
			return {
				firstName: null
				, lastName: null
				, username: null
				, password: null
				, email: null
			};
		}
	, formSubmitHandler: function(event) {

		this.state = {
			firstName: document.getElementsByName("firstName")[0].value
			, lastName: document.getElementsByName("lastName")[0].value
			, username: document.getElementsByName("username")[0].value
			, password: document.getElementsByName("password")[0].value
			, email: document.getElementsByName("email")[0].value
		};
		event.preventDefault();
		console.log(this.state);
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/users/'
			, type: 'POST'
			, data: this.state
		}).then(function(data) {
			sessionStorage.setItem('authToken', data.token);
			Router.HashLocation.push('loginPage');

		});
	}
	, render: function() {
		return (
			<div className="RegisterForm well col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
				<h1>Register</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-3 control-label">First Name:</label>
						<div className="col-sm-9">
							<input type="text" className="form-control" name="firstName"/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-3 control-label">Last Name:</label>
						<div className="col-sm-9">
							<input type="text" className="form-control" name="lastName"/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-3 control-label">Username:</label>
						<div className="col-sm-9">
							<input type="text" className="form-control" name="username"/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-3 control-label">Password:</label>
						<div className="col-sm-9">
							<input type="password" className="form-control" name="password"/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-sm-3 control-label">Email:</label>
						<div className="col-sm-9">
							<input type="email" className="form-control" name="email"/>
						</div>
					</div>

					<button className="btn btn-default col-sm-offset-3 col-sm-9" name="submit" onClick={this.formSubmitHandler}>Register</button>
				</form>
			</div>
		);
	}
});

module.exports = Register;