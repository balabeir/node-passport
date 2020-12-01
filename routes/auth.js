const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/user");
const passport = require("passport");

router.post("/register", async (req, res) => {
  const { username, password, name } = req.body;

  // simple validation
  if (!name || !username || !password) {
    return res.render("register", { message: "Please try again" });
  }
  const passwordHash = bcrypt.hashSync(password, 10);
  const user = new User({
    name,
    username,
    password: passwordHash,
  });
  await user.save();
  res.render("index", { user });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    const { username, password } = req.body;
    res.redirect("/");
  }
);

module.exports = router;
