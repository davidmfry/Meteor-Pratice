Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function(){
    this.render("postList");
}, {name: "postList"});