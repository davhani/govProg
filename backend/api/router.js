import { Router } from "express";
import {
  select,
  insert,
  remove,
  createEffort,
  getCriminalCases
} from "./queries";

const router = Router();
router.get("/police", select("policemen"));
router.get("/cases", select("cases"));
router.get("/criminals/cases/:id", getCriminalCases);
router.get("/criminals", select("criminals"));
router.get("/effort", select("effort"));

router.post("/police", insert("policemen"));
router.post("/cases", insert("cases"));
router.post("/criminals", insert("criminals"));
router.post("/effort", createEffort);
router.post("/effort/old", insert("effort"));

router.put("/police", insert("policemen"));
router.put("/cases", select("cases"));
router.put("/criminals", select("criminals"));
router.put("/effort", select("effort"));

router.delete("/police", remove("policemen"));
router.delete("/cases", remove("cases"));
router.delete("/criminals", remove("criminals"));
router.delete("/effort", remove("effort"));

export default router;
