const express = require("express");

const router = express.Router();
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
} = require("../controllers/user-controller");

router.post("/sign-up", signup);
router.post("/login", login);
// verify_token will act as middleware
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);

module.exports = router;
