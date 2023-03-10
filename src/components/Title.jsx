import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Title = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>  
          <Typography variant="h6" component="div" textAlign="center" sx={{ flexGrow: 1 }}>
            COUNTRIES | Internship Task | REIZ-TECH
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Title;

