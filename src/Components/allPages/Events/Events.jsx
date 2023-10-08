// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Event from "./Event";
import PropTypes from "prop-types";

const Events = ({ data }) => {
  const [slice, setSlice] = useState(true);
  const handleSliceData = () => {
    setSlice(!slice);
  };

  const events = data;
//   console.log(events.events);
  return (
    <div>
      <div
        data-aos="zoom-in-right"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {
            slice  ?   events.slice(0, 6).map((event) => (
                         <Event key={event.event_id} event={event}></Event>
                        ))
            :   events.map((event) => (
                <Event key={event.event_id} event={event}></Event>
               ))
        }
      </div>
      <div className="flex justify-center">
        {
            slice ? <button
            onClick={handleSliceData}
            className="px-10 py-2 bg-blue-400 text-white rounded-full mt-10"
            >
            Load More
            </button> : <button
            onClick={handleSliceData}
            className="px-10 py-2 bg-blue-400 text-white rounded-full mt-10"
            >
            Load Less
            </button>
        }
      </div>
    </div>
  );
};

Events.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Events;
