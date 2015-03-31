define(["app",
        "handlebars",
        "hbs!apps/QuestionArea/View"
        ], function(App, Handlebars, viewTpl) {

	App.module("PanelApp.QuestionArea", function(QuestionArea, App, Backbone, Marionette, $, _) {

		QuestionArea.View = Marionette.CompositeView.extend({
			tagName: 'form',
			template: viewTpl,

			ui: {
				quiz: '#quiz',
				answer1: '#answer1',
				answer2: '#answer2',
				q3: '#answer3',
				question: '#question',
				open: '#open'
			},

			events: {
				'click @ui.question': 'clickQuestion',
				'click @ui.open': 'clickOpen'
			},

			bindings: {
				'#quiz': 'quiz',
				'#answer1': 'answer1',
				'#answer2': 'answer2',
				'#answer3': 'answer3'
			},

			clickQuestion: function(args) {
				console.log(this.model);
				QuestionArea.Controller.question(this.model);
			},

			clickOpen: function(args) {
				QuestionArea.Controller.open(this.model);
			},

			onRender: function() {
		        this.stickit();
			}
		});
	});
});
