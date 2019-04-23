import React from "react";
import AboutStyle from './About.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ImagemHtml from   './imagens/html5.png'
import ImagemCss from   './imagens/css3.png'
import ImagemJs from   './imagens/js.png'



const about = props => {

  return (
    <div className={[AboutStyle.container].join(" ")}>
      <h1>front end knowledge</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="./d-block w-25 "
            src={ImagemHtml}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className={[AboutStyle.html5].join(" ")}>HTML5</h3>
            <p className={[AboutStyle.html5].join(" ")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
              Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
              Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
               sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
                Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="./d-block w-25"
            src={ImagemCss}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className={[AboutStyle.css3].join(" ")}>CSS3</h3>
            <p className={[AboutStyle.css3].join(" ")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
              Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
              Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
              sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
              Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-24"
            src={ImagemJs}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className={[AboutStyle.js].join(" ")}>JavaScript</h3>
            <p className={[AboutStyle.js].join(" ")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
              Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
              Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
              Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default about;

//exemplo