import { Box, Tabs, Tab, Container } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  let navigate = useNavigate()
  const [value, setValue] = useState('start')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    navigate(newValue)
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ width: '100%' }}>{/* logo här */}</Box>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="/" label="Start" />
          <Tab value="ProductListPage" label="Products" />
          <Tab value="about" label="About" />
        </Tabs>
      </Box>
    </Container>
  )
}

export default Header
