import { Button, Container } from "react-bootstrap"

import EventsList from "../../components/EventList/EventList"

const EventsPage = () => {

    return (
        <div className="EventsPage">

            <Container>
                <h1>Nuestos eventos</h1>
                <hr />


                <EventsList />
                <hr />

                <Button variant="dark" className="mb-5" >Volver a inicio</Button>
            </Container>
        </div>

    )
}

export default EventsPage