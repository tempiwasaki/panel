define(["app"], function(App) {

	var socketio = null;

	function getSocketIO() {

		if (socketio === null) {

			socketio = io.connect('http://localhost:8081');

			socketio.on("connected", function(name) {});
			socketio.on("publish", function (data) { receive(data); });
			socketio.on("disconnect", function () {});

			function receive(data) {
				if (data && data.value && data.value.server) {
					var value = data.value;
					var model = App["_questionModel"];
					model.set('quiz', value.quiz);
					model.set('answer1', value.answer1);
					model.set('answer2', value.answer2);
					model.set('answer3', value.answer3);
				}
			}
		}
		return socketio;
	}

	return getSocketIO();
});