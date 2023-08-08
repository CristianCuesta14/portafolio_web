import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Cristian Cuesta </span>
            de <span className="purple"> Medellin, Colombia.</span>
            <br />
            Estudiante de programación (IMSc) Soy un profesional con experiencia
            en ventas, servicio al cliente y manejo de equipos
            <br />
            Mi experiencia en ventas me ha enseñado a entender las necesidades
            de los usuarios y clientes, lo que se refleja en mis habilidades
            para crear aplicaciones web centradas en el usuario.
            <br />
            <br />
            ¡Además de programar, hay otras actividades que me encanta hacer!{" "}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leer
            </li>
            <li className="about-activity">
              <ImPointRight /> Estudiar
            </li>
            <li className="about-activity">
              <ImPointRight /> Deportes extremos
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar fútbol
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Se esa persona que marca la diferencia! y no solo hablo de código."{" "}
          </p>
          <footer className="blockquote-footer">Cristian C.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
