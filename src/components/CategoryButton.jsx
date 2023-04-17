import Link from "next/link";
import styles from "@/styles/CategoryButton.module.css";

const CategoryButton = (props) => {
  const { name, slug } = props;
  return <Link href={`./${slug}`} className={styles.button}>{name}</Link>;
};

export default CategoryButton;
