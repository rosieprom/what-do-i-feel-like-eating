/** @jsxImportSource theme-ui */
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

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
      <main sx={{
        mx: [5, 20, 30]
      }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
