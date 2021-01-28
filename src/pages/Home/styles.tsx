import styled from "styled-components";

export const Container = styled.div`
  padding: 0 1rem;

  [class*="col-"] {
    overflow-x: auto;
  }

  h1 {
    margin: 1rem 0 2rem;
  }
`;
