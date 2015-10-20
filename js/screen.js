/**
  This file will be included by the screen.html
*/
var air_console = null;

var init = function() {

  var message_log_ele = document.getElementById('message_log');
  var cube_ele = document.getElementById('cube');

  var moveCube = function() {
    var min = 100;
    var max = window.innerWidth - 100;
    var rand_pos = Math.floor(Math.random() * (max - min + 1)) + min;
    cube_ele.style.left = rand_pos + "px";
    return rand_pos;
  };

  // Init AirConsole instance
  air_console = new AirConsole();

  air_console.onReady = function() {
    appendTextToElement(message_log_ele, "You are the Screen!");
  };

  // Receive a message from a device
  air_console.onMessage = function(device_id, data) {

    // Receive "greet" message
    if (data.action === AC.Action.SayHello) { // see js/shared.js
      appendTextToElement(message_log_ele, "Hello from device " + device_id);
      // Lets send something back
      this.message(device_id, { message: "Oh hello back! Your Screen" });
    }

    // Receive "move cube" action
    if (data.action === AC.Action.MoveCube) {
      var px = moveCube();
      var msg = "Device " + device_id + " moves the cube " + px + "px";
      appendTextToElement(message_log_ele, msg);
    }

  };
};

window.onload = init;
