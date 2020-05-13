const mongoose = require("mongoose");

const EntrySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  feeling_now: {
    type: String,
    required: false,
  },
  thoughts: {
    type: String,
    required: false,
  },
  good_thing: {
    type: String,
    required: false,
  },
  proud_moment: {
    type: String,
    required: false,
  },
  freespace: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    default: new Date().now,
  },
});

module.exports = mongoose.model("entry", EntrySchema);
