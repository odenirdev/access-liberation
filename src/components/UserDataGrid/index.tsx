import React from "react";

import { Container } from "./styles";

interface Props {
  name: string;
  avatar: string;
  type_user: string;
}

const UserDataGrid = (props: Props) => {
  return (
    <Container>
      <img src={props.avatar} alt={`Usuário ${props.name}`} />
      <div>
        <strong>{props.name}</strong>
        <span>{props.type_user}</span>
      </div>
    </Container>
  );
};

export default UserDataGrid;
