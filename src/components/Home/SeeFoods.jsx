import { useEffect, useState } from "react";
import Food from "./Food";


const SeeFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    console.log(foods.meals)

    return (
        <div className="mt-16">
           <h2 className="text-3xl text-center font-semibold mb-16">Our See Foods</h2>
           <div className="grid lg:grid-cols-3 gap-5 px-20">
            {
                foods?.meals?.slice(0,6).map(food => <Food key={food.idMeal} food={food} />)
            }
           </div>
        </div>
    );
};

export default SeeFoods;