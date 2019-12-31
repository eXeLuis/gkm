var gkm = require('./gkm.js');

// Listen to all events
gkm.events.on( 'key.released', function(data) {
	console.log(data);
});

// Listen to all key events (pressed, released, typed)
// gkm.events.on('key.*', function(data) {
//     console.log(this.event + ' ' + data);
// });

// Listen to all mouse events (click, pressed, released, moved, dragged)
// gkm.events.on('mouse.*', function(data) {
// 	console.log(this.event + ' ' + data);
// });

