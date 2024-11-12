import { Button, Card } from "react-bootstrap"

const EventCard = ({ cover, title, description }) => {

    return (
        <div className="EventCard">
            <Card>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default EventCard