

const Food = ({seaFood}) => {
    const {name, imgUrl, price} = seaFood;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={imgUrl} alt="Shoes" />
      </figure>
      <div className="flex items-center justify-between p-5">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-gray-500">${price}</p>
      </div>
    </div>
    );
};

export default Food;