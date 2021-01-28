import React, { useState, useEffect } from "react";
import notification from "react-og-notifications";

import Table from "../Table";
import AccessApprovalData from "../AccessApprovalData";

import api from "../../services/api";

import { Container } from "./styles";

import Interface from "./interface";

const AccessApproval: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function index() {
      try {
        const {
          data: {
            data: { access_approval },
          },
        } = await api.get("/access-approval");

        setData(access_approval);
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
            <th colSpan={4}>Aprovação de acesso</th>
            <th>Pendentes: 10</th>
          </tr>
        </thead>
        <tbody>
          {data.map((access: Interface) => (
            <AccessApprovalData key={access.id} {...access} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AccessApproval;
