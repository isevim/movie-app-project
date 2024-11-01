import axios from 'axios';

// You can get api key from omdapi
const APIKEY = 'apiKey';
const APIURL = "http://www.omdbapi.com/?i=tt3896198";

export const fetchMovies = (searchTerm = 'Pokemon', page = 1) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_MOVIES_REQUEST' });
        try {
            const response = await fetch(`${APIURL}&apikey=${APIKEY}&s=${searchTerm}&page=${page}`).then(res => res.json());
            if (response.Response === "True") {
                dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: { movies: response.Search, totalResults: response.totalResults } });
            } else {
                dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: response.Error });
            }
        } catch (error) {
            dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
        }
    };
};

export const fetchMovieDetails = (imdbID) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS_REQUEST' });
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=b5a22e6b&i=${imdbID}`);
            if (response.data.Response === "True") {
                dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: response.data });
            } else {
                dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: response.data.Error });
            }
        } catch (error) {
            dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: error.message });
        }
    };
};
