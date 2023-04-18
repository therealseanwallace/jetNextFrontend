import React from "react";
import Selectors from "./Selectors";

import styles from "@/styles/Header.module.css";

const Header = ({ toggleOnlyShowActive, onlyShowActive, cat, catName }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headertitle}>Just Education Tenders</h1>
      <h2 className={styles.headertext}>
        UK Education Tenders updated in real time - always free and no signup
        needed
      </h2>
      <Selectors
        onlyShowActive={onlyShowActive}
        toggleOnlyShowActive={toggleOnlyShowActive}
        cat={cat}
        catName={catName}
      />
    </header>
  );
};

export default Header;
