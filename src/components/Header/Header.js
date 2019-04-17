import React from "react";
import Nav from "react-bootstrap/Nav";
import HeaderStyle from "./Header.module.css";
import react from "./imagens/react.png";

const header = props => {
  return (
    <div className={[HeaderStyle.container].join(" ")}>
      <img src={react} alt="teste" className={HeaderStyle.react} />
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">informações</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">contato</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">experiencias</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    
  );
};
export default header;
