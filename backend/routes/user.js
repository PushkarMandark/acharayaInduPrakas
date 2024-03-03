const router = require("express").Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.js");

router.route("/getUser").get(getUser);

router.route("/createUser").post(createUser);

router.route("/updateUser/:id").put(updateUser);

router.route("/deleteUser/:id").delete(deleteUser);

module.exports = router;
