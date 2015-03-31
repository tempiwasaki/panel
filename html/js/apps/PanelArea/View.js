define(["app",
        "handlebars",
        "hbs!apps/PanelArea/View",
        "hbs!apps/PanelArea/Item",
        ], function(App, Handlebars, viewTpl, itemTpl) {

	App.module("PanelApp.PanelArea", function(PanelArea, App, Backbone, Marionette, $, _) {

		PanelArea.Item = Marionette.ItemView.extend({
			tagName: 'div',
			className: 'col-xs-3 m25',
			template: itemTpl,

			ui: {
				id: '#id',
				answer: '#answer',
			},

			bindings: {
				'#id': 'id',
				'#answer': {
					observe: ['answer', 'open'],
					onGet: function() {
						
						console.log('kdfjasldfjasldfjalsdfjaljsdf');
						
						if (this.model.get('open') == 1) {
							return this.model.get('answer');
						} else {
							return '?';
						}
					}
				},
				'#panel': {
					attributes: [{
						name: 'class',
						observe: ['status'],
						onGet: function(val) {
							if (this.model.get('status') == 0) {
								return 'radius notyet';
							} else {
								return 'radius answered';
							}
						}
					}]
				}
			},
			
			onRender: function() {
		        this.stickit();
			}
		});
		
		PanelArea.View = Marionette.CollectionView.extend({
			childView: PanelArea.Item
		});
	});
});
