import React, { props, useState } from "react";
import styles from "./Cards.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    // <div className={styles.main}>

    //   <div className={styles.cont}>Kartica</div>
    // </div>

    <Card style={{ width: "auto", margin: "10px" }}>
      {/* <Card.Img variant="top" src="holder.jsx/100px180" /> */}
      <Card.Img variant="top" src={props.apiData.urlToImage} />
      <Card.Body>
        <Card.Title className={styles.card__title}>
          {props.apiData.title}
        </Card.Title>
        <Card.Text>{props.apiData.description}</Card.Text>
        <Button variant="primary" href={props.apiData.url}>
          Istrazi
        </Button>
      </Card.Body>
    </Card>
    // <Card style={{ width: "auto", margin: "10px" }}>
    //   {/* <Card.Img variant="top" src="holder.jsx/100px180" /> */}
    //   <Card.Img variant="top" src={props.apiData.image} />
    //   <Card.Body>
    //     <Card.Title className={styles.card__title}>
    //       {props.apiData.title}
    //     </Card.Title>
    //     <Card.Text>{props.apiData.description}</Card.Text>
    //     <Button variant="primary" href={props.apiData.link}>
    //       Istrazi
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default Cards;
