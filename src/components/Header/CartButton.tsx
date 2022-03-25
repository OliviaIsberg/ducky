import { Button, Badge, Popover, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import CartList from '../CartList'

function CartButton() {
  const { cart } = useCart()
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
        {cart?.length > 0 ? (
          <CartList />
        ) : (
          <Typography variant="body2">Du har inget i kundkorgen</Typography>
        )}

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
