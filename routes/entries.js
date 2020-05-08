const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require("../models/User");
const Entry = require("../models/Entry");

//@route    GET api/journey-entries
//@desc     Get all users 'steps' or entries
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user.id }).sort({ date: -1 });
    res.json(entries)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});
//@route    POST api/journey-entries
//@desc     Add entry/step
//@access   Private
router.post('/', auth, async (req, res) => {
  const {thoughts, good, proud, freespace} = req.body;
  try {
    const newEntry = new Entry({
      thoughts,
      good,
      proud,
      freespace,
      user: req.user.id
    })
    const entry = await newEntry.save();
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});
//@route    DELETE api/journey-entries/:id
//@desc     Delete a 'step' or entry
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete an entry');
});

module.exports = router;
