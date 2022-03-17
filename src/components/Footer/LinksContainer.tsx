import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import klarna from '../../assets/PaymentLogos/klarna.png';
import swish from '../../assets/PaymentLogos/swish.svg';
import visa from '../../assets/PaymentLogos/visa.png';
import mastercard from '../../assets/PaymentLogos/mastercard.png';
import maestro from '../../assets/PaymentLogos/maestro.png';
import instabox from '../../assets/ShippingLogos/instabox-short.png';
import postnord from '../../assets/ShippingLogos/postnord-short.svg';
import schenker from '../../assets/ShippingLogos/schenker.png';
import SubscribeForm from '../Forms/SubscribeForm';

function LinksContainer() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ margin: 'auto', width: '100%', padding: '3rem 0' }}
    >
      <Grid
        item
        xs={12}
        md={4}
        lg={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <Typography gutterBottom variant="h6">
            Hjälp
          </Typography>
          <Typography gutterBottom variant="body1">
            <Link to="faq">Vanliga frågor</Link>
          </Typography>
          <Typography gutterBottom variant="body1">
            Användarvillkor
          </Typography>
          <Typography variant="body1">Kundtjänst</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <Typography gutterBottom variant="h6">
            Följ oss
          </Typography>
          <FacebookOutlinedIcon color="primary" fontSize="large" />
          <InstagramIcon color="secondary" fontSize="large" />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <SubscribeForm />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <img width="75" height="40" src={klarna} alt=""></img>
          <img width="60" height="60" src={swish} alt=""></img>
          <img width="50" height="30" src={visa} alt=""></img>
          <img width="50" height="30" src={maestro} alt=""></img>
          <img width="50" height="30" src={mastercard} alt=""></img>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={2}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box>
          <img width="50" height="50" src={instabox} alt=""></img>
          <img width="50" height="50" src={postnord} alt=""></img>
          <img width="90" height="20" src={schenker} alt=""></img>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LinksContainer;
