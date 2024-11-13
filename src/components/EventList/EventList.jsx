import axios from "axios"
import { useEffect, useState } from "react"
import EventCard from "../EventCard/EventCard"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { auto } from "@cloudinary/url-gen/actions/resize"

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
                            <Col style={{ marginBottom: 20 }} md={{ span: 4 }} key={elm.id}>
                                <Link to={`/eventos/detalles/${elm.id}`}>  </Link>
                                <EventCard {...elm} />

                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default EventsList