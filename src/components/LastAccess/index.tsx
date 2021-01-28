import React, { useState, useEffect } from "react";
import notification from "react-og-notifications";

import Table from "../Table";
import LastAccessData from "../LastAccessData";

import Interface from "./interface";

import api from "../../services/api";

import { Container } from "./styles";

const LastAcess: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function index() {
      try {
        const {
          data: {
            data: { last_access },
          },
        } = await api.get("/last-access");

        setData(last_access);
      } catch (error) {
        notification("Erro de Servidor Interno", "error", "500");
      }
    }

    index();
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th colSpan={4}>Últimos acessos</th>
            <th>Ver tudo</th>
            <th>Total: 110</th>
          </tr>
        </thead>

        <tbody>
          {data.map((access: Interface) => (
            <LastAccessData key={access.id} {...access} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default LastAcess;
