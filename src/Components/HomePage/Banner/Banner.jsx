const Banner = () => {
  return (
    
      <div className="relative w-full mx-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src={"/Concert.jpeg"} className="w-full  opacity-40 h-[70vh]" alt="Banner Bg" />
        </figure>
        <div className="absolute top-0 left-12">
        <div className="card-body justify-center mt-32">
          <p className="card-title card action text-6xl text-white items-center justify-start">
            Discover a World of Events:
            <br />
            Your Ultimate Calendar
          </p>
          <button className="btn btn-ghost text-black mt-48 bg-red-600 text-3xl  ">Book your tickets now</button>
          <div className="card-actions justify-center items-center">
           
          </div>
        </div>
        </div>
      </div>
  );
};

export default Banner;
