Meteor.methods({
	addProjectToUser: function(projectAttributes) {
		check(projectAttributes, {
			projectId: String,
			userId: String
		});
		var user = Meteor.users.findOne(projectAttributes.userId);

		Meteor.users.update(projectAttributes.userId, {
			$addToSet: {
				profile: {
					projects: projectAttributes.projectId
				}
			}
		});

		console.log(user.profile);
	}
});