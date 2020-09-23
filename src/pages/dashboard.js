import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/navbarComponent";

const DashBoard = () => {
  const styles = {
    sidePanel: {
      border: "1px solid #000",
    },
  };
  return (
    <div>
      <NavbarComponent />
      <Container>
        <Row>
          <Col xs={6} md={4}>
            Side Panel
          </Col>
          <Col xs={12} md={8} style={styles.sidePanel}>
            Main Panel
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
