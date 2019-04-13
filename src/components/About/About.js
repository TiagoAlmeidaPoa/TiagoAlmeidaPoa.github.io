import React from "react";
import AboutStyle from './About.module.css';

const about = props => {
  const { name, age, children, changed } = props;

  return (
    <div className={[
        AboutStyle.Person, 
        AboutStyle.teste, 
        'container-background'
      ].join(' ')}>
      <h1> I'm {name}</h1>
      <p> I am {age} years old</p>
      { children }
      <input type="text" onChange={changed} /> 
    </div>
  );
};
export default about;