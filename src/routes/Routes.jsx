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
import FoodDetails from "../pages/FoodDetails";
import AllSeaFoods from "../pages/dashboard/AllSeaFoods";
import AddSeaFoods from "../pages/dashboard/AddSeaFoods";
import EditSeaFood from "../pages/dashboard/EditSeaFood";
import Dashboard from "../pages/dashboard/Dashboard";
import EditProfile from "../pages/dashboard/EditProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/seaFoods/:id",
                element: <FoodDetails/>,
                loader: ({params}) => fetch(`https://tasty-recipes-server-iota.vercel.app/seaFoods/${params.id}`)
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
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children:[
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard/></PrivateRoutes>
            },
            {
                path: 'profile/edit/:id',
                element: <PrivateRoutes><EditProfile/></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/user/profile/${params.id}`)
            },
            {
                path: 'allSeaFoods',
                element: <PrivateRoutes><AllSeaFoods /></PrivateRoutes>
            },
            {
                path: 'addSeaFoods',
                element: <PrivateRoutes><AddSeaFoods /></PrivateRoutes>
            },
            {
                path: 'editSeaFoods/:id',
                element: <PrivateRoutes><EditSeaFood /></PrivateRoutes>,
                loader: ({params}) => fetch(`https://tasty-recipes-server-iota.vercel.app/seaFoods/${params.id}`)
            },
        ]
    }
])

export default router;