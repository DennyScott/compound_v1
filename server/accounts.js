Accounts.onCreateUser(function(options, user){
    user.projects = [];
    return user;
});