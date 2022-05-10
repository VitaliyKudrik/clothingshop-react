import "./category-body-container.styles.scss";

const CardBodyContainer = (props) => {
  // Holds the body of the category container
  // This component includes the type of apparall and more info
  return (
    <div className="category-body-container">
      <h2>{props.name}</h2>
      <p>Shop Now</p>
    </div>
  );
};

export default CardBodyContainer;
