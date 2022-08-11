import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowEvents = () => {

    const [events, setEvents] = useState([])

    const fetchEvents = async () => {
        const result = await axios.get('http://localhost:7000/events/listevents/');

        console.log(result.data)
        setEvents(result.data)
    }

    useEffect(() => {
        fetchEvents();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }

    return (
        <div>

            <div className="main-events-show">
            {
                events.map((event, index) => (
                    <Card className="m-3 rounded shadow-lg main-events-show" style={{ width: '22em' }}>

                    <Card.Img variant="top" src={event.photo} />

                    <Card.Body>

                        <Card.Title>{event.titre}</Card.Title>
                        <Card.Text> {event.description} </Card.Text>
                        <Card.Text> {event.type} </Card.Text>
                        <Card.Text> {event.date} </Card.Text>
                        
                        <Link className="btn btn-primary mr-2" to={`/${event.id}`}>Detail </Link>

                    </Card.Body>
                    </Card>
                ))

            }
            </div>
           
            
        </div>
    );
};

export default ShowEvents;




