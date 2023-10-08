// import Event from "../allPages/Events/Event";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Events from "../allPages/Events/Events";
import Footer from "../Footer/Footer";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="mx-48">
      <div>
      <Banner></Banner>
    </div> 
      <h2 className="mt-20 text-6xl text-center text-white bg-black py-2 rounded-lg">Our Services</h2>
      <Events data={data}></Events>
      <div className="lg:-mx-32">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
