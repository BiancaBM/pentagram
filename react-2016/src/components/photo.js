"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Photo = React.createClass({
	getInitialState: function(){
			return {
				images: [
					['/img/abc.jpg', ['com1', 'com2', 'com3'], 10],
					['/img/dog.jpg', ['com1', 'com2'], 5],
					['/img/flower.jpg', [], 8]
				]
			};

		}
	, onCommentHandler: function(event) {
		console.log('Comment button was pressed!');
	}
	, render: function() {
		return (
			<div className="container">
				<div className="row">
					{this.state.images.map(function (item, index) {
						return (
						<div className="col-md-4 image-frame">
							<a href="#">
								<img src={item[0]} id={'image-' + index} width="100%" height="100%"/>
							</a>
							<div className="footer-toolbar-image"></div>
							<div className="all-icons">
								<div className="comment-icon glyphicon glyphicon-comment"></div>
								<div className="like-icon glyphicon glyphicon-thumbs-up">{item[2]}</div>
							</div>
							<div className="well comment-panel">
								{item[1].map(function (comment, indexCom) {
								return (
									<div id={'comment-' + index + '-' + indexCom}>{comment}</div>
								);
							})}
							</div>
						</div>
						);
					})}
					</div>
				<button type="button" className="btn btn-primary btn-lg round-btn">+</button>
			</div>);
	}
});

module.exports = Photo;
