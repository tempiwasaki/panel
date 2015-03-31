define(["app",
        "handlebars",
        "hbs!apps/AnswerArea/View"
        ], function(App, Handlebars, viewTpl) {

	App.module("AnswerApp.AnswerArea", function(AnswerArea, App, Backbone, Marionette, $, _) {

		AnswerArea.View = Marionette.CompositeView.extend({
			tagName: 'form',
			template: viewTpl,

			ui: {
				name: '#name',
				quiz: '#quiz',
				answer1: '#answer1',
				answer2: '#answer2',
				answer3: '#answer3'
			},

			events: {
				'click @ui.answer1': 'clickAnswer1',
				'click @ui.answer2': 'clickAnswer2',
				'click @ui.answer3': 'clickAnswer3',
			},

			bindings: {
				'#name': 'name',
				'#quiz': 'quiz',
				'#answer1': 'answer1',
				'#answer2': 'answer2',
				'#answer3': 'answer3'
			},

			clickAnswer1: function() {
				AnswerArea.Controller.answer1(this.model);
			},

			clickAnswer2: function() {
				AnswerArea.Controller.answer2(this.model);
			},

			clickAnswer3: function() {
				AnswerArea.Controller.answer3(this.model);
			},

			onRender: function() {
		        this.stickit();
			}
		});
	});
});
