import { Box, CircularProgress } from '@mui/material';

export const MainLoader = () => {
  return (
    <Box sx={{ maxWidth: '100px', mx: 'auto', pt: '100px' }}>
      <CircularProgress size={100} sx={{ mx: 'auto' }} />
    </Box>
  );
};
