import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AllSeaFoods = () => {
    const [seaFoods, setSeaFoods] = useState([]);

    useEffect( () => {
        fetch('https://tasty-recipes-server-iota.vercel.app/seaFoods/')
        .then(res => res.json())
        .then(data => setSeaFoods(data))
    } , []);


    const handleRemove = (_id) => {
        setSeaFoods(seaFoods.filter((food) => food._id !== _id));
    }

    return (
        <div className="lg:my-16 my-5">
            <h2 className="text-3xl text-center font-semibold mb-16">All Sea Foods</h2>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5">
            {
                seaFoods?.map(seaFood => <FoodCard key={seaFood._id} seaFood={seaFood} handleRemove={handleRemove} />)
            }
           </div>
        </div>
    );
};

export default AllSeaFoods;