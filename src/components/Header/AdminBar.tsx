import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function AdminBar() {
  return (
    <Container
      sx={{
        minWidth: '100vw',
        margin: 0,
        marginBottom: '2rem',
        bgcolor: 'turquoise',
      }}
    >
      <Link to="/admin">
        <Box sx={{ width: '100%', padding: '0.3rem' }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Du är inloggad som administatör - Klicka här för att gå till
            Admin-sidan
          </Typography>
        </Box>
      </Link>
    </Container>
  )
}

export default AdminBar
