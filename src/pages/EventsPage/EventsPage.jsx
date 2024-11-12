import EventList from "../../components/EventList/EventList"
import { Button, Container } from "react-bootstrap"

const EventsPage = () => {

    return (
        <div className="EventsPage">
            <Container>
                <h1>Nuestos eventos</h1>
                <hr />

                <EventList />

                <hr />

                <Button variant="dark" className="mb-5" >Volver a inicio</Button>
            </Container>
        </div>

    )
}

export default EventsPage