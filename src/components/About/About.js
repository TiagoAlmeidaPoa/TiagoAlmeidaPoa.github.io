import React, { useState } from "react";
import AboutStyle from './About.module.css';
import Carousel from 'react-bootstrap/Carousel';
import ImagemHtml from   './imagens/html5.png'
import ImagemCss from   './imagens/css3.png'
import ImagemJs from   './imagens/js.png'



const about = props => {

  const [ skillState, setSkilState] = useState({
    skills: [
      { 
        title: 'HTML',
        classText: AboutStyle.html5,
        img: ImagemHtml,
        altImage: 'html slide',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
      Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
      Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
       sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
        Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
      },
      { 
        title: 'CSS',
        classText: AboutStyle.css3,
        img: ImagemCss,
        altImage: 'css slide',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
      Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
      Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
       sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
        Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
      },
      { 
        title: 'javaScript',
        classText: AboutStyle.js,
        img: ImagemJs,
        altImage: 'javaScript slide',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet rhoncus erat. 
      Nunc convallis convallis lacinia. Nunc eleifend enim in nunc sodales consequat. 
      Praesent at lacus lobortis, tincidunt mi id, rhoncus nisl. Aenean est orci, ultrices at odio eu,
       sagittis fringilla nunc. Cras pellentesque ante lectus, sed viverra elit cursus non.
        Praesent eros leo, consectetur ac auctor vitae, ullamcorper a diam. `
      },
    ]
  }) 

  const renderSkills = () => {
    return skillState.skills.map(skill => {
      return (
        <Carousel.Item>
          <div  className={[AboutStyle.containerSkill]}>
            <img
              src={skill.img}
              alt={skill.altImage}
            />
            <Carousel.Caption className={[skill.classText].join(" ")}>
              <h3>{skill.title}</h3>
              <p >{skill.description} </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>      
    )
    })
  }
  return (
    <div className={[AboutStyle.container].join(" ")}>     
      <h1>Frontend Knowledge</h1>
      <div className={[AboutStyle.containerCarrousel]}>
      <Carousel>
        { renderSkills() }
      </Carousel>
      </div> 
    </div>
  
  );
};
export default about;

//exemplo