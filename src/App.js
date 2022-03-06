import React, { useState } from "react";
import { AppContext } from "./App.context";
import Header from "./Header";
import Home from "./Home";
import Gallery from "./Gallery";
import Events from "./Events";

function App() {
  const [state, setState] = useState({
    tabIndex: 0,
  });

  const { tabIndex } = state;
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <Header />
      {tabIndex === 0 && <Home />}
      {tabIndex === 1 && <Gallery />}
      {tabIndex === 2 && <Events />}
    </AppContext.Provider>
  );
}

export default App;
