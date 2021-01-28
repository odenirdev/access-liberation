import React from "react";
import { Row, Col } from "react-bootstrap";

import AdminContainer from "../../components/Container";
import AccessApproval from "../../components/AccessApproval";
import LastAccess from "../../components/LastAccess";
import Schedule from "../../components/Schedule";
import AccessIndicator from "../../components/AccessIndicator";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <AdminContainer>
      <Container>
        <h1>Página Principal</h1>
        <Row>
          <Col md="6">
            <AccessApproval />
          </Col>
          <Col md="6">
            <LastAccess />
          </Col>
          <Col md="6">
            <Schedule />
          </Col>
          <Col md="6">
            <AccessIndicator />
          </Col>
        </Row>
      </Container>
    </AdminContainer>
  );
};

export default Home;
