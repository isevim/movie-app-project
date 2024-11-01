import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearchChange }) => {
    const [search, setSearch] = useState('');

    const manageSearch = (evt) => {
        setSearch(evt.target.value);
    };

    const searchMovies = (evt) => {
        evt.preventDefault();
        if (search.trim().length > 0) {
            onSearchChange(search.trim());
        }
    };

    return (
        <Box
            component="form"
            onSubmit={searchMovies}
            sx={{
                display: 'flex',
                gap: 2,
                marginBottom: 2,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <TextField
                variant="outlined"
                size="small"
                value={search}
                onChange={manageSearch}
                placeholder="Search for movies..."
                aria-label="Search"
                sx={{ width: '250px' }}
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
