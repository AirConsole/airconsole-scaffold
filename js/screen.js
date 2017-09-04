/**
  This file will be included by the screen.html
*/
var airconsole = null;

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
  airconsole = new AirConsole();

  airconsole.onReady = function() {
    appendTextToElement(message_log_ele, "OnReady - You are the Screen!");
  };

  // Gets called when a device connects
  airconsole.onConnect = function(device_id) {
    appendTextToElement(message_log_ele, "Connected device id: " + device_id);
  };

  // Gets called when a device disconnects
  airconsole.onDisconnect = function(device_id) {
    appendTextToElement(message_log_ele, "Disconnect device id: " + device_id);
  };

  // Receive a message from a device
  airconsole.onMessage = function(device_id, data) {
    // Receive "greet" message
    if (data.action === AC.Action.SayHello) { // see js/shared.js
      appendTextToElement(message_log_ele, "Hello from device " + device_id);
      // Lets send something back
      this.message(device_id, { message: "Oh hello back! Your Screen" });
    }

    // Receive "move cube" action
    if (data.action === AC.Action.MoveCube) {
      var px = moveCube();
      var msg = "Device " + device_id + " moves the cube to: " + px + "px";
      appendTextToElement(message_log_ele, msg);
    }

  };
};

window.onload = init;
