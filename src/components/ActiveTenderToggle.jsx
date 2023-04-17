import React from "react";
import styles from "@/styles/ActiveTenderToggle.module.css";

const ActiveTenderToggle = ({ toggleOnlyShowActive, onlyShowActive }) => {
  return (
    <div className="active-tender-toggle">
      <p className={styles.showtenderstatus}>
        Show active tenders only:
        <input
          onChange={toggleOnlyShowActive}
          type="checkbox"
          checked={onlyShowActive}
          className={styles.checkbox}
        />
      </p>
      <p className={styles.smalltext}>Click to toggle</p>
    </div>
  );
};

export default ActiveTenderToggle;
