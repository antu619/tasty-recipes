const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={strCategoryThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strCategory}</h2>
      </div>
    </div>
  );
};

export default Category;
