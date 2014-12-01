Projects = new Mongo.Collection('projects');

Meteor.methods({
	projectInsert: function(projectAttributes) {
		check(Meteor.userId(), String);
		check(projectAttributes, {
			name: String
		});
		var user = Meteor.user();
		var project = _.extend(_.pick(projectAttributes, 'name'), {
			authorId: user._id,
			author: user._id, //Needs to be changed to username
			created: new Date(),
			members:[user._id], //Needs to be changed to username
			admins:[user._id] //Needs to be changed to username
		});
		var projectId = Projects.insert(project);
		Meteor.call('addProjectToUser', {projectId: projectId, userId: user._id});

		return {
			_id: projectId
		};
	}
});