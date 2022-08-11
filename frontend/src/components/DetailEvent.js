import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const DetailEvent = () => {
    //Api Weather
    const url ='https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={4e3e34b81507556abcbf676a4809ce08}'

const [event, setEvent] = useState([])

const {id} = useParams();
const history = useHistory();

useEffect(() => {
    getSingleEvent();
},[])


const getSingleEvent = async () => {
  const  { data } = await axios.get(`http://localhost:7000/events/Detailevents/${id}/`)
  console.log(data);
  setEvent(data);
  

}

const deleteEvent = async (id) => {
    await axios.delete(`deleteevents/${id}/`)
    history.push("/")
}



    return (
        <div>
            <h2>Detail de l'evenement</h2>
            <hr></hr>
            <div className="full-event-detail">
                <img src={event.image} height="300" width="500"/>
                <div className="event-detail">
                    
                    <p>{event.titre}</p>
                    <p>{event.description}</p>
                    <p>{event.type}</p>
                    <p>{event.date}</p>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/${event.id}/update`}>Update</Link>
            <Link className="btn btn-danger" onClick={() => deleteEvent(event.id)}>Delete</Link>
        </div>
    );
};

export default DetailEvent;