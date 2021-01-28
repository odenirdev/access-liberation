import React from "react";
import { Grid as NotificationsGrid } from "react-og-notifications";

import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyled from "./assets/global";

function App() {
  return (
    <>
      <GlobalStyled />
      <NotificationsGrid />
      <Routes />
    </>
  );
}

export default App;
