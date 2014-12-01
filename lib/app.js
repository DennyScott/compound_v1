Router.route('/', function () {
	this.layout('loggedIn');
    this.render('whiteboard');
});