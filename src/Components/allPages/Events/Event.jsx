import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const {
    event_type,
    event_name,
    date,
    venue,
    location,
    performers,
    event_image,
  } = event;
  return (
    <div className="py-12 px-4" data-aos="fade-up-right">
      <div className="card lg:card-side bg-white shadow-xl">
        <figure>
          <img
          className="h-[280px] w-full lg:w-[488px] object-cover"
            src={event_image}
            alt="Album"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-3xl font-bold text-blue-400">{event_name}</h2>
          <p>{location}</p>
          <p>{date}</p>
          <div className="card-actions">
            <Link><button className="btn btn-primary">View details</button></Link>
            <Link><button className="btn ">Book Now</button></Link>
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
