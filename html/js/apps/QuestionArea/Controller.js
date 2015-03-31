define(["app",
        "apps/PanelSocketIO",
        "apps/QuestionArea/View"], function(App, SocketIO) {

	App.module("PanelApp.QuestionArea", function(QuestionArea, App, Backbone, Marionette, $, _) {

		QuestionArea.Controller = {

			show: function(userId) {
				var view = new QuestionArea.View({model: App["_questionModel"]});
				App.questionRegion.show(view);
			},
			
			question: function(question) {
				var value = {
					server: true,
					quiz: question.get('quiz'),
					answer1: question.get('answer1'),
					answer2: question.get('answer2'),
					answer3: question.get('answer3')
				};
				SocketIO.emit('publish', {
					value: value
				});
				var collection = App["_answerCollection"];
				for (var i = 0; i < collection.length; i++) {
					collection.at(i).set('open', 0);
					collection.at(i).set('status', 0);
				}				
			},
			
			open: function(open) {
				var collection = App["_answerCollection"];
				for (var i = 0; i < collection.length; i++) {
					collection.at(i).set('open', 1);
				}
			}
		};
	});
});
