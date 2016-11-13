const Openings = require('./models/openings');
const Room = require('./models/room');

module.exports = function(app) {
  app.get('/api/rooms', (req, res) => {
    const day = req.query.day;
    const time = req.query.time;

    if (!day || !time) {
      res.status(400).json({ error: 'Please provide day and time' });
    }

    Openings.find({
      day,
      start: { "$lt": time },
      end: { "$gt": time },
    }).populate('room').exec((err, rooms) => {
      if(err) {
        return res.status(500).json({ error: 'Something went wrong' });
      }
      res.status(200).json(rooms);
    });
  });
};
