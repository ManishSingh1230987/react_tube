import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack 
    direction={{ xs: 'column', md: 'row' }} 
    alignItems="center" 
    p={2} 
    sx={{ 
      position: 'sticky', 
      background: '#000', 
      top: 0, 
      justifyContent: 'space-between' 
    }}
  >
    <Stack 
      direction={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      sx={{ width: { xs: '100%', md: '33%' } }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        sx={{ 
          color: 'white', 
          ml: { md: 2 },
          mt: { xs: 2, md: 0 },
          mb: { xs: 2, md: 0 }
        }}
      >
        ReactTube
      </Typography>
    </Stack>
    <Box sx={{ width: { xs: '100%', md: '33%' }, display: 'flex', justifyContent: 'center' }}>
      <SearchBar />
    </Box>
    <Box sx={{ width: { xs: '100%', md: '33%' } }} /> {/* Empty box for spacing */}
  </Stack>
);

export default Navbar;