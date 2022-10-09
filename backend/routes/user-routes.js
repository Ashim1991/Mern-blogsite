const express = require("express");
const {
  signup,
  login,
  getUsers,

  logout,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/users", getUsers);
router.post("/logout", logout);
module.exports = router;
