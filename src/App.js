import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navbar/Navigation";

function App() {
  return (
    <div className="App">
      <h1>Ropepe</h1>
      <Navigation />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
