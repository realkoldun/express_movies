import { Router } from "express";
import {movieController} from "../controllers/movies.js";

const router = new Router();

router.get("/", movieController.getMovies);
router.get('/:id', movieController.getMovieById);

router.post('/', movieController.postMovie);

router.put('/:id', movieController.updateMovie);

router.patch('/:id', movieController.patchMovie);

router.delete('/:id', movieController.deleteMovie);

export default router;


