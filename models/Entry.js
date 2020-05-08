const mongoose = require("mongoose");

const EntrySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  thoughts: {
    type: String,
    required: false,
  },
  good: {
    type: String,
    required: false,
  },
  proud: {
    type: String,
    required: false,
  },
  freespace: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("entry", EntrySchema);
