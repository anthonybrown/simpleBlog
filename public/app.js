/*jslint nomen: true, sloppy: true, regexp: true, vars: true */
/*global _: false, Backbone: false, $: false, console: false, postRouter: false */

var Post = new Backbone.Model.extend({});
var Posts = new Backbone.Collection.extend({
  model: Post,
  url: '/posts'
});

