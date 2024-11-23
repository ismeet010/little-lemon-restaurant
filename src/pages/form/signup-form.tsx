import React, { useState } from "react";
import { signup } from "./authService";
import { ComButton } from "../../commons/style/style";
import {
  FormContainer,
  FormFields,
  StyledTextField,
  ErrorText,
} from "./form.styles";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("Signup Successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <FormContainer>
      <FormFields>
        <StyledTextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <StyledTextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormFields>
      {error && <ErrorText style={{ color: "red" }}>{error}</ErrorText>}
      <ComButton onClick={handleSignup}>Signup</ComButton>
    </FormContainer>
  );
};

export { SignUp };
