// import Event from "../allPages/Events/Event";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Events from "../allPages/Events/Events";


const Home = () => {
    const data = useLoaderData();

    console.log(data);
    return (
        <div className="lg:mx-32">
            <Banner></Banner>
            <h2 className="mt-20 text-6xl text-center">Our Services</h2>
            <Events data={data}></Events>
        </div>
    );
};

export default Home;