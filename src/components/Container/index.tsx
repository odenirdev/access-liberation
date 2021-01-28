import React from "react";

import Navbar from "../Navbar";

import { Container } from "./styles";

const Index: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};

export default Index;
