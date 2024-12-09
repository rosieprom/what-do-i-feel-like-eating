/** @jsxImportSource theme-ui */
import React from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/liked-recipes">
            <LikedRecipes />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
