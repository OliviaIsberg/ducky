import { Box, Tabs, Tab, Container, Badge } from "@mui/material";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useUser } from "../../contexts/UserContext";
import { useCart } from "../../contexts/ProductsInCartContext";
import AdminBar from "./AdminBar";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { cart } = useCart();
  let navigate = useNavigate();
  const [value, setValue] = useState("/");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  const {user, logout} = useUser();
  return (
    <>
    {!!user?.isAdmin && <AdminBar/>}
    
    <Container maxWidth="md" sx={{ marginBottom: "2rem" }}>
      <Box sx={{ width: "100%" }}>{/* logo här */}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
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
          <Tab value="products" label="Produkter" />
          <Tab value="about" label="Information" />
          {!user && <Tab value="login" label="Logga in" />}
          {!!user && (
            <Tab
              value="login"
              label="Logga ut"
              onClick={() => logout()}
            />
          )}
        </Tabs>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <AccountCircleIcon color="action" />
          {!!user && (
            <h3>Välkommen in {user?.username}</h3>
          )}
          <Link to="cartPage">
            <Badge badgeContent={cart?.length} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Header;
