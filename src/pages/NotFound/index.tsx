import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import Button from "../../components/Button";

import ContructionIllustration from "../../assets/images/contruction-illustration.svg";

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <header>
        <h1>
          <span>404...</span>
        </h1>
        <p>Página em desenvolvimento, volte em breve...</p>

        <Button onClick={() => history.push("/")}>Página Inicial</Button>
      </header>
      <img src={ContructionIllustration} alt="Developing page" />
    </Container>
  );
};

export default NotFound;
