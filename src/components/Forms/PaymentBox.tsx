import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  AccordionSummary,
  Accordion,
  AccordionDetails,
} from "@mui/material";

import React from "react";
import CardPaymentForm from "./CardPaymentForm";
import SwishForm from "./SwishForm";
import KlarnaForm from "./KlarnaForm";
import { paymentOptions, Payment } from "../../Api/Data";
import { FormikProps } from "formik";
import { OrderData } from "./OrderForm";

interface Props {
  formikProps: FormikProps<OrderData>;
}

function PaymentBox(props: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(index);
    props.formikProps.setFieldValue("paymentMethod", index);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="Shipping options list">
        {paymentOptions.length !== 0 &&
          paymentOptions.map((payment: Payment, index) => (
            <ListItemButton
              key={payment.id}
              selected={selectedIndex === payment.id}
              onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                handleListItemClick(event, payment.id)
              }
            >
              <Accordion
                sx={{
                  boxShadow: 0,
                  margin: 0,
                  bgcolor: "transparent",
                  padding: 0,
                  border: "none",
                }}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={payment.logo} alt={`${payment.name} logo`} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={payment.name}
                    secondary={`${payment.altText}`}
                  ></ListItemText>
                </AccordionSummary>
                <AccordionDetails>
                  {selectedIndex === "klarna" && (
                    <KlarnaForm formikProps={props.formikProps} />
                  )}
                  {selectedIndex === "swish" && (
                    <SwishForm formikProps={props.formikProps} />
                  )}
                  {selectedIndex === "card" && (
                    <CardPaymentForm formikProps={props.formikProps} />
                  )}
                </AccordionDetails>
              </Accordion>
            </ListItemButton>
          ))}
      </List>
    </Box>
  );
}

export default PaymentBox;
