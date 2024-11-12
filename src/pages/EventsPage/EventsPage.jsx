import EventList from "../../components/EventList/EventList"
import { Button, Container } from "react-bootstrap"

const EventsPage = () => {

    return (
        <div className="EventsPage">
            <Container>
                <h1>Nuesros eventios</h1>
                <hr />

                <EventList />

                <hr />

                <Button>Volver a inicio</Button>
            </Container>
        </div>

    )
}

export default EventsPage