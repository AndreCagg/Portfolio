import React from "react";
import { Col, Row } from "react-bootstrap";
import windows from "../../Assets/TechIcons/windows.png";
import ubuntu from "../../Assets/TechIcons/ubuntu.png";
import firefox from "../../Assets/TechIcons/firefox.png";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import sts from "../../Assets/TechIcons/sts.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ubuntu} alt="Ubuntu" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={firefox} alt="Firefox" className="tech-icon-images" />
        <div className="tech-icons-text">Firefox</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={sts} alt="sts" className="tech-icon-images" />
        <div className="tech-icons-text">STS</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
