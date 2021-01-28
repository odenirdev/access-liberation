import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import Logo from "../Logo";

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="authenticated-container">
        <span>Empresa A - Sala 210</span>
        <span>João Alves</span>
      </div>
      <div className="routes-container">
        <Link to="/">Página Inicial</Link>
        <Link to="/agendamentos">Agendamentos</Link>
        <Link to="/cadastros">Cadastros</Link>
        <Link to="/report">Report</Link>
        <Link to="/auth">Sair</Link>
      </div>
    </Container>
  );
};

export default Navbar;
