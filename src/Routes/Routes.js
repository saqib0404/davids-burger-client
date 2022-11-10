import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import AddServices from "../Pages/AddServices/AddServices"
import AllServices from "../Pages/AllServices/AllServices"
import Blogs from "../Pages/Blogs/Blogs"
import Home from "../Pages/Home/Home/Home"
import Login from "../Pages/Login/Login"
import MyReviews from "../Pages/MyReviews/MyReviews"
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails"
import SignUp from "../Pages/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"

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
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/all-services',
                element: <AllServices></AllServices>
            },
            {
                path: '/all-services/:id',
                loader: ({ params }) => fetch(`https://devids-burger-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
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