/**
  This file will be included by the screen.html
*/
var air_console = null;

var init = function() {

  var message_log_ele = document.getElementById('message_log');

  // Init AirConsole instance
  air_console = new AirConsole();

  air_console.onReady = function() {
    appendTextToElement(message_log_ele, "You are the Screen!");
  };

  // Receive a message from a device
  air_console.onMessage = function(device_id, data) {
    if (data.action === AC.Action.SayHello) { // see js/shared.js
      appendTextToElement(message_log_ele, "Hello from device " + device_id);
      // Lets send something back
      this.message(device_id, { message: "Oh hello back! Your Screen" });
    }

  };
};

window.onload = init;
