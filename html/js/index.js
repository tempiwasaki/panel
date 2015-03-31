requirejs.config({

	baseUrl: "js",

	paths: {
		"underscore": "vendor/underscore",
		"jquery": "jquery/jquery-2.1.1.min",
		"json2": "vendor/json2",
		"handlebars": "vendor/handlebars-v2.0.0",
		"backbone": "vendor/backbone",
		"backbone.stickit": "vendor/backbone.stickit",
		"marionette": "vendor/backbone.marionette",
		"text": "vendor/text",
		"tpl": "vendor/underscore-tpl",
		"moment": "vendor/moment.min"
	},

	shim: {
		"handlebars": {
			exports: "Handlebars"
		},
		"underscore": {
			exports: "_"
		},
		"backbone": {
			deps: ["jquery", "underscore", "json2", "moment"],
			exports: "Backbone"
		},
		"backbone.stickit": {
			deps: ["backbone"]
		},
		"marionette": {
			deps: ["backbone", "backbone.stickit"],
			exports: "Marionette"
		},
		"tpl": {
			deps: ["text"]
		}
	},

	packages: [
		{
			name: 'hbs',
			location: 'vendor/hbs',
			main: 'hbs'
		}
	]
});

require(["app",
         "apps/AnswerApp",
         "apps/AnswerSocketIO",
         "entities/Question",
         "entities/Answer"
         ], function(App) {
	App.start();
});
