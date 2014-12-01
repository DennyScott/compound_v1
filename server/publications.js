Meteor.publish('projects', function() {
  return Projects.find();
});

Meteor.publish('userProjects', function() {
	if(Meteor.user()) return Meteor.user().projects;
});