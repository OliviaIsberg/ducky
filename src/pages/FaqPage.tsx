import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqPage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Vad är kostar leveransen?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Leverans med Postnord kostar 19 kr, Scenker kostar 29 kr, Indstabox
            kostar 29 kr.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>När får jag min leverans?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Leverans med Postnord tar 1-3 dagar, Scenker tar 1-2 dagar, Instabox
            tar 1-2 dagar
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>Vilka betalsätt kan jag välja?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>Våra betalmedel är Klarna, Swish, Visa, Maestro och MasterCard</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FaqPage;
