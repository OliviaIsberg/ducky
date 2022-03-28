import { Button, Badge, Popover, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import CartList from '../CartList'

function CartButton() {
  let location = useLocation()
  const { cart } = useCart()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [active, setActive] = useState(false)

  const checkoutPageLoc = location.pathname

  useEffect(() => {
    if (checkoutPageLoc === '/checkoutPage') {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [checkoutPageLoc])

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
      <Button
        variant="contained"
        aria-describedby={id}
        onClick={handleClick}
        disabled={active}
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
        {cart?.length > 0 ? (
          <CartList handleClose={handleClose} />
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
