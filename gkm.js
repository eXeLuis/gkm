'use strict';

// TODO: Verify if we're getting loaded from multiples location and prevent creating new child processes?

var EventEmitter3 = require('eventemitter3');
var path = require('path');
var spawn = require('child_process').spawn;

var events = new EventEmitter3();
var gkm = spawn('java', ['-jar', path.join(__dirname, 'lib/gkm.jar')]);

gkm.stdout.on('data', function(data) {
	data = data.toString().split(/\r\n|\r|\n/).filter(function(item) { return item; });
	for (var i in data) {
		var parts = data[i].split(':');
		events.emit(parts[0], parts.slice(1));
	}
});

module.exports = {
	events: events
};
