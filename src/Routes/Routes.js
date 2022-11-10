import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import AllServices from "../Pages/AllServices/AllServices"
import Blogs from "../Pages/Blogs/Blogs"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/all-services',
                element: <AllServices></AllServices>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])