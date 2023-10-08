import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Event = ({ event }) => {

    const handleAlert = () => {
        swal("Congratulation!", "You have successfully buy it!", "success");
    }
  const {
    event_id,
    event_name,
    date,
    location,
    event_image,
    event_description,
  } = event;
  return (
    <div className="py-12 h-full px-4" data-aos="fade-up-right">
      <div className="card lg:card-side bg-white shadow-xl">
        <figure>
          <img
          className="h-[280px] w-full  lg:w-full object-cover"
            src={event_image}
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-2xl font-bold text-blue-400">{event_name}</h2>
          <p>{location}</p>
          <p>{date}</p>
          <p>{event_description.slice(0,30)}.....</p>
          <div className=" flex gap-2">
            <Link to={`/details/${event_id}`}><button className="px-4 py-2 btn w-28">View details</button></Link>
            <Link><button onClick={handleAlert} className="px-4 py-2 btn w-28">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
