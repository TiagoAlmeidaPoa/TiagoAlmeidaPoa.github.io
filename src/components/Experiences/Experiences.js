import experienceStyle from "./Experiences.module.css";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import imagem from './imagens/representante.jpg';
import imagem2 from './imagens/sala.jpg';
import imagem3 from './imagens/bibliotecaTi.jpg';
import imagem4 from './imagens/carris.jpg';

const experiences = props => {
    const [flashState, setFlashState] = useState({
        flash: [
            {
                img: imagem,
                altImagem: 'primeiro emprego',
                title: 'Representante comercial',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
                                        
            },
            {
                img: imagem2,
                altImagem: 'segundo emprego',
                title: 'Analista help disk (estágio)',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
                                        
            },
            {
                img: imagem3,
                altImagem: 'terceiro emprego',
                title: 'Tecnico biblioteca TI(estágio)',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
                Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
                Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
                sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
                                        
            },
            {
                img: imagem4,
                altImagem: 'ultimo emprego',
                title: 'cobrador de coletivos (carris)',
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
                        <Card.Title>{flash.title}</Card.Title>
                        <Card.Text>
                            {flash.description}
            </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    }

    return (
        <div className={experienceStyle.principal}>
            <h1>Experiences</h1>
            <div className={experienceStyle.cards}>
            {renderFlash()}
            </div>
        </div>
    );
};
export default experiences;