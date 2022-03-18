import { Button, Container } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <Container maxWidth="xl">
      <Link to="/">
        <Button startIcon={<ArrowBackIcon />}>Tillbaka till startsidan</Button>
      </Link>
    </Container>
  )
}

export default AdminPage
