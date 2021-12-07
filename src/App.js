import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navbar/Navigation";
import { Route, Switch } from "react-router-dom";
import NotMatch from "./Components/NotMatch/NotMatch";
import React from "react";
import Holder from "./Components/Card/Holder.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" end="to">
          <Hero />
          <Main />
          <Footer />
        </Route>
        <Route path="/about">
          <Holder />
        </Route>
        <Route path="/contact"></Route>

        {/* <Route path="*">
          <NotMatch />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
