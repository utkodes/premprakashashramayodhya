import React from "react";

const AppContext = React.createContext();

const useAppContext = () => {
  const appContext = React.useContext(AppContext);
  return appContext;
};

export { AppContext, useAppContext };
