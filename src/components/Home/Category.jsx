const Category = ({ category }) => {
  const { name, imgUrl } = category;

  return (
    <div className="card bg-base-100 shadow-xl image-full">
  <figure><img className="w-full" src={imgUrl} alt="Category Image" /></figure>
  <div className="card-body justify-center">
    <h2 className="card-title justify-center">{name}</h2>
  </div>
</div>
  );
};

export default Category;
