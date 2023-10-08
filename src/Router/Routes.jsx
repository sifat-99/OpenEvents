import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import Root from "../Components/Root/Root";
import Login from "../Components/UserAuthentication/Login";
import Register from "../Components/UserAuthentication/Registration";
import EventSection from "../Components/allPages/EventSection/EventSection";

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
            }
        ]
    },
])

export default routes;