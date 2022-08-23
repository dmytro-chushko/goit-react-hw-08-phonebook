import { Box, Skeleton } from '@mui/material';

export const MainSkeleton = () => {
  return (
    <Box sx={{ maxWidth: '375px', mx: 'auto', pt: '20px' }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};
