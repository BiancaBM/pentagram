"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Photo = React.createClass({
	getInitialState: function(){
			return {
				images: [{
					"id": 1,
					"user": 2,
					"photo": "/media/photo/user_abc/50a03710-4d91-11e6-a049-382c4a1ed3da_images.jpg"
				}],
				loggedUsername: ''
			};
	},

	componentWillMount: function() {
		var self = this;
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/photos/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(data) {
            self.setState({images: data});
		});
		
		$.ajax({
			url: 'http://127.0.0.1:8000/api/v1/users/'
			, type: 'GET'
			, error: function(xhr, textStatus, errorThrown) {

			}
		}).then(function(userData) {
			function findUser(usr) {
				return usr.id === parseInt(sessionStorage.getItem('user_id'));
			}
			var user = userData.find(findUser);
			self.setState({loggedUsername: user.username});
			});
	}

	, onButtonHandler: function(event) {


	}
	, render: function() {
		var self = this;
		return (
		<div>
			{sessionStorage.getItem('authToken') != null ? <span className="userLogedLabel">Hello {self.state.loggedUsername}</span> : ''}
			
		<div className="container">
				<div className="row">
					{self.state.images.map(function (item) {
						return (
						<div className="col-md-4 image-frame" key={item.id} >
							<a href={'#/photo/' + item.id}>
								<img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id} data-id={item.id} width="100%" height="100%"/>
							</a>
						</div>
						);
					})}
					</div>
				<button type="button" className="btn btn-primary btn-lg round-btn">+</button>
			</div>
		</div>);
	}
});

module.exports = Photo;
