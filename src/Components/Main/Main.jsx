import React, { useState, useEffect } from "react";
// import Cards from "../Card/Cards";
import PaginationComp from "../Pagination/PaginationComp";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import CardContainer from "../CardContainer/CardContainer";

const categorie = [
  {
    id: 1,
    links: "",
    text: "Apple",
  },
  {
    id: 2,
    links: "tesla",
    text: "Tesla",
  },
  {
    id: 3,
    links: "bussines",
    text: "Bussines",
  },
  {
    id: 4,
    links: "headline",
    text: "Headline",
  },
  {
    id: 5,
    links: "wallstreet",
    text: "Wall Street",
  },
];

const Main = () => {
  const { url, path } = useRouteMatch();
  const [apiData, setApiData] = useState([]);
  const [teslaPost, setTeslaPost] = useState([]);
  const [bussinesPost, setBussinesPost] = useState([]);
  const [headlinePost, setHeadlinePost] = useState([]);
  const [wallStreetPost, setWallStreetPost] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2021-12-01&to=2021-12-01&sortBy=popularity&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setApiData(res.data.articles);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setTeslaPost(res.data.articles);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setBussinesPost(res.data.articles);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setHeadlinePost(res.data.articles);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ed999ddf20d849b5a110ffd2253ea708"
      );
      setWallStreetPost(res.data.articles);
    };
    getData();
  }, []);
  return (
    <Router>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>News</h1>
          <div className={styles.sections__group}>
            <div className={styles.categorie__titles}>Categories:</div>
            <div className={styles.categorie__list}>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-5"
              >
                <Tab eventKey="home" title="Home">
                  <CardContainer apiData={apiData} />
                </Tab>
                <Tab eventKey="tesla" title="Tesla">
                  <CardContainer apiData={teslaPost} />
                </Tab>
                <Tab eventKey="bussines" title="Bussines">
                  <CardContainer apiData={bussinesPost} />
                </Tab>
                <Tab eventKey="headline" title="Headline">
                  <CardContainer apiData={headlinePost} />
                </Tab>
                <Tab eventKey="wallstreet" title="Wall street">
                  <CardContainer apiData={wallStreetPost} />
                </Tab>
              </Tabs>
              {/* <ul className={styles.links}>
                {categorie.map((categories) => {
                  // if (categories.id != 1)
                  return (
                    <li key={categories.id}>
                      <Link
                        to={`${url}${categories.links}`}
                        className={styles.linkovi}
                        activeClassName={styles.active_link}
                      >
                        {categories.text}
                      </Link>
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </div>
          {/* Kartice */}
          {/* 
          <Switch>
            <Route exact path={`${path}`}>
              <CardContainer apiData={apiData} />
            </Route>
            <Route path={`${path}/tesla:Main`}>
              <CardContainer apiData={teslaPost} />
            </Route>
            <Route path="/bussines">
              <CardContainer apiData={bussinesPost} />
            </Route>
            <Route path="/headline">
              <CardContainer apiData={headlinePost} />
            </Route>
            <Route path="/wallstreet">
              <CardContainer apiData={wallStreetPost} />
            </Route>
          </Switch> */}

          {/* Kraj Kartica */
          /* ------------ */
          /* Paginacija */}
          <div className={styles.pagination}>
            <PaginationComp />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
