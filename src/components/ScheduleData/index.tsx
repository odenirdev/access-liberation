import React from "react";
import { FaClock } from "react-icons/fa";

import Props from "../Schedule/interface";

import UserDataGrid from "../UserDataGrid";

import { Container } from "./styles";

const ScheduleData = (props: Props) => {
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
      <td>
        <FaClock />
        {new Date(props.dh_access).toLocaleTimeString().slice(0, 5)} -{" "}
        {new Date(props.dh_access).toLocaleDateString()}
      </td>
    </Container>
  );
};

export default ScheduleData;
