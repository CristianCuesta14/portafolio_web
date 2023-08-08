import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgPI from "../../Assets/imgPi.png";
import profinder from "../../Assets/bgProfinder.png";
import bitsOfCode from "../../Assets/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Trabajos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son Algunos de mis trabajos recientes
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profinder}
              isBlog={false}
              title="ProFinder"
              description="ProFinder es una web que conecta a profesionales con potenciales clientes. Tendrás tu propia dashboard, ya sea como profesional, cliente o administrador. ProFinder está desarrollada en el frontend con React, Redux, JavaScript y ChakraUI, mientras que en el backend se utiliza Node.js, Express y PostgreSQL. ProFinder cuenta con funcionalidades como inicio de sesión con Google, dark mode, filtros, Mercado Pago y muchas más."
              ghLink="https://github.com/CristianCuesta14/Profinder-"
              demoLink="https://profinder-client.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My Portfolio"
              description="Este es mi portafolio web hecho con JavaScript vanilla,
              que muestra una selección de mis proyectos y habilidades en desarrollo web. He diseñado cada aspecto del portafolio con cuidado para asegurarme de que represente fielmente mi estilo y personalidad como desarrollador.              
              En mi portafolio, podrás explorar los proyectos en los que he trabajado, destacando mi experiencia en JavaScript, React.Js, Node.Js HTML y CSS, así como otras tecnologías relevantes."
              ghLink="https://github.com/CristianCuesta14/portafolio_web"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgPI}
              isBlog={false}
              title="Videogames library"
              description="Videogames library está desarrollada en el Frontend con React.Js, JavaScript, Redux y CSS. En el backend, su desarrollo fue realizado con Node.js, Express y PostgreSQL, utilizando Sequelize como ORM. En Videogames library podrás obtener toda la información de tu videojuego favorito, con filtros de búsqueda y ordenamiento que te facilitarán la interacción con la página. ¡Además, podrás crear tu propio videojuego! ¿Y tú, qué esperas para visitar la mejor librería de videojuegos?"
              ghLink="https://github.com/CristianCuesta14/PI-Videogames-main"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
