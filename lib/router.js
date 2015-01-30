Router.configure({
    layoutTemplate: 'layout'
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