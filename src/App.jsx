import { useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Navbar/Navbar";

function App() {
  document.body.style.backgroundColor = "rgb(251, 248, 245)";
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
