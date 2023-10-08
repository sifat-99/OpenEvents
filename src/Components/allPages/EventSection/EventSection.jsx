import { useLoaderData } from "react-router-dom";



const EventSection = () => {

    const data = useLoaderData();
    return (
        <div className="">
            {
                data.map((item) => <div key={item.event_id}><button className="btn">{item.event_type}</button></div> )
            }
        </div>
    );
};

export default EventSection;