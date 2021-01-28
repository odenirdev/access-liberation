import styled from "styled-components";

export const Container = styled.div`
  width: 17vw;
  height: 100vh;

  position: fixed;

  background-color: var(--primary-color);
  background: -webkit-linear-gradient(
    top,
    var(--primary-color) 50%,
    var(--secundary-color)
  );

  .logo-container {
    padding: 1rem;

    display: flex;
    flex-direction: column;
  }

  .authenticated-container {
    display: flex;
    flex-direction: column;

    text-align: center;

    color: var(--white);

    margin-bottom: 1rem;

    span:first-child {
      margin-bottom: 0.5rem;
    }
  }

  .routes-container {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;

      color: var(--white);

      padding: 1rem 1.2rem;

      transition: 0.2s;
    }

    a:hover {
      background-color: var(--secundary-color);
    }
  }
`;
