import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routesLayout";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

