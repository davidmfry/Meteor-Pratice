Template.postSubmit.events({
    'submit form': function(event) {
        event.preventDefault();

        // create the new post object from the user input
        var post = {
            url: $(event.target).find('[name=url]').val(),
            title:$(event.target).find('[name=title]').val(),
            message: $(event.target).find('[name=message]').val()
        };
        // Add the post object to the Database
        Meteor.call('post', post, function(error, id) {
            if (error)
                return alert(error.reason);
            Router.go('postPage', {_id: id});
        });
    }

});