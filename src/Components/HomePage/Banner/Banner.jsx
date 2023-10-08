const Banner = () => {
  return (
    <div>
      <div
        className=" w-auto h-[75vh] bg-cover opacity-70 relative bg-no-repeat "
        style={{ backgroundImage: 'url("/Concert.jpeg")' }}
      ></div>
      <div className="flex absolute top-72  left-1/4 gap-10 w-auto items-center justify-center">
        <div>
            <p></p>
        <button className="btn btn-primary">Book now</button>
        </div>
        <h1 className="text-6xl text-white font-extrabold">
          Discover a World of Events:
          <br />
          Your Ultimate Calendar
        </h1>
      </div>
    </div>
  );
};

export default Banner;
