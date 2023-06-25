import categories from "@/constants/categories.js";
import CategoryButton from "./CategoryButton";
import ActiveTenderToggle from "./ActiveTenderToggle";
import styles from "@/styles/Selectors.module.css";

const Selectors = ({ toggleOnlyShowActive, onlyShowActive, cat, catName }) => {
  const categoryButtons = categories.map((category, index) => (
    <CategoryButton
      key={index}
      name={category.name}
      slug={category.slug}
      onlyShowActive={onlyShowActive}
      cat={cat}
    />
  ));

  return (
    <div className={styles.selectors}>
      <ActiveTenderToggle
        onlyShowActive={onlyShowActive}
        toggleOnlyShowActive={toggleOnlyShowActive}
      />
      <h3 className={styles.heading}>Click to select category</h3>
      <div className={styles.categorybuttons}>{categoryButtons}</div>
      <p className={styles.textselected}><span>Selected category:</span> {catName}</p>
    </div>
  );
};

export default Selectors;
