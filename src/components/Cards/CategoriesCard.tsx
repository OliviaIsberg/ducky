import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import spidermanDuck from '../../assets/CategoriesPictures/spidermanDuck.jpg';
import weddingDuck from '../../assets/CategoriesPictures/weddingDuck.jpg';
import glowingDuck from '../../assets/CategoriesPictures/glowingDuck.jpg';

function CategoriesCard() {
  return (
    <Container sx={{ marginTop: '2rem' }} maxWidth="xl">
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
        }}
      >
        Kategorier
      </Typography>
      <Grid
        justifyContent="center"
        alignItems="center"
        container
        sx={{ gap: '5rem', margin: '2rem 0' }}
      >
        <Link to="products">
          <Card sx={{ maxWidth: 300, borderRadius: '1rem' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={spidermanDuck}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Spiderman
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="products">
          <Card sx={{ maxWidth: 300, borderRadius: '1rem' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={weddingDuck}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Bröllop
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link to="products">
          <Card sx={{ maxWidth: 300, borderRadius: '1rem' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={glowingDuck}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Lysande
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Container>
  );
}

export default CategoriesCard;
