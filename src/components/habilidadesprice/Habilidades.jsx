import React from "react";
import './habilidades.css'

const Habilidades = () => {
    return (
       <section className="pricing container section" id="cursos">
        <h2 className="section__title">Cursos</h2>
        <br></br>

        <div className="pricing__container grid">
            <div className="pricing__item">
                <h3 className="pricing__plan"> Desenvolvimento de Sistemas</h3>
                <p className="pricing__title"> Ensino Técnico 2021/2023- Etec Ermelinda Giannini Teixeira</p>
               
            </div>

            <div className="pricing__item">
                <h3 className="pricing__plan">Criação de site </h3>
                <p className="pricing__title"> HTML </p>
                <p className="pricing__support">2020/2021- Cursos Bradesco </p>
               
            </div>

            <div className="pricing__item">
                <h3 className="pricing__plan">Panilhas Excel</h3>
                <p className="pricing__title">Criação de planilhas para empresas etc...</p>
                <p className="pricing__support">2023/2023- Cursos Bradesco</p>
               
            </div>

        </div>
       </section>
    )
}
export default Habilidades