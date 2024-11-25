import React, { useState } from "react";
import { login, loginWithGoogle } from "../../commons/context/authService";
import {
  FormContainer,
  FormFields,
  StyledTextField,
  ErrorText,
} from "./form.styles";
import { ComButton } from "../../commons/style/style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Login Successful!");
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      navigate(redirectPath);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      navigate(redirectPath);
      // alert("Login Successful with Google!");
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <FormContainer>
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
      <ComButton
        variant="outlined"
        color="primary"
        onClick={handleGoogleLogin}
        style={{ marginTop: "16px", width: "100%", maxWidth: "400px" }}
      >
        Continue with Google
      </ComButton>
    </FormContainer>
  );
};

export { Login };
