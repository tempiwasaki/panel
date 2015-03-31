define(["app"], function(App) {

	var socketio = null;

	function getSocketIO() {

		if (socketio === null) {

			socketio = io.connect('http://localhost:8081');

			socketio.on("connected", function(name) {});
			socketio.on("publish", function (data) { receive(data); });
			socketio.on("disconnect", function () {});

			function receive(data) {
				if (data && data.value && data.value.client) {
					var value = data.value;
					if (value.name && value.name != '') {
						var collection = App["_answerCollection"];
						var model = new App.Entities.AnswerModel({
							id: value.name,
						});
						collection.add(model);
						model = collection.get(value.name);
						model.set('answer', value.answer);
						model.set('status', 1);
					}
				}
			}
		}
		return socketio;
	}

	return getSocketIO();
});