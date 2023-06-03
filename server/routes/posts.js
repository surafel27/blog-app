import express from "express";
import cors from "cors";
import { addPost } from "../controllors/postsControllor.js";
const router = express.Router();

router.use(express.json());
router.use(cors());
router.get('/test', addPost);

export default router;