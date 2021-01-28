import React, { useEffect, useState } from "react";
import notification from "react-og-notifications";
import ApexCharts from "react-apexcharts";

import api from "../../services/api";

import { Container } from "./styles";

const AccessIndicator: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const [data, setdata] = useState<number[]>([]);

  useEffect(() => {
    async function index() {
      try {
        const {
          data: {
            data: { access_indicator },
          },
        } = await api.get("/access-indicator");

        const categories = Object.keys(access_indicator).map((date) =>
          new Date(date).toLocaleDateString()
        );

        const data = Object.keys(access_indicator).map(
          (date) => access_indicator[date].length
        );

        setdata(data);

        setCategories(categories);
      } catch (error) {
        notification("Erro de Servidor Interno", "error", "500");
      }
    }

    index();
  }, []);

  return (
    <Container>
      <header>
        <h2>Indicador de acesso</h2>
      </header>
      <ApexCharts
        options={{
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Indicador de acessos",
            align: "left",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories,
          },
        }}
        series={[
          {
            name: "Acessos",
            data,
          },
        ]}
        type="line"
        height={350}
        width="100%"
      />
    </Container>
  );
};

export default AccessIndicator;
