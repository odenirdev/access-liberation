import React from "react";
import {
  FaUser,
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaCompressAlt,
  FaCar,
  FaClock,
  FaEye,
} from "react-icons/fa";

import Button from "../Button";
import UserDataGrid from "../UserDataGrid";

import Props from "../LastAccess/interface";

import { Container } from "./styles";

const LastAccessData = (props: Props) => {
  function renderIconStatus(status: string) {
    switch (status) {
      case "ENTRADA_SAIDA":
        return (
          <>
            <FaCompressAlt /> Entrada-Saída
          </>
        );

      case "ENTREGA":
        return (
          <>
            <FaCar /> Entrega
          </>
        );

      case "SAIDA":
        return (
          <>
            <FaLongArrowAltDown /> Saída
          </>
        );

      case "ENTRADA":
        return (
          <>
            <FaLongArrowAltUp /> Entrada
          </>
        );
    }
  }

  return (
    <Container>
      <td colSpan={2}>
        <UserDataGrid
          {...{
            avatar: props.avatar,
            name: props.name,
            type_user: `Aprovador por: ${props.approved_by}`,
          }}
        />
      </td>
      <td>
        <FaUser />
        {props.dependents.length}
      </td>
      <td>{renderIconStatus(props.status)}</td>
      <td>
        <FaClock />
        {new Date(props.dh_access).toLocaleTimeString().slice(0, 5)} -{" "}
        {new Date(props.dh_access).toLocaleDateString()}
      </td>
      <td>
        <Button>
          <FaEye />
        </Button>
      </td>
    </Container>
  );
};

export default LastAccessData;
