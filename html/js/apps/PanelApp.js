define(["app",
        "apps/QuestionArea/Controller",
        "apps/PanelArea/Controller"], function(App) {

	App.module("PanelApp", function(PanelApp, App, Backbone, Marionette, $, _) {

		var Router = Marionette.AppRouter.extend({
			appRoutes: {
				"quiz/:qid" : "show"
			}
		});

		PanelApp.Controller = {

			show: function(qid) {

				App["_questionModel"] = new App.Entities.QuestionModel();
				App["_answerCollection"] = new App.Entities.AnswerCollection();

				PanelApp.QuestionArea.Controller.show(qid);
				PanelApp.PanelArea.Controller.show(qid);

				
			}
		}

		App.addInitializer(function() {
			new Router({
				controller: PanelApp.Controller
			});
		});

		App.on("quiz:index", function(qid) {
			App.navigate("quiz/" + qid);
			PanelApp.Controller.show(qid);
		});
	});
});