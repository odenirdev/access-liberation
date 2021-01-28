import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 42px;
    height: 42px;

    border-radius: 41px;
    margin-right: 0.5rem;
  }

  strong {
    font-size: 0.8rem;
  }

  span {
    font-size: 0.7rem;
  }
`;
