import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import addDays from "date-fns/addDays";
import format from "date-fns/format";
import sv from "date-fns/locale/sv";
import { FormikProps } from "formik";
import React from "react";
import { Delivery, deliveryOptions } from "../../Api/Data";
import { OrderData } from "./OrderForm";

interface Props {
  formikProps: FormikProps<OrderData>;
}

function ShipmentBox(props: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelectedIndex(index);
    props.formikProps.setFieldValue("shippingMethod", index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="Shipping options list">
        {deliveryOptions.length !== 0 &&
          deliveryOptions.map((delivery: Delivery) => (
            <>
              <ListItemButton
                key={delivery.id}
                selected={selectedIndex === delivery.id}
                onClick={(
                  event: React.MouseEvent<HTMLDivElement, MouseEvent>
                ) => handleListItemClick(event, delivery.id)}
              >
                <ListItemAvatar>
                  <Avatar src={delivery.logo} alt={`${delivery.name} logo`} />
                </ListItemAvatar>

                <ListItemText
                  primary={delivery.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                      >{`${delivery.altText}`}</Typography>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                      >{`Leveranskostnad: ${delivery.price} kr`}</Typography>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="body2"
                      >{`Senaste datum för leverans: ${format(
                        addDays(new Date(), delivery.shippingTime),
                        "d MMMM",
                        { locale: sv }
                      )}`}</Typography>
                    </>
                  }
                />
              </ListItemButton>
            </>
          ))}
      </List>
    </Box>
  );
}

export default ShipmentBox;
