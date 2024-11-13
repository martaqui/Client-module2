import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import './EventDetailsPage.css';

const API_URL = "http://localhost:5005";

const EventDetailsPage = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchEventDetailsPage();
    }, []);

    const fetchEventDetailsPage = () => {
        axios
            .get(`${API_URL}/events/${eventId}`)
            .then(response => {
                setEvent(response.data)
                setIsLoading(false)
            })
            .catch(err => console.error(err));
    };


    return (
        <div className="EventDetailsPage">
            <Container className="ContainerDetails">

                {
                    isLoading ? <h1>CARGANDO</h1> :
                        <>
                            <Row>
                                <Col>
                                    <div>
                                        <h1>{event.title}</h1>
                                        <h3>{event.genres}</h3>
                                        <p>{event.description}</p>
                                        <ul>
                                            <li>
                                                <span>Dirección:</span> {event.location.street}
                                            </li>
                                            <li>
                                                <span>Ciudad:</span> {event.location.city}
                                            </li>
                                            <li>
                                                <span>Código Postal:</span> {event.location.zipcode}
                                            </li>
                                        </ul>
                                    </div>
                                    <br />
                                    <Row>
                                        <Col><h3>Entrada normal </h3>
                                            <h5>{event.price.regular}$</h5>
                                        </Col>

                                        <Col><h3>Entrada anticipada</h3>
                                            <h5>{event.price.early}$</h5>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={event.cover} alt={event.title} />
                                </Col>


                            </Row>
                            <h1> Participantes</h1>
                            <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
                        </>
                }
            </Container>
        </div>
    );
};

export default EventDetailsPage;
