import React from "react";

import LogoImage from "../../assets/images/logo-sagris.png";

import { Container } from "./styles";

const Logo: React.FC = () => {
  return (
    <Container>
      <img src={LogoImage} alt="Logotipo Sagris" />
      <h1>SAGRIS</h1>
    </Container>
  );
};

export default Logo;
