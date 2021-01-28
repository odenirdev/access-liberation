import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;
  padding-right: 1rem;

  .apexcharts-canvas {
    background-color: var(--gray);
  }

  header {
    background-color: var(--secundary-color);
    color: var(--white);

    border-radius: 5px 5px 0 0;

    padding: 0.5rem 0.5rem;

    h2 {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  .apexcharts-title-text,
  .apexcharts-menu-icon {
    display: none;
  }
`;
