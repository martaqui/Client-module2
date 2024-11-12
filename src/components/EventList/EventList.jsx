import axios from "axios"
import { useEffect, useState } from "react"
import EventCard from "../EventCard/EventCard"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const API_URL = "http://localhost:5005"

const EventsList = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = () => {
        axios
            .get(`${API_URL}/events`)
            .then(response => setEvents(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div className="EventCard">
            <Row>
                {
                    events.map(elm => {
                        return (
                            <Col md={{ span: 3 }} key={elm.id}>
                                <Link to={`/eventos/detalles/${elm.id}`} style={{ textDecoration: 'none' }}><EventCard {...elm} /></Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default EventsList