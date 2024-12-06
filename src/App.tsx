/** @jsxImportSource theme-ui */
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import LikedRecipes from "./pages/LikedRecipes";

function App() {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <main
        sx={{
          mx: [5, 20, 30],
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
    </div>
  );
}

export default App;
