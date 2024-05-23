import { useEffect, useState } from "react";
import Category from "./Category";


const FoodCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="mt-16">
           <h2 className="text-3xl text-center font-semibold mb-16">Our Food Categories</h2>
           <div className="grid lg:grid-cols-3 gap-5 lg:px-20 px-5">
            {
                categories?.categories?.slice(1,7).map(category => <Category key={category.idCategory} category={category} />)
            }
           </div>
        </div>
    );
};

export default FoodCategories;