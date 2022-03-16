import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Avatar, ListItemAvatar } from "@mui/material";
import React from "react";
import postnord from '../../assets/ShippingLogos/postnord-short.svg'
import schenker from '../../assets/ShippingLogos/schenker-square.jpg'
import instabox from '../../assets/ShippingLogos/instabox-short.png'
function ShipmentBox(){

    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (

    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    
  };
  return(
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="Shipping options list">
          {/* Postnord */}
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemAvatar>
          <Avatar alt="Postnord logotyp" src={postnord} />
        </ListItemAvatar>
            <ListItemText
              primary="Postnord"
              secondary="Leverans i brevlådan 1-3dagar - 19kr"
            />
          </ListItemButton>
          <Divider />

          {/* Schenker */}
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemAvatar>
          <Avatar alt="Schenker logotyp" src={schenker} />
        </ListItemAvatar>
            <ListItemText primary="Schenker" 
            secondary="Spårbar leverans 1-2dagar - 29kr"/>
          </ListItemButton>
          <Divider />

          {/* Instabox */}
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemAvatar>
          <Avatar alt="Instabox logotyp" src={instabox} />
        </ListItemAvatar>
            <ListItemText primary="Instabox" 
            secondary="Leverans till box 1-2dagar - 29kr"
            />
          </ListItemButton>
          <Divider />
        </List>
      </Box>
      )
}

export default ShipmentBox