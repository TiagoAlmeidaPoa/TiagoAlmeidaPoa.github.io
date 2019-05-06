import React from 'react';
import FooterStyle from "./Footer.module.css";
import logoF from "./imagens/logo.png";
import logoT from "./imagens/twitter.jpg"
import logoI from "./imagens/insta.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'



library.add({ faFacebook }, faLinkedin, faGithub);


const footer = props => {
    return (
        <div className={FooterStyle.footer}>

            <div>

                <p className="p" >&copy; 2019 </p>
            </div>
            <div >
                <nav className={[FooterStyle.brands]}>
                    <a className={[FooterStyle.face]} href="www.google.com.br"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a className={[FooterStyle.linkedin]} href="www.facebook.com.br"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a className={[FooterStyle.git]} href="www.facebook.com.br"><FontAwesomeIcon icon={faGithub} size="2x" /></a>


                </nav>

            </div>

        </div>
    );
};
export default footer;

