'use strict';
// Use .env for local development
require('dotenv').config();

const connectToDatabase = require('./db');
const Room = require('./models/Room');
const Openings = require('./models/Openings');

module.exports.getRooms = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const { day, time } = event.queryStringParameters;

  connectToDatabase()
    .then(() => {
      Openings.find({
        day,
        start: { "$lt": time },
        end: { "$gt": time },
      }).populate('room').exec((err, rooms) => {
        if (err) {
          callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch rooms.',
          });
        }

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(rooms),
        });
      });
    });
};
