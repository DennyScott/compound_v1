var closeSideMenu = function(){
	slideItems = $('#content, #overlay');
		slideItems.addClass('slide-closed');
		$('#overlay').css('z-index', -1);
		$("ul.off-nav li").removeClass('li-fade-in');
		document.getElementById('content').addEventListener('touchstart', function(event){});
}

Template.loggedIn.events({
	'click #menu-icon': function() {
		console.log('here');
		var slideItems = $('#content, #overlay');
		slideItems.removeClass('slide-closed');
		slideItems.addClass('slide-open menu-open');
		$('#overlay').css('z-index', '1');
		$("ul.off-nav li").addClass('li-fade-in');
	},

	'click #overlay': closeSideMenu,
	'click #close': closeSideMenu
});