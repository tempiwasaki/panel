define(["app"], function(App) {

	App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

		Entities.AnswerModel = Backbone.Model.extend({
		});

		Entities.AnswerCollection = Backbone.Collection.extend({
			model: Entities.AnswerModel
		});
	});
});

