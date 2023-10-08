import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/UserAuthentication/Login";
import Register from "../Components/UserAuthentication/Registration";
// import EventSection from "../Components/allPages/EventSection/EventSection";
import EventDetails from "../Components/allPages/Events/EventDetails";
import PrivateRoute from "../Components/privateRoute/PrivateRoute";
import Dashboard from "../Components/allPages/Dashboard/Dashboard";
import Profile from "../Components/privateRoute/Profile/Profile";
import About from "../Components/allPages/EventSection/About";
import ErrorPage from "../Components/allPages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch('/Events.json');
                  }, 
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: async () => {
                    return fetch('/Events.json');
                  },
            },
            {
                path: "/dashboard",
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                loader: async () => {
                    return fetch('/Events.json');
                  },
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
])

export default routes;