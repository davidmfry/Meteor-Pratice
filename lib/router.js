Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', function(){
    this.render("postList");
}, {name: "postList"});

Router.route('/posts/:_id', function () {
    this.render("postPage", {
        data: function () {
            return Posts.findOne({_id: this.params._id});
        }
    });
}, {name: "postPage"});

Router.route('/submit', function() {
    this.render('postSubmit');
}, {name:"postSubmit"});


//
var requireLogin = function(pause) {
    if (! Meteor.user())
    {
        this.render('accessDenied');
        pause();
    }
    else
    {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
