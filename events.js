'use strict';

const events = require('events');

const eventsEmmiter = new events(); // export the new instance

// Global Events pool
module.exports = eventsEmmiter;