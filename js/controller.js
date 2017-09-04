/**
  This file will be included by the controller.html
*/

var airconsole = null;
var init = function() {
  var message_log_ele = document.getElementById('message_log');
  var device_motion_log = document.getElementById('device_motion_log');

  // Init the AirConsole object
  airconsole = new AirConsole({
    orientation: AirConsole.ORIENTATION_PORTRAIT,
    device_motion: 100
  });

  airconsole.onReady = function() {
    appendTextToElement(message_log_ele, "You are device " + this.device_id);
  };

  // Overwrite the onMessage method.
  // Whenever we receive a message from the screen we display it on our log-div
  airconsole.onMessage = function(device_id, data) {
    if (device_id === AirConsole.SCREEN) {
      // If the data inlcudes { message: <String|Number> }, we print it to the screen
      if (data.message) {
        appendTextToElement(message_log_ele, data.message);
      }
    }
  };

  airconsole.onDeviceMotion = function(data) {
    //console.log(data);
    device_motion_log.innerHTML = data.x;
  };

  // Send data to the screen, when clicking on the button
  var hello_button = document.getElementById('hello_button');
  hello_button.addEventListener('click', function() {
    airconsole.message(AirConsole.SCREEN, {
      action: AC.Action.SayHello, // see js/shared.js file
      message: 'Oh hellow screen!'
    });
  });

  // Send action to screen to move the cube
  var move_cube_button = document.getElementById('move_cube');
  move_cube_button.addEventListener('click', function() {
    airconsole.message(AirConsole.SCREEN, {
      action: AC.Action.MoveCube
    });
  });

};

window.onload = init;
