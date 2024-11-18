import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../EventCard/EventCard";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { scale } from "@cloudinary/url-gen/actions/resize";


const API_URL = "http://localhost:5005";

const EventsList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        axios
            .get(`${API_URL}/events`)
            .then(response => {
                setEvents(response.data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="EventsList">
            {isLoading ? (
                <h1>CARGANDO</h1>
            ) : (
                <Row>
                    {events.map((elm) => {
                        return (
                            <Col style={{ marginBottom: 20 }} md={{ span: 4 }} key={elm.id}>
                                <Link to={`/eventos/detalles/${elm.id}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <EventCard {...elm} />
                                    </motion.div>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            )}
        </div>
    );
};

export default EventsList;
