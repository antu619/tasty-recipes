

const Food = ({food}) => {
    const {strMeal, strMealThumb} = food;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="" src={strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
      </div>
    </div>
    );
};

export default Food;