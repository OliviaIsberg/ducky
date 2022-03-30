import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import ducky from '../assets/ducky2.png';
import PopularDucks from './Cards/PopularDucks';
import ShowCarousel from './Carousel';

function StartPageDesription() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'fitContent',
        background: '#f7f7dc',
        paddingTop: '2rem',
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
        <Typography sx={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
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
      <ShowCarousel />
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ marginBottom: '2rem', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
        >
          Våra mest sålda produkter
        </Typography>
        <PopularDucks />
        <Link to="products">
          <Button sx={{ margin: '2rem 0' }} variant="contained">
            Visa alla produkter
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default StartPageDesription;
