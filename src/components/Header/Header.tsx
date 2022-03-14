import { Box, Tabs, Tab, Container, Badge } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useUser } from '../../contexts/UserContext'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  let navigate = useNavigate()
  const [value, setValue] = useState('/')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }
  const userContext = useUser()
  return (
    <Container maxWidth="md">
      <Box sx={{ width: '100%' }}>{/* logo här */}</Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="/" label="Hem" />
          <Tab value="products" label="Produkter" />
          <Tab value="about" label="Information" />
          {!userContext.user && <Tab value="login" label="Logga in" />}
          {!!userContext.user && <Tab value="logout" label="Logga ut" />}
        </Tabs>
        <Box>
          <AccountCircleIcon />
          <h3>{userContext.user?.username}</h3>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        </Box>
      </Box>
    </Container>
  )
}

export default Header
