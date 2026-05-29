import { Router } from "express";
import { createNewGame, findGames } from "../controllers/game.controller";


const router = Router();

router.get("/games", findGames);

router.post("/games", createNewGame);

export default router;