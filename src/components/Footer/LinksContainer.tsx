import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
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
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem 3rem',
          gap: '8rem',
        }}
      >
        <Box sx={{ gap: '1rem' }}>
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <Typography gutterBottom variant="h6">
            Följ oss
          </Typography>
          <FacebookOutlinedIcon color="primary" fontSize="large" />
          <InstagramIcon color="secondary" fontSize="large" />
        </Box>

        <Box>
          <SubscribeForm />
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <img width="75" height="40" src={klarna} alt=""></img>
            <img width="60" height="60" src={swish} alt=""></img>
            <img width="50" height="30" src={visa} alt=""></img>
            <img width="50" height="30" src={maestro} alt=""></img>
            <img width="50" height="30" src={mastercard} alt=""></img>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '4rem',
              marginTop: '2rem',
              alignItems: 'center',
            }}
          >
            <img width="50" height="50" src={instabox} alt=""></img>
            <img width="50" height="50" src={postnord} alt=""></img>
            <img width="90" height="20" src={schenker} alt=""></img>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LinksContainer;
