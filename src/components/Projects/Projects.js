import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          I miei <strong className="purple">progetti</strong>
        </h1>
        <p style={{ color: "white" }}>
          Alcuni progetti a cui, a titolo personale o professionale, mi sono dedicato.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GeoViaggi"
              description="Un'app che ti permette di visualizzare l'itinerario e gli approfondiemnti di ogni tappa di un viaggio già pianificato. L'app è scritta in Flutter."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AgroSentinel"
              description="Una Web Application che permette di scaricare e visualizzare NDVI, NDRE o GCI di un area. Viene visualizzato il layer sulla mappa e la serie storica per l'intervallo temporale selezionato. E' possibile selezionare dei parametri di validità per cui la vegetazione di interesse viene considerata valida. I dati utilizzati sono quelli del progetto europeo Sentinel-2."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AirMonitor"
              description="Un progetto di microelettronica in cui tramite alcuni sensori che comunicano per mezzi di Arduino sono in gradi di rilevare la qualità dell'aria. La centralina è anche dotata di un sensore elettrochimico per il CO."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ITWallet"
              description="Software per la raccolta di attestati emessi dalla Regione e la successiva pubblicazione nel sistema pubblico ITWallet. Il software è utilizzabile in diversi uffici in quanto è configurabile l'input dei dati; questa soluzione permette di avere un solo software flessibile per diverse esigenze, azzerando la ridondanza di codice e logica."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CargoFlow"
              description="*Work In Progress*. Software gestionale e DSS per la logistica su gomma."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
