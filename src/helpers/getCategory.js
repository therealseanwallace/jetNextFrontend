import categories from '../constants/categories'

const getCategory = (slug) => {
  const category = categories.find(cat => cat.slug === slug); 
  return category;
}

export default getCategory;
