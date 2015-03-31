define(['marionette'], function(Marionette) {

	var App = new Marionette.Application();

	App.addRegions({
		questionRegion: '#questionRegion',
		answerRegion: '#answerRegion'
	});

	App.navigate = function(route, options) {
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	App.getCurrentRoute = function() {
		return Backbone.history.fragment;
	};

	App.on('start', function() {
		if (Backbone.history) {
			Backbone.history.start();
			if (this.getCurrentRoute() === '') {
				App.trigger('quiz:index', 1);
			}
		}
	});

	return App;
});
