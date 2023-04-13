import React from "react";
import Selectors from "./Selectors";

const Header = () => {
  return (
    <header>
      <h1 className="header-title">Just Education Tenders</h1>
      <h2 className="header-text">
        UK Education Tenders updated in real time - always free and no signup
        needed
      </h2>
      <Selectors />
    </header>
  );
};

export default Header;
