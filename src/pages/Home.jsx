import Banner from "../components/Home/Banner";
import FoodCategories from "../components/Home/FoodCategories";
import SeaFoods from "../components/Home/SeaFoods";
import Subscribe from "../components/Home/Subscribe";


const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner />
            {/* Food Categories */}
            <FoodCategories/>
            {/* See Foods */}
            <SeaFoods/>
            {/* Subscribe */}
            <Subscribe/>
        </div>
    );
};

export default Home;