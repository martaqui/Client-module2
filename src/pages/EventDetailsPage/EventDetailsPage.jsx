import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:5005"

const EventDetailsPage = () => {

    const { eventId } = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        fetchEventDetailsPage()
    }, [])

    const fetchEventDetailsPage = () => {
        axios
            .get(`${API_URL}/events/${eventId}`)
            .then(response => setEvent(response.data))
            .catch(err => console.log(err))
    }
    return (
        <div className="EventDetailsPage">
            <h1>Detalles del evento {event.title}</h1>
            <hr />
            <p>Descripción: {event.description}</p>
        </div>
    )
}
export default EventDetailsPage