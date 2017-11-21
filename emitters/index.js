// learning how to use event emitters

var events = require('events'); // internal to node, but you have to require events
var eventEmitter = new events.EventEmitter(); // now we are creating an Event Emitter

var ringBell = function ringBell(stuff) // this is a function that an event calls. Events need to call functions
  {
    console.log(stuff);
  }

  function doorClosed(){ // Here's another function for our event
    console.log('good bye');
  }

eventEmitter.on('doorOpen', ringBell); // here's what to do when an eventEmitter is turned on
eventEmitter.on('doorOpen', doorClosed); // you can do multiple things when doorOpen is emitted
//eventEmitter.on('doorClosed', doorClosed);

eventEmitter.emit('doorOpen','ring times 3'); // now we are turning on an eventEmitter and sending along data to use in the function called
//eventEmitter.emit('doorClosed');

