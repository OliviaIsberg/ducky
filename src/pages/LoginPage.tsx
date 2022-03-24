import { Box, Container } from "@mui/material";
import LoginForm from "../components/Forms/LoginForm";

function LoginPage() {
  return (
    <Container maxWidth="md">
      <h2>Logga in</h2>

      {/* Log in form with username and password */}
      <LoginForm />

      {/* just for development, remove before "real" launch. */}
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