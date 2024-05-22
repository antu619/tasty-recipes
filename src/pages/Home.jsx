import Banner from "../components/Home/Banner";
import FoodCategories from "../components/Home/FoodCategories";
import SeeFoods from "../components/Home/SeeFoods";
import Subscribe from "../components/Home/Subscribe";


const Home = () => {
    return (
        <div>
            {/* Banner Section */}
            <Banner />
            {/* Food Categories */}
            <FoodCategories/>
            {/* See Foods */}
            <SeeFoods/>
            {/* Subscribe */}
            <Subscribe/>
            Home Sweet Home
        </div>
    );
};

export default Home;