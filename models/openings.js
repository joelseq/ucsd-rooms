const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const openingsSchema = Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: 'room',
  },
  day: { type: String, index: true },
  start: { type: Number, index: true },
  end: { type: Number, index: true },
});

module.exports = mongoose.model('opening', openingsSchema);
