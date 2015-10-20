/**
  This file will be included by the controller.html
*/

var init = function() {
  var message_log_ele = document.getElementById('message_log');

  // Init the AirConsole object
  var air_console = new AirConsole({
    orientation: AirConsole.ORIENTATION_PORTRAIT
  });

  air_console.onReady = function() {
    appendTextToElement(message_log_ele, "You are device " + this.device_id);
  };

  // Overwrite the onMessage method.
  // Whenever we receive a message from the screen we display it on our log-div
  air_console.onMessage = function(device_id, data) {
    if (device_id === AirConsole.SCREEN) {
      // If the data inlcudes { message: <String|Number> }, we print it to the screen
      if (data.message) {
        appendTextToElement(message_log_ele, data.message);
      }
    }
  };

  // Send data to the screen, when clicking on the button
  var hello_button = document.getElementById('hello_button');
  hello_button.addEventListener('click', function() {
    air_console.message(AirConsole.SCREEN, {
      action: AC.Action.SayHello, // see js/shared.js file
      message: 'Oh hellow screen!'
    });

  });

};

window.onload = init;
