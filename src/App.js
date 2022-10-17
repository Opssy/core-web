import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routesLayout";

function App() {
  console.log(process.env.REACT_APP_HOST_API);
  return (
    <Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
