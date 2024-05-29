import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const AllSeaFoods = () => {
    const [seaFoods, setSeaFoods] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/seaFoods/')
        .then(res => res.json())
        .then(data => setSeaFoods(data))
    } , []);


    const handleRemove = (id) => {
        setSeaFoods(seaFoods.filter((food) => food.id !== id));
    }

    return (
        <div className="lg:my-16 my-5">
            <h2 className="text-3xl text-center font-semibold mb-16">All Sea Foods</h2>
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5">
            {
                seaFoods?.map(seaFood => <FoodCard key={seaFood.id} seaFood={seaFood} handleRemove={handleRemove} />)
            }
           </div>
        </div>
    );
};

export default AllSeaFoods;