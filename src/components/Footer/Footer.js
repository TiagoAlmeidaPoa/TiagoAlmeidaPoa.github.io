import React from 'react';
import FooterStyle from "./Footer.module.css";
import logoF from "./imagens/logo.png";
import logoT from "./imagens/twitter.jpg"
import logoI from "./imagens/insta.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'



library.add(faFacebook, faLinkedin, faGithub);


const footer = props => {
    return (
        <div className={FooterStyle.footer}>
            
            {/* <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon="spinner" size="xs" /> */}

            <div className={[FooterStyle.brands]}>
                <nav>
                    <ul>
                        <li><a href="www.facebook.com.br"><FontAwesomeIcon icon={faFacebook} /></a></li>;
                        {/* <li><a href="#" class="fab fa-linkedin"></a></li>
                        <li><a href="#" class="fab fa-github"></a></li> */}
                    </ul>
                </nav>

            </div>

        </div>
    );
};
export default footer;

