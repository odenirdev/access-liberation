import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  color?: string;
}

export default styled.button`
  border: 0;
  border-radius: 4px;

  height: 32px;

  padding: 0 0.5rem;

  background-color: ${(props: Props) =>
    props.backgroundColor ? props.backgroundColor : "var(--primary-color)"};

  color: ${(props: Props) => (props.color ? props.color : "var(--white)")};
`;
