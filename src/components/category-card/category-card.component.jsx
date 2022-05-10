import CardBodyContainer from "../card-body-container/category-body-container.component";
import "./category-card.styles.scss";

const CategoryCard = ({ category }) => {
  // This is the Category container.
  // Simply a Card setup that will combine multiple components into one.
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CardBodyContainer name={title}></CardBodyContainer>
    </div>
  );
};

export default CategoryCard;
