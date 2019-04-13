import React, { useState} from 'react';
import About from './components/About/About'
// import Header from '.Header'
// import Experiences from './Experiences'
// import Portfolio from './Portfolio'
// import Contato from './Contato';
// import Footer from './Footer';


const app = () => {
    const [portifolioState, setPortifolioState] = useState({
        jobs: []
      });
      
      return (
        <div>
            {/* <Header></Header> */}
            <About></About>
            {/* <Experiences></Experiences>
            <Portfolio></Portfolio>
            <Contato></Contato>
            <Footer></Footer> */}
        </div> 
    )
}
export default app;