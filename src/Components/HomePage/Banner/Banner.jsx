const Banner = () => {
  return (
    
      <div className="relative w-full mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src={"/Concert.jpeg"} className="w-full  opacity-40 h-[60vh] lg:h-[70vh]" alt="Banner Bg" />
        </figure>
        <div className="absolute top-0 left-12">
        <div className="card-body justify-center mt-32">
          <p className="card-title card action text-3xl lg:text-6xl text-white items-center justify-start">
            Discover a World of Events:
            <br />
            Your Ultimate Calendar
            <span className=" mt-4 lg:mt-12 text-red-600 bg-white px-4 py-3 rounded-lg">Book Your Tickets Now!</span>
          </p>
          
        </div>
        </div>
      </div>
  );
};

export default Banner;
