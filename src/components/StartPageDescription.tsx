import { Box, Typography } from '@mui/material';
import ducky from '../assets/ProductPictures/ducky2 1.png';

function StartPageDesription() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '15rem',
        background: 'lightpink',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img style={{ width: '200px' }} src={ducky} alt=""></img>
        <Typography sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
          Välkommen till Ducky - affären där du köper dina badankor
        </Typography>
      </Box>
    </Box>
  );
}

export default StartPageDesription;
