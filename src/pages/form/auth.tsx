import React, { useState } from "react";
import {
  login,
  loginWithGoogle,
  signup,
} from "../../commons/context/authService";
import { ComButton } from "../../commons/style/style";
import {
  FormContainer,
  FormFields,
  StyledTextField,
  ErrorText,
} from "./form.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Auth = ({ isSignup }: { isSignup: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Dispatch to Redux

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await signup(email, password, dispatch); // For signup
        alert("Signup Successful!");
      } else {
        await login(email, password, dispatch); // For login
        alert("Login Successful!");
      }
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      navigate(redirectPath);
    } catch (err: any) {
      setError(err.message); // Handle error
    }
  };

  const handleGoogleAuth = async () => {
    try {
      if (isSignup) {
        await loginWithGoogle(dispatch); // Google signup
        alert("Signup Successful with Google!");
      } else {
        await loginWithGoogle(dispatch); // Google login
        alert("Login Successful with Google!");
      }
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      navigate(redirectPath);
    } catch (err: any) {
      setError("Something went wrong. Please try again."); // Handle error
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
      <ComButton onClick={handleAuth}>
        {isSignup ? "Signup" : "Login"}
      </ComButton>
      <ComButton
        variant="outlined"
        color="primary"
        onClick={handleGoogleAuth}
        style={{ marginTop: "16px", width: "100%", maxWidth: "400px" }}
      >
        Continue with Google
      </ComButton>
    </FormContainer>
  );
};

export { Auth };
