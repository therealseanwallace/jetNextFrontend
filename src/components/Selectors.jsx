import { v4 as uuidv4 } from "uuid";
import categories from "@/constants/categories.js";
import CategoryButton from "./CategoryButton";
import ActiveTenderToggle from "./ActiveTenderToggle";
import styles from "@/styles/Selectors.module.css";

const Selectors = ({ toggleOnlyShowActive, onlyShowActive }) => {
  console.log("categories", categories);
  const categoryButtons = categories.map((category) => (
    <CategoryButton key={uuidv4()} name={category.name} slug={category.slug} onlyShowActive={onlyShowActive}/>
  ));

  return (
    <div className={styles.selectors}>
      <ActiveTenderToggle
        onlyShowActive={onlyShowActive}
        toggleOnlyShowActive={toggleOnlyShowActive}
      />
      <h3 className={styles.heading}>Click to select category</h3>
      <div className={styles.categorybuttons}>{categoryButtons}</div>
    </div>
  );
};

export default Selectors;
