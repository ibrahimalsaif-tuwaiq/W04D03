import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Cards from "./components/Cards";
import Card from "./components/Card";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/cards" component={Cards}/>
      <Route exact path="/card/:id" component={Card}/>
      <Route exact path="*" component={NotFound}/>
      </Switch>
    </>
  );
};

export default App;
