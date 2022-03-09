import { Box, Tabs, Tab, Container } from '@mui/material'
import { FC, useState } from 'react'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [value, setValue] = useState('Start')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
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
          <Tab value="start" label="Start" />
          <Tab value="products" label="Products" />
          <Tab value="about" label="About" />
        </Tabs>
      </Box>
    </Container>
  )
}

export default Header
