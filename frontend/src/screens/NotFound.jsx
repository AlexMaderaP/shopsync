import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <Row>
          <h1 className="text-center mb-2">404</h1>
          <Message>
            The page you are looking for doesn't exist or has been moved.
          </Message>
          <Button
            onClick={goBackHandler}
            style={{ width: "20%", margin: "auto" }}
          >
            Go Home
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
