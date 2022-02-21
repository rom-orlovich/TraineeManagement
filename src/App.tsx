import React from "react";
import { Outlet } from "react-router";

import Layout from "./layout/Layout";

import "./style/App.scss";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
