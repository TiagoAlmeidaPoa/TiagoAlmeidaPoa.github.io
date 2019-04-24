import experienceStyle from "./Experiences.module.css";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import imagem from './imagens/teclado.jpg';

const experiences = props => {
    const [state,setState] = useState({
        states:[
            {
                
            },
        ]
    })

  return (
      <div className={experienceStyle.principal}>
        <h1>Experiences</h1>
        <div>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagem} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
        </div>
      </div>
  );
};
export default experiences;