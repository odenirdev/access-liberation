import React, { useState, useEffect } from "react";
import notification from "react-og-notifications";

import Table from "../Table";

import Interface from "./interface";

import ScheduleData from "../ScheduleData";

import api from "../../services/api";

import { Container } from "./styles";

const Schedule: React.FC = () => {
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
            <th colSpan={3}>Programados</th>
          </tr>
        </thead>
        <tbody>
          {data.map((schedule: Interface) => (
            <ScheduleData key={schedule.id} {...schedule} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Schedule;
