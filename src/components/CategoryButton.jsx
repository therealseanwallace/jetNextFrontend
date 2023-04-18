import Link from "next/link";
import styles from "@/styles/CategoryButton.module.css";

const CategoryButton = ({ name, slug, onlyShowActive }) => {
  return <Link href={`./${slug}?onlyShowActive=${onlyShowActive}`} className={styles.button}>{name}</Link>;
};

export default CategoryButton;
