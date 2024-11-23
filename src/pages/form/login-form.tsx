import React, { useState } from "react";
import { login } from "./authService";
import {
  FormContainer,
  FormFields,
  StyledTextField,
  ErrorText,
} from "./form.styles";
import { ComButton } from "../../commons/style/style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login Successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <FormContainer>
      {/* <FormTitle variant="h4">Login</FormTitle> */}
      <FormFields>
        <StyledTextField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <StyledTextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
      </FormFields>
      {error && <ErrorText>{error}</ErrorText>}
      <ComButton onClick={handleLogin}>Login</ComButton>
    </FormContainer>
  );
};

export { Login };
