import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '../redux/movieActions';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    TablePagination,
    Paper,
    Typography,
} from '@mui/material';
import SearchBar from './SearchBar';

const MovieList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movies = [], loading, error, totalResults } = useSelector(state => ({
        movies: state.movies.movies || [],
        loading: state.movies.loading || false,
        error: state.movies.error || null,
        totalResults: state.movies.totalResults || 0,
    }));


    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('Pokemon');
    const moviesPerPage = 10;

    useEffect(() => {
        dispatch(fetchMovies(searchTerm, currentPage + 1));
    }, [dispatch, searchTerm, currentPage]);

    const handleSearchChange = (newSearch) => {
        setSearchTerm(newSearch);
        setCurrentPage(0);
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };
    const handleMovieClick = (imdbID) => {
      navigate(`/movie/${imdbID}`);
  };

    if (loading) return <Typography variant="h6">Loading...</Typography>;
    if (error) return <Typography variant="h6" color="error">Error: {error}</Typography>;

    return (
        <Paper>
            <Typography variant="h4" align="center" sx={{ margin: 2 }}>Movie List</Typography>
            <SearchBar onSearchChange={handleSearchChange} />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Poster</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>IMDb ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies && movies.length > 0 ? (
                            movies.map(movie => (
                                <TableRow
                                    key={movie.imdbID}
                                    onClick={() => handleMovieClick(movie.imdbID)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <TableCell>
                                        <img src={movie.Poster} alt={movie.Title} style={{ width: '50px' }} />
                                    </TableCell>
                                    <TableCell>{movie.Title}</TableCell>
                                    <TableCell>{movie.Year}</TableCell>
                                    <TableCell>{movie.imdbID}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">No movies found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={totalResults}
                rowsPerPage={moviesPerPage}
                page={currentPage}
                onPageChange={handlePageChange}
            />
        </Paper>
    );
};

export default MovieList;
