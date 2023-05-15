import React from "react";
import "./contact.css";


const Contact = () => {
    return(
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Para Contato!</h2>
            <br></br>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Vamos conversar sobre tudo!</h3>

                    <p className="contact__details">Também podendo entrar em contato por email 🤳🏼.
                    </p>

                    <p className="contact__git">Para verificar meus trabalhos, clique no ícone do Github na 'home'</p>
                </div>
            </div>
        </section>
    )
}

export default Contact;