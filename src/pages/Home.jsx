import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import FoodCategories from "../components/Home/FoodCategories";
import SeaFoods from "../components/Home/SeaFoods";
import Subscribe from "../components/Home/Subscribe";


const Home = () => {
    const seaFoods = useLoaderData();
    return (
        <div>
            {/* Banner Section */}
            <Banner />
            {/* Food Categories */}
            <FoodCategories/>
            {/* See Foods */}
            <SeaFoods seaFoods={seaFoods}/>
            {/* Subscribe */}
            <Subscribe/>
        </div>
    );
};

export default Home;