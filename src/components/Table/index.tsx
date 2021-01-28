import styled from "styled-components";

export default styled.table`
  width: 100%;
  min-width: 600px;

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    padding: 0.5rem 0.5rem;
  }

  td {
    padding: 0.5rem 0;
  }

  thead {
    background-color: var(--secundary-color);
    color: var(--white);

    border-radius: 5px 5px 0 0;

    th {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }

  tbody {
    display: block;
    height: 35vh;
    overflow: auto;
    padding: 0 0.5rem;

    background-color: var(--gray);

    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      font-size: 0.7rem;
    }
  }
`;
