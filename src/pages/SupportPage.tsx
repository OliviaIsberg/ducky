import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import duckyComputer from '../assets/duckyComputer.webp';

function SupportPage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        backgroundColor: '#c7f0e1',
        margin: 'auto',
        padding: '3rem 0',
      }}
    >
      <Typography gutterBottom variant="h4">
        Kundtjänst
      </Typography>
      <Typography gutterBottom variant="h6">
        Svaret på de vanligaste frågorna hittar du <Link to="/faq">här</Link>
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        Om du inte hittar svaret på din fråga så är du välkommen att kontakta
        oss
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        Telefonsupport 0700-000000
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        Vardagar 08:00-17:00
      </Typography>
      <Typography variant="subtitle1">
        Mailsupport duckys@hotmail.com
      </Typography>
      <img
        style={{ borderRadius: '20rem', marginTop: '5rem' }}
        width="250"
        height="250"
        src={duckyComputer}
        alt=""
      ></img>
    </Box>
  );
}

export default SupportPage;
