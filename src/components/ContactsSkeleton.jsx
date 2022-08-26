import { Grid, Skeleton } from '@mui/material';

export const ContactsSkeleton = () => {
  const skeletonArr = [];
  for (let i = 0; i < 8; i++) {
    skeletonArr.push(
      <Grid key={i} item xs={12} sm={4} md={3}>
        <Skeleton variant="rectangular" height={50} />
      </Grid>
    );
  }
  return <>{skeletonArr}</>;
};
