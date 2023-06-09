import React from "react";
import "./education.css";
import educ1 from "../assets/educ1.png";
import educ2 from "../assets/educ2.png";

const data = [
    {
        id: 1,
        image:educ1,
        title: "Emeif Rada Smaili",
        description:
            "Escola de ensino fundamental, localizada em araçariguama."
    },
    {
        id: 2,
        image: educ2,
        title: "Ermerlinda Giannini Teixeira",
        description:
            "Escola de ensino técnico, localizada em Santana de Parnaíba, na qual estou terminando o 3 ano ."
    },
];


const Education = () => {
    return (
        <section className="education container section" id="education">
            <h2 className="section__title">Educação</h2>
<br/>

            <div className="education__container grid">
                {data.map(({id, image, title, description}) => {
                    return(
                        <div className="education__card" key={id}>
                            <img src={image} alt="" className="education__img" />

                            <h3 className="education__title">{title}</h3>
                            <p className="education__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Education