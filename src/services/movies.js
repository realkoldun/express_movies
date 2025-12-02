import {MovieStore} from "../utils/store.js";

export class MovieService {
    constructor() {}

    getMovies() {
        return MovieStore.getMovies();
    }

    getMovieById(id) {
        return MovieStore.getMovieById(id);
    }

    updateMovie(id, movie) {
        return MovieStore.updateMovie(id, movie);
    }

    addMovie(movieData) {
        return MovieStore.addMovie(movieData);
    }

    deleteMovie(id) {
        return MovieStore.deleteMovie(id);
    }
}

export const movieService = new MovieService();
