import express from "express";
import { getUser, getUsers, getDashboardStats } from "../controller/general.js";

const router = express.Router();

router.get("/user/:id", getUser);

router.get("/users", getUsers);

router.get("/dashboard", getDashboardStats);
export default router;
