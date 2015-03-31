define(["app",
        "apps/AnswerArea/Controller"], function(App) {

	App.module("AnswerApp", function(AnswerApp, App, Backbone, Marionette, $, _) {

		var Router = Marionette.AppRouter.extend({
			appRoutes: {
				"quiz/:qid" : "show"
			}
		});

		AnswerApp.Controller = {

			show: function(qid) {
				App["_questionModel"] = new App.Entities.QuestionModel();
				AnswerApp.AnswerArea.Controller.show(qid);
			}
		}

		App.addInitializer(function() {
			new Router({
				controller: AnswerApp.Controller
			});
		});

		App.on("quiz:index", function(qid) {
			App.navigate("quiz/" + qid);
			AnswerApp.Controller.show(qid);
		});
	});
});