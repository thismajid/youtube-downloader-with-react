import { Router } from "express";
import { download } from "../controllers";

const router = new Router();

router.get("/download", download);

module.exports = router;
