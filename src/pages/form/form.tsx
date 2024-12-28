import React, { useState } from "react";
import { Container, Box, Tabs, Tab, Paper } from "@mui/material";
// import { Login } from "./login-form";
// import { SignUp } from "./signup-form";
import { ComTitle } from "../../commons/style/style";
import { Auth } from "./auth";

const AuthPage: React.FC = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  // Switch between login and signup
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setAuthMode(newValue as "login" | "signup");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Box padding={4} textAlign="center">
          <ComTitle variant="h4" gutterBottom>
            {authMode === "login" ? "Login" : "Sign Up"}
          </ComTitle>
          <Tabs
            value={authMode}
            onChange={handleTabChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Login" value="login" />
            <Tab label="Sign Up" value="signup" />
          </Tabs>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px", // or use a fixed height like '400px'
              height: "100%", // Ensure full height is used
            }}
          >
            {authMode === "login" ? (
              <Auth isSignup={false} />
            ) : (
              <Auth isSignup={true} />
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export { AuthPage };
