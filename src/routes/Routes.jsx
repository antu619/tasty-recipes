import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllCategories from "../pages/AllCategories";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('http://localhost:3000/seaFoods')
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/allcategories",
                element: <AllCategories/>
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            }
        ],
        errorElement: <ErrorPage/>
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>
    }
])

export default router;