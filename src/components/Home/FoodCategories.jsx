import { useEffect, useState } from "react";
import Category from "./Category";


const FoodCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="mt-16">
           <h2 className="text-3xl text-center font-semibold mb-16">Our Food Categories</h2>
           <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-20 px-5">
            {
                categories?.slice(0,6).map(category => <Category key={category._id} category={category} />)
            }
           </div>
        </div>
    );
};

export default FoodCategories;