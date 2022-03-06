import React from "react";
import { useAppContext } from "../App.context";
import "./index.scss";

function Header() {
  const appContext = useAppContext();

  const { setState, state } = appContext;
  const { tabIndex } = state;

  const onTabChange = (index) => setState({ ...state, tabIndex: index });

  return (
    <div className="header-container">
      <ul className="menu">
        <li
          onClick={() => onTabChange(0)}
          className={tabIndex === 0 ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => onTabChange(1)}
          className={tabIndex === 1 ? "active" : ""}
        >
          Gallery
        </li>
        <li
          onClick={() => onTabChange(2)}
          className={tabIndex === 2 ? "active" : ""}
        >
          Events
        </li>
      </ul>
    </div>
  );
}

export default Header;
