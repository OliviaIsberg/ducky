import {
  Button,
  Badge,
  Popover,
  List,
  ListItem,
  Typography,
  Tooltip,
  IconButton,
  ListItemText,
  ListItemAvatar,
} from '@mui/material'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { CartType, Types } from '../../contexts/Reducers'

function CartButton() {
  const { cart, dispatch } = useCart()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button variant="contained" aria-describedby={id} onClick={handleClick}>
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
        <List dense>
          {cart && cart.length > 0 ? (
            cart.map((product: CartType) => (
              <ListItem key={product.id}>
                <ListItemAvatar>
                  <img
                    src={product.imgURL}
                    alt={product.title}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={`${product.price} kr/st`}
                />
                <Tooltip title="Ta bort">
                  <IconButton
                    aria-label="delete"
                    edge="end"
                    onClick={() => {
                      dispatch({
                        type: Types.DeleteFromCart,
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
            <Typography variant="body2">Du har inget i kundkorgen</Typography>
          )}
        </List>

        {cart.length > 0 && (
          <Link to="cartPage" onClick={handleClose}>
            <Button variant="contained" fullWidth>
              Till kundkorgen
            </Button>
          </Link>
        )}
      </Popover>
    </>
  )
}

export default CartButton
