const express = require('express');
const router = express.Router();

//@route    GET api/journey-entries
//@desc     Get all users 'steps' or entries
//@access   Private
router.get('/', (req, res) => {
  res.send('Get all entries/steps');
});
//@route    POST api/journey-entries
//@desc     Add entry/step
//@access   Private
router.post('/', (req, res) => {
  res.send('Add entry!');
});
//@route    DELETE api/journey-entries/:id
//@desc     Delete a 'step' or entry
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete an entry');
});

module.exports = router;
