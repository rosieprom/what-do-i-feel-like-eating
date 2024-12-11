/** @jsxImportSource theme-ui */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import LikedRecipes from "./pages/LikedRecipes";
import Footer from "./components/Footer";
import { Container } from "theme-ui";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
      }}
    >
      <Navigation />
      <main
        sx={{
          mx: [4, 20, 30],
          flex: 1,
          display: "flex",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/about" element={<About />} />
          <Route path="/liked-recipes" element={<LikedRecipes />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
