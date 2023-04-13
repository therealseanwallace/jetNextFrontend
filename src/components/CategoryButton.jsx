import Link from "next/link";

const CategoryButton = (props) => {
  const { name, slug } = props;
  return <Link href={`./${slug}`}>{name}</Link>;
};

export default CategoryButton;
