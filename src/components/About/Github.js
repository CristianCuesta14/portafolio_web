import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días interactuando con <strong className="purple">GitHub</strong>.{" "}
      </h1>
      <GitHubCalendar
        username="CristianCuesta14"
        blockSize={15}
        blockMargin={5}
        color="#228B22"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
