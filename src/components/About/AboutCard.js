import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Eccomi! Sono <span className="purple">Andrea Caggiani</span> e vengo da{" "}
            <span className="purple">Matera</span>.
            <br />
            Attualmente lavoro come{" "}
            <span className="purple">Software Developer</span> presso{" "}
            <span className="purple">Lucana Sistemi S.R.L</span>.
            <br />
            Ho conseguito una laurea triennale in{" "}
            <span className="purple">Informatica (L-31)</span> presso{" "}
            <span className="purple">l'Università di Pisa</span>.
            <br />
            <br />
            Al di fuori della programmazione, mi piace dedicarmi ad attività che
            stimolano la mia creatività.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
