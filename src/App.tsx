import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Footer } from "./commons/components/footer/footer";
import { Reservation } from "./pages/reservation/reservation";
import { About } from "./pages/about/about";
import { Navbar } from "./commons/components/navbar/navbar";
import { Menu } from "./pages/menu/menu";
import { AuthPage } from "./pages/form/form";
import { Box } from "@mui/material";
import { ProfilePage } from "./commons/components/profile/profile";
import { OrderPage } from "./pages/order-online/order-online";

const App = () => {
  return (
    <BrowserRouter>
      {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            {/* index is same thing as path="/" */}
            <Route path="little-lemon-restaurant" element={<Home />} />
            <Route path="little-lemon-restaurant/about" element={<About />} />
            <Route
              path="little-lemon-restaurant/reservation"
              element={<Reservation />}
            />
            <Route
              path="little-lemon-restaurant/login"
              element={<AuthPage />}
            />
            <Route path="little-lemon-restaurant/menu" element={<Menu />} />
            <Route
              path="little-lemon-restaurant/profile"
              element={<ProfilePage />}
            />
            <Route
              path="little-lemon-restaurant/order-online"
              element={<OrderPage />}
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export { App };
