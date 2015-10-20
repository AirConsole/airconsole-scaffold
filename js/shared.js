/**
  This file will be included by both, the screen.html and the controller.html
  (Because we are lazy and do not want to write code twice ;)
*/

/*
 * We use "constants" so that message exchange does not become a mess
 */
var AC =  {};

AC.Action = {
  SayHello: "greet"
};


/**
 * A simple helper function to append text to an element
 */
var appendTextToElement = function(parent_ele, text) {
  var ele = document.createElement('DIV');
  ele.innerHTML = text;
  parent_ele.appendChild(ele);
};
