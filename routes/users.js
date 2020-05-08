const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post(
  "/",
  [
    check("name", "please enter a name").not().isEmpty(),
    check("email", "Please enter an email address").isEmail(),
    check(
      "password",
      "Please enter a password with 4 or more characters"
    ).isLength({ min: 4 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("success!");
  }
);

module.exports = router;
