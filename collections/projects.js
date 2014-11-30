Projects = new Mongo.Collection('projects');

Meteor.methods({
	projectInsert: function(projectAttributes) {
		check(Meteor.userId(), String);
		check(projectAttributes, {
			description: String
		});
		var user = Meteor.user();
		var project = _.extend(_.pick(projectAttributes, 'description'), {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		var projectId = Projects.insert(project);
		return {
			_id: projectId
		};
	}
});