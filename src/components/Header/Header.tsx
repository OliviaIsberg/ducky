import {
  Box,
  Tabs,
  Tab,
  Container,
  Badge,
  Popover,
  Button,
  ListItem,
  List,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { useCart } from '../../contexts/ProductsInCartContext'
import React from 'react'
import { Product } from '../../Api/Data'
import { useUser } from "../../contexts/UserContext";
import AdminBar from "./AdminBar";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart()
  let navigate = useNavigate()
  const [value, setValue] = useState('/')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const {user, logout} = useUser();

  return (
    <>
    {!!user?.isAdmin && <AdminBar/>}
    
    <Container maxWidth="md" sx={{ marginBottom: "2rem" }}>
      <Box sx={{ width: "100%" }}>{/* logo här */}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="/" label="Hem" />
          <Tab value="products" label="Produkter" />
          <Tab value="about" label="Information" />
          {!user && <Tab value="login" label="Logga in" />}
          {!!user && (
            <Tab
              value="login"
              label="Logga ut"
              onClick={() => logout()}
            />
          )}
        </Tabs>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <AccountCircleIcon color="action" />
          {!!user && (
            <h3>Välkommen in {user?.username}</h3>
          )}

          <Button
            variant="contained"
            aria-describedby={id}
            onClick={handleClick}
          >
            Din kundkorg
            <Badge badgeContent={cart?.length} color="info" showZero>         
              <ShoppingCartIcon color="action" />
            </Badge>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              {cart.length !== 0 ? (
                cart.map((product: Product) => (
                  <ListItem key={product.id}>
                    <Typography variant="body2">{product.title}</Typography>
                    <Tooltip title="Ta bort">
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: product,
                          })
                        }}
                      >
                        <RemoveCircleIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2">
                  Du har inget i kundkorgen
                </Typography>
              )}
            </List>

            {cart.length !== 0 && (
              <Link to="cartPage" onClick={handleClose}>
                <Button variant="contained">Till kundkorgen</Button>
              </Link>
            )}
          </Popover>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Header;
