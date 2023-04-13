import { v4 as uuidv4 } from "uuid";
import categories from "@/constants/categories.js";
import CategoryButton from "./CategoryButton";

const Selectors = () => {
  console.log('categories', categories);
  const categoryButtons = categories.map((category) => (
    <CategoryButton key={uuidv4()} name={category.name} slug={category.slug} />
  ));

  return (
    <div className="selectors">
      <h3>Click to select categories</h3>
      {categoryButtons}
    </div>
  );
};

export default Selectors;
