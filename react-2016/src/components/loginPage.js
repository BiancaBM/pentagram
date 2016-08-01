"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
	getInitialState: function(){
		return {
			username: null
			, password: null
		};
	}
	, userChangeHandler: function(event){
		this.setState({username: event.target.value});
	}
	, passwordChangeHandler: function(event){
		this.setState({password: event.target.value});
	}
	, formSubmitHandler: function(event) {
		event.preventDefault();
		console.log(this.state);
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/login/'
			, type: 'POST'
			, data: this.state
			// , error: function(response) {
			// 	console.log(response.responseText.JSON);
			// }
			, error: function(xhr, textStatus, errorThrown) {
					var json = JSON.parse(xhr.responseText);
					for (var prop in json) {
						alert(prop + "  " + json[prop]);
					}
			}
		}).then(function(data) {
			sessionStorage.setItem('authToken', data.token);
			Router.HashLocation.push('photo');
		});
	}
	, render: function() {
			return (
			<div className="LoginForm well col-xs-12 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
				<h1>Login</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label for="username" className="col-sm-3 control-label">Username:</label>
						<div className="col-sm-9">
							<input type="text" className="form-control" id="username" name="userName" placeholder="Your username" onChange={this.userChangeHandler}/>
						</div>
					</div>
					<div className="form-group">
						<label for="password" className="col-sm-3 control-label">Password:</label>
						<div className="col-sm-9">
							<input type="password" className="form-control" id="password" name="password" placeholder="Your password" onChange={this.passwordChangeHandler}/>
						</div>
					</div>

					<button className="btn btn-default col-sm-offset-3 col-sm-9" name="submit" onClick={this.formSubmitHandler}>Login</button>
				</form>
			</div>
		);
	}
});

module.exports = Login;