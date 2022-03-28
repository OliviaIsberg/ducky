import { Box, Button, Container, List } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';
import { useProduct } from '../contexts/ProductsContext';
import AdminPageAccordion from '../components/AdminPageAccordion';

function AdminPage() {
  const { products, dispatch } = useProduct();

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
          {products.map((p, i) => (
            <AdminPageAccordion key={i} product={p} dispatch={dispatch} />
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default AdminPage;
