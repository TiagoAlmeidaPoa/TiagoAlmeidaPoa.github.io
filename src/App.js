import React, { useState} from 'react';
import About from './components/About/About'
import Header from './components/Header/Header'
import CallToAction from './components/CallToAction/CallToAction';
import Experiences from './components/Experiences/Experiences';
import Portfolio from './components/Portfolio/Portfolio';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';


const app = () => {
    const [portifolioState, setPortifolioState] = useState({
        jobs: []
      });
      
      return (
        <div>
            <Header></Header>
            <CallToAction></CallToAction>
            <About></About>
            <Experiences></Experiences>
            <Portfolio></Portfolio>
            <Contato></Contato>
            <Footer></Footer>
        </div> 
    )
}
export default app;