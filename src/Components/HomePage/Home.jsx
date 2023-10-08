// import Event from "../allPages/Events/Event";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Events from "../allPages/Events/Events";
import Footer from "../Footer/Footer";
import About from "../allPages/EventSection/About";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="mx-8 lg:mx-48">
      <div>
      <Banner></Banner>
    </div> 
      <h2 className="mt-20 text-6xl text-center text-white bg-black py-2 rounded-lg">Our Services</h2>
      <Events data={data}></Events>
      <h2 className="my-20 text-6xl text-center text-white bg-black py-2 rounded-lg">About Us</h2>
      <About></About>
      <div className="lg:-mx-32 mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
