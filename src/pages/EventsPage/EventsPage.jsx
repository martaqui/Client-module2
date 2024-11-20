import { Button, Container, Row, Col } from "react-bootstrap"
import EventsList from "../../components/EventList/EventList"
import { Link } from "react-router-dom"
import { none } from "@cloudinary/url-gen/qualifiers/progressive"
import './EventsPage.css'


const EventsPage = () => {


    return (


        <div className="EventsPage">

            <Container>

                <Row>
                    <Col xs="9">
                        <h1>eventos</h1>
                    </Col>

                    <Col>
                        <Link style={{ textDecoration: none }} to={"/crear/evento"}><h1>Crea tu Evento</h1></Link>
                    </Col>
                </Row>

                <hr />

                <EventsList />

                <hr />

                <Link to={"/"}>
                    <Button variant="dark" className="mb-5" >Volver a inicio</Button>
                </Link>

            </Container>
        </div>

    )
}

export default EventsPage