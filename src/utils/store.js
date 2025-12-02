export class MovieStore {
    static movies = [
        {
            id: crypto.randomUUID(),
            title: 'Title 1',
            genre: 'Genre 1',
            rating: 5,
        },
        {
            id: crypto.randomUUID(),
            title: 'Title 2',
            genre: 'Genre 2',
            rating: null,
        },
        {
            id: crypto.randomUUID(),
            title: 'Title 3',
            genre: 'Genre 3',
            rating: 5,
        },
        {
            id: crypto.randomUUID(),
            title: 'Title 4',
            genre: 'Genre 4',
            rating: 5,
        },
        {
            id: crypto.randomUUID(),
            title: 'Title 5',
            genre: 'Genre 5',
            rating: 5,
        },
        {
            id: crypto.randomUUID(),
            title: 'Title 6',
            genre: 'Genre 6',
            rating: null,
        },
    ]

    static getMovies() {
        return this.movies;
    }
    static addMovie(movieData) {
        const movieId = crypto.randomUUID();
        const movie = {
            id: movieId,
            title: movieData.title,
            genre: movieData.genre,
            rating: null,
        }
        this.movies.push(movie);

        return movieId;
    }
    static getMovieById(id) {
        return this.movies.find((movie) => movie.id === id);
    }
    static updateMovie(id, newMovieData) {
        if(!this.movies.find((movie) => movie.id === id)) {
            return false;
        }

        this.movies = this.movies.map(movie => {
            if(movie.id !== id) return movie;

            return {
                id: movie.id,
                title: newMovieData.title ?? movie.title,
                genre: newMovieData.genre ?? movie.genre,
                rating: newMovieData.rating ?? movie.rating,
            };
        });

        return true;
    }
    static deleteMovie(id) {
        if(!this.movies.find((movie) => movie.id === id)) {
            return false;
        }

        this.movies = this.movies.filter(movie => movie.id !== id);

        return true;
    }
}
