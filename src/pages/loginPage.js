import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

const LoginPage = () => {
  const styles = {
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    card: {
      marginTop: "100px",
    },
  };
  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <Card.Body>Login</Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;
