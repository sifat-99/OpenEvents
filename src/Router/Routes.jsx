import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/UserAuthentication/Login";
import Register from "../Components/UserAuthentication/Registration";
import EventSection from "../Components/allPages/EventSection/EventSection";
import EventDetails from "../Components/allPages/Events/EventDetails";
import PrivateRoute from "../Components/privateRoute/PrivateRoute";
import Dashboard from "../Components/allPages/Dashboard/Dashboard";
import Profile from "../Components/privateRoute/Profile/Profile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                path: "/events",
                element: <EventSection></EventSection>,
                loader: async () => {
                    return fetch('/Events.json');
                  },
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
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    },
])

export default routes;