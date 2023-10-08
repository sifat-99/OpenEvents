import Banner from "../../HomePage/Banner/Banner";


const Dashboard = () => {

  return (
    <div >
        <Banner></Banner>
      <h1 className="text-center text-6xl mt-20">Upcoming Events</h1>
      <div className="w-3/4 mx-auto mt-28">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/PCxDtw8/5702c4eea9f621260c1e34b156e61cb5-shakespeare-in-the-park.jpg"
              className="w-full h-[60vh] lg:h-[70vh]"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
             src="https://i.ibb.co/QFxPy79/i-O-website-graphic.png"
             className="w-full h-[60vh] lg:h-[70vh]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/qWyMnyV/Karaoke-Perfect-Rock-Fusion-English-2017-500x500.jpg"
              className="w-full h-[60vh] lg:h-[70vh]"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co/YBDCPmm/45fb7c-b1bf9511449043dbb622f6da3a3d4438-mv2-jpg.webp"
              className="w-full h-[60vh] lg:h-[70vh]"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
