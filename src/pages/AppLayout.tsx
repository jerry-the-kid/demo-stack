import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <Box component='main' sx={{ padding: '1.5rem 3rem' }}>
      <Outlet />
    </Box>
  );
}

export default AppLayout;
