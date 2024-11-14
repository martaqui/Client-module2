import { Button, Container } from "react-bootstrap"

import EventsList from "../../components/EventList/EventList"
import { Link } from "react-router-dom"

const EventsPage = () => {

    return (
        <div className="EventsPage">

            <Container>
                <h1>NUESTROS EVENTOS </h1>
                <hr />


                <EventsList />
                <hr />

                <Button as={Link} to="/" variant="dark" className="mb-5" >Volver a inicio</Button>
            </Container>
        </div>

    )
}

export default EventsPage