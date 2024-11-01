const initialState = {
    movies: [],
    loading: false,
    error: null,
    movieDetails: null,
    totalResults: 0,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_MOVIES_SUCCESS':
            return { ...state, loading: false, movies: action.payload.movies, totalResults: action.payload.totalResults };
        case 'FETCH_MOVIES_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'FETCH_MOVIE_DETAILS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_MOVIE_DETAILS_SUCCESS':
            return { ...state, loading: false, movieDetails: action.payload };
        case 'FETCH_MOVIE_DETAILS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default movieReducer;
