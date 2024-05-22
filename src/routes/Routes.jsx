import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllCategories from "../pages/AllCategories";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Register from "../pages/Register";


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
        ]
    }
])

export default router;