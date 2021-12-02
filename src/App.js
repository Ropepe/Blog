import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Navbar/Navigation";
import { Route, Switch } from "react-router-dom";
import NotMatch from "./Components/NotMatch/NotMatch";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [apiData, setApiData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setApiData(res.data.articles);
    };
    getData();
  }, []);
  console.log(apiData);

  // console.log(apiData);
  //TESTNI PODACI
  // const [apiData, setApiData] = useState([
  //   {
  //     id: 1,
  //     title: "Prva vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image:
  //       "https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg",
  //     link: "/prva_vijest",
  //   },
  //   {
  //     id: 2,
  //     title: "Druga vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image: "https://ak.picdn.net/shutterstock/videos/6137669/thumb/1.jpg",
  //     link: "/druga_vijest",
  //   },
  //   {
  //     id: 3,
  //     title: "Treca vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image:
  //       "https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg",
  //     link: "/treca_vijest",
  //   },
  //   {
  //     id: 4,
  //     title: "Cetvrta vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image:
  //       "https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg",
  //     link: "/cetvrta_vijest",
  //   },
  //   {
  //     id: 5,
  //     title: "Peta vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image:
  //       "https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg",
  //     link: "/peta_vijest",
  //   },
  //   {
  //     id: 6,
  //     title: "Sesta vijest",
  //     description:
  //       "Tekst koji bi trebao da bude jako dug da bi testirali kako to izgleda",
  //     image:
  //       "https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg",
  //     link: "/sesta_vijest",
  //   },
  // ]);
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Main apiData={apiData} />
          <Footer />
        </Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
