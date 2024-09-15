import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        display: 'flex',
        alignItems: 'center',
        width: { xs: '100%', sm: '400px', md: '500px' }, // Increased width for larger screens
        maxWidth: '600px', // Increased max-width
        height: { xs: '40px', md: '50px' }, // Increased height for larger screens
        backgroundColor: '#121212',
        '&:hover': {
          backgroundColor: '#1e1e1e',
        },
      }}
    >
      <InputBase
        sx={{ 
          ml: 1, 
          flex: 1, 
          color: 'white',
          fontSize: { xs: '14px', md: '16px' } // Increased font size for larger screens
        }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search videos' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#FF0000' }} aria-label='search'>
        <SearchIcon sx={{ fontSize: { xs: '20px', md: '24px' } }} /> {/* Increased icon size for larger screens */}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;