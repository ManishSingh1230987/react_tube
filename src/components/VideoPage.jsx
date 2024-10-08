import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import VIdeoDetail from './VIdeoDetail';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { id } = useParams();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      height: 'calc(100vh - 56px)', 
      marginTop: '56px', 
    }}>
      <Box sx={{
        height: { xs: 'auto', md: '100%' },
        px: { xs: 0, md: 2 },
        overflowY: 'auto'
      }}>
        <Sidebar />
      </Box>
      <Box sx={{
        flexGrow: 1,
        p: 2,
        overflowY: 'auto',
        height: '100%'
      }}>
        {id ? <VIdeoDetail /> : <Videos />}
      </Box>
    </Box>
  );
};

export default VideoPage;