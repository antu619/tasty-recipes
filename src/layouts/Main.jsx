import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;