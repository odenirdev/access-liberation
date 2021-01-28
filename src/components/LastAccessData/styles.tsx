import styled from "styled-components";

export const Container = styled.tr`
  td + td {
    text-align: center;
    white-space: nowrap;

    svg {
      margin-right: 0.1rem;
    }
  }

  td:last-child {
    svg {
      margin-right: 0;
    }
  }
`;
