import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Footer } from "./commons/components/footer/footer";
import { Reservation } from "./pages/reservation/reservation";
import { About } from "./pages/about/about";
import { Underconstruction } from "./pages/underconstruction";
import { RightNav } from "./commons/components/navbar/rightNav";
import { Menu } from "./pages/menu/menu";

const App = () => {
  return (
    <BrowserRouter>
      {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
      <RightNav />
      <main>
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
            element={<Underconstruction />}
          />
          <Route path="little-lemon-restaurant/menu" element={<Menu />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export { App };
