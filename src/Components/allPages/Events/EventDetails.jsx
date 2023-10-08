import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const [card, setCard] = useState({});
  const params = useParams();
  const Events = useLoaderData();
  const { event_id } = Events;
  useEffect(() => {
    const cardDetails = Events.find((event) => event.event_id == params.id);
    console.log(cardDetails)
    setCard(cardDetails);
  }, [params.event_id, Events, event_id, params.id]);

  console.log(card);
  return (
    <div className="py-12 px-4" data-aos="fade-up-right">
      <div className="card w-full glass">
        <figure>
          <img
            src={card.event_image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-white font-bold">{card.event_name}</h2>
          <h2 className="card-title text-sm text-white">{card.event_type}</h2>
          <h2 className="card-title text-white">Location: <span className=" text-red-400">{card.location}</span> </h2>
          <p>{card.event_description}</p>
          <p>Ticket Price: {card.ticket_price} $</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Tickets Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
