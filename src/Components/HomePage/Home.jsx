// import Event from "../allPages/Events/Event";
import { useLoaderData } from "react-router-dom";
import Events from "../allPages/Events/Events";
import Footer from "../Footer/Footer";
import About from "../allPages/EventSection/About";
import PhotoGallery from "../allPages/PhotoGallery/PhotoGallary";
import Dashboard from "../allPages/Dashboard/Dashboard";

const Home = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div className="mx-8 lg:mx-48">
      <div>
      <Dashboard></Dashboard>
    </div> 
      <h2 className="mt-20 text-6xl text-center text-white bg-black py-2 rounded-lg">Our Services</h2>
      <Events data={data}></Events>
      <h2 className="my-20 text-6xl text-center text-white bg-black py-2 rounded-lg">About Us</h2>
      <About></About>
      <h2 className="my-20 text-6xl text-center text-white bg-black py-2 rounded-lg">Photo Gallery</h2>
      <div className="mt-20"><PhotoGallery></PhotoGallery></div>
      <div className="lg:-mx-32 mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
