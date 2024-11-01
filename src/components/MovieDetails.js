import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, CircularProgress, Box } from '@mui/material';

const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=b5a22e6b&i=${imdbID}`);
                setMovie(response.data);
            } catch (err) {
                setError('Error fetching movie details');
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [imdbID]);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">{error}</Typography>;
    if (!movie) return <Typography>No details available.</Typography>;

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={movie.Title}
                    image={movie.Poster}
                    sx={{ height: 340 }}
                />
                <CardContent>
                    <Typography variant="h5">{movie.Title}</Typography>
                    <Typography>Year: {movie.Year}</Typography>
                    <Typography>Director: {movie.Director}</Typography>
                    <Typography>Plot: {movie.Plot}</Typography>
                    <Typography>Actors: {movie.Actors}</Typography>
                    <Typography>Rating: {movie.imdbRating}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default MovieDetails;
