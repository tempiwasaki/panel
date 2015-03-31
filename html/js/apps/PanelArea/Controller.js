define(["app",
        "apps/PanelArea/View"], function(App) {

	App.module("PanelApp.PanelArea", function(PanelArea, App, Backbone, Marionette, $, _) {

		PanelArea.Controller = {

			show: function(qid) {

				
				var view = new PanelArea.View({collection: App["_answerCollection"]});
				App.answerRegion.show(view);

				
				
				/*
				
				var userTaskCollection = new App.Entities.UserTaskCollection([], {userId: userId});
				userTaskCollection.fetch({ 
					data: { page: 1 },
					processData: true,
					success : function() {
						userTaskCollection.each(function(t) {
							if (t.get('owner_id') == t.get('user_id')) {
								t.set('_isOwner', true);
							}
						});
						var configModel = new Backbone.Model();
						var view = new TaskCollectionView.View({model: configModel, collection: userTaskCollection});
						App.mainRegion.currentView.taskRegion.show(view);
					}
				});
				*/
			}
		};
	});
});
