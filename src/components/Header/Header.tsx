import { Box, Tabs, Tab, Container, Button } from '@mui/material';
import { FC, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import { useUser } from '../../contexts/UserContext';
import AdminBar from './AdminBar';
import CartButton from './CartButton';

interface HeaderProps {}

const TabValues: string[] = ['/', '/products', '/about'];

const filteredValue = (value: string) =>
  TabValues.includes(value) ? value : false;

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(filteredValue(useLocation().pathname));

  const currentLocation = filteredValue(useLocation().pathname);
  if (currentLocation !== value) {
    setValue(currentLocation);
  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  const { user, logout } = useUser();

  return (
    <>
      {!!user?.isAdmin && <AdminBar />}

      <Container maxWidth="md" sx={{ marginBottom: '2rem' }}>
        {!!user && <h3>Välkommen in {user?.username}</h3>}
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
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="/" label="Hem" />
            <Tab value="/products" label="Produkter" />
          </Tabs>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {!user ? (
              <Link to="/login">
                <Button
                  variant="outlined"
                  endIcon={<AccountCircleIcon color="warning" />}
                >
                  Logga in
                </Button>
              </Link>
            ) : (
              <Button
                variant="outlined"
                endIcon={<AccountCircleIcon color="success" />}
                onClick={() => logout()}
              >
                Logga ut
              </Button>
            )}

            <CartButton />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Header;
