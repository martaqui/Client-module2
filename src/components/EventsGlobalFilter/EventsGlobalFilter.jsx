import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { TiChevronRight, TiCompass } from "react-icons/ti";
import ListGroup from 'react-bootstrap/ListGroup';
import "./EventsGlobalFilter.css";
import { motion } from 'framer-motion';

const API_URL = "http://localhost:5005";

const EventsGlobalFilter = () => {
    const [eventFilter, setEventFilter] = useState('');
    const [filteredResult, setFilteredResult] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEventFilter(value);

        setError(null);
        setFilteredResult([]);

        if (value === '') return;

        setLoading(true);
        axios
            .get(`${API_URL}/events`, { params: { title_like: value } })
            .then((response) => {
                setFilteredResult(response.data);
            })
            .catch((err) => {
                setError('Hubo un error al cargar los eventos.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const resetSearchs = () => {
        setEventFilter('');
        setFilteredResult([]);
    };

    return (
        <div className="EventsGlobalFilter">
            <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={eventFilter}
                onChange={handleChange}
            />

            {isLoading && <p><TiCompass /></p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {filteredResult.length > 0 && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={list}
                    className="results-list"
                >
                    <ListGroup>
                        {filteredResult.map((event) => (
                            <motion.div key={event.id} variants={item}>
                                <ListGroup.Item as={Link} onClick={resetSearchs} to={`/eventos/detalles/${event.id}`}>
                                    <TiChevronRight />
                                    <span>{event.title}</span>

                                </ListGroup.Item>
                            </motion.div>
                        ))}
                    </ListGroup>
                </motion.div>
            )}

            {!isLoading && eventFilter && filteredResult.length === 0 && (
                <p>Este evento no existe</p>
            )}
        </div>
    );
};

export default EventsGlobalFilter;
