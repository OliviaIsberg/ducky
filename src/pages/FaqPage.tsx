import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqPage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h1">
            Vad är kostar leveransen?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Leverans med Postnord kostar 19 kr, Scenker kostar 29 kr, Indstabox
            kostar 29 kr.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h1">
            När får jag min leverans?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Leverans med Postnord tar 1-3 dagar, Scenker tar 1-2 dagar, Instabox
            tar 1-2 dagar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h1">
            Vilka betalsätt kan jag välja?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Våra betalmedel är Klarna, Swish, Visa, Maestro och MasterCard
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FaqPage;
