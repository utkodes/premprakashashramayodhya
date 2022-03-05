import React, { useState, useEffect } from "react";
import { AppContext } from "./App.context";
import "./App.scss";
import Header from "./Header";
import Info from "./Info";
import Gallery from "./Gallery";

function App() {
  const [state, setState] = useState({});

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <Header />
      <Gallery />
      <Info />
    </AppContext.Provider>
  );
}

export default App;
