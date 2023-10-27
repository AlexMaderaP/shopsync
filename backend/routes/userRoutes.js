import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersByID,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.route("/:id").get(getUsersByID).delete(deleteUser).put(updateUser);

export default router;
