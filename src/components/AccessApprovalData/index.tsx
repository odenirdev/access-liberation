import React from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import Button from "../Button";
import UserDataGrid from "../UserDataGrid";

import { Container } from "./styles";

import Props from "../AccessApproval/interface";

const AccessApprovalData = (props: Props) => {
  return (
    <Container>
      <td colSpan={2}>
        <UserDataGrid
          {...{
            avatar: props.avatar,
            name: props.name,
            type_user: props.type_user,
          }}
        />
      </td>
      <td className="access-approval-room">
        <FaMapMarkerAlt />
        Sala {props.room}
      </td>
      <td className="access-approval-dh_access">
        <FaClock />
        {new Date(props.dh_access).toLocaleTimeString().slice(0, 5)} -{" "}
        {new Date(props.dh_access).toLocaleDateString()}
      </td>
      <td className="access-approval-button">
        <Button>DECIDIR</Button>
      </td>
    </Container>
  );
};

export default AccessApprovalData;
