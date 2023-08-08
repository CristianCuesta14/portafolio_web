import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home2.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
              DÉJAME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me enamoré de la programación y he aprendido al menos algo,
              creo... 🤷‍♂️
              <br />
              Tengo Conocimientos en
              <i>
                <b className="purple"> Javascript, React.Js, Node.Js.</b>
              </i>
              <br /> <br />
              Soy una persona con una gran capacidad comunicativa, me gusta
              siempre escuchar a los demás, absorber todo lo bueno y dar mi
              propuesta de valor.
              <br /> <br />
              Mis campos de interés incluyen la construcción de nuevas&nbsp;{" "}
              <i>
                <b className="purple">Tecnologías y Productos Web </b>
              </i>
              <br />
              Me apasiona estar aprendiendo siempre cosas nuevas. Actualmente
              estoy aprendiendo <b className="purple">Inglés</b>&nbsp;y&nbsp;
              <i>
                <b className="purple">Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ borderRadius: "10%" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">contactarme</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CristianCuesta14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/cristiancuestabenitez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=3053057850"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
