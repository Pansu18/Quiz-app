import React from "react";
import { RouterProvider } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
