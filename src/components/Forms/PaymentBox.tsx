import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  ListItemAvatar,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import klarna from '../../assets/PaymentLogos/klarna-square.jpg'
import swish from '../../assets/PaymentLogos/swish.svg'
import React from "react";
import PaymentForm from "./PaymentForm";

function PaymentBox() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  function onPaymentSubmit() {

  }

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="Payment options list">
        {/* Klarna */}
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemAvatar>
            <Avatar alt="Klarna logotyp" src={klarna} />
          </ListItemAvatar>
          <ListItemText
            primary="Klarna"
            secondary="Välj mellan delbetalning och andra alternativ"
          />
        </ListItemButton>
        <Divider />

        {/* Swish */}
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "white" }} alt="Swish logotyp" src={swish} />
          </ListItemAvatar>
          <ListItemText primary="Swish" />
        </ListItemButton>
        <Divider />

        {/* Kortbetalning */}

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <Accordion>
            <AccordionSummary sx={{}}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: "white", color: "inherit" }}><CreditCardIcon /></Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Kortbetalning"
                secondary="Betala med Visa / Mastercard / Maestro"
              />
            </AccordionSummary>
            <AccordionDetails><PaymentForm onSubmit={onPaymentSubmit} /></AccordionDetails>

          </Accordion>
        </ListItemButton>
        <Divider />
      </List>
    </Box >
  );
}

export default PaymentBox;
