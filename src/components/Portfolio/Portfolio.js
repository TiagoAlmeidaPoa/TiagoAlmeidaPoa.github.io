import React, { useState } from "react";
import PortfolioStyle from "./Portfolio.module.css";
import Card from "react-bootstrap/Card";
import imagem from "./imagem/java.jpg"
import imagem2 from "./imagem/html.png"
import imagem3 from "./imagem/css.jpg"
import imagem4 from "./imagem/javaScript.jpg"



const experiences = props => {
    const [flashState, setFlashState] = useState({
        flash: [
            {
                img: imagem,
                altImagem: 'imagem java',
                title: 'JAVA',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `

            },
            {
                img: imagem2,
                altImagem: 'HTML',
                title: 'HTML',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `

            },
            {
                img: imagem3,
                altImagem: 'css',
                title: 'CSS',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `

            },
            {
                img: imagem4,
                altImagem: 'javascript',
                title: 'JAVASCRIPT',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat.
                                                                                                                                                                                                                   
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `

            },
        ]
    })
    const renderFlash = () => {
        return flashState.flash.map(flash => {
            return (
                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        alt={flash.altImagem}
                        src={flash.img} />
                    <Card.Body>
                        <div className={[PortfolioStyle.title]}>

                            <Card.Title>
                                {flash.title}
                            </Card.Title>

                        </div>

                        <div className={[PortfolioStyle.title]}>

                            <Card.Text>
                                {flash.description}
                            </Card.Text>

                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div className={PortfolioStyle.principal}>
            <h1>Habilidades técnicas</h1>
            <div className={PortfolioStyle.cards}>
                {renderFlash()}
            </div>
        </div>
    );
};
export default experiences;
