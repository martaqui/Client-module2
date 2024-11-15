import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './EventDetailsPage.css';
import AttendantsList from "../../components/AttendantsList/AttendantsList";

const API_URL = "http://localhost:5005";

const EventDetailsPage = () => {

    const { eventId } = useParams();
    const [event, setEvent] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEventDetails();
    }, []);

    const fetchEventDetails = () => {
        axios
            .get(`${API_URL}/events/${eventId}`)
            .then(response => {
                setEvent(response.data);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    };

    const deleteEvent = () => {
        axios
            .delete(`${API_URL}/events/${eventId}`)
            .then(() => {
                navigate("/eventos");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="EventDetailsPage">
            <Container className="ContainerDetails">
                {
                    isLoading ? (
                        <h1>CARGANDO</h1>
                    ) : (
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
                                        <Col>
                                            <h3>Entrada normal </h3>
                                            <h5>{event.price.regular}$</h5>
                                        </Col>

                                        <Col>
                                            <h3>Entrada anticipada</h3>
                                            <h5>{event.price.early}$</h5>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={event.cover} alt={event.title} />
                                    <Row>
                                        <Button variant="primary" className="btn btn-outline-light" onClick={deleteEvent} type="submit">
                                            Eliminar evento
                                        </Button>
                                        <Button as={Link} to={`/evento/${event.id}/editar`} variant="primary" className="btn btn-outline-light" type="submit">
                                            Editar evento
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>

                            <Button variant="dark">
                                <Link to={`/evento/${event.id}/registro`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    QUIERO ASISTIR A ESTE EVENTO
                                </Link>
                            </Button>

                            <h1>Participantes</h1>
                            <AttendantsList />
                        </>
                    )}
            </Container>
        </div>
    );
};

export default EventDetailsPage;
