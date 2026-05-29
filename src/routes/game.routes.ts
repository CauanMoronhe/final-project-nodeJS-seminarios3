import { Router } from "express";
import { createNewGame, findGames, updateGame } from "../controllers/game.controller";


const router = Router();

router.get("/games", findGames);

router.post("/games", createNewGame);

router.put("/games", updateGame);

export default router;