import CategoryCard from "../category-card/category-card.component";
import "./category-container.styles.scss";
const CategoryContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryCard key={category.id} category={category}></CategoryCard>;
      })}
    </div>
  );
};

export default CategoryContainer;
