import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="mx-auto font-poppins"  data-aos="zoom-in">
            <Navbar ></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;