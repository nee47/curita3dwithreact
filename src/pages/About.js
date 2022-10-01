import React from "react";

function About() {
  return (
    <>
      <article className="aboutus-container">
        <div className="aboutus__text-container">
          <h2>Acerca de nosotros</h2>
          <p>
            Somos un pequeño emprendimiento de impresiones 3D, contamos con
            diferentes modelos populares.
          </p>
          <h2>¿Que es la impresion 3D?</h2>
          <p>
            La impresión 3D es un avance muy importante de tecnologías de
            fabricación por adición donde un objeto tridimensional es creado
            mediante la superposición de capas sucesivas de material.
          </p>
          <p>
            La impresión 3D permite la fabricación de productos personalizados
            que se ajustan a las necesidades de cada usuario. La personalización
            en masa es una de las tendencias en el desarrollo de productos.
          </p>
        </div>

        <div className="aboutus__img-container">
          <img
            src="https://mecaluxar.cdnwm.com/documents/20128/505075/M21P1+La+impresora+3D+es+una+tecnolog%C3%ADa+disruptiva+con+potencial+para+transformar+la+cadena+log%C3%ADstica.jpg/f1919620-686d-2e75-169f-265b23b6d4c1?t=1648198553000&e=jpg"
            alt="impresora 3d"
          />
        </div>
      </article>
    </>
  );
}

export default About;
