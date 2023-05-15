import React from "react";
import "../about/about.css";
import bianca from "../assets/bianca.png"

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">Sobre</h2>
<br/>
            <div className="about__container grid">
            <img src={bianca} alt="" className="about__img" />
               

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Prazer! Me chamo Bianca Vitória de Paula Silva, tenho 17 anos. Estou no último ano do ensino médio tecnico (Etec Ermelinda Giannini Teixeira), mas 
                        meu objetivo é cursar Direito. Além disso, estou apta a adquirir novos conhecimentos e procuro atender as necessidades de uma empresa com excelência e responsabilidade.</p>
                    <br></br>
                        <a href="https://www.canva.com/design/DAFgWqQPB_Q/z84BZ4JvRLv80udFEutLFw/edit?utm_content=DAFgWqQPB_Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="btn">Ver Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About