import React from 'react';
import { Box } from '@mui/material';

const PageWrapper = ({ children }) => {
  return (
    <Box sx={{ 
      height: 'calc(100vh - 56px - 48px)', // Adjust for navbar (56px) and back arrow bar (48px)
      overflowY: 'auto',
      width: '100%'
    }}>
      {children}
    </Box>
  );
};

export default PageWrapper;