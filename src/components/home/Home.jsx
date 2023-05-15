import React from 'react';
import "./home.css";

import HeaderSocials from './HeaderSocials';
import fthome from '../assets/fthome.jpeg'
import ScrollDown from './ScrollDown';

const Home = () => {
    return(
        <section className="home container" id="home">
            <div className='intro'>
                <img src={fthome} alt="" className="home__img" />
                <h1 className='home__name'>Bianca Silva</h1>
                <span className='home__education'>Tec. Desenvolvimento de Sistemas</span>

                <HeaderSocials />

               

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home