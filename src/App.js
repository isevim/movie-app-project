import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:imdbID" element={<MovieDetails/>} />
            </Routes>
        </Router>
    );
};

export default App;
