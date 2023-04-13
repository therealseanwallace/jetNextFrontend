import categories from "@/constants/categories";

const fetchFullName = (slug) => {
  const category = categories.find((cat) => cat.slug === slug);
  return category.name;
};

export default fetchFullName;