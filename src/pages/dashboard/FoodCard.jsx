
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const FoodCard = ({seaFood, handleRemove}) => {
    const {id, name, imgUrl, price} = seaFood;

    // Delete Operation
    const handleDelete = async() => {
        await fetch(`http://localhost:3000/seaFoods/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            handleRemove(id)
            toast.success('Successfully deleted a sea food recipe', {
                duration: 4000,
                position: 'top-center',})
        })
    }

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={imgUrl} alt="Shoes" />
      </figure>
      <div className="flex items-center justify-between px-5 pt-3">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-gray-500">${price}</p>
      </div>
      <div className="card-actions justify-between items-center p-4">
        <div className="flex gap-2">
        <button onClick={handleDelete} className="btn btn-error text-white text-xl"><RiDeleteBin6Line /></button>
        <Link className="btn btn-primary text-white text-xl"><CiEdit /></Link>
        </div>
      <Link className="btn btn-neutral flex gap-2 items-center" to={`/seaFoods/${id}`}>Details <FaArrowRight /></Link>
      </div>
    </div>
    );
};

export default FoodCard;