import { Container } from "react-bootstrap"
import EventForm from "../../components/CreateEventForm/CreateEventForm"
import './CreateEventsPage.css'

const CreateEventPage = () => {
    return (
        <div className="CreateEventPage">

            <h1>Sientete libre de crear tu evento</h1>
            <h2>Disfruta compartiendo tus gustos!</h2>

            <EventForm />

        </div>

    )
}

export default CreateEventPage