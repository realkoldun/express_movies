import { Router } from "express";
import { movieService } from "../services/movies.js";

const router = new Router();

router.get("/", (req, res) => {
    const movies = movieService.getMovies();

    res.status(200).json(movies);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        res.status(400).send('id not provided');
        return;
    }

    const movie = movieService.getMovieById(id);

    if (!movie) {
        res.status(404).send('not found');
        return;
    }

    res.status(200).json(movie);
});

router.post('/', (req, res) => {
    const movieData = req.body;

    if(!movieData.genre || !movieData.title) {
        res.status(400).send('incorrect movie data');
        return;
    }

    const movieId = movieService.addMovie(movieData);

    res.status(200).send(movieId);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;

    const movieData = req.body;

    if(!movieData.genre || !movieData.title || !movieData.rating) {
        res.status(400).send({ message: 'incorrect movie data' });
        return;
    }

    if(!movieService.updateMovie(id, movieData)) {
        res.status(404).send({ message: 'not found' });
    }

    res.status(200).json({ message: 'OK' });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    if(!movieService.updateMovie(id, req.body)) {
        res.status(404).send({ message: 'not found' });
    }

    res.status(200).json({ message: 'OK' });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if(!movieService.deleteMovie(id)) {
        res.status(404).json({ message: 'OK' });
    }

    res.status(200).json({ message: 'OK' });
})

export default router;


