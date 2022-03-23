import { Box, Typography } from '@mui/material';
import ducky from '../assets/ProductPictures/ducky2 1.png';
import PopularDucks from './Cards/PopularDucks';

function StartPageDesription() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'fitContent',
        background: 'lightpink',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img style={{ width: '200px' }} src={ducky} alt=""></img>
        <Typography sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
          Välkommen till Ducky - affären där du köper dina badankor
        </Typography>
      </Box>
      <Box
        sx={{
          width: '70%',
          textAlign: 'center',
          margin: 'auto',
          padding: '2rem',
        }}
      >
        <Typography sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
          Håll humöret flytande med hjälp av våra osänkbara badankor! Badankor
          är levnadsglada filurer med truten formad som ett naturligt leende. Vi
          på Ducky har också lagt näbben i blöt och våra efterforskningar ger
          starka belägg för att det är svårt att sura när du ser en badanka i
          ögonen. Badankor bör därför inte saknas i badrummet och alla våra
          badankor har riktigt starka personligheter
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ marginBottom: '2rem' }} variant="h4">
          Våra mest sålda produkter
        </Typography>
        <PopularDucks />
      </Box>
    </Box>
  );
}

export default StartPageDesription;
