import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navbar/Navigation";
import { Route, Switch } from "react-router-dom";
import NotMatch from "./Components/NotMatch/NotMatch";
import React from "react";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

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
          <About />
          <Footer />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>

        {/* <Route path="*">
          <NotMatch />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
