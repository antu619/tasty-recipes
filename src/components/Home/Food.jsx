import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Food = ({seaFood}) => {
    const {_id, name, imgUrl, price} = seaFood;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={imgUrl} alt="Shoes" />
      </figure>
      <div className="flex items-center justify-between p-5">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions items-center gap-5 justify-end">
        <p className="font-semibold text-gray-500">${price}</p>
      <Link className="btn btn-neutral flex gap-2 items-center" to={`/seaFoods/${_id}`}>Details <FaArrowRight /></Link>
    </div>
      </div>
    </div>
    );
};

export default Food;