import React, { useState } from "react";
import { AppContext } from "./App.context";
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
