import express from 'express';

import basicRoutes from "./routes/basic.js";
import moviesRoutes from "./routes/movies.js";

const app = express();

app.use(express.json());

app.use('/', basicRoutes);
app.use('/movies', moviesRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
