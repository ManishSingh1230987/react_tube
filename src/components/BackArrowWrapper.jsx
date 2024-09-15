import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

const BackArrowWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const showBackArrow = location.pathname !== '/';

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      {showBackArrow && (
        <Box sx={{
          padding: '10px',
          borderBottom: '1px solid #3d3d3d',
          backgroundColor: '#000',
        }}>
          <IconButton
            onClick={handleGoBack}
            sx={{
              color: 'white',
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
      )}
      {children}
    </Box>
  );
};

export default BackArrowWrapper;
