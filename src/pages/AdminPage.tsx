import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  List,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link } from 'react-router-dom';
import { ProductContext, useProduct } from '../contexts/ProductsContext';
import AdminPageAccordion from '../components/AdminPageAccordion';
import { ProductActions, ProductTypes } from '../contexts/Reducers';

function AdminPage() {
  const { products, dispatch, deleteProduct } = useProduct();

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
          {products.map((p, i) => {
            return (
              <AdminPageAccordion
                key={i}
                product={p}
                deleteProduct={deleteProduct}
                dispatch={(productTypes: ProductActions) =>
                  dispatch(productTypes)
                }
              />
            );
          })}
          <Button onClick={() => console.log('hejsan')}>
            Lägg till ny produkt
          </Button>
        </List>
      </Box>
    </Container>
  );
}

export default AdminPage;
