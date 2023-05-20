"use client"
import React from 'react';
import "./style.css";

const Presentation = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-4">Presentación personal</h2>
                        <p className="lead mb-4">Soy Kevin, un joven estudiante de informática radicado en Costa Rica. Me apasiona el mundo de la tecnología y me encuentro inmerso en el fascinante campo de la programación. A mis 23 años, me caracterizo por mi entusiasmo y dedicación para aprender diversas tecnologías de programación.</p>
                        <a href="https://www.linkedin.com/in/kevin-castrillo-jim%C3%A9nez-168111277/" className="btn btn-primary">Ver mi perfil de LinkedIn</a>
                    </div>
                    <div className="col-md-6">
                        <img src="https://avatars.githubusercontent.com/u/43747377?v=4" className="img-fluid" alt="Imagen de perfil" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Presentation