import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Screenshot_1.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/Screenshot_2.png";
import chatify from "../../Assets/Projects/Screenshot_3.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              technologies="React js, Node js, Material UI, Firebase Authentication, Crud Operation"
              title="Let’s Travel (Full-Stack)"
              description="1. Users can see all the tours and reviews without login. <br/>
              2. Registered users can book tours, add destinations and delete tours.
              3. Admin can manage all things (Add new Admins, Add Events, Manage Events, Confirm Orders and Delete Users etc.)
              4. Admin user: admin@admin.com password: 123456."
              link="https://github.com/surid-s/Lets-Travel-cleint"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              technologies="React js, Node js, Material UI, Firebase Authentication, Crud Operation, React Hook Form"
              title="Royal Enfield (Full Stack)"
              description="
              1. Users can see all the bikes and reviews without login.
              2. Registered users can order bikes, see details and delete orders.
              3. Admin can manage all things (Add new Admins, Add New Bikes, Manage Orders, Confirm Orders and Delete Users etc.)."
              link="https://github.com/surid-s/Royal-Enfield-Client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              technologies="React js, React Dom Bootstrap, React Hook Form, Firebase Authentication, Font Awesome"
              title="OXY GYM "
              description="
              1. Login/Sign Up
              2. Booking Appointment
              3. Private Routes"
              link="https://github.com/surid-s/OXY_GYM"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
