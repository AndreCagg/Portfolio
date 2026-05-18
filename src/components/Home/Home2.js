import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MI<span className="purple"> PRESENTO</span>
            </h1>
            <p className="home-about-body">
              Sono un Software Developer a cui piace trasformare le proprie idee in realtà. Il risultato sono prodotti affidabili, scalabili ed altamente personalizzabili.
              Mi piace esplorare nuove tecnologie e relativi metodi di risoluzione.
              Nasco come <b className="purple">Backend</b> Developer ma nel tempo ho imparato a lavorare ed approcciarmi come <b className="purple">Full Stack</b> Developer.
              <br />
              <br />
              Utilizzo
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C, Rust, Flutter, React, Java e Postgres{" "}
                </b>
              </i>
              <br />
              <br />
              Lavoro principalmente sulle <b className="purple">Web Applications</b> ma mi piacerebbe
              approfondire l'analisi di <b className="purple">dati GIS</b> e la <b className="purple">blockchain</b>.
              <br />
              <br />
              Sono interessato anche alla microelettronica e mi diverto alla prototipazione di sistemi con <b className="purple">Arduino</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
