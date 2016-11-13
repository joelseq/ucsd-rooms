var Openings = require('./models/openings');
var Room = require('./models/room');

module.exports = function(app) {
  app.get('/api/rooms', function(req, res) {
    var day = req.query.day;
    var time = req.query.time;

    if (!day || !time) {
      res.status(400).json({ error: 'Please provide day and time' });
    }

    Openings.find({
      day,
      start: { "$lt": time },
      end: { "$gt": time },
    }).populate('room').exec((err, rooms) => {
      if (err) {
        return res.status(500).json({ error: 'Something went wrong' });
      }
      res.status(200).json(rooms);
    });
  });
};
