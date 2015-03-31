define(["app",
        "apps/AnswerSocketIO",
        "apps/AnswerArea/View"], function(App, SocketIO) {

	App.module("AnswerApp.AnswerArea", function(AnswerArea, App, Backbone, Marionette, $, _) {

		AnswerArea.Controller = {

			show: function(qid) {
				var view = new AnswerArea.View({model: App["_questionModel"]});
				App.questionRegion.show(view);
			},
			
			answer1: function(answer) {
				var value = {
					client: true,
					name: answer.get('name'),
					answer: 1
				};
				SocketIO.emit('publish', {
					value: value
				});
			},
			
			answer2: function(answer) {
				var value = {
						client: true,
						name: answer.get('name'),
						answer: 2
					};
					SocketIO.emit('publish', {
						value: value
					});
			},
			
			answer3: function(answer) {
				var value = {
						client: true,
						name: answer.get('name'),
						answer: 3
					};
					SocketIO.emit('publish', {
						value: value
					});
			}
		};
	});
});
