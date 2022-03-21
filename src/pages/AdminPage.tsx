import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  List,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Link } from 'react-router-dom'
import { useCart } from '../contexts/ProductsInCartContext'
import { useState } from 'react'

function AdminPage() {
  const {
    state: { products },
  } = useCart()
  const [open, setOpen] = useState(false)
  const handleOpen = (e: EventTarget) => setOpen(!open)

  return (
    <Container maxWidth="xl" sx={{ height: '100%' }}>
      <Link to="/">
        <Button startIcon={<ArrowBackIcon />}>Tillbaka till startsidan</Button>
      </Link>
      <Box
        sx={{
          height: '100%',
        }}
      >
        <List>
          {products.map((p) => (
            <Accordion>
              <AccordionSummary onClick={(e) => handleOpen}>
                <Typography>{p.title}</Typography>
                {!open ? <Button>Spara</Button> : <Button>Redigera</Button>}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{p.information}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default AdminPage
