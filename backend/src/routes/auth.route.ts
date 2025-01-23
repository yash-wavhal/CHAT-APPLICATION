import express from "express";
import { login, logout, signup, getMe } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);

// <url>/api/auth/signup
router.post("/signup", signup);    
// <url>/api/auth/login
router.post("/login", login);       //it get called while login
router.post("/logout", logout);   //it get called while logout
//signup, login, logout are taken from the controller so that code is readable, reusable and short
export default router;
