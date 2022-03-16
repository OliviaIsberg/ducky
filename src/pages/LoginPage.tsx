import { Container } from "@mui/material";
import LoginForm from "../components/Forms/LoginForm";
import { useUser } from "../contexts/UserContext";

function LoginPage() {
  const userContext = useUser()

  return (
    <Container maxWidth="md">
      <h2>Logga in</h2>
      <LoginForm />
    </Container>
  );
}

export default LoginPage