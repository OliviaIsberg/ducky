import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import React from "react";
import { Delivery, deliveryOptions } from "../../Api/Data";

function ShipmentBox() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  // const {deliveryOptions, deliveryDate, setDeliveryDate} = React.useState()
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  // const date = new Date()
  // const dateResult = new Date(date)
  // dateResult.setDate(dateResult.getDate()+ deliveryOptions.shippingTime)
  // setDeliveryDate(dateResult.toLocaleDateString())

  // const calculateDeliveryCost=(

  // )

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="Shipping options list">
        {deliveryOptions.length !== 0 &&
          deliveryOptions.map((delivery: Delivery) => (
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
                  secondary={`${delivery.altText} ${delivery.price} kr`}
                />
              </ListItemButton>
          ))}
      </List>
    </Box>
  );
}

export default ShipmentBox;
