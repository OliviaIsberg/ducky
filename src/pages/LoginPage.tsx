import { Box, Container } from "@mui/material";
import LoginForm from "../components/Forms/LoginForm";
import { useUser } from "../contexts/UserContext";

function LoginPage() {
  const userContext = useUser()

  return (
    <Container maxWidth="md">
      <h2>Logga in</h2>
      <LoginForm />
      <Box>
        <p>To log in as admin; </p>
        <p>Username: Admin-User password: Admin</p>
        <p>To log in as user; </p>
        <p>Username: Regular-User password: User</p>
      </Box>
    </Container>
  );
}

export default LoginPage